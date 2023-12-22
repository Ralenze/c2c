const ScrollToButton = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="transition duration-200 bg-black w-4/5 lg:w-fit  lg:hover:scale-105 hover:cursor-pointer lg:hover:text-blue-400 text-xl lg:text-base items-center justify-center flex text-white lg:font-light text-center   h-16 my-2 border-b border-b-white lg:border-none lg:hover:bg-zinc-800 lg:rounded-xl lg:px-8"
    >
      {props.text}
    </div>
  );
};

export default ScrollToButton;
