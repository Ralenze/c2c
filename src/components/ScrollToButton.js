const ScrollToButton = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="w-4/5 lg:w-36 lg:hover:scale-105 transition duration-200 hover:cursor-pointer lg:hover:bg-blue-400  h-16 my-2 bg-white text-xl lg:text-base rounded-xl items-center justify-center flex text-black lg:font-light text-center "
    >
      {props.text}
    </div>
  );
};

export default ScrollToButton;
