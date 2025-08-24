import type { Channel } from './types';

export const channels: Channel[] = [
  {
    id: 'project-phoenix',
    name: 'Project Phoenix',
    description: 'Rebuilding the core platform for scalability and performance.',
    tasks: [
      { id: 'ph-1', title: 'Design new architecture diagram', completed: true },
      { id: 'ph-2', title: 'Develop user authentication module', completed: true },
      { id: 'ph-3', title: 'Set up staging environment on AWS', completed: false },
      { id: 'ph-4', title: 'Implement API gateway', completed: false },
    ],
    files: [
      { id: 'f-ph-1', name: 'architecture-v2.png', type: 'image', size: '2.1 MB', uploadedAt: '2024-05-20' },
      { id: 'f-ph-2', name: 'project-brief.docx', type: 'document', size: '150 KB', uploadedAt: '2024-05-18' },
    ],
  },
  {
    id: 'marketing-q3',
    name: 'Q3 Marketing Campaign',
    description: 'Planning and execution of the Q3 marketing initiatives.',
    tasks: [
      { id: 'mq3-1', title: 'Finalize campaign slogan', completed: true },
      { id: 'mq3-2', title: 'Create social media content calendar', completed: false },
      { id: 'mq3-3', title: 'Design landing page mockups', completed: false },
    ],
    files: [
      { id: 'f-mq3-1', name: 'competitor-analysis.xlsx', type: 'spreadsheet', size: '850 KB', uploadedAt: '2024-05-22' },
      { id: 'f-mq3-2', name: 'brand-assets.zip', type: 'other', size: '15.3 MB', uploadedAt: '2024-05-15' },
      { id: 'f-mq3-3', name: 'campaign-deck.pptx', type: 'presentation', size: '4.5 MB', uploadedAt: '2024-05-25' },
    ],
  },
  {
    id: 'design-system',
    name: 'Unify Design System',
    description: 'Creating a cohesive and reusable design system for all products.',
    tasks: [
      { id: 'ds-1', title: 'Audit existing components', completed: true },
      { id: 'ds-2', title: 'Define color palette and typography', completed: true },
      { id: 'ds-3', title: 'Build Button component in React', completed: false },
      { id: 'ds-4', title: 'Document component usage guidelines', completed: false },
    ],
    files: [
      { id: 'f-ds-1', name: 'component-inventory.docx', type: 'document', size: '1.2 MB', uploadedAt: '2024-05-10' },
    ],
  },
  {
    id: 'general',
    name: 'General',
    description: 'Company-wide announcements and water cooler chat.',
    tasks: [],
    files: [],
  },
];
