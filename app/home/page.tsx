import React from 'react'
import { ClerkProvider, SignedIn } from '@clerk/nextjs'
import { AppProps } from 'next/app'


function homepage({ pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <SignedIn>
        <div>You are signed in</div>
      </SignedIn>
      <div>Always visible</div>
    </ClerkProvider>
  )
}

export default homepage