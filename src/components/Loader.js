import React from 'react';
import {DNA as Loading}  from 'react-loader-spinner'

function Loader() {
  return(
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <Loading
        height="100"
        width="100"
        radius="6"
        color='white'
      />
    </div>
  )
}

export default Loader;