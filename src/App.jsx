import "./App.css";
import Illustration_Mobile from "./assets/images/illustration-sign-up-mobile.svg";
import Illustration_Desktop from "./assets/images/illustration-sign-up-desktop.svg";

function App() {
  return (
    <main>
      <div className="container">
        <section>
          <img src={Illustration_Mobile} alt="" className="img_mobile" />
          <img src={Illustration_Desktop} alt="" className="img_desktop" />
        </section>
      </div>
    </main>
  );
}

export default App;
