const Event = (prop) => {
  let odd = prop.odd;
  return (
    <div className="w-[90%] border-2 border-black flex bg-green-100 h-20 mx-auto">
      <div
        className={
          "relative border-r border-black h-full w-1/4 text-center text-lg font-light flex items-center justify-center text-black " +
          (odd ? "bg-gray-800" : "bg-gray-500")
        }
      >
        {prop.time}
      </div>
      <div
        className={
          "flex justify-center items-center text-black text-xl font-medium relative h-full w-3/4 px-2 " +
          (odd ? "bg-gray-400 " : "bg-gray-700")
        }
      >
        {prop.desc}
      </div>
    </div>
  );
};

export default Event;
