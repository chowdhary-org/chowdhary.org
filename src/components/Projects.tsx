'use client'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { IconChevronRight } from '@tabler/icons-react'

interface Day {
  title: string
  label: string
  href: string
  image: string
  summary: string
}

const projects: Array<Day> = [
  {
    title: '100,000+ masks for frontline workers',
    label: 'Karuna 2020',
    href: 'https://karuna2020.org',
    summary:
      'Karuna 2020 distributed over 100,000 masks to frontline workers like healthcare and police personnel across India during the COVID-19 pandemic.',
    image:
      'https://open-data.karuna2020.org/attachments/distribution/rec806JSxue4OQVJo/distribution-pictures/att8qN4RQoSetJmsX/large.jpeg',
  },
  {
    title: '2,500+ families sustained with meals',
    label: 'Karuna 2020',
    href: 'https://karuna2020.org',
    summary:
      'Karuna 2020 distributed over 2,500 dry ration kits to families migrant workers during the COVID-19 lockdown. Each kit can help sustain a family for 4 for one month.',
    image:
      'https://open-data.karuna2020.org/attachments/social-media-outreach/recTbhT7eGL85y1CP/pictures/attrJ8tnT5qytXdBH/large.png',
  },
  {
    title: 'A hackathon to solve problems for India',
    label: 'BharatHacks',
    href: 'https://bharathacks.github.io',
    summary:
      'Over 100 engineers, designers, and entrepreneurs participated in the free hackathon and launched products during the weekend of June 17–18, 2018.',
    image:
      'https://static.businessworld.in/article/article_extra_large_image/1501157938_HTEbTk_event.jpg',
  },
  {
    title: 'A platform to celebrate Indian entrepreneurs',
    label: 'Made with Love in India',
    href: 'https://madewithloveinindia.org',
    summary:
      'Made with Love in India is an open platform to celebrate, promote, and build a brand — India. Find the most exciting new startups and products from Indian entrepreneurs.',
    image:
      'https://d33wubrfki0l68.cloudfront.net/5357825bedd9698cbacd1757adb183b689f23f70/73c7e/images/projects/mwlii/cover.png',
  },
  {
    title: 'Open source template for nonprofits',
    label: 'Karuna 2020 Open Data',
    summary:
      'GitHub repository with Airtable and Google Sheets integrations for openly sharing contributors, donors, beneficiaries, and more information.',
    href: 'https://open-data.karuna2020.org',
    image:
      'https://images.unsplash.com/photo-1591522810850-58128c5fb089?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

function DaySummary({ day }: { day: Day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold leading-tight tracking-tight text-teal-900">
        {day.title}
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-teal-900">
        {day.summary}
      </p>
    </>
  )
}

function ScheduleStatic() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {projects.map((day) => (
        <section
          key={day.title}
          className="rounded-b-lg bg-white/60 shadow-xl shadow-teal-900/5 backdrop-blur"
        >
          <img
            alt=""
            src={day.image}
            className="h-48 w-full rounded-t-lg object-cover"
          />
          <div className="space-y-6 px-10 py-10">
            <DaySummary day={day} />
            <footer className="ml-12 " style={{ zoom: 0.8 }}>
              <Button href={day.href} className="flex items-center space-x-2">
                <span>Visit {day.label}</span>
                <IconChevronRight className="h-4 w-4" />
              </Button>
            </footer>
          </div>
        </section>
      ))}
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <blockquote className="font-display text-4xl font-bold tracking-tighter text-teal-600 sm:text-5xl">
            &ldquo;Through the lens of technology, we see not just challenges,
            but opportunities to make a lasting difference.&rdquo;
          </blockquote>
          <p className="mt-4 font-display text-2xl tracking-tight text-teal-900">
            At Chowdhary.org, every innovation is a step towards a future where
            technology serves humanity in its noblest form.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage position="right" className="-bottom-32 -top-40" />
        <Container className="relative">
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
