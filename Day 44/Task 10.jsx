import React from "react";

function AttendanceList() {
  const students = [
    { id: 1, name: "Kiran", present: true },
    { id: 2, name: "Anu", present: false },
    { id: 3, name: "Vijay", present: true }
  ];

  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          {student.name} - {student.present ? "Present ✅" : "Absent ❌"}
        </li>
      ))}
    </ul>
  );
}

export default AttendanceList;