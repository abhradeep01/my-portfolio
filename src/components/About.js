import React from 'react'

function About({aboutData=Object({})}) {
  return (
    <div className="w-full flex flex-col gap-4">
      <div>
        <h2 className="text-xl font-bold text-green-600 capitalize">
          {'about me'}
        </h2>
      </div>
      <hr />
      <div>
        <p className="text-lg font-semibold">
          <span className="text-red-500">
            I'am {aboutData.name}
          </span>
          <span className="text-white m-1">
            {aboutData.describe}
          </span>
        </p>
      </div>
    </div>
  )
}

export default About