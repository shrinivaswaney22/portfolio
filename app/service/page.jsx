"use client";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const service = [
  {
    num: "01",
    name: "UI/UX Design",
    description:
      "Transform your ideas into visually stunning and user-friendly interfaces with my UI/UX design expertise. I focus on creating intuitive designs that enhance user satisfaction and drive conversions.",
    href: "/service/ui-ux-design",
  },
  {
    num: "02",
    name: "Web Development",
    description:
      "Bring your web projects to life with my full-stack web development services. I build responsive, high-performance websites tailored to your needs, ensuring a seamless experience across all devices.",
    href: "/service/web-development",
  },
  {
    num: "03",
    name: "Debugging",
    description:
      "Ensure your applications run smoothly with my comprehensive debugging services. I identify and resolve issues promptly, optimizing performance and delivering a seamless user experience.",
    href: "/service/debugging",
  },
  {
    num: "04",
    name: "SEO",
    description:
      "Enhance your online visibility and drive organic traffic with my tailored SEO strategies. I optimize your website's content and structure to improve search engine rankings and user engagement.",
    href: "/service/seo",
  },
];

const Service = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-16 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {service.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-start bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 group"
              >
                <div className="flex items-center justify-between w-full text-outline group-hover:text-outline-hover transition-all duration-500">
                  <div className="text-5xl font-extrabold text-transparent flex">
                    {item.num}.
                  </div>
                  <Link
                    href={item.href}
                    className="w-12 h-12 rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[36px] font-bold leading-tight text-white group-hover:text-accent transition-all duration-500 pb-2">
                  {item.name}
                </h2>
                <p className="text-gray-400 text-sm">{item.description}</p>
                <div className="border-b border-gray-700 w-full my-3" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
