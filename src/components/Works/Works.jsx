import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import khamsat from "../../img/khamsat.webp";
import redbubble from "../../img/redbubble.png";

import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
            I am a web developer working on these applications. I have good experience.
            <br />
            For more information,
            <br />
            Contact me

          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <a href="https://www.upwork.com/freelancers/~0126af61b521285b5b">
            <div className="w-secCircle">
              <img src={Upwork} alt="" />
            </div>
          </a>

          <a href="https://www.fiverr.com/y_motahhir?up_rollout=true">
            <div className="w-secCircle">
              <img src={Fiverr} alt="" />
            </div>
          </a>

          <a href="https://khamsat.com/user/yossef04">
            <div className="w-secCircle">
              <img src={khamsat} alt="" />
            </div>
          </a>

          <a href="https://www.redbubble.com/fr/people/Motahhir99/shop?asc=u">
            <div className="w-secCircle">
              <img src={redbubble} alt="" />
            </div>
          </a>

          <a href="https://www.facebook.com/profile.php?id=100051084350019&mibextid=ZbWKwL">
            <div className="w-secCircle">
              <img src={Facebook} alt="" />
            </div>
          </a>


        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
