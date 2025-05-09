import React from 'react'
import { FaCalculator } from 'react-icons/fa'

function InvestCalc() {
  return (
    <div className="mt-18 px-8">
        <div className="flex items-center space-x-2 opacity-80">
            <FaCalculator size={19} />
            <h2 className="text-lg font-medium"> Investment calculator </h2>
        </div>
        <p className="mt-4 px-6"> 
            <h2> Projected investment return of </h2>
            <h2> 
                $ 79000
                in
                5 years 
            </h2>

            <div>

            </div>
        </p>
    </div>
  )
}

export default InvestCalc