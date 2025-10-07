
export const generateStudentId = (existingStudents = []) => {
  const year = new Date().getFullYear();
  const prefix = `${year}/55`;

 
  const studentsThisYear = existingStudents.filter((s) =>
    s.id.startsWith(prefix)
  );

  const nextNumber = studentsThisYear.length + 1;
  const padded = String(nextNumber).padStart(2, '0');

  return `${prefix}/${padded}`;
};
