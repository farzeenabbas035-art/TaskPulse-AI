export type ViewMode = 'input' | 'blueprint' | 'track' | 'export' | 'aichat';

export interface FileAttachment {
  id: string;
  name: string;
  size: number;
  type: string;
  uploadDate: string;
  progress?: number;
  extractedText?: string;
  wordCount?: number;
  isExtracting?: boolean;
  extractionError?: string;
  base64Data?: string;
}

export interface TimelineMilestone {
  id: string;
  title: string;
  completed: boolean;
  dueDate?: string;
}

export interface WeeklyTimelineItem {
  weekNumber: number;
  totalWeeks: number;
  title: string;
  statusText: string;
  status: 'completed' | 'active' | 'scheduled';
  hoursTotal: number;
  milestonesLeft: number;
  milestones: TimelineMilestone[];
}

export interface CriticalMilestone {
  id: string;
  title: string;
  completed: boolean;
  category: 'core' | 'lab' | 'theory';
  aiTip: string;
  dueDate?: string;
}

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
}

export interface ActionPlanItem {
  id: string;
  title: string;
  estimatedMinutes: number;
  priority: 'high' | 'medium' | 'low';
  type: 'reading' | 'lab' | 'draft' | 'quiz';
  completed: boolean;
  notes?: string;
}

export interface BlueprintData {
  id: string;
  title: string;
  subtitle: string;
  readinessScore: number;
  createdAt: string;
  lastUpdated: string;
  weeklyTimeline: WeeklyTimelineItem[];
  criticalMilestones: CriticalMilestone[];
  flashcards: Flashcard[];
  actionPlan: {
    recommendation: {
      id: string;
      title: string;
      description: string;
      actionText: string;
      timeSavedMinutes: number;
    };
    items: ActionPlanItem[];
  };
  syllabusText?: string;
  attachedFiles?: FileAttachment[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'copilot';
  text: string;
  timestamp: string;
  suggestedActions?: string[];
}
