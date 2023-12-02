const Event = (prop) => {
  let odd = prop.odd;
  return (
    <div className="w-[90%] border-2 border-black flex bg-green-100 h-20 mx-auto">
      <div
        className={
          "relative border-r border-black h-full w-1/4 text-center text-lg font-light flex items-center justify-center text-black " +
          (odd ? "bg-gray-300" : "bg-gray-100")
        }
      >
        {prop.time}
      </div>
      <div
        className={
          "flex justify-center items-center text-black text-xl font-medium relative h-full w-3/4 px-2 " +
          (odd ? "bg-gray-100 " : "bg-gray-300")
        }
      >
        {prop.desc}
      </div>
    </div>
  );
};

export default Event;
