import React from "react";
import { Row, Col } from "antd";

import LeftInfo from "./LeftInfo";
import RightInfo from "./RightInfo";

const Content = ({ data, included }) => {

  return (
    <Row wrap={true} justify="center">
      <Col className="otaku-panel" xs={24} sm={24} md={24} lg={12} xl={12}>
        <LeftInfo data={data} />
      </Col>
      <Col className="otaku-panel" xs={24} sm={24} md={24} lg={10} xl={10}>
        <RightInfo data={data} included={included} />
      </Col>
    </Row>
  );
};

export default Content;
