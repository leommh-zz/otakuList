import React from "react";
import { Layout, Image } from "antd";

const { Header } = Layout;

const CustomHeader = () => {
  return (
    <Header style={{ textAlign: "center" }}>
      <a href="/">
        <Image
          width={150}
          src="/images/logo.png"
          preview={false}
          style={{ cursor: "pointer" }}
        />
      </a>
    </Header>
  );
};

export default CustomHeader;
