import Link from 'next/link'
import { Container, Button } from '@/components/ui'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center py-20">
      <Container narrow className="text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
          404 · Page Not Found
        </span>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink mt-3 mb-4">
          This page could not be found
        </h1>
        <p className="text-muted text-base max-w-md mx-auto mb-8">
          The page you are looking for doesn’t exist or has moved. Return to the homepage to explore corporate food courts and catering services.
        </p>
        <Link href="/">
          <Button variant="primary" size="md">
            Back to Homepage
          </Button>
        </Link>
      </Container>
    </main>
  )
}
