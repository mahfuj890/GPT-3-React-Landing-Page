import PropTypes from "prop-types";

function Button({ buttonText, background, buttonType, isDisable ,handleClick}) {

  return (
    <>
      <button
        type={buttonType}
        className={`default_btn ${background ? "" : "no_background"}`}
        disabled={isDisable}
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </>
  );
}
Button.propsType = {
  buttonText: PropTypes.string,
  background: PropTypes.bool,
  buttonType: PropTypes.string,
  isDisable: PropTypes.bool,
  handleClick: PropTypes.func,
};
Button.defaultProps = {
  buttonText: "Button Title",
  background: true,
  buttonType: "button",
  isDisable: false,
};
export default Button;
