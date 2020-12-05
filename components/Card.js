import React from "react";
import { Image, Card, Typography, Tag, Row, Col } from "antd";
import Link from "next/link";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const AnimeCard = ({ id, attributes, relationships }) => {
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
  } = attributes;
  let cover = null;
  if (!!coverImage && coverImage.original) {
    cover = coverImage.original;
  }

  const width = 300;
  const fallback = "/images/no_image.png";

  return (
    <Link href={`anime/${id}`}>
      <Card hoverable style={{ width, marginTop: 16 }}>
        <Title level={4} ellipsis={{ rows: 1, expandable: false }}>
          {canonicalTitle}
        </Title>
        <div className="card-image">
          <Image
            width={"100%"}
            height={100}
            src={cover || fallback}
            preview={false}
            fallback={fallback}
            style={{ objectFit: "cover" }}
          />
        </div>
        <Row gutter={[5, 5]}>
          {episodeCount && (
            <Col flex={1}>
              <Tag color="red">Episodes: {episodeCount}</Tag>
            </Col>
          )}

          {popularityRank && (
            <Col flex={1}>
              <Tag color="volcano">Rank: {popularityRank}</Tag>
            </Col>
          )}

          {ratingRank && (
            <Col flex={1}>
              <Tag color="orange">Rating: {ratingRank}</Tag>
            </Col>
          )}
        </Row>

        <Paragraph
          ellipsis={{
            rows: 3,
            expandable: false,
          }}
        >
          {synopsis}
        </Paragraph>
      </Card>
    </Link>
  );
};

export default AnimeCard;
