export interface EducationData {
  institution: string;
  degree: string;
  period: string;
  specialization?: string;
  details: string[];
}

export interface EducationItemProps extends EducationData {
  isExpanded?: boolean;
  onToggle?: () => void;
}