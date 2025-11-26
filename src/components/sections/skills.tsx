'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skills, type SkillCategory } from '@/data/skills';
import { BrainCircuit } from 'lucide-react';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };
  
  const futureSkillsCount = 4;

  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-4xl lg:text-5xl font-headline text-center mb-12">Technical Skills</h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skills.map((category: SkillCategory, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-headline text-primary">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center gap-4">
                        <skill.icon className="h-6 w-6 text-accent" />
                        <span className="text-lg">{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
           <motion.div variants={itemVariants}>
              <Card className="h-full shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-headline text-primary">Future Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {[...Array(futureSkillsCount)].map((_, i) => (
                       <div key={i} className="flex flex-col items-center justify-center p-4 border border-dashed rounded-lg h-24">
                         <BrainCircuit className="h-8 w-8 text-muted-foreground/50" />
                       </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
