import "./UserDisplay.css";
import { Layout, Menu } from "antd";
import { Link, Route } from "react-router-dom";
import {
  PieChartOutlined,
  MedicineBoxOutlined,
  ContactsOutlined,
  FilePdfOutlined,
  LogoutOutlined,
  BugOutlined,
  HeartOutlined,
  BulbOutlined
} from "@ant-design/icons";

//components
import MedsList from "./MedsList";
import Dashboard from "./Dashboard";
import Contacts from "./Contacts";
import Allergies from "./Allergies";
import Medical from "./Medical";
import GeneratePDF from "./GeneratePDF";
import { useThemeSwitcher } from 'react-css-theme-switcher';

const { Header, Content, Footer, Sider } = Layout;

export default function UserDisplay(props) {

  const { switcher, currentTheme, status, themes } = useThemeSwitcher();

  const toggleDarkMode = () => {
    switcher({ theme: currentTheme === 'light' ? themes.dark : themes.light });
  };

  if (status === "loading") {
    return null;
  }

  return (
    <Layout>
      <Sider
        trigger={null}
        style={{
          background: "linear-gradient(45deg, #0f0c29, #302b63)",
          overflow: "hidden",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div
          id="logo-title"
          className="logo"
          style={{
            height: "75px",
            color: "white",
            fontSize: "2.1em",
            textAlign: "center",
            padding: "15px 0 15px 0",
            borderBottom: "1px solid #a8a6a4",
          }}
        >
          {"Clearance"}
        </div>

        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          style={{ background: "transparent" }}
        >
          <Menu.Item key="1" style={{ margin: "30px 0 20px 0" }}>
            <PieChartOutlined />
            <span style={{ fontSize: "1.4em" }}>Dashboard</span>
            <Link to="/" />
          </Menu.Item>

          <Menu.Item key="2" style={{ margin: "30px 0 20px 0" }}>
            <MedicineBoxOutlined />
            <span style={{ fontSize: "1.4em" }}>Medications</span>
            <Link to="/medications" />
          </Menu.Item>

          <Menu.Item key="6" style={{ margin: "30px 0 20px 0" }}>
            <BugOutlined />
            <span style={{ fontSize: "1.4em" }}>Allergies</span>
            <Link to="/allergies" />
          </Menu.Item>

          <Menu.Item key="7" style={{ margin: "30px 0 20px 0" }}>
            <HeartOutlined />
            <span style={{ fontSize: "1.4em" }}>Medical History</span>
            <Link to="/medical" />
          </Menu.Item>

          <Menu.Item key="3" style={{ margin: "30px 0 20px 0" }}>
            <ContactsOutlined />
            <span style={{ fontSize: "1.4em" }}>Contacts</span>
            <Link to="/contacts" />
          </Menu.Item>

          <Menu.Item key="4" style={{ margin: "30px 0 20px 0" }}>
            <FilePdfOutlined />
            <span style={{ fontSize: "1.4em" }}>Generate</span>
            <Link to="/generate" />
          </Menu.Item>

          <Menu.Item
            key="5"
            style={{ marginBottom: "20px", marginTop: "" }}
            onClick={() => {
              props.onClick();
            }}
          >
            <LogoutOutlined />
            <span style={{ fontSize: "1.4em" }}>Logout</span>
            <Link to="/" />
          </Menu.Item>
          <Menu.Item key="10" style={{ margin: "30px 0 20px 0" }} onClick={() => {
            toggleDarkMode();
          }}>
            <BulbOutlined />
            <span style={{ fontSize: "1.4em" }}>{currentTheme === 'light' ? "Light Mode" : "Dark Mode"}</span>
          </Menu.Item>
        </Menu>
      </Sider>

      <Content>
        <Route path="/" exact component={Dashboard} />
        <Route path="/medications" component={MedsList} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/allergies" component={Allergies} />
        <Route path="/medical" component={Medical} />
        <Route path="/generate" component={GeneratePDF} />
      </Content>
    </Layout>
  );
}
