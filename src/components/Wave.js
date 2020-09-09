import React from "react"

const Wave = ({ className, value }) => {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "100%", width: "100%" }}
      >
        <path d={value} style={{ stroke: "none" }}></path>
      </svg>
    </div>
  )
}

export default Wave
