# frontend

This is the @codexsw.inc base template for frontend applications. Its build with all the necessary elements
to build a modern web application.

Some features require extra settings due their dependency on external services (ex: Auth0, Sentry) if not set this
features won't work.

## How to use

Install all dependencies using `yarn`

```
$ yarn
```

Run dev mode

```
$ yarn dev
```

Run storybook

```
$ yarn storybook
```

### Tests

Tests use the `jest` package. Alongside another set of
testing libraries and Cypress for E2E

Run tests

```
$ yarn test
```

Update snapshots

```
$ yarn test:snapshot
```

Run lint

```
$ yarn lint
```

Run Cypress Open (E2E)

```
$ yarn cy:open
```

Run Cypress CLI

```
$ yarn cy:run
```

## Settings

Settings or variables used by the application. Use the `.env.example` file and copy to a `.env` file replacing settings accordingly.

| Name                  | Description  | Default value           |
| --------------------- | ------------ | ----------------------- |
| `NEXT_PUBLIC_API_URL` | API base url | `http://localhost:3001` |

### Auth0

Application uses [auth0](https://auth0.com/) for authentication and needs the following environment variables to be set up.

| Name                    | Description           |
| ----------------------- | --------------------- |
| `AUTH0_SECRET`          | Auth0 session secret  |
| `AUTH0_BASE_URL`        | Auth0 base URL        |
| `AUTH0_ISSUER_BASE_URL` | Auth0 issuer base URL |
| `AUTH0_CLIENT_ID`       | Auth0 client ID       |
| `AUTH0_CLIENT_SECRET`   | Auth0 client secret   |
| `AUTH0_AUDIENCE`        | Auth0 audience        |

All the values can be found at auth0 dashboard.

### Error tracking

This frontend application uses [Sentry](https://sentry.io/) for tracking runtime errors. In order to enable error tracking you need to specify the following environment variables

| Name                     | Description                          | Default value        |
| ------------------------ | ------------------------------------ | -------------------- |
| `NEXT_PUBLIC_SENTRY_DSN` | Sentry client key (required)         | n/a                  |
| `SENTRY_AUTH_TOKEN`      | Sentry authentication key (required) | n/a                  |
| `SENTRY_URL`             | Sentry URL                           | `https://sentry.io/` |
| `SENTRY_ORG`             | Sentry organization                  | `codexsw`            |
| `SENTRY_PROJECT`         | Sentry organization                  | `frontend`           |

## Generators

This repo uses [plop](https://plopjs.com/) generators to help you quickly create different app elements: components, services, pages, tests

### Components

To generate a component, using the plop generator for `component` with the parameters `ComponentName` (in PascalCase) and the `component/folder` (in kebab-case)

```
$ yarn plop component <ComponentName> <component/folder>
```

Ex:

```
$ yarn plop component Slider components/slider
```

this generator will also generate an `index.ts` on the folder if doesn't exists and also a Storybook story if the component
ends up in `View`

```
$ yarn plop component SliderView components/slider
```

### Pages

To generate a NextJS page, use the plop generator for `page` with the parameters `PageName` (in PascalCase) and the `page/folder` (in kebab-case)

```
$ yarn plop page <PageName> <page/folder>
```

Ex:

```
$ yarn plop page About
```

Will create the `/pages/about.tsx` page

```
$ yarn plop page Index about
```

Will create the `/pages/about/index.tsx` page

You can also use dynamic paths

```
$ yarn plop page Index post/[pid]
$ yarn plop page Edit post/[pid]/edit
```

Will create `/pages/post/[pid]/index.tsx` and
`/pages/post/[pid]/edit.tsx`.
