import React from 'react';
import { MdOutlineHelp } from 'react-icons/md';



function HowItWorks({lang}) {
  
  const steps = [
    {
      step: lang.step1,
      image: "/howitworks1.png",
      title: lang.p1
    },
    {
      step: lang.step2,
      image: "/howitworks2.png",
      title: lang.p2
    },
    {
      step: lang.step3,
      image: "/howitworks3.png",
      title: lang.p3
    }
  ];

  return (
    <>
      <div className="flex items-center space-x-2 opacity-80 px-8">
        <MdOutlineHelp size={22} />
        <h2 className="text-lg font-medium"> {lang.title} </h2>
      </div>
      <div className="mt-4 px-6 grid grid-cols-3 gap-3">
        {steps.map((item, index) => (
          <div key={index} className="border rounded-md border-gray-300 px-4 py-3 ">
                <p className="text-teal-500 font-medium mb-2">{item.step}</p>
                <div className='flex items-center'>
                    <h1 className="text-md font-medium leading-6">{item.title}</h1>
                    <div className='p-3 rounded-full bg-gray-100 w-fit'>
                        <img src={item.image} className='w-14' />
                    </div>
                </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HowItWorks;
