import React from "react";
import { Row, Col } from "antd";

import LeftInfo from "./LeftInfo";
import RightInfo from "./RightInfo";

const Content = ({ data, included }) => {
  return (
    <Row wrap={true} justify="center">
      <Col className="otaku-panel" xs={24} sm={24} md={24} lg={24} xl={14}>
        <LeftInfo data={data} included={included} />
      </Col>
      <Col className="otaku-panel" xs={24} sm={24} md={24} lg={24} xl={8}>
        <RightInfo data={data} included={included} />
      </Col>
    </Row>
  );
};

export default Content;
