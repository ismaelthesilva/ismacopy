'use client';

// Global error boundary - completely static
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body style={{
        margin: 0,
        fontFamily: 'system-ui, -apple-system, sans-serif',
        background: '#f9fafb',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            color: '#dc2626',
            marginBottom: '1rem' 
          }}>
            Something went wrong
          </h1>
          <p style={{ 
            color: '#6b7280', 
            marginBottom: '2rem' 
          }}>
            An unexpected error occurred. Please try again.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button
              onClick={reset}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#2563eb',
                color: 'white',
                border: 'none',
                borderRadius: '0.375rem',
                cursor: 'pointer'
              }}
            >
              Try Again
            </button>
            <a
              href="/"
              style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                backgroundColor: '#6b7280',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '0.375rem'
              }}
            >
              Go Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}