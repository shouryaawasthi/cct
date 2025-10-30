
export const generateStudentId = (students) => {
  if (!students || students.length === 0) return `55/1/${new Date().getFullYear()}`;
  
  const lastStudent = students[students.length - 1];
  const lastId = lastStudent.UUID;
  const match = lastId.match(/55\/(\d+)\/(\d{4})/);

  if (!match) return `55/1/${new Date().getFullYear()}`;

  const nextNumber = parseInt(match[1]) + 1;
  return `55/${nextNumber}/${new Date().getFullYear()}`;
};
