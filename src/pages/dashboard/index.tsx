import { useUser } from '@auth0/nextjs-auth0'
import { Button } from 'components/Button'
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
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Dashboard
