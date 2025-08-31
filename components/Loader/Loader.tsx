import React from 'react'

interface LoaderProps {
  width?: string
  height?: string
}

const Loader = ({ width, height }: LoaderProps) => {
  return (
    <>
      <div
        style={{ width: `${width}`, height: `${height}` }}
        className='h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#FFC504] border-t-transparent'
      ></div>
    </>
  )
}

export default Loader
