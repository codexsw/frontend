const { withSentryConfig } = require('@sentry/nextjs')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// TODO: This removes the specific "You should not access 'res' after getServerSideProps" warning
// from the Next console. The warning is caused by this issue: https://github.com/auth0/nextjs-auth0/issues/524
// According to this investigation: https://github.com/auth0/nextjs-auth0/issues/524#issuecomment-999053802
// this should not cause any problems and results only form Next being too noisy. This is a
// temporary fix removing this warning from the console, until this issue is fixed.
const consoleWarn = console.warn
console.warn = (...args) => {
  if (
    args.length > 1 &&
    args[1].startsWith("You should not access 'res' after getServerSideProps")
  ) {
    // ignore message until this is fixed: https://github.com/auth0/nextjs-auth0/issues/524
  } else {
    consoleWarn(...args)
  }
}

/** @type import('next').NextConfig */
const nextConfig = {
  reactStrictMode: true,
}

const SENTRY_ENABLED = Boolean(
  process.env.NEXT_PUBLIC_SENTRY_DSN && process.env.SENTRY_AUTH_TOKEN
)

if (SENTRY_ENABLED) {
  // Make sure adding Sentry options is the last code to run before exporting, to
  // ensure that your source maps include changes from all other Webpack plugins
  module.exports = withSentryConfig(
    {
      ...nextConfig,
      sentry: {
        hideSourceMaps: true,
        widenClientFileUpload: true,
      },
    },
    {
      // Additional config options for the Sentry Webpack plugin. Keep in mind that
      // the following options are set automatically, and overriding them is not
      // recommended:
      //   release, url, org, project, authToken, configFile, stripPrefix,
      //   urlPrefix, include, ignore
      // silent: true, // Suppresses all logs
      // For all available options, see:
      // https://github.com/getsentry/sentry-webpack-plugin#options.
    }
  )
} else {
  module.exports = withBundleAnalyzer(nextConfig)
}
