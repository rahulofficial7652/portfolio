'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { achievements, type Achievement } from '@/data/achievements';
import { Briefcase, GraduationCap } from 'lucide-react';

const AchievementCard = ({ achievement, index }: { achievement: Achievement; index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const isEducation = achievement.title.toLowerCase().includes('bachelor');
  const Icon = isEducation ? GraduationCap : Briefcase;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={cardVariants}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col sm:flex-row items-center sm:items-start gap-4 relative z-10 text-center sm:text-left"
    >
      <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
        <Icon className="h-6 w-6 text-primary" />
      </div>

      <div className="flex-1 w-full">
        <Card className="h-full shadow-md hover:shadow-xl transition-shadow duration-300 bg-card">
          <CardHeader>
            <div className="flex justify-between items-start gap-2">
              <div>
                <CardTitle className="text-xl font-headline">{achievement.title}</CardTitle>
                <p className="font-semibold text-primary">{achievement.issuer}</p>
              </div>
              <p className="text-sm text-muted-foreground whitespace-nowrap">{achievement.date}</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{achievement.description}</p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="py-12 md:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={headerVariants}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline text-center mb-8 md:mb-12">
            Experience & Education
          </h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto px-4 sm:px-0">
          {/* ----------- vertical line responsive --------- */}
          <div
            className="
              absolute inset-y-0 left-1/2 -translate-x-1/2 
              sm:left-6 sm:translate-x-0
              w-px bg-border h-full z-0
            "
          ></div>

          <div className="space-y-8 sm:space-y-12">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
