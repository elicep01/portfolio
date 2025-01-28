import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const SocialLinks = () => {
  const links = [
    {
      href: "https://github.com/elicep01",
      icon: <Github size={20} />,
      label: "GitHub"
    },
    {
      href: "https://linkedin.com/in/elicepriyadarshini",
      icon: <Linkedin size={20} />,
      label: "LinkedIn"
    },
    {
      href: "mailto:epriyadarshi[at]wisc[dot]edu",
      icon: <Mail size={20} />,
      label: "Email"
    },
    {
      href: "#resume",
      icon: <FileText size={20} />,
      label: "Resume"
    }
  ];

  return (
    <div className="flex gap-4">
      {links.map(({ href, icon, label }) => (
        <a
          key={href}
          href={href}
          className="text-gray-600 hover:text-teal-600 transition-colors"
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={label}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;