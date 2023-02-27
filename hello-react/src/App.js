// src/App.js
import "./App.css";
import Header from "./components/header";
import Icon from "./components/icon";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <>
      <div>
        <Header></Header>

        <body>
          <div className="Title">
            <p>
              Say hello to <br></br>ReactJS
            </p>
          </div>

          <div className="Subtitle">
            <p>
              You will learn how to use <br></br>
              the most popular frontend library, <br></br>
              and become a super Nija developer.
            </p>
            <button type="button" class="btn btn-light col-1">
              Awesome!
            </button>
          </div>

          <footer className="Footer">
            <Icon imagen={icon1} descripcion="Declarative" />
            <Icon imagen={icon2} descripcion="Components" />
            <Icon imagen={icon3} descripcion="Single-way" />
            <Icon imagen={icon4} descripcion="JSX" />
          </footer>
        </body>
      </div>
    </>
  );
}
export default App;
