import type React from 'react';

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}

export interface Skill {
  name: string;
  description: string;
  icon: React.ReactNode;
}
