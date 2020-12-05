import React from "react";
import { Layout, Image } from "antd";
import Link from "next/link";

const { Header } = Layout;

const CustomHeader = () => {
  return (
    <Header style={{ textAlign: "center" }}>
      <Link href={"/"}>
        <Image
          width={150}
          src="/images/logo.png"
          preview={false}
          style={{ cursor: "pointer" }}
        />
      </Link>
    </Header>
  );
};

export default CustomHeader;
