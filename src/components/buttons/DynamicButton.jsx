import PropTypes from "prop-types";
import "./dynamicButton.scss"

export const DynamicButton = ({ text = "button", onClick = () => { } }) => {
  return (
    <button onClick={onClick} type="submit" className="dynamicButton">
      <p>{text}</p>
    </button>
  );
};

DynamicButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
}