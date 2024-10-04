export const OurValues = () => {
  return (
    <div className="bg-tertiary text-white xl:p-28 lg:px-20 md:px-16 px-8 py-12 flex flex-col md:flex-row gap-12 pt-12 w-full  font-Urbanist">
      {/* Left Section */}
      <div className="flex flex-col justify-center md:w-1/2 w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          Our Values
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mb-8">
          At the heart of our organization lie core values that define our
          culture and guide our actions. We believe in fostering an environment
          where these principles are not just words, but lived experiences that
          shape our company.
        </p>
      </div>

      {/* Right Section - Values Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-1/2 w-full">
        {[
          {
            title: "Trust",
            description:
              "Trust is the cornerstone of every successful real estate transaction.",
            icon: "assets/icons/star.png",
          },
          {
            title: "Excellence",
            description:
              "We set the bar high for ourselves. From the properties we list to the services we provide.",
            icon: "assets/icons/grad.png",
          },
          {
            title: "Client-Centric",
            description:
              "Your dreams and needs are at the center of our universe. We listen, understand.",
            icon: "assets/icons/society.png",
          },
          {
            title: "Our Commitment",
            description:
              "We are dedicated to providing you with the highest level of service, professionalism.",
            icon: "assets/icons/star.png",
          },
        ].map((value, index) => (
          <div
            key={index}
            className="bg-secondary p-6 rounded-lg flex flex-col items-start"
          >
            <img src={value.icon} width={40} alt={value.title} className="mb-4" />
            <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
            <p className="text-gray-400 text-sm">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
