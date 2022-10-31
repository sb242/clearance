import { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb, Icon, Card, Row, Col, Calendar } from "antd";
import { Link, Switch, Route } from "react-router-dom";
import "./UserDisplay.css";
import {
  PieChartOutlined,
  MedicineBoxOutlined,
  ContactsOutlined,
  FilePdfOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import MedsList from "./MedsList";
import Dashboard from "./Dashboard";
import Contacts from "./Contacts";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function UserDisplay() {
  const [collapsed, setCollapsed] = useState(false);

  function onCollapse(collapsed) {
    console.log(collapsed);
    setCollapsed(true);
  }

  return (
    <Layout>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
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
            <span style={{ fontSize: "1.4em" }}>Medicine</span>
            <Link to="/medications" />
          </Menu.Item>
          <Menu.Item key="3" style={{ margin: "30px 0 20px 0" }}>
            <ContactsOutlined />
            <span style={{ fontSize: "1.4em" }}>Contacts</span>
            <Link to="/contacts" />
          </Menu.Item>
          <Menu.Item key="4" style={{ margin: "30px 0 20px 0" }}>
            <FilePdfOutlined />
            <span style={{ fontSize: "1.4em" }}>Generate</span>
            <Link to="/" />
          </Menu.Item>
          <Menu.Item
            key="5"
            style={{ marginBottom: "20px", marginTop: "40vh" }}
            onClick={() => {
              console.log("Clicked");
            }}
          >
            <LogoutOutlined />
            <span style={{ fontSize: "1.4em" }}>Logout</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Content>
        <Route path="/" exact component={Dashboard} />
        <Route path="/medications" component={MedsList} />
        <Route path="/contacts" component={Contacts} />
      </Content>
    </Layout>
  );
}
