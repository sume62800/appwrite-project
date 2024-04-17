import React from 'react'

function button({
  children,
  type="button",
  bgColor="bg-blue-500",
  textColor="white",
  className="",
  ...props
}) {
  return (
    <button className={`px-2 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default button
