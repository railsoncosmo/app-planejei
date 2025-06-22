
export interface ReminderPayload {
  travel_id: string;
  description: string;
}

export type Reminder = {
  id: string;
  created_at: string;
  description: string;
  travel_id: string;
}