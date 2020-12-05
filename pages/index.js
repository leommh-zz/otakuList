import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Pagination, Menu, Row, Col } from "antd";

import { getList } from "../redux/actions/listActions";
import SideMenu from "../components/SideMenu";
import Card from "../components/Card";
import Footer from "../components/Footer";
import CardsLoader from "../components/CardsLoader";
const { Header, Content, Sider } = Layout;

class Home extends Component {
  constructor(props) {
    super(props);

    this.page = 1;
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
      this.setState({ loading: false });
    }
  }

  handleGetList = () => {
    this.props.getList(this.page);
  }

  onChangePage = (page) => {
    this.page = page;
    this.setState({ loading: true }, () => {
      this.handleGetList();
    });
  }

  renderCards = () => {
    const { list, count } = this.props;
    const total = count / 12;

    return (
      <>
        <Row>
          {list.map((card) => {
            return (
              <Col xs={2} sm={4} md={6} lg={8} xl={6} key={card.id + "_card_anime"}>
                <Card {...card} />
              </Col>
            );
          })}
        </Row>
        <Pagination showSizeChanger={false} onChange={this.onChangePage} defaultCurrent={this.page} total={total} />
      </>
    );
  };

  render() {
    const { loading } = this.state;

    return (
      <Layout>
        <SideMenu />
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {loading ? <CardsLoader /> : this.renderCards()}
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
