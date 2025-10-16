'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-destructive mb-4">Something went wrong</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-2">Internal Server Error</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          An unexpected error occurred. Please try again or contact support if the problem persists.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Try Again
          </button>
          <a
            href="/"
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}