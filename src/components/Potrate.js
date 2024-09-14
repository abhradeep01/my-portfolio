import React from 'react'

function Potrate({heading,describe}) {
  return (
    <div className="w-full flex flex-col gap-1.5">
        <div>
            <h2 className="text-amber-200 text-xl font-bold">
                {heading}
            </h2>
        </div>
        <div>
            <p className="text-white text-base font-semibold">
                {describe}
            </p>
        </div>
    </div>
  )
}

export default Potrate;