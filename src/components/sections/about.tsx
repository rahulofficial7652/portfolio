'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <Card className="max-w-3xl mx-auto shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl lg:text-4xl font-headline text-center">
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground text-center leading-relaxed">
                I am a dedicated Java Backend Developer with a strong foundation in building and maintaining high-performance, scalable, and reliable server-side applications. With expertise in the Spring ecosystem and a commitment to writing clean, production-ready code, I enjoy tackling complex challenges and contributing to impactful projects. I am a collaborative team player, always eager to learn and adapt to new technologies.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
