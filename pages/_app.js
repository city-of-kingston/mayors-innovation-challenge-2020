import React from 'react';
import App from 'next/app';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/page-layout.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (<Component {...pageProps} />);
  }
}

export default MyApp;
