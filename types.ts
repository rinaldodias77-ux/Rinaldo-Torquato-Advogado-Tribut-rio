export interface NavItem {
  label: string;
  href: string;
}

export interface Disease {
  name: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GuidanceItem {
  id: number;
  title: string;
  summary: string;
  iconName: 'FileText' | 'Stethoscope' | 'History' | 'Scale';
}
