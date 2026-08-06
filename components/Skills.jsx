'use client';

import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiVite,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { skillGroups } from '@/data/skills';

const iconMap = {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiVite,
  VscVscode,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-panel/60">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <p className="section-eyebrow">// skills</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-3 max-w-2xl">
          Tools I Reach For
        </h2>
        <p className="mt-4 text-base md:text-lg text-ink/70 max-w-xl">
          A snapshot of the languages, frameworks, and platforms I use to design,
          build, and ship web applications.
        </p>

        <div className="mt-14 space-y-12">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-sm text-signal mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, i) => {
                  const Icon = skill.icon ? iconMap[skill.icon] : null;
                  const content = (
                    <>
                      {Icon && (
                        <Icon
                          size={18}
                          style={{ color: skill.color }}
                          className="shrink-0"
                        />
                      )}
                      {skill.name}
                      {skill.url && (
                        <span className="text-muted text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                          ↗
                        </span>
                      )}
                    </>
                  );

                  const sharedClass =
                    'group flex items-center gap-2.5 pl-3 pr-4 py-2.5 rounded-xl bg-paper border border-line text-sm font-medium text-ink hover:border-signal hover:shadow-md transition-colors';

                  return skill.url ? (
                    <motion.a
                      key={skill.name}
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      whileHover={{ scale: 1.05, y: -3 }}
                      className={sharedClass}
                    >
                      {content}
                    </motion.a>
                  ) : (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      whileHover={{ scale: 1.05, y: -3 }}
                      className={sharedClass}
                    >
                      {content}
                    </motion.span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
