import React, { Component } from "react";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import { Pagination, Row, Col } from "antd";

import CustomLayout from "../components/CustomLayout";
import Card from "../components/Card";
import CardsLoader from "../components/CardsLoader";
import Filters from "../components/Filters";

import { getList } from "../redux/actions/listActions";
import { limit } from "../config";

class Home extends Component {
  constructor(props) {
    super(props);
    const { query } = props.router;

    if (!!query.page && Number(query.page) > 0) {
      this.page = query.page;
    } else {
      this.page = 1;
    }

    if (!!query.sort) {
      this.sort = query.page;
    } else {
      this.sort = 'popularityRank';
    }

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.handleGetList();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.list !== nextProps.list ||
      this.state.loading !== nextState.loading
    );
  }

  componentDidUpdate(prevProps) {
    if (this.state.loading && this.props.list !== prevProps.list) {
      window.scrollTo(0, 0);
      this.setState({ loading: false });
    }
  }

  handleGetList = () => {
    this.props.getList(this.page, this.sort);
  };

  onChangePage = (page) => {
    this.page = page;

    this.setState({ loading: true }, () => {
      this.props.router.push(`/?page=${page}`);
      this.handleGetList();
    });
  };

  onChangeSort = (sort) => {
    this.sort = sort;
    this.setState({ loading: true }, () => {
      this.handleGetList();
    });
  }

  renderCards = () => {
    const { list, count } = this.props;
    const total = count / limit;

    return (
      <>
        <Filters defaultSort={this.sort} onChangeSort={this.onChangeSort} />
        <Row gutter={[24, 24]} wrap={true}>
          {list.map((card) => {
            return <Card key={card.id} {...card} />;
          })}
        </Row>
        <Pagination
          showSizeChanger={false}
          onChange={this.onChangePage}
          defaultCurrent={this.page}
          total={total}
        />
      </>
    );
  };

  render() {
    const { loading } = this.state;

    return (
      <CustomLayout>
        {loading ? <CardsLoader /> : this.renderCards()}
      </CustomLayout>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.listReducer.list,
  count: state.listReducer.count,
});

const mapDispatchToProps = {
  getList,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
