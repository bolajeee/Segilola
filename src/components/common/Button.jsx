/* eslint-disable react/prop-types */
const Button = ({
  bgColor,
  id,
  children,
  textColor,
  hoverBgColor,
  hoverTextColor,
}) => {
  return (
    <button
      id={id}
      className={`slider-btn-5 ${bgColor} ${hoverTextColor} ${hoverBgColor} p-4  ${textColor}   text-black  transition-all duration-300 ease-in relative inline-block text-center z-10 rounded-md uppercase text-[14px]`}
    >
      {children}
    </button>
  );
};

export default Button;
