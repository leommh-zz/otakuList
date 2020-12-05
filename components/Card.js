import React from "react";
import { Skeleton, Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const AnimeCard = ({ attributes, relationships }) => {
  const {
    averageRating,
    canonicalTitle,
    coverImage,
    description,
    episodeCount,
    status,
    synopsis,
  } = attributes;
  let avatar = null;
  if (!!coverImage && coverImage.small) {
    avatar = coverImage.small;
  }
  return (
    <Card
      style={{ width: 300, marginTop: 16 }}
      // actions={[
      // <SettingOutlined key="setting" />,
      // <EditOutlined key="edit" />,
      // <EllipsisOutlined key="ellipsis" />,
      // ]}
    >
      <Meta
        avatar={<Avatar src={avatar} />}
        title={canonicalTitle}
      />
    </Card>
  );
};

export default AnimeCard;
