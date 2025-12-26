import React from "react";

function StudentInfo({ name, age }) {
  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
}

export default StudentInfo;

<StudentInfo name="Arun" age={25} />