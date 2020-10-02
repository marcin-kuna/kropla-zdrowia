import React from "react"
import { Link } from "gatsby"
import LinkWave from "../assets/images/linkWave.png"

const data = [
  {
    id: 1,
    text: "start",
    url: "/",
  },
  {
    id: 2,
    text: "o nas",
    url: "/o-nas/",
  },
  {
    id: 3,
    text: "basen",
    url: "/basen/",
  },
  {
    id: 4,
    text: "obozy",
    url: "/obozy/",
  },
  {
    id: 5,
    text: "kontakt",
    url: "/kontakt/",
  },
]

const tempLinks = data.map((link) => {
  return (
    <li key={link.id}>
      <Link to={link.url} className="link">
        <span>{link.text}</span>
        <img src={LinkWave} alt="" className="link-wave" />
      </Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
