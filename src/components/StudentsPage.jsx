import React from "react";
import StudentCard from "./studentCard";

const StudentsPage = ({ data }) => {
  const tag = "student";
  return (
    <div className="py-4!">
      <h1 className="text-4xl my-4! text-center">All Student</h1>
      <div className="w-full grid md:grid-cols-3 gap-4! items-center justify-center">
        {data.map(student => (
          <StudentCard key={student.id} item={student} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default StudentsPage;
