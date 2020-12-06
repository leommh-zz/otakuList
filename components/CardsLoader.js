import React from "react";
import { Skeleton, Card, Space, Row, Col } from "antd";

const list = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];

const CardsLoader = () => {
  return (
    <Row gutter={[24, 24]} wrap={true}>
      {list.map((card) => {
        return (
          <Col key={card.id} xs={24} sm={24} md={12} lg={8} xl={6}>
            <Card flex={1} style={{ marginTop: 16 }}>
              <Skeleton active paragraph={false} />
              <Skeleton.Image style={{ width: 250 }} active />
              <div className="otaku-skeleton-row">
                <Space>
                  <Skeleton.Button active />
                  <Skeleton.Button active />
                  <Skeleton.Button active />
                </Space>
              </div>
              <Skeleton active />
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default CardsLoader;
