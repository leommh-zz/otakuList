import React from "react";
import { Row, Col, Select } from "antd";

const { Option } = Select;

const sorts = [
  { id: 'popularity', value: "popularityRank", name: "Popular" },
  { id: 'recents', value: "-startDate", name: "Recentes" },
  { id: 'old', value: "startDate", name: "Antigos" },
  { id: 'alphabetic', value: "slug", name: "Alfabético" },
];

const Filters = ({ defaultSort, onChangeSort }) => {
  return (
    <Row wrap={true} justify="end" align="top">
      <Col>
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
      </Col>
    </Row>
  );
};

export default Filters;
