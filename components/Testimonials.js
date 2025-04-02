import React from 'react'
import { Marquee } from './ui/marquee'
import Card from './Card'
import Feed from './Feed'

const testimonial=[
    {
      "name": "Sophia Martinez",
      "testimonial": "Shoemine has an amazing selection of shoes, and the quality is top-notch. I found the perfect running shoes, and they were delivered on time!",
      "profession": "Fitness Trainer"
    },
    {
      "name": "Ethan Patel",
      "testimonial": "I’ve been buying from Shoemine for over a year now. Their customer service is excellent, and the return process is hassle-free.",
      "profession": "Software Engineer"
    },
    {
      "name": "Liam Johnson",
      "testimonial": "The designs and variety at Shoemine are unmatched. I got a pair of formal shoes that perfectly complemented my style.",
      "profession": "Marketing Manager"
    },
    {
      "name": "Amelia Clark",
      "testimonial": "Shoemine's size guide is super helpful! I’ve always struggled with finding the right fit, but now I’m a loyal customer.",
      "profession": "Graphic Designer"
    },
    {
      "name": "Noah Kim",
      "testimonial": "The discounts and offers at Shoemine are amazing. I got a premium pair of sneakers at an unbeatable price. Highly recommend!",
      "profession": "College Student"
    },
    {
      "name": "Olivia Green",
      "testimonial": "I love Shoemine! Their collection is trendy and stylish. The sandals I ordered last week are both comfortable and chic.",
      "profession": "Fashion Blogger"
    }
  ]


const Testimonials = () => {
  return (
    <div className='relative flex h-[60vh] w-full overflow-hidden  flex-col items-center justify-center gap-4  rounded-lg '>
      <div className='flex flex-row gap-4 '>
        <Marquee
          className='justify-center items-center overflow-hidden  [--duration:60s] [--gap:1rem]'
          style={{
            transform: "translateX(50px) translateY(0px) scale(1.5)",
          }}
        >
            <div className='flex flex-row gap-3 w-full '>

          {testimonial.map((data, idx) => (
              <Feed key={idx} data={data} />
            ))}
            </div>
        </Marquee>
      </div>

    </div>
  )
}

export default Testimonials
