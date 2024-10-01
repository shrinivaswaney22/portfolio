"use client";
import { motion } from "framer-motion";

//components/ui
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    detail: "(+91)-9518988549",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    detail: "shrinivas.waney22@spit.ac.in",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    detail: "Mumbai,Maharashtra,India",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              action="submit"
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-3xl"
            >
              <h3 className="text-4xl text-accent">Lets Work Together</h3>
              <p className="text-white/60">
                Hello Recruiters and Fellow Colleagues!
              </p>
              <p className="text-white/60">
                Fill out the following form to work with me!!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="Email ID" />
                <Input type="number" placeholder="Contact Number" />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Debugging</SelectItem>
                    <SelectItem value="vst">SEO</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here..."
              />
              <Button size="md" className="max-w-40">
                Send
              </Button>
            </form>
          </div>
          <div className="flex flex-1 items-center justify-center xl:justify-end xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] md:w-[72px] md:h-[72px] bg-slate-900 text-accent rounded-full flex justify-center items-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>

                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.detail}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
