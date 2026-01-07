
export interface ActivitySuggestion {
  title: string;
  materials: string[];
  instructions: string[];
  mathConcept: string;
  ageRange: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}
