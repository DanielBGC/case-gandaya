import { parseISO, format } from 'date-fns';
import { capitalizeString } from './formatString';
import { ptBR } from 'date-fns/locale';

export function formatDate(date: string | undefined): string {
  if (date === undefined || date === '') return '';

  const dateObj = parseISO(date);
  const dayOfWeek = capitalizeString(format(dateObj, 'EEE', { locale: ptBR }));
  const dayOfMonth = format(dateObj, 'dd', { locale: ptBR });
  const monthShortName = format(dateObj, 'MMM', { locale: ptBR });

  return `${dayOfWeek.slice(0, 3)}, ${dayOfMonth} de ${monthShortName}`;
}

export function formatTime(date: string | undefined): string {
  if (date === undefined || date === '') return '';

  const dateObj = parseISO(date);
  const time = format(dateObj, 'HH:mm', { locale: ptBR });

  return `às ${time}`;
}
