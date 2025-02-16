import React from "react";
import vid from "../assets/vids/CornerBrook.mp4";
import { Link } from "react-router-dom";


const ImgChange = () => {
  console.log(vid);

  return (
    <div className="ImgChange">

      <Link to={"https://www.cornerbrook.com"} target="blank" className="VidCont">
        <h2>Explore Corner Brook</h2>

          <p>cornerbrook.com</p>


      </Link>
      <video autoPlay loop muted playsInline className="Vid">
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ImgChange;
