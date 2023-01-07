import Head from 'next/head';
import { useState } from 'react';

import Calculator from '../components/Calculator';
import Result from '../components/Result';


export default function Home() {
  const [state, setState] = useState({
    buyFee: 0.04,
    sellFee: 0.02,
    accountSize: 1000,
    leverage: 1,
    entry: 2.09,
    stopLoss: 2.15,
    targetPrice: 2,
    direction: 'Short'
  });

  const updateValues = (newState) => {
    setState({
      ...state,
      ...newState
    });
  }

  return (
    <>
      <Head>
        <title>Crypto Trading Calculator</title>
        <meta name="description" content="Crypto Trading Calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='max-w-sm mx-auto mt-4 mb-4'>
        <h1 className='text-4xl text-blue-500 pb-2 border-b-2 border-blue-500'>Size Calculator</h1>
        <Calculator state={state} updateValues={updateValues}/>
        <Result state={state} />
      </div>
    </>
  );
}
