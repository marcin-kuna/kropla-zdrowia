import React from "react"
import { Link } from "gatsby"
import { HiChevronLeft } from "react-icons/hi"
import { FaRegFrown } from "react-icons/fa"
import Head from "../components/Head"

const Success = () => {
  return (
    <div className="back">
      <Head title="404" />
      <h2
        data-sal="zoom-in"
        data-sal-delay="200"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        Strona o podanym adresie
      </h2>
      <h2
        data-sal="zoom-in"
        data-sal-delay="500"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        Nie istnieje
        <FaRegFrown className="back-icon" />
      </h2>
      <Link
        to="/kontakt"
        className="spinning-btn about-spinning-btn"
        data-sal="zoom-in"
        data-sal-delay="800"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <div className="spinning-btn-inner">
          <HiChevronLeft className="spinning-btn-icon" />
        </div>
        <svg viewBox="0 0 200 200" className="spinning-btn-svg">
          <path
            id="curve"
            d="M 175, 100 a75,75 0 1,1 0,-1 z"
            fill="transparent"
          />
          <text>
            <textPath xlinkHref="#curve">Wstecz - Wstecz - Wstecz - </textPath>
          </text>
        </svg>
      </Link>
    </div>
  )
}

export default Success
