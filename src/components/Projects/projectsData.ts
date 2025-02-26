import { ProjectData } from './types';

export const projects: ProjectData[] = [
  {
    title: 'BridgeML (Founder & Developer)',
    description: 'Open-source ML education platform integrating LLMs with traditional ML frameworks. Features automated model evaluation, custom metrics tracking, and distributed training capabilities.',
    technologies: ['PyTorch', 'TensorFlow', 'LangChain', 'React.js'],
    demoUrl: 'https://bridgeml.fun/',
    codeUrl: 'https://github.com/elicep01/BridgeML'
  },
  {
    "title": "VersaPRM",
    "description": "Developed a multi-domain Process Reward Model (PRM) to enhance reasoning across Law, Biology, and Philosophy. Fine-tuned PRMs with Chain of Thought (CoT) reasoning, achieving a 7.9% performance gain via Monte Carlo Tree Search.",
    "technologies": ["PyTorch", "Hugging Face", "RLHF", "Monte Carlo Tree Search"],
    "demoUrl": "https://huggingface.co/collections/UW-Madison-Lee-Lab/versaprm-67a7eb34049b2a1bd3055f6e",
    "codeUrl": "https://github.com/UW-Madison-Lee-Lab/VersaPRM"
  },   
  {
    title: 'SQLPilot.ai (Contributor)',
    description: 'AI-powered SQL editor using natural language for query generation. Features PostgreSQL/MySQL support, OpenAI integration, and RAG implementation.',
    technologies: ['NLP', 'OpenAI API', 'LangChain', 'SQL'],
    demoUrl: 'https://sqlpilot.ai/',
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