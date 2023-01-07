export default function Calculator({ state, updateValues }) {
  const {
    buyFee, sellFee, accountSize, leverage,
    entry, stopLoss, targetPrice, direction
  } = state;
  return (
    <div>

      <div class="mt-8 block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
        <details class="open:bg-white" open>
          <summary class="text-gray-500 select-none">
            <div class="inline-block w-5 h-5 p-1 align-middle overflow-hidden bg-blue-500 rounded-full">
              <svg class="text-gray-100 -left-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </div>
            <label className="inline-block pl-1">Setting</label>
          </summary>
          <div class="mt-3 text-gray-500">
          <div className='mt-4'>
            <div className='grid grid-cols-2 gap-2'>
              <div>
                <label className='input-label text-gray-500'>Buy Fee</label>
                <input onChange={(e) =>
                  updateValues({
                    buyFee: e.target.value
                  })}
                  type='number' id='buyFee'
                  placeholder='Buy Fee' value={buyFee}
                  className='input-form' />
              </div>

              <div>
                <label className='input-label text-gray-500'>Sell Fee</label>
                <input onChange={(e) =>
                  updateValues({
                    sellFee: e.target.value
                  })}
                  type='number' id='sellFee'
                  placeholder='Sell Fee' value={sellFee}
                  className='input-form'/>
              </div>
            </div>

            <div className="w-full mt-4">
              <label className='input-label text-gray-500'>Account Size</label>
              <input onChange={(e) =>
                updateValues({
                  accountSize: e.target.value
                })}
                type='number' id='accountSize' placeholder='Account Size' value={accountSize}
                className='input-form' />
            </div>
          </div>
          </div>
        </details>
      </div>

      <div className='leverage mt-4 px-4 pt-1 border border-gray-200 rounded-lg'>
        <label for="default-range" class="inline-block input-label text-gray-500 mb-2">Leverage</label>

        <input onChange={(e) => {
          updateValues({
            leverage:
              e.target.value < 1
                ? 1
                : e.target.value > 100 
                ? 100
                : e.target.value 
          });
        }} 
        max={100} min={1} type={"number"} placeholder="custom" value={leverage}
        className="inline-block input-form"/>
        
        <input onChange={(e) => {
          updateValues({
            leverage: e.target.value 
          });
        }} 
        id="default-range" type="range" max={100} min={1} value={leverage} class="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm"></input>
      </div>

      <div className='input-group grid grid-cols-2 gap-2 mt-4 '>
        <div className="">
          <label className='input-label text-gray-500'>Entry Price</label>
          <input onChange={(e) =>
            updateValues({
              entry: e.target.value,
              direction: 
                e.target.value > stopLoss ? 'Long' : 'Short'
            })}
            type='number' id='entry' placeholder='Entry' value={entry}
            className='input-form'/>
        </div>

        <div className='text-right'>
          <label className='input-label text-gray-500'>Stop Loss</label>
          <input onChange={(e) =>
            updateValues({
              stopLoss: e.target.value,
              direction: 
                e.target.value < entry ? 'long' : 'short'
            })}
            type='number' id='stopLoss' placeholder='Stop Loss' value={stopLoss} 
            className='input-form'/>
        </div>

      </div>
      
      <div className="input-group grid grid-cols-3 gap-2 mt-2">
        <div className="col-span-2">
          <label className='input-label text-gray-500'>Target Price</label>
          <input onChange={(e) =>
            updateValues({
              targetPrice: e.target.value,
            })}
            type='number' id='entry' placeholder='TP' value={targetPrice}
            className='input-form'/>
        </div>
        <div className='text-right'>
          <label className='inline-block input-label text-gray-500 pr-3'>Direction</label>
          <span className="input-label pt-2">{direction}</span>
          <span className="text-xs">direction auto detect</span>
        </div>
      </div>
      
      
    </div>
  )
}