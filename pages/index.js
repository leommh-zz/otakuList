import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Typography, Menu } from "antd";

import { getList } from "../redux/actions/listActions";
import SideMenu from "../components/SideMenu";
import Card from "../components/Card";
import Footer from "../components/Footer";
const { Header, Content, Sider } = Layout;

class Home extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.props.getList();
  }

  render() {
    const { loading } = this.state;

    return (
      <Layout>
        <SideMenu />
        <Layout>
          {/* <Header className="site-layout-sub-header-background" style={{ padding: 0 }} /> */}
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {loading && (
                <>
                  <Card loading={true} />
                  <Card loading={true} />
                  <Card loading={true} />
                  <Card loading={true} />
                </>
              )}
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
});

const mapDispatchToProps = {
  getList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
