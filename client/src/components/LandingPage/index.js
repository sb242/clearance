import "./index.css";
import logo from "../../assets/Clearance-logo2.png";
import Login from "./Login";

export default function LandingPage(props) {
  return (
    <div className="container">
      <img className="logo-image" src={logo} />
      <Login className="login" onClick={props.onClick} />
    </div>
  );
}
