export type jobItem = {
  id: number;
  badgeLetters: string;
  title: string;
  company: string;
  daysAgo: number;
  relevanceScore: number;
};

export type jobItemExpanded = jobItem & {
  description: string;
  qualifications: string[];
  reviews: string[];
  duration: string;
  location: string;
  salary: string;
  coverImgURL: string;
  companyURL: string;
};

export type PageDirection = "next" | "prev";
export type SortBy = "relevant" | "recent";
