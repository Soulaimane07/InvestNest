import React, { useEffect, useState } from 'react'
import { FaCalculator } from 'react-icons/fa'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useSelector } from "react-redux"


function InvestCalc({walletBalance}) {
    useEffect(()=> {
        setInitialInvestment(walletBalance)
    }, [walletBalance])
    
    const [initialInvestment, setInitialInvestment] = useState(walletBalance);
    const [growth, setGrowth] = useState(30);
    const [rentalYield, setRentalYield] = useState(5);

    const data = [
        {
            "title": "Investment",
            "value": initialInvestment.toLocaleString(),
            "color": "bg-gray-800"
        },
        {
            "title": "Total rental income",
            "value": (initialInvestment * (rentalYield / 100) * 5).toLocaleString(),
            "color": "bg-yellow-300"
        },
        {
            "title": "Value appreciation",
            "value": (initialInvestment * (growth / 100)).toLocaleString(),
            "color": "bg-violet-500"
        },
    ]

    const year = new Date().getFullYear() + 1;

    const chartData = Array.from({ length: 5 }, (_, i) => {
        const currentYear = year + i;
        const rentalIncome = initialInvestment * (rentalYield / 100);
        const appreciationPerYear = (initialInvestment * (growth / 100)) / 5;

        return {
            name: currentYear,
            Investment: initialInvestment,
            "Total rental income": rentalIncome * (i + 1), // cumulative over years
            "Value appreciation": appreciationPerYear * (i + 1), // cumulative growth
        };
    });

    return (
        <div className="mt-18 px-8">
            <div className="flex items-center space-x-2 opacity-80">
                <FaCalculator size={19} />
                <h2 className="text-lg font-medium">Investment calculator</h2>
            </div>
            <div className="mt-8 px-6">
                <h2 className='text-center text-2xl mb-2 opacity-60'>Projected investment return of</h2>
                <h2 className='text-center text-2xl'>
                    <span className='font-semibold'>${(initialInvestment * (growth / 100)).toLocaleString()}</span>
                    <span className='opacity-60'> in </span>
                    <span className='font-semibold'> 5 years</span>
                </h2>
                <div className='border mb-10 flex justify-between px-6 space-x-4 py-3 rounded-md border-gray-300 shadow-sm mt-8'>
                    {data.map((item, key) => (
                        <div key={key} className='w-full'>
                            <div className='flex text-sm items-baseline space-x-3'>
                                <div className={`w-3 h-3  rounded-full ${item.color}`}></div>
                                <h2>{item.title}</h2>
                            </div>
                            <p className='px-6.5 font-semibold text-md'>${item.value}</p>
                        </div>
                    ))}
                </div>

                <BarChart
                    width={600}
                    height={300}
                    data={chartData}
                    margin={{
                        top: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis
                        tickFormatter={(value) => `$${value.toLocaleString()}`}
                        domain={(dataMin, dataMax) => [initialInvestment - 100, Math.max(dataMax, initialInvestment + 300)]}
                    />
                    <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                    <Bar dataKey="Investment" stackId="a" fill="#1E2939" />
                    <Bar dataKey="Total rental income" stackId="a" fill="#FFDF20" />
                    <Bar dataKey="Value appreciation" stackId="a" fill="#8E51FF" />
                </BarChart>

                <div className="mt-12">
                    {/* Initial Investment */}
                    <div className="mb-8">
                        <div className="mb-1 flex items-baseline justify-between">
                            <p>Initial Investment</p>
                            <p className="font-medium text-lg">${initialInvestment.toLocaleString()}</p>
                        </div>
                        <input
                            type="range"
                            min={walletBalance - 450}
                            max={walletBalance + 1500}
                            step={50}
                            value={initialInvestment}
                            onChange={(e) => setInitialInvestment(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>

                    {/* Property Value Growth */}
                    <div className="mb-8">
                        <div className="mb-1 flex items-baseline justify-between">
                            <p>Property value growth (5 years)</p>
                            <p className="font-medium text-lg">{growth}%</p>
                        </div>
                        <input
                            type="range"
                            min={0}
                            max={100}
                            step={1}
                            value={growth}
                            onChange={(e) => setGrowth(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>

                    {/* Rental Yield */}
                    <div className="mb-8">
                        <div className="mb-1 flex items-baseline justify-between">
                            <p>Expected annual rental yield</p>
                            <p className="font-medium text-lg">{rentalYield.toFixed(2)}%</p>
                        </div>
                        <input
                            type="range"
                            min={0}
                            max={10}
                            step={0.1}
                            value={rentalYield}
                            onChange={(e) => setRentalYield(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InvestCalc;
