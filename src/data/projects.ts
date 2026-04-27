export type Project = {
  title: string;
  description: string;
  techStack: string[];
  type: string;
  liveDemoUrl: string;
  githubUrl: string;
  image: string;
  aiHint: string;
};

export const projects: Project[] = [
  {
  title: 'Multi-Tenant ID Card SaaS Platform',
  description: 'A scalable ID card management platform that allows organizations to manage employees, customize templates, and generate professional ID cards with secure authentication and cloud-based file handling.',
  techStack: ['Next.js', 'MongoDB', 'JWT', 'AWS Lambda', 'AWS S3'],
  type: 'Private repo',
  liveDemoUrl: 'https://cardexa.co.in/',
  githubUrl: '#',
  image: 'https://placehold.co/600x400.png',
  aiHint: 'id card dashboard'
},
  {
    title: 'Microservices-based Booking System',
    description: 'A distributed booking system using a microservices architecture, with service discovery and configuration management.',
    techStack: ['Java', 'Spring Cloud', 'Eureka', 'API Gateway', 'Docker'],
  type: 'Public',
    liveDemoUrl: '#',
    githubUrl: '#',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'architecture diagram'
  },
];
