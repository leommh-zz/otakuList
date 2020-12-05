import React from "react";
import { Divider, Typography, Tag, Row, Col } from "antd";
import YouTube from "react-youtube";
const { Paragraph } = Typography;

const youtubeOpts = {
  height: "290",
  width: "100%",
};

const RightInfo = ({ data, included }) => {
  console.log(data);
  const { attributes } = data;
  const { synopsis, youtubeVideoId } = attributes;

  const categories =
    !!included && included.filter((item) => item.type === "categories");

  return (
    <div>
      {!!categories && (
        <>
          <Divider orientation="left" className="otaku-first-divider">
            Categories
          </Divider>
          <Row gutter={[5, 5]}>
            {categories.map((item) => {
              if (item.type === "categories") {
                return (
                  <Col key={item.id}>
                    <Tag color="#9000DD">{item.attributes.title}</Tag>
                  </Col>
                );
              }
            })}
          </Row>
        </>
      )}

      <Divider orientation="left">Synopsis</Divider>
      <Paragraph level={4}>{synopsis}</Paragraph>
      {!!youtubeVideoId && (
        <>
          <Divider orientation="left">Trailer</Divider>
          <YouTube videoId={youtubeVideoId} opts={youtubeOpts} />
        </>
      )}
    </div>
  );
};

export default RightInfo;
