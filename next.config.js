const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  sentry: {
    hideSourceMaps: true
  }
};

const sentryWebpackPluginOptions = {
  silent: false,
  authToken: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
  org: process.env.NEXT_PUBLIC_SENTRY_ORG,
  project: process.env.NEXT_PUBLIC_SENTRY_PROJECT,
};

module.exports =
    withSentryConfig(nextConfig, sentryWebpackPluginOptions);
