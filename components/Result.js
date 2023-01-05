export default function Result({state}) {
  const {
    buyFee, sellFee, accountSize, leverage,
    entry, stopLoss, targetProfit, direction
  } = state;
  const riskLevel = [
    1, 1.5, 2
  ];

  const risk1 = (accountSize * riskLevel[0]/100);
  const risk2 = (accountSize * riskLevel[1]/100);
  const risk3 = (accountSize * riskLevel[2]/100);

  var idealSize1 = 0, idealSize2 = 0, idealSize3 = 0;
  var profit1 = 0, profit2 = 0, profit3 = 0;

  if (direction == 'short') {
    idealSize1 = (risk1/(stopLoss-entry)).toFixed(2);
    idealSize2 = (risk2/(stopLoss-entry)).toFixed(2);
    idealSize3 = (risk3/(stopLoss-entry)).toFixed(2);

    profit1 = (idealSize1*(entry-targetProfit)*(1-sellFee)).toFixed(2);
    profit2 = (idealSize2*(entry-targetProfit)*(1-sellFee)).toFixed(2);
    profit3 = (idealSize3*(entry-targetProfit)*(1-sellFee)).toFixed(2);
  } else if ( direction == 'long' ) {
    idealSize1 = (risk1/(entry-stopLoss)).toFixed(2);
    idealSize2 = (risk2/(entry-stopLoss)).toFixed(2);
    idealSize3 = (risk3/(entry-stopLoss)).toFixed(2);

    profit1 = (idealSize1*(targetProfit-entry)*(1-sellFee)).toFixed(2);
    profit2 = (idealSize2*(targetProfit-entry)*(1-sellFee)).toFixed(2);
    profit3 = (idealSize3*(targetProfit-entry)*(1-sellFee)).toFixed(2);
  }

  const ISDollar1 = (idealSize1*entry).toFixed(2)
  const ISDollar2 = (idealSize2*entry).toFixed(2)
  const ISDollar3 = (idealSize3*entry).toFixed(2)

  const im1 = (idealSize1*entry*(1/leverage)).toFixed(2)
  const im2 = (idealSize2*entry*(1/leverage)).toFixed(2)
  const im3 = (idealSize3*entry*(1/leverage)).toFixed(2)

  return (
    <div class="relative overflow-x-auto mt-10">
      <hr />
      <p className="mt-4">Results</p>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-center mt-4 border border-blue-500">
          <thead className="text-xs uppercase bg-blue-500">
            <tr className="text-white">
              <th className="px-2 bg-blue-500"></th>
              <th className="px-3 py-3">%</th>
              <th className="px-3 py-3">US$</th>
              <th className="px-3 py-3 whitespace-nowrap">Int. Margin</th>
              <th className="px-3 py-3">Ideal Size</th>
              <th className="px-3 py-3">Profit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-2 bg-blue-500"></td>
              <td className="px-3 py-3">{riskLevel[0]}</td>
              <td className="px-3 py-3">${risk1}</td>
              <td className="px-3 py-3">${im1}</td>
              <td className="px-3 py-3">{idealSize1}</td>
              <td className="px-3 py-3">${profit1}</td>
            </tr>
            <tr>
              <td className="px-2 bg-blue-500 text-white">RISK</td>
              <td className="px-3 py-3">{riskLevel[1]}</td>
              <td className="px-3 py-3">${risk2}</td>
              <td className="px-3 py-3">${im2}</td>
              <td className="px-3 py-3">{idealSize2}</td>
              <td className="px-3 py-3">${profit2}</td>
            </tr>
            <tr>
              <td className="px-2 bg-blue-500"></td>
              <td className="px-3 py-3">{riskLevel[2]}</td>
              <td className="px-3 py-3">${risk3}</td>
              <td className="px-3 py-3">${im3}</td>
              <td className="px-3 py-3">{idealSize3}</td>
              <td className="px-3 py-3">${profit3}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}