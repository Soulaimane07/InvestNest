import React, { useState } from 'react';
import { PiMoneyThin } from "react-icons/pi";

function Goal({ setOpen }) {
  const [initialInvestment, setInitialInvestment] = useState(500); // Default investment set to $50

  const annualReturnRate = 0.01; // Lower return rate (1%)
  const years = 10;
  const monthlyContribution = initialInvestment;

  const calculateFutureValue = (P, r, n) => {
    return P * ((Math.pow(1 + r, n) - 1) / r);
  };

  const months = years * 12;
  const monthlyReturnRate = annualReturnRate / 12;
  const futureValue = calculateFutureValue(monthlyContribution, monthlyReturnRate, months);

  const annualIncome = futureValue * 0.04; // 4% withdrawal rate for annual income
  const monthlyIncome = annualIncome / 12;





  return (
    <div className="w-full fixed left-0 flex items-center justify-center z-60 top-0 h-screen bg-black/40">
      <div className="bg-white border border-gray-400 overflow-hidden h-6/7 w-2/4 rounded-md flex flex-col">
        <div className="px-10 flex py-6 flex-col justify-between h-full overflow-y-scroll pb-6">

          <div className="mt-8 text-center mb-12">
            <div className="px-32 mb-8">
              <h1 className="text-2xl mb-3 font-medium">
                How much do you plan to <br /> invest in the next 12 months?
              </h1>
              <p className='opacity-70'>Help us understand your investment goals by sharing your planned investment amount.</p>
            </div>

            <div className="mt-18 px-28">
              <h2 className="text-4xl font-bold mb-6"> Up to $ {initialInvestment.toLocaleString()} </h2>

              <input
                type="range"
                min={0} // Lower minimum value for investment
                max={2000} // Lower maximum value for investment
                step={50} // Step increment of 50
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(Number(e.target.value))}
                className="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />

              <div className="flex items-center justify-center space-x-2 mb-6">
                <PiMoneyThin size={26} className="text-teal-600" />
                <p>You can invest as often as you like</p>
              </div>

              <div className="bg-teal-100/60 text-teal-700 mt-4 py-10 rounded-2xl">
                <p>After 10 years, <br /> you could have a portfolio worth </p>
                <h2 className="text-teal-700 text-3xl font-bold py-5">
                  $ {futureValue.toLocaleString()}
                </h2>
                <h3>with a monthly income of $ {monthlyIncome.toLocaleString()}</h3>
              </div>
            </div>
          </div>

          <div className="px-40 pb-8">
            <button
              onClick={null}
              className="px-6 w-full cursor-pointer py-2 rounded-md font-medium bg-gray-800 text-white border border-gray-800 hover:bg-gray-600 transition-all"
            >
              Continue investing
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Goal;
