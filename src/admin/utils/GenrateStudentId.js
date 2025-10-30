export const generateStudentId = (students) => {
  const year = new Date().getFullYear(); // e.g. 2025

  // If no students yet, start from 01
  if (!students || students.length === 0) {
    return `${year}/55/01`;
  }

  // Get the last student's UUID
  const lastStudent = students[students.length - 1];
  const lastId = lastStudent.UUID;

  // Match pattern like 2025/55/01
  const match = lastId.match(/(\d{4})\/55\/(\d+)/);

  // If pattern doesn't match, start fresh
  if (!match) {
    return `${year}/55/01`;
  }

  const lastNumber = parseInt(match[2]);
  const nextNumber = (lastNumber + 1).toString().padStart(2, "0"); // ensures 01, 02, 03...
  
  return `${year}/55/${nextNumber}`;
};
