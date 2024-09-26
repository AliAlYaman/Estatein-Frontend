import React from 'react'

const StarRating = ({ rating }) => {
  return (
    <div className="flex ">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

const CustomerReviewCard = ({ review }) => {
  return (
    <div className="bg-tertiary rounded-xl shadow-md overflow-hidden font-Urbanist h-full border border-gray-700 w-full py-12">
      <div className="p-8">
        <div className="flex items-center justify-between">
          <StarRating rating={review.rating} />
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            {review.rating.toFixed(1)}
          </span>
        </div>
        <p className="mt-2 text-xl font-semibold text-white">{review.title}</p>
        <p className="mt-2 text-gray-300 text">{review.body}</p>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src={review.author.avatar}
              alt={review.author.name}
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">{review.author.name}</p>
            <p className="text-sm text-gray-400">{review.author.location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const  CustomerReviews = ()=>{
  const reviews = [
    {
      rating: 5,
      title: "Exceptional Service!",
      body: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      author: {
        name: "John Smith",
        location: "New York, NY",
        avatar: "assets/profiles/profile.png?height=40&width=40"
      }
    },
    {
      rating: 4,
      title: "Efficient and Reliable",
      body: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      author: {
        name: "Emily Johnson",
        location: "Los Angeles, CA",
        avatar: "assets/profiles/profile-2.png?height=40&width=40"
      }
    },
    {
      rating: 4.5,
      title: "Trusted Advisors",
      body: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      author: {
        name: "Michael Brown",
        location: "Chicago, IL",
        avatar: "assets/profiles/profile-3.png?height=40&width=40"
      }
    }
  ]

  return (
    <div className="px-4 md:px-10 lg:px-24  lg:my-20 max-[520px]:w-[520px] my-16 ">
      <h2 className="font-bold  mb-4 text-white font-Urbanist text-[24px] md:text-[28px] text-start">What Our Clients Say</h2>
      <p className='mb-16 font-Urbanist text-[#999999] text-[14px] md:text-[16px] leading-relaxed'>Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <CustomerReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  )
}