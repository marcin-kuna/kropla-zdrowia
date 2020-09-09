import React from "react"

const Ripple = ({ className }) => {
  return (
    <div className={`ripple ${className}`}>
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
      <div className="circle circle-4"></div>
      <div className="circle circle-5"></div>
    </div>
  )
}

export default Ripple
