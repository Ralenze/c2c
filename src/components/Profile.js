const Profile = (props) => {
  return (
    <div className="items-center flex flex-col">
      <img className={"h-80 w-60 " + props.styles} src={props.imgsrc}></img>
      <h1 className="relative text-xl text-center font-semibold text-white">
        {props.name}
      </h1>
      <p className="relative text-base text-center font-light text-white">
        {props.ptext}
      </p>
    </div>
  );
};
export default Profile;
