'use client';

// Simple error page - no React context dependencies
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-4xl font-bold text-red-600">Something went wrong</h1>
        <h2 className="text-2xl font-semibold text-gray-700">Internal Server Error</h2>
        <p className="text-gray-600 max-w-md">
          An unexpected error occurred. Please try again or contact support if the problem persists.
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
          <a
            href="/"
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors inline-block"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}