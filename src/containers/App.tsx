import { useState } from "react";
import Banner from "../components/Banner/Banner";
import Navbtn from "../components/NavBtn/Navbtn";
import Section from "../components/Section/Section";
import Logo from "../assets/logo.png";
import "./App.css";

function App() {
  const [section, setSection] = useState("event");
  const handleClick = (name: string) => {
    setSection(name);
  };

  return (
    <div className="App">
      <div className="nav">
        <div className="logo">
          <img src={Logo} />
        </div>
        <div className="title">
          Govind Ballabh Pant Institue of engineering and technology
          <p>An autonomous institue of Government of Uttarakhand</p>
        </div>
        <div className="socials"></div>
      </div>
      <Banner />
      <section className="Main">
        <div className="nav2">
          <Navbtn handleClick={handleClick} name={"event"}>
            Events
          </Navbtn>
          <Navbtn handleClick={handleClick} name={"student"}>
            Student Coordinators
          </Navbtn>
          <Navbtn handleClick={handleClick} name={"faculty"}>
            Faculty Coordinators
          </Navbtn>
          <Navbtn handleClick={handleClick} name={"clubs"}>
            Clubs
          </Navbtn>
        </div>
        <Section id={section} />
      </section>
      <footer>footer</footer>
    </div>
  );
}

export default App;