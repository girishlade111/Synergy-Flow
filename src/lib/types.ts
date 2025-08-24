export interface File {
  id: string;
  name: string;
  type: 'document' | 'spreadsheet' | 'presentation' | 'image' | 'other';
  size: string;
  uploadedAt: string;
}

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export interface Channel {
  id: string;
  name: string;
  description: string;
  tasks: Task[];
  files: File[];
}
