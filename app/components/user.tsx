'use client'
import { useUser } from '@clerk/clerk-react'

export default function User() {
  const { isSignedIn, user, isLoaded } = useUser()

  if (!isLoaded) {
    console.log("loading")
    return null
  }

  if (isSignedIn) {
    console.log(user.id)
    return <div>Hello {user.fullName}!</div>
  }

  return <div>Not signed in</div>
}