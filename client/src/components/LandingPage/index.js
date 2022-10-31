import "./index.css";
import landingPageImage from "../../assets/landingpage.svg";
import Nav from "./Nav";
import Login from "./Login";
import { OmitProps } from "antd/lib/transfer/ListBody";

export default function LandingPage(props) {
  return (
    <div className="container">
      <Nav />
      <div className="content">
        <div className="landing-image">
          <img src={landingPageImage} alt="" />
        </div>
        <Login className="login" onClick={props.onClick} />
      </div>
    </div>
  );
}
