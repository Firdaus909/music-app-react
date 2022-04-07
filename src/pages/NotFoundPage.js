import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <Container fluid className='bg-dark d-flex flex-column align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
      <img src='https://drive.google.com/uc?export=view&id=1egCGNjReemU-QYYm8tF5GfIib5r5LUd7' alt='404 Page Not Found' />
      <Link className='text-decoration-none link-info mt-4 fs-4' to="/">Redirect to Homepage</Link>
    </Container>
  )
}

export default NotFoundPage