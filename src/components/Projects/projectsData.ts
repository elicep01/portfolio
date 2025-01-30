import { ProjectData } from './types';

export const projects: ProjectData[] = [
  {
    title: 'BridgeML (Founder & Developer)',
    description: 'Open-source ML education platform integrating LLMs with traditional ML frameworks. Features automated model evaluation, custom metrics tracking, and distributed training capabilities.',
    technologies: ['PyTorch', 'TensorFlow', 'LangChain', 'React.js'],
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    title: 'Project Strawberry',
    description: 'Research project on fine-tuning open-source LLMs using Chain of Thought (CoT) reasoning. Developed RL-based process reward models achieving 85.2% accuracy.',
    technologies: ['PyTorch', 'Hugging Face', 'RLHF', 'LangChain'],
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    title: 'SQLPilot.ai (Contributor)',
    description: 'AI-powered SQL editor using natural language for query generation. Features PostgreSQL/MySQL support, OpenAI integration, and RAG implementation.',
    technologies: ['NLP', 'OpenAI API', 'LangChain', 'SQL'],
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    title: 'Lifecycle Assessment System',
    description: 'AI-powered product lifecycle assessment tool for sustainable design decisions. Features automated data collection and sustainability scoring for BoM.',
    technologies: ['Python', 'scikit-learn', 'PostgreSQL', 'React.js'],
    demoUrl: '#',
    codeUrl: '#'
  }
];