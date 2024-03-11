import PropTypes from "prop-types";
import "./dynamicButton.scss"

export const DynamicButton = ({ icon, text = "button", onClick = () => { } }) => {
  return (
    <button onClick={onClick} type="submit" className="dynamicButton">
      {icon && <img src={icon} alt="icon" />}
      <p>{text}</p>
    </button>
  );
};

DynamicButton.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
}