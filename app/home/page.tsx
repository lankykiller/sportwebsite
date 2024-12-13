import React from 'react'
import { ClerkProvider, SignedIn, useUser } from '@clerk/nextjs'
import { AppProps } from 'next/app'
import User from "../components/user"


function homepage({ pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <SignedIn>
        <div>You are signed in</div>
        <User/>
      </SignedIn>
      <div>Always visible</div>
    </ClerkProvider>
  )
}

export default homepage