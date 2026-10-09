"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LuLightbulb, LuBookOpen, LuUsers } from "react-icons/lu";

const highlights = [
  {
    icon: LuLightbulb,
    title: "Problem Solver",
    description: "I break down challenges and work toward practical solutions.",
  },
  {
    icon: LuBookOpen,
    title: "Quick Learner",
    description:
      "I'm comfortable learning unfamiliar technologies and applying what I learn.",
  },
  {
    icon: LuUsers,
    title: "Team Contributor",
    description:
      "I value clear communication, collaboration, and taking ownership of my work.",
  },
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const animation = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 md:py-32"
    >
      <div className="max-w-content mx-auto px-5 md:px-8">
        {/* Heading + introduction (centered) */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="section-eyebrow uppercase tracking-[0.2em]">
            A little about me
          </p>

          <h2
            id="about-heading"
            className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl lg:text-5xl"
          >
            Building with curiosity.
            <span className="mt-2 block text-signal">
              Growing through challenges.
            </span>
          </h2>

          <div className="mt-8 space-y-5">
            <p className="text-base leading-8 text-muted md:text-lg">
              I enjoy turning ideas into functional, user-friendly web
              applications. What started as curiosity about how websites work
              has grown into a journey of building complete applications,
              solving real problems, and exploring new technologies.
            </p>

            <p className="text-base leading-8 text-muted md:text-lg">
              I enjoy understanding how things work behind the scenes, figuring
              out unfamiliar challenges, and continuously improving my approach
              to development. Currently, I&apos;m strengthening my full-stack
              skills and exploring how AI can make web applications more
              useful.
            </p>

           <p className="border-l-2 border-[#008C95] pl-4 text-base font-medium leading-7 text-[#17365D] dark:text-gray-100 sm:text-lg">
            I'm always ready to learn, contribute, and turn
            challenging problems into working solutions.
          </p>
          </div>
        </motion.div>

        {/* What I Bring */}
        <div className="mx-auto mt-16 max-w-5xl border-t border-line pt-10 md:mt-20">
          <motion.h3
            variants={animation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-7 text-center font-display text-xl font-semibold text-ink md:text-2xl"
          >
            What I Bring
          </motion.h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  variants={animation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.4,
                    delay: shouldReduceMotion ? 0 : index * 0.12,
                  }}
                  className="group rounded-2xl border border-line bg-panel p-5 transition-colors duration-300 hover:border-signal/60 sm:p-6"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-signal-light text-signal transition-colors duration-300 group-hover:bg-signal group-hover:text-paper">
                    <Icon size={22} aria-hidden="true" />
                  </div>

                  <h4 className="mb-2 font-display text-lg font-semibold text-ink">
                    {item.title}
                  </h4>

                  <p className="text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}