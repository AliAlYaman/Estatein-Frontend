const teamMembers = [
    {
      name: "Max Mitchell",
      role: "Founder",
      image: "assets/profiles/team-1.png", // Replace with actual image path if necessary
    },
    {
      name: "Sarah Johnson",
      role: "Chief Real Estate Officer",
      image: "assets/profiles/team-2.png",
    },
    {
      name: "David Brown",
      role: "Head of Property Management",
      image: "assets/profiles/team-3.png",
    },
    {
      name: "Michael Turner",
      role: "Legal Counsel",
      image: "assets/profiles/team-4.png",
    },
  ];
  
  export default function TeamSection() {
    return (
      <div className="bg-tertiary text-white py-16 px-28 md:px-12 sm:px-10 max-sm:px-12 lg:px-32 font-Urbanist">
        <div className="">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Meet the Estatein Team</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mb-8">
            At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <div className="relative w-full aspect-square mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-4 left-4 bg-purple-600 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.5 2a4.48 4.48 0 00-4.48 4.48c0 .35.04.69.1 1.01C8.09 7.36 5.46 5.5 3.92 3a4.48 4.48 0 00-.61 2.27c0 1.56.79 2.94 2 3.74a4.48 4.48 0 01-2.04-.56v.06a4.48 4.48 0 003.6 4.39 4.48 4.48 0 01-2.02.08A4.48 4.48 0 007.4 15a9 9 0 01-6.65 1.84 12.66 12.66 0 006.83 2"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-400 mb-4">{member.role}</p>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  