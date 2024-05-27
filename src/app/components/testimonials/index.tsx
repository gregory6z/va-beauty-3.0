import { TestimonialsCard } from "./testimonials-card"

export interface Testimonial {
  name: string
  content: string
  image: string
}

interface testimonialsProps {
  testimonials: Testimonial[]
}

export function Testimonials({ testimonials }: testimonialsProps) {
  return (
    <div className="h-full w-full bg-zinc-100">
      <div className="mx-auto px-[1.5rem] py-[5rem] lg:max-w-[1218px] lg:px-0 lg:py-[7rem] ">
        <header>
          <h1 className="text-center text-2xl font-bold lg:text-4xl">
            Ce que nos clients pensent de nous
          </h1>
        </header>
        <main className="mt-10 grid gap-10 lg:mt-24 lg:grid-cols-3 ">
          {testimonials.map((testimonial) => {
            return (
              <TestimonialsCard
                key={testimonial.name}
                name={testimonial.name}
                content={testimonial.content}
                image={testimonial.image}
              ></TestimonialsCard>
            )
          })}
        </main>
      </div>
    </div>
  )
}
