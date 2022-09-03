import { initAuth0 } from '@auth0/nextjs-auth0'

export const { handleAuth, withPageAuthRequired } = initAuth0({
  baseURL: process.env.AUTH0_BASE_URL,
  session: {
    rolling: true,
  },
})
