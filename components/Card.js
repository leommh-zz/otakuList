import React from "react";
import { Image, Card, Typography, Tag, Row, Col } from "antd";
import Link from "next/link";

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
    slug,
  } = attributes;

  let cover = null;
  if (!!coverImage && coverImage.original) {
    cover = coverImage.original;
  }

  const fallback = "/images/no_image.png";

  return (
    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
      <Link href={`anime/${id}-${slug}`}>
        <Card hoverable flex={1} style={{ marginTop: 16 }}>
          <Title level={4} ellipsis={{ rows: 1, expandable: false }}>
            {canonicalTitle}
          </Title>
          <div className="otaku-image">
            <Image
              width={"100%"}
              height={150}
              src={cover || fallback}
              preview={false}
              fallback={fallback}
              style={{ objectFit: "cover", borderRadius: 8 }}
            />
          </div>
          <Row gutter={[5, 5]}>
            <Col>
              {episodeCount && <Tag color="red">Episodes: {episodeCount}</Tag>}

              {popularityRank && (
                <Tag color="volcano">Rank: {popularityRank}</Tag>
              )}

              {ratingRank && <Tag color="orange">Rating: {ratingRank}</Tag>}
            </Col>
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
    </Col>
  );
};

export default AnimeCard;
