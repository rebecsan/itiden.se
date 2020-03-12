import React from 'react';
import Router from 'next/router';
import * as Fathom from 'fathom-client';

function initAnalytics() {
  if (process.env.FATHOM) {
    Fathom.load();
    Fathom.setSiteId(process.env.FATHOM);
  }
}

function logPageView() {
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
