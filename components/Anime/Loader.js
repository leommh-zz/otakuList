import React from "react";
import { Skeleton, Row, Col } from "antd";

const Loader = () => {
  return (
    <Row wrap={true} justify="center">
      <Col className="otaku-panel" xs={24} sm={24} md={24} lg={24} xl={14}>
        <Skeleton active={true} />
        <Skeleton active={true} />
        <Skeleton active={true} />
        <Skeleton active={true} />
      </Col>
      <Col className="otaku-panel" xs={24} sm={24} md={24} lg={24} xl={8}>
        <Skeleton active={true} />
        <Skeleton active={true} />
      </Col>
    </Row>
  );
};

export default Loader;
