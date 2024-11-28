import React from 'react';
import CollegeIdCard from '@/Components/card/Cards';

const StudentDetails: React.FC = () => {
 
  const studentName = "Humaiza Naz";
  const studentId = "00012345";
  const course = "GIAIC";
  const university = "Governor Sindh";

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center min-h-screen bg-gradient-to-b from-black to-red-600 p-4 sm:p-6">
      <div className="w-full max-w-xs sm:max-w-sm p-6 sm:p-8 bg-white rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center text-black mb-6">
          Student ID Card
        </h1>
        {/* Passing student data to CollegeIdCard */}
        <CollegeIdCard
          studentName={studentName}
          studentId={studentId}
          course={course}
          university={university}
        />
      </div>
    </div>
  );
};

export default StudentDetails;
