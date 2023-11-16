import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>youssefmoutahir99@gmail.com</span>
        <div className="f-icons">
          <a href="https://instagram.com/youssef_moutahir?igshid=NzZlODBkYWE4Ng==">
          <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100051084350019&mibextid=ZbWKwL">
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/YoYo040">
            <Gitub color="white" size={"3rem"} />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
