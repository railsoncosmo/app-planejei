import { 
format,
parseISO,
isBefore, 
endOfDay, 
differenceInCalendarDays, 
isWithinInterval 
} from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

export const countDayTravel = (start: string, end: string) => {
  let statusMessage = "";

  let today = new Date();
  let startDate = parseISO(start);
  let endDate = parseISO(end);

  if(isBefore(today, startDate)){
    let daysLeft = differenceInCalendarDays(startDate, today);

    statusMessage = `Faltam ${daysLeft} dias para sua viagem.`
  } else if(isWithinInterval(today, { start: startDate, end: endDate})){
    statusMessage = "Sua viagem está em andamento."
  }

  return statusMessage;
}

export const formatDateRange = (start: string, end: string) => {
  let formatStartDate = format(parseISO(start), "dd MMMM", { locale: ptBR })
  let formatEndDate = format(parseISO(end), "dd MMMM yyyy", { locale: ptBR })

  return `${formatStartDate} até ${formatEndDate}`
}