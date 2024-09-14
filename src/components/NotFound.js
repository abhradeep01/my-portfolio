import React from 'react'

function NotFound() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center gap-4">
        <div>
            <h2 className="text-2xl font-bold text-red-500 capitalize">
                page not found 404    
            </h2> 
        </div>
        <div className='flex flex-row items-center gap-4'>
            <div>
                <h3 className='text-lg font-bold text-slate-200'>
                    Go Back To
                </h3>
            </div>
            <button className='bg-blue-600 text-white text-lg font-bold p-1.5 rounded-md capitalize'>
                <a href="/">home page</a>
            </button>
        </div>
    </div>
  )
}

export default NotFound