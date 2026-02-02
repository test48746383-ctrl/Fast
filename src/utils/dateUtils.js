import { format } from 'date-fns';

export const formatDate = (date, pattern = 'MMMM do, yyyy') => {
  return format(new Date(date), pattern);
};

export const getAge = (dateString) => {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const getCurrentTime = () => {
  return format(new Date(), 'HH:mm');
};
