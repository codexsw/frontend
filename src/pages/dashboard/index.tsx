import { useUser } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'
import { FC, useCallback } from 'react'
import { withPageAuthRequired } from 'services/auth0'

export const getServerSideProps = withPageAuthRequired()

const Dashboard: FC = () => {
  const router = useRouter()
  const { user } = useUser()

  const handleLogout = useCallback(() => {
    router.push('/api/auth/logout')
  }, [router])

  return (
    <div>
      <h1>Hello {user && user.email}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard
