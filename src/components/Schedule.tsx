'use client'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Schedule() {
  return (
    <>
      <section id="foundation" className="py-20 sm:py-32">
        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
            <h2 className="font-display text-4xl font-bold tracking-tighter text-teal-600 sm:text-5xl">
              Foundation
            </h2>
            <p className="mt-4 font-display text-2xl tracking-tight text-teal-900">
              At the heart of Chowdhary.org&rsquo;s Foundation lies a resolute
              commitment to leveraging technology for the greater good. Our
              Foundation is the cornerstone of our mission, where we focus on
              nurturing and supporting a wide array of initiatives that make a
              tangible difference.
            </p>
            <p className="mt-4 font-display text-lg tracking-tight text-teal-900">
              From empowering communities with digital education to funding
              research for sustainable tech solutions, our Foundation operates
              at the intersection of innovation and social responsibility. Here,
              every project we undertake is more than just an investment in
              technology; it&rsquo;s an investment in hope, progress, and a
              better future for all.
            </p>
            <div className="ml-12 mt-8">
              <Button href="#apply">Apply for sponsorship</Button>
            </div>
          </div>
        </Container>
      </section>
      <section id="ventures" className="py-20 sm:py-32">
        <Container className="relative z-10 flex justify-end">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
            <h2 className="font-display text-4xl font-bold tracking-tighter text-teal-600 sm:text-5xl">
              Ventures
            </h2>
            <p className="mt-4 font-display text-2xl tracking-tight text-teal-900">
              In the Ventures arm of Chowdhary.org, we bring bold ideas to life.
              This dynamic platform is dedicated to identifying, investing in,
              and nurturing early-stage startups that are poised to
              revolutionize the way we address global challenges. We believe in
              the power of entrepreneurial spirit combined with technological
              innovation to create impactful solutions.
            </p>
            <p className="mt-4 font-display text-lg tracking-tight text-teal-900">
              Ventures at Chowdhary.org isn&rsquo;t just about funding;
              it&rsquo;s about building partnerships that foster growth, drive
              change, and set new benchmarks in the tech world. Join us as we
              embark on this journey to transform visionary ideas into realities
              that can reshape our world.
            </p>
            <div className="ml-12 mt-8">
              <Button href="#apply">Apply for accelerator</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
