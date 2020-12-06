import React from "react";
import { Row, Col } from "antd";

import Sort from "./Sort";
import Search from "./Search";

const Filters = (props) => {
  return (
    <Row gutter={[20, 5]} wrap={true} justify="end" align="top">
      <Col>
        <Search {...props} />
      </Col>
      <Col>
        <Sort {...props} />
      </Col>
    </Row>
  );
};

export default Filters;
