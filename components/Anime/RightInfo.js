import React from "react";
import { Image, Divider, Typography, Tag, Row, Col } from "antd";
import YouTube from 'react-youtube';
const { Title, Paragraph } = Typography;

const RightInfo = ({ data, included }) => {
  console.log(data);
  const { attributes } = data;
  const {
    averageRating,
    canonicalTitle,
    coverImage,
    description,
    episodeCount,
    status,
    synopsis,
    popularityRank,
    ratingRank,
    showType,
    youtubeVideoId,
  } = attributes;

  const youtubeOpts = {
    height: '290',
    width: '100%',
  };

  return (
    <div>
      {!!included && (
        <>
          <Divider orientation="left" className="otaku-first-divider">
            Categories
          </Divider>
          <Row gutter={[5, 5]}>
            {included.map((item) => {
              if (item.type === "categories") {
                return (
                  <Col>
                    <Tag color="#9000DD">{item.attributes.title}</Tag>
                  </Col>
                );
              }
            })}
          </Row>
        </>
      )}

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
