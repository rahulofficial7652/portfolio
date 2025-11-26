'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl lg:text-5xl font-headline">Get In Touch</CardTitle>
              <CardDescription className="text-lg">
                Have a project in mind or just want to say hi? My inbox is always open.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h3 className="text-2xl font-headline mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Mail className="h-6 w-6 text-primary" />
                      <a href="mailto:jane.doe@example.com" className="hover:text-primary transition-colors">jane.doe@example.com</a>
                    </div>
                     <div className="flex items-center gap-4">
                      <Linkedin className="h-6 w-6 text-primary" />
                      <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">linkedin.com/in/janedoe-dev</a>
                    </div>
                     <div className="flex items-center gap-4">
                      <Github className="h-6 w-6 text-primary" />
                      <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">github.com/janedoe-dev</a>
                    </div>
                     <div className="flex items-center gap-4">
                      <Twitter className="h-6 w-6 text-primary" />
                      <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">twitter.com/janedoe_dev</a>
                    </div>
                  </div>
                </div>
                <div>
                  <ContactForm />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
