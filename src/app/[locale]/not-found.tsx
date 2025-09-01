import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="heading-2 text-industrial-900 mb-4">404</h1>
        <p className="heading-4 text-industrial-700 mb-2">Page Not Found</p>
        <p className="body-base text-industrial-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/fa" 
          className="btn-base bg-primary-600 text-white px-6 py-3 hover:bg-primary-700"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}