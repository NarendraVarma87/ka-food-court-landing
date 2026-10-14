import { Container, Section, Button, Badge } from '@/components/ui'

export default function Home() {
  return (
    <main>
      <Section id="hero" className="pt-32 pb-20">
        <Container className="text-center">
          <Badge variant="brand" className="mb-4">
            Phase 1 Foundation · KA Food Court
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-ink tracking-tight mb-6">
            Food courts and catering your teams will actually look forward to.
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8">
            End-to-end food court management for corporate buildings, plus bulk catering for team outings, parties, and celebrations in Hyderabad.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="lg">
              Request a proposal
            </Button>
            <Button variant="outline" size="lg">
              Explore services
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  )
}
