import React from "react";
import { Skeleton, Card, Avatar, Row, Col } from "antd";
const { Meta } = Card;

const Loader = () => {
  return (
    <Card style={{ width: 300, marginTop: 16 }}>
      <Skeleton loading={true} avatar active>
        <Meta avatar={<Avatar src="" />} title="" description="" />
      </Skeleton>
    </Card>
  );
};

const CardsLoader = () => {
  return (
    <Row>
      <Col xs={24} xl={8}>
        <Loader />
      </Col>
      <Col xs={24} xl={8}>
        <Loader />
      </Col>
      <Col xs={24} xl={8}>
        <Loader />
      </Col>
    </Row>
  );
};

export default CardsLoader;
