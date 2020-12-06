import React, { forwardRef } from "react";
import { Layout, Image } from "antd";
import Link from "next/link";

const { Header } = Layout;

const CustomHeader = () => {
  return (
    <Header style={{ textAlign: "center" }}>
      <Link href="/">
        <img
          width={150}
          src="/images/logo.png"
          style={{ cursor: "pointer" }}
        />
      </Link>
    </Header>
  );
};

export default forwardRef(CustomHeader);
