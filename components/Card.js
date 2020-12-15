import React from "react";
import { Image, Card, Typography, Tag, Row, Col } from "antd";
import Link from "next/link";

const { Title, Paragraph } = Typography;

const AnimeCard = ({ id, attributes }) => {
  const {
    canonicalTitle,
    coverImage,
    episodeCount,
    synopsis,
    popularityRank,
    ratingRank,
    slug,
  } = attributes;

  let cover = null;
  if (!!coverImage && coverImage.tiny) {
    cover = coverImage.tiny;
  }

  const fallback = "/images/no_image.png";

  const ClickCard = React.forwardRef(({ onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref} className="otaku-card">
        <Card hoverable flex={1} style={{ marginTop: 16, height: '100%' }}>
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
      </a>
    );
  });

  return (
    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
      <Link href={`anime/${id}-${slug}`}>
        <ClickCard />
      </Link>
    </Col>
  );
};

export default AnimeCard;
