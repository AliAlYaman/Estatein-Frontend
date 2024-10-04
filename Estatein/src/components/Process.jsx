import { cn } from "../lib/utils";
import {
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Discover a World of Possibilities",
      description:
        "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Narrowing Down Your Choices",
      description:
        "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Personalized Guidance",
      description:
        "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "See It for Yourself",
      description:
        "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
      icon: <IconCloud />,
    },
    {
      title: "Making Informed Decisions",
      description:
        "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Getting the Best Deal",
      description:
        "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
      icon: <IconHelp />,
    },
  ];
  return (
    <>
      <div className="bg-tertiary text-white pt-20 px-8 sm:px-10 md:px-12 lg:px-28 w-full font-Urbanist">
        <div className="flex flex-col pb-10">
          <h2 className="text-3xl font-bold pb-4">Navigating the Estatein Experience</h2>
          <p className="text-gray-400">
          At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 px-10 bg-tertiary lg:px-28 gap-1 ">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </>
  );
}

const Feature = ({ title, description, icon }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r font-Urbanist bg-black py-8 relative group/feature border-white dark:border-neutral-800"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#703BF7] to-transparent pointer-events-none" />

      <div className="mb-4 relative z-10 px-10 text-primary dark:text-tertiary">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-tertiary group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white dark:text-tertiary">
          {title}
        </span>
      </div>
      <p className="text-sm text-white dark:text-tertiary max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
