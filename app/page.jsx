"use client";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text:xl">Software Developer Engineer</span>
            <h1 className="h1 mb-6">
              Hello! I'am <br />
              <span className="text-accent">Shrinivas Waney</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Mern Stack Developer with a knack in implementing front-end and
              back-end coding. As a diligent and continuously learning designer,
              I aim to create robust and user-friendly user interactions on
              websites and databases. With expertise in data-driven applications
              and concepts, I have the ability to solve complex problems. I
              excel in clear communication with both technical and non-technical
              team members, fostering a collaborative environment that
              prioritizes exceptional customer service.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span> <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  className="flex gap-6"
                  iconStyles="h-9 w-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
};

export default Home;
