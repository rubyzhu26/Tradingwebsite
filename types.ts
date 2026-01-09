
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

// Added missing interface for the Gemini AI activity generation results
export interface ActivitySuggestion {
  title: string;
  materials: string[];
  instructions: string[];
  mathConcept: string;
  ageRange: string;
}
