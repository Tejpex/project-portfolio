import PropTypes from "prop-types"

import { WebIcon } from "./Icons/WebIcon"
import { GithubIcon } from "./Icons/GithubIcon"

export const Button = ({ type, link, icon, text }) => {
  return (
    <a className={type} href={link} target="_blank">
      {icon === "web" && <WebIcon />}
      {icon === "github" && <GithubIcon />}
      {text}
    </a>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string
}