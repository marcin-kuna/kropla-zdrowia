import React from "react"
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  // FaEnvelopeSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/kroplazdrowiaradom",
  },
  {
    id: 2,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.facebook.com/kroplazdrowiaradom",
  },
  {
    id: 3,
    icon: <FaYoutubeSquare className="social-icon"></FaYoutubeSquare>,
    url: "https://www.facebook.com/kroplazdrowiaradom",
  },
  // {
  //   id: 4,
  //   icon: <FaEnvelopeSquare className="social-icon"></FaEnvelopeSquare>,
  //   url: "mailto:jan_kowalski@example.com",
  // },
]
const links = data.map((link) => {
  return (
    <li key={link.id}>
      <a
        href={link.url}
        className="social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
