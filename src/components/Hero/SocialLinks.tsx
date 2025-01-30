import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const SocialLinks = () => {
  const handleViewResume = (e: React.MouseEvent) => {
    e.preventDefault();
    // Open resume in a new tab
    window.open('/ElicePriyadarshini_Resume.pdf', '_blank', 'noopener,noreferrer');
  };

  const links = [
    {
      href: "https://github.com/elicep01",
      icon: <Github size={20} />,
      label: "GitHub",
      external: true,
      onClick: undefined
    },
    {
      href: "https://linkedin.com/in/elicepriyadarshini",
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      external: true,
      onClick: undefined
    },
    {
      href: "mailto:epriyadarshi@wisc.edu",
      icon: <Mail size={20} />,
      label: "Email",
      external: false,
      onClick: undefined
    },
    {
      href: "/ElicePriyadarshini_Resume.pdf",
      icon: <FileText size={20} />,
      label: "Resume",
      external: true,
      onClick: handleViewResume
    }
  ];

  return (
    <div className="flex gap-4">
      {links.map(({ href, icon, label, external, onClick }) => (
        <a
          key={href}
          href={href}
          className="text-gray-600 hover:text-teal-600 transition-colors"
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          aria-label={label}
          onClick={onClick}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;