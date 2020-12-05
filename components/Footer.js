import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const CustomFooter = () => {
  const year = new Date().getFullYear();
  return (
    <Footer style={{ textAlign: "center" }}>
      Otaku List ©{year} criado por Leonardo Morini
    </Footer>
  );
};

export default CustomFooter;
