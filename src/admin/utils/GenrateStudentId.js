
// export const generateStudentId = (existingStudents = []) => {
//   const year = new Date().getFullYear();
//   const prefix = `${year}/55`;

 
//   const studentsThisYear = existingStudents.filter((s) =>
//     s.id.startsWith(prefix)
//   );

//   const nextNumber = studentsThisYear.length + 1;
//   const padded = String(nextNumber).padStart(2, '0');

//   return `${prefix}/${padded}`;
// };
// utils/GenrateStudentId.js

export const generateStudentId = (existingStudents = []) => {
  const year = new Date().getFullYear();      // e.g. 2025
  const prefix = `${year}/55`;                // e.g. "2025/55"

  // Filter all students whose UUID starts with current year's prefix
  const studentsThisYear = existingStudents.filter(
    (s) => s.UUID && s.UUID.startsWith(prefix)
  );

  // Find the highest serial number so far
  let maxSerial = 0;
  for (const student of studentsThisYear) {
    const parts = student.UUID.split("/"); // ["2025", "55", "03"]
    const lastPart = parts[2];
    const num = parseInt(lastPart, 10);
    if (!isNaN(num) && num > maxSerial) {
      maxSerial = num;
    }
  }

  // Generate next number and pad to 2 digits
  const nextNumber = maxSerial + 1;
  const padded = String(nextNumber).padStart(2, "0");

  return `${prefix}/${padded}`; // e.g. "2025/55/04"
};
