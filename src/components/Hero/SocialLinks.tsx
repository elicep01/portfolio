import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const SocialLinks = () => {
  const links = [
    {
      href: "https://github.com/elicep01",
      icon: <Github size={20} />,
      label: "GitHub",
      external: true
    },
    {
      href: "https://linkedin.com/in/elicepriyadarshini",
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      external: true
    },
    {
      href: "mailto:epriyadarshi[at]wisc[dot]edu",
      icon: <Mail size={20} />,
      label: "Email",
      external: false
    },
    {
      href: "/Elice_Priyadarshini_Resume.pdf",
      icon: <FileText size={20} />,
      label: "Resume",
      external: true
    }
  ];

  return (
    <div className="flex gap-4">
      {links.map(({ href, icon, label, external }) => (
        <a
          key={href}
          href={href}
          className="text-gray-600 hover:text-teal-600 transition-colors"
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          aria-label={label}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;