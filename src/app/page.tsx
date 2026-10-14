import {
  Hero,
  TrustStrip,
  About,
  Services,
  Process,
  WhyUs,
  Locations,
  EventsCatering,
  Gallery,
  Testimonials,
  Faq,
  InquiryCta,
} from '@/sections'

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <Process />
      <WhyUs />
      <Locations />
      <EventsCatering />
      <Gallery />
      <Testimonials />
      <Faq />
      <InquiryCta />
    </main>
  )
}
