import React from 'react';
import App, { Container } from 'next/app';
import { UAProvider } from '../components/UAParser';

export default class MyApp extends App {
  public static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const ua = ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent;

    return { pageProps, ua };
  }

  public render() {
    const { Component, pageProps } = this.props;
    const { ua, ...rest } = pageProps;

    return (
      <UAProvider ua={ua}>
        <Container>
          <Component {...rest} />
        </Container>
      </UAProvider>
    );
  }
}
