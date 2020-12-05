import React, { Component } from "react";
import { withRouter } from "next/router";
import { connect } from "react-redux";

import CustomLayout from "../../components/CustomLayout";
import CardsLoader from "../../components/CardsLoader";

import { getAnimeData } from "../../redux/actions/animeActions";

class AnimePage extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    this.getData();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.data !== nextProps.data ||
      this.state.loading !== nextState.loading
    );
  }

  componentDidUpdate(prevProps) {
    if (this.state.loading && this.props.data !== prevProps.data) {
      this.setState({ loading: false });
    }
  }

  getData = () => {
    const { id } = this.props.router.query;
    this.props.getAnimeData(id);
  }

  renderAnime = () => {
    const { attributes } = this.props.data;
    const {
      averageRating,
      canonicalTitle,
      coverImage,
      description,
      episodeCount,
      status,
      synopsis,
    } = attributes;

    return (
      <div>
        <span>{canonicalTitle}</span>
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <CustomLayout>
        {loading ? <CardsLoader /> : this.renderAnime()}
      </CustomLayout>
    );
  }
}


const mapStateToProps = (state) => ({
    data: state.animeReducer.data,
});
  
const mapDispatchToProps = {
    getAnimeData,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AnimePage));
