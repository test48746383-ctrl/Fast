/**
 * Validate Name
 */
export const isValidName = (name) => {
  return name && name.trim().length >= 2;
};

/**
 * Validate Date of Birth (User must be at least 13 years old)
 */
export const isValidDOB = (dob) => {
  if (!dob) return false;
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age >= 13 && age <= 120;
};
