import App from "next/app";
import React from "react";
import "antd/dist/antd.less";
import "../assets/styles/custom.less";

class Application extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    //Anything returned here can be accessed by the client
    return { pageProps: pageProps };
  }

  render() {
    //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default Application;
