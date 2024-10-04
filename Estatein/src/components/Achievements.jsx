export const Achievements = () => {
    const achievements = [
      {
        title: "3+ Years of Excellence",
        description: "With over 3 years in the industry, we've amassed a wealth of knowledge and experience.",
      },
      {
        title: "Happy Clients",
        description: "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
      },
      {
        title: "Industry Recognition",
        description: "We've received numerous industry accolades and awards that reflect our commitment to excellence.",
      },
    ];
  
    return (
      <div className="bg-tertiary  text-white py-16 px-8 sm:px-10 md:px-12 lg:px-28 w-full font-Urbanist">
        <div className="">
          <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
          <p className="text-gray-400 mb-12 max-w-3xl">
            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-black p-10 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }