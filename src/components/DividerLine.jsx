import PropTypes from "prop-types"

export const DividerLine = ({ line }) => {
  return (
    <div className="divider">
      <img src={line} alt="wavy line" />
      <img src={line} alt="wavy line" />
      <img src={line} alt="wavy line" />
      <img src={line} alt="wavy line" />
      <img src={line} alt="wavy line" />
      <img src={line} alt="wavy line" />
      <img src={line} alt="wavy line" />
      <img src={line} alt="wavy line" />
    </div>
  )
}

DividerLine.propTypes = {
  line: PropTypes.string,
}