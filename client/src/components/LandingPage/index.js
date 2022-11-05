import "./index.css";
import logo from "../../assets/Clearance-logo-bold.png";
import Login from "./Login";
import backgroundImage from "../../assets/undraw_medicine.svg"

export default function LandingPage(props) {
  return (
    <div >
      <img className="container" src={backgroundImage}/>
      <img className="logo-image" src={logo} />
      <Login className="login" onClick={props.onClick} />
    </div>
  );
}
