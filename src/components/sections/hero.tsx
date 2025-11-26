'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold mb-4" variants={itemVariants}>
              Rahul
            </motion.h1>
            <motion.p className="text-xl md:text-2xl text-primary font-medium mb-4" variants={itemVariants}>
              Java Backend Developer
            </motion.p>
            <motion.p className="text-lg text-muted-foreground mb-8" variants={itemVariants}>
             Building robust and scalable backend systems with a passion for clean code and problem-solving.
            </motion.p>
            <motion.div className="flex justify-center md:justify-start space-x-4" variants={itemVariants}>
              <Button size="lg" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" /> Download Resume
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="#contact">
                  <Send className="mr-2 h-5 w-5" /> Contact Me
                </a>
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
             <Image
              src="https://placehold.co/400x400.png"
              alt="Profile Photo"
              width={400}
              height={400}
              className="rounded-full shadow-2xl border-4 border-primary/10"
              data-ai-hint="woman portrait"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
