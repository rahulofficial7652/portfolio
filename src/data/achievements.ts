export type Achievement = {
  title: string;
  issuer: string;
  date: string;
  description: string;
};

export const achievements: Achievement[] = [
  {
    title: 'Senior Java Developer',
    issuer: 'Tech Solutions Inc.',
    date: '2021 - Present',
    description: 'Led the development of a high-traffic microservices-based e-commerce platform. Mentored junior developers and improved code quality and test coverage.',
  },
  {
    title: 'Java Developer',
    issuer: 'Innovate Systems',
    date: '2018 - 2021',
    description: 'Developed and maintained backend services for a financial analytics application using Spring Boot and Hibernate. Contributed to API design and database optimization.',
  },
  {
    title: 'Bachelor of Science in Computer Science',
    issuer: 'University of Technology',
    date: '2014 - 2018',
    description: 'Graduated with honors. Focused on software engineering, database systems, and algorithms. Completed a final year project on distributed systems.',
  },
];
