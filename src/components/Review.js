import React, { useEffect, useState } from 'react'

const Review = () => {
const data = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text:
      'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text:
      'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text:
      'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

// useEffect(() => {
//     if(curr == 4)
//     {
//         setCurr(0)
//     }
// }, [curr])
const[curr, setCurr] = useState(0)
  return (
    <div>

    <div className='review'>
        <p id={`author-${data[curr].id}`} className='author'>{data[curr].name}</p>
        <p className='job'>{data[curr].job}</p>
        <p className='info'>{data[curr].text}</p>
        <img className='person-img' src={data[curr].image} />
    </div>

    <button className='next-btn' onClick={() => {
        if(curr == 3)
        {
            setCurr(0)
        }
        else
        {
            setCurr(curr + 1)
        }
        
    }}>Next</button>

    <button className='prev-btn' onClick={() => {
        if(curr == 0)
        {
            setCurr(3)
        }
        else
        {
            setCurr(curr - 1)
        }

    }}>Previous</button>
    <button onClick={() => {
        while(true)
        {
            let randomNumber = Math.floor(Math.random() * 4)
            if(randomNumber != curr)
            {
                setCurr(randomNumber)
                break
            }
        }
    }} className='random-btn'>surprise me</button>
    </div>

  )
}

export default Review