import React from 'react';
import { SignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

const AuthWrapper = ({ children }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-3xl font-bold mb-6 text-center">FromDocToDeck</h1>
            <p className="mb-4 text-center">Please sign in to continue</p>
            <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
          </div>
        </div>
      </SignedOut>
    </>
  );
};

export default AuthWrapper;