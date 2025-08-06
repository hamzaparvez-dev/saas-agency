"use client";

import Image from "next/image";

const mvpProjects = [
  {
    image: "/images/mvp-team.jpg",
    quote: "They turned our idea into a working MVP in just 4 weeks. The validation we got was incredible.",
    name: "Sarah Chen",
  },
  {
    image: "/images/startup-meeting.jpg",
    quote:  "Our MVP helped us secure our first round of funding. The team understood our vision perfectly.",
    name: "Mike Rodriguez",
  },

  {
    image: "/images/tech-workspace.jpg",
    quote: "Fast, efficient, and exactly what we needed to test our product-market fit. Highly recommended.",
    name: "Emma Johnson",
  },
];

const ShopifyStores = () => {
  return (
    <section className=" mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl">
      <div className=" p-4   mx-auto relative z-10  w-full ">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
          MVP Development <br />
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-800 max-w-lg text-center mx-auto">
          We build MVPs that help startups validate their ideas and secure funding quickly.
        </p>
        <div className="md:flex items-center justify-center  px-10 ">
          {mvpProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
            >
              <div className="flex flex-col items-center justify-center ">
                <Image
                  src={project.image}
                  alt="mvp project"
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto"
                />
                <p className="text-neutral-800 font-bold text-lg mt-4 text-center ">
                  &quot;{project.quote}&quot;
                </p>
                <p className="text-neutral-800 font-bold text-lg mt-4">
                  {" "}
                  - {project.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyStores;
