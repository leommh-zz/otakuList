import React, { Component } from "react";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import { Pagination, Row, Col } from "antd";

import CustomLayout from "../components/CustomLayout";
import Card from "../components/Card";
import CardsLoader from "../components/CardsLoader";
import Filters from "../components/Filters";

import { getList } from "../redux/actions/listActions";
import { limit } from "../services/config";

class Home extends Component {
  constructor(props) {
    super(props);
    const { query } = props.router;
    const { page, sort, search } = query;

    this.page = Number(page) > 0 ? page : 1;
    this.sort = sort || "popularityRank";
    this.search = search || "";

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
    this.props.getList(this.page, this.sort, this.search);
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
  };

  onSearch = (search) => {
    this.search = search;
    this.setState({ loading: true }, () => {
      this.handleGetList();
    });
  };

  renderCards = () => {
    const { list, count } = this.props;
    const total = count / limit;

    return (
      <>
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
        <Filters 
          defaultSort={this.sort} 
          onChangeSort={this.onChangeSort}
          onSearch={this.onSearch} 
        />
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
