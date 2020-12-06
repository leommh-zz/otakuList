import React from "react";
import { Select } from "antd";
const { Option } = Select;

const sorts = [
  { id: "popularity", value: "popularityRank", name: "Popular" },
  { id: "recents", value: "-startDate", name: "Recentes" },
  { id: "old", value: "startDate", name: "Antigos" },
  { id: "alphabetic", value: "slug", name: "Alfabético" },
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
