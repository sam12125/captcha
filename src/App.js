import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [isVerified, setIsverified] = React.useState(false);

  const handleSubscribe = () => {
    if (isVerified == true) {
      alert("You have successfully subscribed!");
    } else {
      alert("Please verify that you are a human!");
    }
  };

  const onChange = (value) => {
    // console.log(isVerified)
    setIsverified(true);
    console.log("Captcha value:", value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">React Recaptcha Demo - PentaCode</h1>
      </header>
      <div className="App-intro">
        <input type="text" placeholder="email@company.com" />

        <div className="convert" onClick={handleSubscribe}>
          Subscribe
        </div>

        <ReCAPTCHA
        style={{justifyContent:"center",display:"flex",marginTop:"20px"}}
          sitekey="6LetTUwlAAAAAP5OdQlrr3iVlSY4NHgHAU3_s-jN"
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default App;
