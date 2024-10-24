import React, { useState } from 'react';
import data from '../data/info.json';
function Contact({wdth}) {
  //client's name
  const [name,setName] = useState('');
  //client email id
  const [email,setEmail] = useState('');
  //subject for which client contact
  const [subject,setSubject] = useState('');
  //message client send for which client contact with me
  const [message,setMessage] = useState('');

  
  return (
    <div className={`${wdth?'w-[80%] x-sm:w-[98%] x-sm:px-2':'w-full'} flex flex-col gap-6`}>
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
          <div className="w-[30%] flex flex-col justify-between gap-4 md:w-[50%] x-sm:w-full">
            <div className="w-full flex flex-col gap-1 x-sm:w-full">
              <label htmlFor='name' className='w-full text-sm font-semibold text-white'>
                Name
              </label>
              <input type='text' id='name' value={name} onChange={(e)=>setName(e.target.value)} className='w-full h-8 x-sm:h-10 bg-gray-400 rounded p-2 outline-none'/>
            </div>
            <div className="w-full flex flex-col gap-1 x-sm:w-full">
              <label htmlFor='email' className='w-full text-sm font-semibold text-white'>
                Email
              </label>
              <input type='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full h-8 x-sm:h-10 bg-gray-400 rounded p-2 outline-none'/>
            </div>
            <div className="w-full flex flex-col gap-1 x-sm:w-full">
              <label htmlFor='subject' className='w-full text-sm font-semibold text-white'>
                Subject
              </label>
              <input type='text' id='subject' value={subject} onChange={(e)=>setSubject(e.target.value)} className='w-full h-8 x-sm:h-10 bg-gray-400 rounded p-2 outline-none'/>
            </div>
            <div className="w-full flex flex-col gap-1 x-sm:w-full">
              <label htmlFor='message' className='w-full text-sm font-semibold text-white'>
                Message
              </label>
              <textarea type='text' name='message' id='message' value={message} onChange={(e)=>setMessage(e.target.value)} className='w-full h-20 bg-gray-400 rounded p-2 outline-none'></textarea>:
            </div>
            <button type="submit" className="w-fit bg-white text-base font-semibold px-1.5 py-0.5 rounded">
            submit
            </button>
          </div>
        </div>
    </div>
  )
}
export default Contact