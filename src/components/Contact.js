import React from 'react';
import data from '../data/info.json';
function Contact({wdth}) {
  return (
    <div className={`${wdth?'w-[80%] x-sm:w-[98%]':'w-full'} flex flex-col gap-6`}>
        <div>
          <h2 className="text-xl font-bold text-green-600 capitalize">
            Contact
          </h2>
        </div>
        <hr />
        <div className="w-full flex flex-row justify-between x-sm:flex-col x-sm:gap-4">
          <div className="w-1/2 flex flex-col gap-2.5 x-sm:w-full">
            <div>
              <h2 className="text-lg font-bold text-white">
                Let's Connect
              </h2>
            </div>
            <div>
              <h4 className="text-sm capitalize font-semibold text-yellow-300">
                say hello at <span className="text-red-400 underline lowercase underline-offset-4 decoration-white">
                  <a href={"http://"+data.gmail} target='_blank' rel='npopener noreferrer'>
                    {data.gmail}
                  </a>
                </span>
                
              </h4>
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-4 items-center x-sm:w-full">
            <Input
              inputName={'Name'}
              type={'text'}
              id={'name'}
            />
            <Input
              inputName={'Email'}
              type={'email'}
              id={'email'}
            />
            <Input
              inputName={'Subject'}
              type={'text'}
              id={'subject'}
            />
            <Input 
              inputName={'Message'}
              type={'text'}
              id={'message'}
              textArea={true}
            />
          </div>
        </div>
    </div>
  )
}
const Input = ({inputName,type,id,textArea}) =>{
  return(
    <div className="w-[70%] flex flex-col gap-1 x-sm:w-[90%]">
      <label htmlFor={id} className='w-full text-sm font-semibold text-white'>
        {inputName}
      </label>
      {
        textArea?
        <textarea name={inputName} id={id} className='w-full h-20 bg-gray-400 rounded'></textarea>:
        <input type={type} id={id} className='w-full h-8 x-sm:h-10 bg-gray-400 rounded' />
      }
    </div>
  )
}
export default Contact