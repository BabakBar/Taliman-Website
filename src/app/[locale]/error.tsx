'use client';

import { useEffect } from 'react';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error('Page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="heading-3 text-red-600 mb-4">Something went wrong!</h1>
        <p className="body-base text-industrial-600 mb-6">
          We encountered an error while loading this page.
        </p>
        <button
          onClick={reset}
          className="btn-base bg-primary-600 text-white px-6 py-3 hover:bg-primary-700"
        >
          Try again
        </button>
      </div>
    </div>
  );
}