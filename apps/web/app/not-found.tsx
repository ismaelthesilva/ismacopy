export default function NotFound() {
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
          <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem' }}>404</h1>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>Page Not Found</h2>
          <p style={{ color: '#6b7280', marginBottom: '2rem', maxWidth: '28rem' }}>
            The page you are looking for does not exist or has been moved.
          </p>
          <a
            href="/"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              borderRadius: '0.5rem',
              fontWeight: '500',
              textDecoration: 'none'
            }}
          >
            Back to Home
          </a>
        </div>
      </body>
    </html>
  )
}