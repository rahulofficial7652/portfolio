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
              <p className="text-lg text-muted-foreground text-center leading-relaxed text-justify">
                I’m a <b>Backend Developer</b> skilled in building reliable, scalable, and production-ready systems. I work with <b>Node.js</b> and <b>Java/Spring Boot</b>, and I’m comfortable designing clean APIs, writing efficient code, and solving complex problems using <b>DSA</b>.
              </p>
              <p className="text-lg text-muted-foreground text-center leading-relaxed text-justify">
                I have hands-on experience with multiple databases including <b>PostgreSQL</b>, <b>MongoDB</b>, and <b>MySQL</b>, and I enjoy structuring data, optimizing queries, and designing robust backend architectures.
              </p>
              <p className="text-lg text-muted-foreground text-center leading-relaxed text-justify">
                Along with backend development, I’m also improving my <b>system design</b>, writing clean code, and following best practices for modern backend engineering.
              </p>
              <p className="text-lg text-muted-foreground text-center leading-relaxed text-justify">
                My long-term goal is to grow as a <b>full-stack backend engineer</b> who can build high-performance systems end to end.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
