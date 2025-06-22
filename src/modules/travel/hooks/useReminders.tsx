import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import { remindersService } from "../services/remindersService";
import { Reminder } from "@/src/shared/types/reminder.type";

const useReminders = () => {
  const { id } =  useLocalSearchParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [newReminder, setNewReminder] = useState("");
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {

    if(!id){
      return;
    }
    fetchReminders(id)

  }, [id])

  const fetchReminders = async (travel_id: string) => {
    setLoading(true);

    try {
      const data = await remindersService.getReminders(travel_id)
      setLoading(false);
      setReminders(data ?? []);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  const addReminder = async () => {
    if(!newReminder.trim()) return;

    try {
      await remindersService.createReminder({
        travel_id: id,
        description: newReminder,
      });

      setNewReminder("");
      await fetchReminders(id);

    } catch (error) {
      console.log(error);
    }
  }

  const deleteReminder = async (reminder_id: string) => {
    try {
      if(!reminder_id){
        return;
      }
      await remindersService.deleteReminderById(reminder_id)
      await fetchReminders(id);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    loading,
    newReminder,
    setNewReminder,
    addReminder,
    reminders,
    deleteReminder,
  }
}

export default useReminders;