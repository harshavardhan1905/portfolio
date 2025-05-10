export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  proficiency: number; // 0-100
}

const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML/CSS", proficiency: 95 },
      { name: "JavaScript", proficiency: 90 },
      { name: "TypeScript", proficiency: 85 },
      { name: "React", proficiency: 92 },
      // { name: "Vue.js", proficiency: 80 },
      { name: "Tailwind CSS", proficiency: 88 },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", proficiency: 75 },
      { name: "Express", proficiency: 72 },
      { name: "Python", proficiency: 75 },
      { name: "MongoDB", proficiency: 80 },
      { name: "PostgreSQL", proficiency: 78 },
      // { name: "GraphQL", proficiency: 70 },
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", proficiency: 90 },
      { name: "Docker", proficiency: 70 },
      { name: "AWS", proficiency: 65 },
      { name: "Figma", proficiency: 85 },
      // { name: "CI/CD", proficiency: 75 },
      // { name: "Jest", proficiency: 80 },
    ]
  }
];

export default skills;