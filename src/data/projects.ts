export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cold Mails Follow-UP (client)",
    description: "I developed a custom email dashboard that allows a company to send structured emails to business clients while maintaining strict sending limits and system stability.
                                    The system was designed to avoid third-party email conflicts (such as Mailchimp) and provide full control at admin and employee levels.",
    image: "https://github.com/harshavardhan1905/portfolio/blob/main/src/data/dashboard.png",
    tags: ["REACT", "BOOTSTRAP", "JAVASCRIPT", "MYSQL", "HOSTINGER", "NODE.JS", "EXPRESS.JS"],
    demoUrl: "#",
    codeUrl: "#"
  },
   {
    id: 2,
    title: "Prime Developers (client)",
    description: "This project involved improving an existing client website by enhancing the UI/UX, implementing CSS refinements, adding new content sections, and optimizing overall performance to deliver a faster and more polished user experience.",
    image: "https://theprimedeveloper.com/assets/images/logo-2.png",
    tags: ["HTML", "CSS", "JAVASCRIPT", "MYSQL", "AWS", "PHP"],
    demoUrl: "https://www.theprimedeveloper.com",
    codeUrl: "https://github.com/harshavardhan1905/theprime_dev_ec2_copy.git"
  },
  {
    id: 3,
    title: "Algorithm Performance Analyzer",
    description: "Developed a web-based Algorithm Performance Analyzer using Flask and React that dynamically evaluates and visualizes the runtime complexity of user-defined algorithms",
    image: "https://www.researchgate.net/publication/355703886/figure/fig2/AS:1095563529469952@1638214108020/Algorithm-performance-analysis_Q320.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 4,
    title: "Law and Order Automation",
    description: "Developed an AI-powered tool to automate law enforcement tasks based on government regulations, enhancing decision-making accuracy and compliance. Implemented machine learning algorithms and user-friendly interfaces, ensuring reliable and efficient performance.",
    image: "https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "Tailwind CSS", "MangoDB"],
    demoUrl: "#",
    codeUrl: "https://github.com/harshavardhan1905/law_and_order_automation.git"
  },
  {
    id: 5,
    title: "Blockchain Based Online Voting System using Aadhar and Face authentication",
    description: "• Developed a secure online voting platform using [ technologies, e.g. HTML, CSS, JavaScript, and PHP ], enabling users to cast votes easily and securely. and secure authentication.",
    image: "https://th.bing.com/th/id/OIP.Gx6jMLoYxYXnf0QVuctWdQHaE8?w=251&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    tags: ["HTML", "CSS", "PHP", "MYSQL"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 6,
    title: "UrbanFLow simulation",
    description: "A simulation tool for urban flow dynamics, focusing on traffic and pedestrian movement. Utilizes advanced algorithms for real-time analysis and visualization.",
    image: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Python", "Pygame", "NumPy", "Matplotlib"],
   
    demoUrl: "#",
    codeUrl: "https://github.com/harshavardhan1905/UrbanFlow-simulation.git"
  },
 
  {
    id: 7,
    title: "Portfolio Website",
    description: "A professional portfolio website showcasing projects and skills. Features responsive design, animations, and contact form functionality.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    demoUrl: "#",
    codeUrl: ""
  }
];

export default projects;
