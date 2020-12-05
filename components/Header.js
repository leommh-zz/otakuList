

import React from "react";
import { Layout, Image  } from "antd";

const { Header } = Layout;

const CustomHeader = () => {
  return (
    <Header style={{ textAlign: "center" }}>
        <Image
            width={200}
            src="/images/logo.png"
            preview={false}
        />
    </Header>
  );
};

export default CustomHeader;
