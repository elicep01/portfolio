export interface SkillCategoryData {
  title: string;
  skills: string[];
}

export interface SkillCategoryProps extends SkillCategoryData {
  isExpanded?: boolean;
  onToggle?: () => void;
}