import React from "react";
import { Layout } from "antd";
import Footer from "./Footer";
import Header from "./Header";
const { Content } = Layout;

const CustomLayout = ({ children }) => {
  return (
    <Layout>
      <Header />

      <Content>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          {children}
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default CustomLayout;
