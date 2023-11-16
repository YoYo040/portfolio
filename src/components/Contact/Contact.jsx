import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

import { themeContext } from "../../Context";
import { Alert } from "react-bootstrap";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [name,setName]=useState('')
const [email,setemail]=useState('')
const [error,setError]=useState('')
const [messager,setMessage]=useState('')
  const [done, setDone] = useState(false)
 
  const sendEmail = (e) => {
    e.preventDefault();

    if (!email || !name || !messager) {
         setError("All fields must be filled")
         setInterval(()=>{
            setError("")
         },5000)
    }
    if (email && name   && messager) {


    emailjs.sendForm('service_tzqwdgf',
     'template_llr3wy6',
      form.current, 'Kdf_NZSZQz9phgu8w')
      .then((result) => {
          if(result.text){
            setName("")
            setemail("")
            
            setMessage("")
            setError("")
            setDone(true)
          }

      }, (error) => {
          setError(error.text);
      });
    }}
  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>

        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
      {error &&
            <Alert variant="warning">{error}</Alert>}
          <input type="text" name="from_name" className="user"  placeholder="Name" value={name}
                onChange={(e)=>setName(e.target.value)}/>
          <input type="email" name="user_email" className="user" placeholder="Email" value={email}
                onChange={(e)=>setemail(e.target.value)}/>
          <textarea name="message" className="user" placeholder="Message" value={messager}
                onChange={(e)=>setMessage(e.target.value)}/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
