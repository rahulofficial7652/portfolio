"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section id="about" className="py-12 md:py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <Card className="max-w-3xl mx-auto shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-headline text-center">
                About Me
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-base sm:text-lg text-muted-foreground text-center leading-relaxed text-justify">
                I’m a <b>Backend-Focused Developer</b> passionate about building
                scalable, efficient, and production-ready applications. I work
                with <b>Java</b>, <b>Spring Boot</b>, <b>Next.js</b>, and modern
                web technologies to create practical solutions with clean
                architecture.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground text-center leading-relaxed text-justify">
                I have built real-world projects including a{" "}
                <b>Wedding Album Platform</b> developed with <b>Next.js</b>, and
                a <b>Multi-Tenant ID Card SaaS</b> system with{" "}
                <b>Next.js frontend</b> integrated with a{" "}
                <b>Spring Boot backend</b>.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground text-center leading-relaxed text-justify">
                I’m comfortable designing <b>REST APIs</b>, handling databases
                such as <b>MySQL</b>, <b>PostgreSQL</b>, and <b>MongoDB</b>,
                optimizing queries, and building reliable backend workflows for
                real business needs.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground text-center leading-relaxed text-justify">
                Currently, I’m strengthening my{" "}
                <b>Data Structures & Algorithms</b>, exploring{" "}
                <b>System Design</b>, and continuously improving as a software
                engineer who loves solving meaningful problems.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
