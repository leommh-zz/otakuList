import React from "react";
import { Layout } from "antd";
import SideMenu from "./SideMenu";
import Footer from "./Footer";
const { Content } = Layout;

const CustomLayout = ({ children }) => {
  return (
    <Layout>
      <SideMenu />
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
