import "./App.css";
import { useState } from "react";
import Illustration_Mobile from "./assets/images/illustration-sign-up-mobile.svg";
import Illustration_Desktop from "./assets/images/illustration-sign-up-desktop.svg";
import IconList from "./assets/images/icon-list.svg";
import IconSuccess from "./assets/images/icon-success.svg";

function App() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isConfirm, setIsConfirm] = useState(false);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const isValidEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidEmail()) {
      setIsValid(true);
      setIsConfirm(true);
      // console.log("Email is valid");
    } else {
      setIsValid(false);
      // console.log("Email is invalid");
    }
  };

  const handleDissmiss = () => {
    setIsConfirm(false);
    window.location.reload();
  }

  return (
    <main>
      <div className={isConfirm ? "confirm_container" : "hidden"}>
        <section className="confirm">
          <img src={IconSuccess} alt="" />
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <span className="bold">{email}</span>. Please
            open it and click the button inside to confirm your subscription.
          </p>
          <button onClick={handleDissmiss}>Dissmiss message</button>
        </section>
      </div>
      <div className={isConfirm ? "hidden" : "container"}>
        <section className="content_container">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>
              <img src={IconList} alt="" />
              Product discovery and building what matters
            </li>
            <li>
              <img src={IconList} alt="" />
              Measuring to ensure updates are a success
            </li>
            <li>
              <img src={IconList} alt="" />
              And much more!
            </li>
          </ul>
          <form action="" onSubmit={handleSubmit}>
            <div className="label_container">
              <label htmlFor="email">Email address</label>
              <span className={isValid ? "valid_email" : "invalid_email"}>
                Valid email required
              </span>
            </div>
            <input
              className={isValid ? "" : "invalid"}
              type="text"
              id="email"
              placeholder="email@company.com"
              onChange={handleInputChange}
            />
            <button>Subscribe to monthly newsletter</button>
          </form>
        </section>
        <section className="img_container">
          <img src={Illustration_Mobile} alt="" className="img_mobile" />
          <img src={Illustration_Desktop} alt="" className="img_desktop" />
        </section>
      </div>
    </main>
  );
}

export default App;
