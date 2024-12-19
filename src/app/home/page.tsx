import React from 'react';
import { ClerkProvider, SignedIn} from '@clerk/nextjs';
import { AppProps } from 'next/app';
import User from '../components/user';
import { syncUser } from '../components/UserToDB';

async function Homepage({ pageProps }: AppProps) {

  await syncUser();

  return (
    <ClerkProvider {...pageProps}>
      <SignedIn>
        
        <div>You are signed in</div>
        <User />
      </SignedIn>
      <div>Always visible</div>
    </ClerkProvider>
  );
}



export default Homepage;
