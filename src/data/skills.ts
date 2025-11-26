import type { LucideIcon } from 'lucide-react';
import { Code, Server, Database, GitMerge, Wind, BrainCircuit } from 'lucide-react';

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
      { name: 'PostgreSQL', icon: Database },
      { name: 'Git & GitHub', icon: GitMerge },
    ],
  },
  {
    name: 'Secondary Skills',
    skills: [
      { name: 'Docker', icon: Server },
      { name: 'Tailwind CSS', icon: Wind },
      { name: 'React', icon: Code },
    ],
  },
  {
    name: 'Future Learning',
    skills: [
      { name: 'Kubernetes', icon: BrainCircuit },
      { name: 'AWS', icon: BrainCircuit },
      { name: 'Kafka', icon: BrainCircuit },
      { name: 'Micronaut', icon: BrainCircuit },
    ],
  },
];
