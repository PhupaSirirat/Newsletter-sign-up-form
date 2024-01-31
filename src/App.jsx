import "./App.css";
import Illustration_Mobile from "./assets/images/illustration-sign-up-mobile.svg";
import Illustration_Desktop from "./assets/images/illustration-sign-up-desktop.svg";
import IconList from "./assets/images/icon-list.svg";

function App() {
  return (
    <main>
      <div className="container">
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
          <form action="">
            <label htmlFor="email">Email address</label>
            <input type="text" id="email" placeholder="email@company.com" />
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
