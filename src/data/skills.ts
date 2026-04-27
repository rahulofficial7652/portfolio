import type { LucideIcon } from 'lucide-react';
import {
  Code,
  Server,
  Database,
  GitMerge,
  Wind,
  BrainCircuit,
  Cloud,
  Boxes
} from 'lucide-react';

export type SkillCategory = {
  name: string;
  skills: Skill[];
};

export type Skill = {
  name: string;
  icon: LucideIcon;
};

export const skills: SkillCategory[] = [
  {
    name: 'Primary Skills',
    skills: [
      { name: 'Java', icon: Code },
      { name: 'Spring Boot', icon: Server },
      { name: 'REST APIs', icon: Server },
      { name: 'MySQL', icon: Database },
      { name: 'Git & GitHub', icon: GitMerge },
      { name: 'Next.js', icon: Code },
    ],
  },
  {
    name: 'Secondary Skills',
    skills: [
      { name: 'PostgreSQL', icon: Database },
      { name: 'MongoDB', icon: Database },
      { name: 'React', icon: Code },
      { name: 'Tailwind CSS', icon: Wind },
      { name: 'Docker', icon: Boxes },
      { name: 'AWS (Basic)', icon: Cloud },
    ],
  },
  {
    name: 'Currently Learning',
    skills: [
      { name: 'Microservices', icon: BrainCircuit },
      { name: 'System Design', icon: BrainCircuit },
      { name: 'Kafka', icon: BrainCircuit },
      { name: 'Kubernetes', icon: BrainCircuit },
    ],
  },
];