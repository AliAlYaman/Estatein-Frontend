const clients = [
    {
      name: "ABC Corporation",
      since: 2009,
      domain: "Commercial Real Estate",
      category: "Luxury Home Development",
      testimonial:
        "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    },
    {
      name: "GreenTech Enterprises",
      since: 2018,
      domain: "Commercial Real Estate",
      category: "Retail Space",
      testimonial:
        "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
    },
  ];
  
  export const ValuedClients= ()=>{
    return (
      <div className="bg-tertiary  text-white py-16 px-28 md:px-12 sm:px-10 max-sm:px-12 lg:px-32 font-Urbanist">
        <div className="">
          <h2 className="text-3xl font-bold mb-2">Our Valued Clients</h2>
          <p className="text-gray-300 mb-12">
            At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clients.map((client) => (
              <div key={client.name} className="bg-black px-8 py-12 rounded-lg border border-white shadow-l ">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Since {client.since}</p>
                    <h3 className="text-xl font-semibold mt-1">{client.name}</h3>
                  </div>
                  <button className="text-sm text-gray-400 hover:text-white transition-colors">
                    Visit Website
                  </button>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2">
                    {/* Building SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 21V9a2 2 0 012-2h3m4 0h3a2 2 0 012 2v12M9 21V12H7v9M15 21v-9h-2v9M3 21h18"
                      />
                    </svg>
                    <span className="text-sm text-gray-400">{client.domain}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {/* Map Pin SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0-7c2.761 0 5 2.239 5 5 0 3-5 9-5 9s-5-6-5-9c0-2.761 2.239-5 5-5z"
                      />
                    </svg>
                    <span className="text-sm text-gray-400">{client.category}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2 flex items-center">
                    What They Said <span className="ml-2">🏆</span>
                  </h4>
                  <p className="text-sm text-gray-300">{client.testimonial}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  