const ScrollToButton = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="w-4/5 lg:w-36 lg:font-bold lg:text-base h-16 my-2 bg-white text-xl rounded-2xl items-center justify-center flex text-black text-center"
    >
      {props.text}
    </div>
  );
};

export default ScrollToButton;
