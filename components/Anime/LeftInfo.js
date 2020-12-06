import React from "react";
import { Image, Divider, Typography, Tag, Row, Col, List } from "antd";

const { Title } = Typography;

function truncate(input) {
  if (!!input === false || typeof input !== "string") return "";
  if (input.length > 150) {
    return input.substring(0, 150) + "...";
  }
  return input;
}

const fallback = "/images/no_image.png";

const LeftInfo = ({ data, included }) => {
  const { attributes } = data;
  const {
    canonicalTitle,
    coverImage,
    episodeCount,
    status,
    popularityRank,
    ratingRank,
    showType,
  } = attributes;

  let cover = null;
  if (!!coverImage && coverImage.large) {
    cover = coverImage.large;
  }

  const episodes =
    !!included && included.filter((item) => item.type === "episodes");

  const onChangePage = () => {
    window.scrollTo(0, 0);
  };

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
        {status && (
          <Col>
            <Tag color="magenta">Status: {status}</Tag>
          </Col>
        )}

        {popularityRank && (
          <Col>
            <Tag color="volcano">Rank: {popularityRank}</Tag>
          </Col>
        )}

        {ratingRank && (
          <Col>
            <Tag color="orange">Rating: {ratingRank}</Tag>
          </Col>
        )}

        {showType && (
          <Col>
            <Tag color="gold">Type: {showType}</Tag>
          </Col>
        )}
      </Row>

      {!!episodes && (
        <>
          <Divider orientation="left">
            Episodes ({episodeCount})
          </Divider>
          <List
            itemLayout="vertical"
            dataSource={episodes}
            renderItem={(item) => {
              let extraProps = {};
              if (!!item.attributes.thumbnail) {
                extraProps = {
                  extra: (
                    <Image
                      className="otaku-list-image"
                      width={150}
                      alt="logo"
                      src={item.attributes.thumbnail.original}
                    />
                  ),
                };
              }

              return (
                <List.Item {...extraProps}>
                  <List.Item.Meta
                    title={item.attributes.canonicalTitle}
                    description={truncate(item.attributes.synopsis)}
                  />
                </List.Item>
              );
            }}
            pagination={{
              pageSize: 10,
              showSizeChanger: false,
              onChange: onChangePage,
            }}
          />
        </>
      )}
    </div>
  );
};

export default LeftInfo;
