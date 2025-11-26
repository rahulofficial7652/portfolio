export type Project = {
  title: string;
  description: string;
  techStack: string[];
  liveDemoUrl: string;
  githubUrl: string;
  image: string;
  aiHint: string;
};

export const projects: Project[] = [
  {
    title: 'API for E-Commerce Platform',
    description: 'A robust RESTful API for an e-commerce platform, featuring product management, user authentication, and order processing.',
    techStack: ['Java', 'Spring Boot', 'JPA/Hibernate', 'PostgreSQL', 'JWT'],
    liveDemoUrl: '#',
    githubUrl: '#',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'api code'
  },
  {
    title: 'Microservices-based Booking System',
    description: 'A distributed booking system using a microservices architecture, with service discovery and configuration management.',
    techStack: ['Java', 'Spring Cloud', 'Eureka', 'API Gateway', 'Docker'],
    liveDemoUrl: '#',
    githubUrl: '#',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'architecture diagram'
  },
  {
    title: 'Real-time Financial Data Processor',
    description: 'An application that processes real-time financial data streams, performs calculations, and pushes updates to clients via WebSockets.',
    techStack: ['Java', 'Spring WebFlux', 'Kafka', 'WebSocket', 'React'],
    liveDemoUrl: '#',
    githubUrl: '#',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'stock chart'
  },
  {
    title: 'Content Management System',
    description: 'A headless CMS for managing marketing content, with a secure API for consumption by various frontend applications.',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'Spring Security', 'Thymeleaf'],
    liveDemoUrl: '#',
    githubUrl: '#',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'content management'
  },
];
