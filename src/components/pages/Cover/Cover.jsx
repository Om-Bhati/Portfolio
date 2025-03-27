import React from "react";

const Cover = ({ coverImg, title , name}) => {
  const coverImgStyle = {
    backgroundImage: `url(${coverImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  };

  return (
    <div className="h-full" style={coverImgStyle}>
      <div className="h-full flex justify-center items-center page-shadow">
        <h1 className="text-primary text-4xl font-bold ">
          {title}
          <br />
          {name}
        </h1>
      </div>
    </div>
  );
};

export default Cover;
