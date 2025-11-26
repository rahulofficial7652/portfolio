import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
          &copy; {currentYear} Rahul. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/rahulofficial7652" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:rahulofficial7652@gmail.com" aria-label="Mail" rel="noopener noreferrer">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/rahul-rahul-807435370" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
