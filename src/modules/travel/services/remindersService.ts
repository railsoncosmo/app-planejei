import { supabase } from "@/src/config/supabase";
import { ReminderPayload, Reminder } from "@/src/shared/types/reminder.type";

export const remindersService = {

  createReminder: async (payload: ReminderPayload): Promise<void> => {

    const { error } = await supabase.from("reminders").insert([payload]);

    if(error) {
      throw error;
    }
  },

  getReminders: async (travel_id: string): Promise<Reminder[] | null> => {

    const { data, error } = await supabase.from("reminders")
    .select("*")
    .eq("travel_id", travel_id)
    .order("created_at", { ascending: true })

    if(error){
      throw error;
    }

    return data ?? [];
  },

  deleteReminderById: async (reminder_id: string): Promise<void> => {

    const { error } = await supabase.from("reminders")
    .delete()
    .eq("id", reminder_id);

    if(error){
      throw error;
    }
  },
}