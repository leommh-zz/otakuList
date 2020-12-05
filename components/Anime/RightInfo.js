import React from "react";
import {
  Image,
  Divider,
  Typography,
  Tag,
  Row,
  Col,
  List,
  Avatar,
  Space,
} from "antd";

const { Title, Paragraph } = Typography;

function truncate(input) {
  if (!!input === false || typeof input !== "string") return "";
  if (input.length > 200) {
    return input.substring(0, 200) + "...";
  }
  return input;
}

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
  } = attributes;

  const categories =
    !!included && included.filter((item) => item.type === "categories");
  const episodes =
    !!included && included.filter((item) => item.type === "episodes");

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

      {!!episodes && (
        <>
          <Divider orientation="left">Episodes ({episodeCount})</Divider>
          <List
            itemLayout="horizontal"
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
            }}
          />
        </>
      )}
    </div>
  );
};

export default RightInfo;
