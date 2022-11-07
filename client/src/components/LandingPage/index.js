import "./index.css";
import logo from "../../assets/Clearance-logo-bold.png";
import Login from "./Login";
import Heart from "../Heart";

export default function LandingPage(props) {
  return (
    <div>
      <div className="container">
        <Heart />
      </div>
      <img className="logo-image" src={logo} />
      <Login className="login" onClick={props.onClick} />
    </div>
  );
}
