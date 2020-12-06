import React from "react";
import { Select } from "antd";
const { Option } = Select;

const sorts = [
  { id: "popularity", value: "popularityRank", name: "Popularity" },
  { id: "recents", value: "-startDate", name: "Recents" },
  { id: "old", value: "startDate", name: "Old" },
  { id: "alphabetic", value: "slug", name: "Alphabetic" },
];

const Sort = ({ defaultSort, onChangeSort }) => {
  return (
    <Select
      defaultValue={defaultSort || "popularityRank"}
      style={{ width: 120 }}
      onChange={onChangeSort}
    >
      {sorts.map((item) => (
        <Option key={item.id} value={item.value}>
          {item.name}
        </Option>
      ))}
    </Select>
  );
};

export default Sort;
