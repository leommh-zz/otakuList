import React, { useState } from "react";
import { Input } from "antd";

const { Search } = Input;

const CustomSearch = ({ onSearch }) => {
  return (
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      style={{ width: 200 }}
    />
  );
};

export default CustomSearch;
