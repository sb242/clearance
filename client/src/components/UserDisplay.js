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
          background: "linear-gradient(45deg, #0b0a0a, #66615a)",
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
          {" "}
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
            <Link to="/medicine" />
          </Menu.Item>
          <Menu.Item key="2" style={{ margin: "30px 0 20px 0" }}>
            <MedicineBoxOutlined />
            <span style={{ fontSize: "1.4em" }}>Medicine</span>
            <Link to="/medicine" />
          </Menu.Item>
          <Menu.Item key="3" style={{ margin: "30px 0 20px 0" }}>
            <ContactsOutlined />
            <span style={{ fontSize: "1.4em" }}>Contacts</span>
            <Link to="/" />
          </Menu.Item>
          <Menu.Item key="4" style={{ margin: "30px 0 20px 0" }}>
            <FilePdfOutlined />
            <span style={{ fontSize: "1.4em" }}>Generate</span>
            <Link to="/" />
          </Menu.Item>
          <Menu.Item
            key="5"
            style={{ marginBottom: "20px", marginTop: "40vh" }}
          >
            <LogoutOutlined />
            <span style={{ fontSize: "1.4em" }}>Logout</span>
            <Link to="/settings" />
          </Menu.Item>
        </Menu>
      </Sider>
      <Content></Content>
    </Layout>
  );
}
