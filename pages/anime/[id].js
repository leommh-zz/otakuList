import React, { Component } from "react";
import { withRouter } from "next/router";
import { connect } from "react-redux";

import CustomLayout from "../../components/CustomLayout";
import CardsLoader from "../../components/CardsLoader";
import AnimeContent from "../../components/Anime/Content";

import { getAnimeData } from "../../redux/actions/animeActions";

class AnimePage extends Component {
  state = {
    loading: true,
  };

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
    const idAndSlug = this.props.router.query.id;
    const id = idAndSlug.split("-")[0];
    this.props.getAnimeData(id);
  };

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
  };

  render() {
    const { loading } = this.state;
    const { included, data } = this.props;

    return (
      <CustomLayout>
        {loading ? (
          <CardsLoader />
        ) : (
          <AnimeContent data={data} included={included} />
        )}
      </CustomLayout>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.animeReducer.data,
  included: state.animeReducer.included,
});

const mapDispatchToProps = {
  getAnimeData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AnimePage));
