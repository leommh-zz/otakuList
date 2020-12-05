import React from "react";
import { Skeleton, Card, Avatar } from "antd";
import Link from 'next/link';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const AnimeCard = ({ id, attributes, relationships }) => {
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
    <Link href={`anime/${id}`}>
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
    </Link>
  );
};

export default AnimeCard;
