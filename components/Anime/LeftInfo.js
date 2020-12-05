import React from "react";
import { Image, Divider, Typography, Tag, Row, Col, PageHeader } from "antd";
const { Title, Paragraph } = Typography;

const LeftInfo = ({ data }) => {
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
    showType
  } = attributes;

  let cover = null;
  if (!!coverImage && coverImage.large) {
    cover = coverImage.large;
  }

  const fallback = "/images/no_image.png";

  return (
    <div>
      <div className="otaku-image">
        <Image
          width={"100%"}
          height={250}
          src={cover || fallback}
          preview={false}
          fallback={fallback}
          style={{ objectFit: "cover", borderRadius: 8 }}
        />
      </div>
      <Title level={2} ellipsis={{ rows: 1, expandable: false }}>
        {canonicalTitle}
      </Title>
      <Row gutter={[5, 5]}>
        <Col>
          {status && <Tag color="magenta">Status: {status}</Tag>}

          {episodeCount && <Tag color="red">Episodes: {episodeCount}</Tag>}

          {popularityRank && <Tag color="volcano">Rank: {popularityRank}</Tag>}

          {ratingRank && <Tag color="orange">Rating: {ratingRank}</Tag>}

          {showType && <Tag color="gold">Type: {showType}</Tag>}
        </Col>
      </Row>
      <Divider orientation="left">Synopsis</Divider>
      <Paragraph level={4}>{synopsis}</Paragraph>

    
    </div>
  );
};

export default LeftInfo;
