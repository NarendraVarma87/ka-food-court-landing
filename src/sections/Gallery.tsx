'use client'

import { useState } from 'react'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { X, ZoomIn, Image as ImageIcon } from 'lucide-react'
import { Container, Section, SectionHeading, Badge, Card, Reveal } from '@/components/ui'
import { galleryContent } from '@/content/gallery'
import type { GalleryItem } from '@/types/content'

export function Gallery() {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null)

  return (
    <Section id="gallery" soft className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={galleryContent.eyebrow}
            title={galleryContent.h2}
            subtitle={galleryContent.subheading}
          />
        </Reveal>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryContent.items.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.08} className="h-full">
              {item.isClientSupplied && item.src ? (
                /* Real Client Photo with Lightbox trigger */
                <button
                  type="button"
                  onClick={() => setActivePhoto(item)}
                  className="group relative w-full rounded-[24px] overflow-hidden border border-border bg-surface text-left aspect-[4/3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 cursor-pointer shadow-xs hover:shadow-md transition-all block"
                  aria-label={`View enlarged photo: ${item.caption}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={480}
                    height={360}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface/90 backdrop-blur-sm flex items-center justify-center text-ink opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={15} />
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-accent mb-1">
                      {item.category}
                    </span>
                    <p className="text-xs font-semibold line-clamp-1">
                      {item.caption}
                    </p>
                  </div>
                </button>
              ) : (
                /* Tasteful Brand-Tinted Placeholder with // TODO(client): photo marker */
                <Card className="h-full min-h-[220px] p-6 flex flex-col justify-between bg-brand-50/50 border border-brand-200/60 aspect-[4/3]">
                  <div className="flex items-center justify-between">
                    <Badge variant="brand" className="text-[10px]">
                      {item.category}
                    </Badge>
                    <ImageIcon size={18} className="text-brand-500" />
                  </div>

                  <div className="space-y-1.5 my-auto">
                    <p className="text-xs font-bold text-ink leading-snug">
                      {item.caption}
                    </p>
                    <p className="text-[11px] text-muted line-clamp-2">
                      {item.alt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-brand-200/50 flex items-center justify-between text-[10px] text-brand-800">
                    <span className="font-semibold uppercase tracking-wider">
                      KA Food Court Spaces
                    </span>
                    <span className="font-mono italic text-muted">
                      {'// TODO(client): photo'}
                    </span>
                  </div>
                </Card>
              )}
            </Reveal>
          ))}
        </div>

        {/* Accessible Radix UI Lightbox Dialog */}
        <Dialog.Root open={!!activePhoto} onOpenChange={(open) => !open && setActivePhoto(null)}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
            <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[92vw] max-w-3xl rounded-[24px] bg-ink border border-white/10 p-4 md:p-6 shadow-2xl focus:outline-none">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-white">
                <div>
                  <Dialog.Title className="text-sm md:text-base font-bold font-heading">
                    {activePhoto?.caption}
                  </Dialog.Title>
                  <p className="text-xs text-white/60">
                    {activePhoto?.category} · Hyderabad Corporate Facility
                  </p>
                </div>
                <Dialog.Close asChild>
                  <button
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
                    aria-label="Close photo preview"
                  >
                    <X size={18} />
                  </button>
                </Dialog.Close>
              </div>

              <div className="relative mt-4 rounded-xl overflow-hidden aspect-[4/3] bg-black">
                {activePhoto?.src && (
                  <Image
                    src={activePhoto.src}
                    alt={activePhoto.alt}
                    width={960}
                    height={720}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Container>
    </Section>
  )
}
