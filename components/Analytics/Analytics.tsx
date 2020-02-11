import React from 'react';
import ReactGA from 'react-ga';
import Router from 'next/router';
import * as Fathom from 'fathom-client';

function initAnalytics() {
  if (process.env.GA) {
    ReactGA.initialize(process.env.GA);
  }
  if (process.env.FATHOM) {
    Fathom.load();
    Fathom.setSiteId(process.env.FATHOM);
  }
}

function logPageView() {
  if (process.env.GA) {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
  if (process.env.FATHOM) {
    Fathom.trackPageview();
  }
}

export const Analytics: React.FC<{}> = () => {
  React.useEffect(() => {
    if (!window.ANALYTICS_INITIALIZED) {
      initAnalytics();
      window.ANALYTICS_INITIALIZED = true;
    }

    logPageView();
    Router.events.on('routeChangeComplete', logPageView);

    return () => {
      Router.events.off('routeChangeComplete', logPageView);
    };
  }, []);

  return null;
};
