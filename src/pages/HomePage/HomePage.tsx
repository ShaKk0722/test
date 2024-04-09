import React, { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'
import HomePageBeforeLogin from './HomePageBeforeLogin'
import TableDetailProfile from './TableDetailProfile'
import { User } from 'src/types/user.type'
import { setProfileToLS } from 'src/utils/auth'
//import HomePageStudent from './HomePageStudent/HomePageStudent'

const userData: User = {
  _id: '123456789',
  status: 1,
  created_at: '2024-04-09T12:00:00Z',
  updated_at: '2024-04-09T12:00:00Z',
  role: 1,
  name: 'John Doe',
  phone: '123-456-7890',
  address: '123 Main Street'
}

export default function HomePage() {
  const { isAuthenticated } = useContext(AppContext)
  setProfileToLS(userData)

  return (
    <div>
      {!isAuthenticated && <HomePageBeforeLogin />}
      {isAuthenticated && <TableDetailProfile />}
    </div>
  )
}
