import React from 'react';

// Define the types for props
interface CollegeIdCardProps {
  studentName: string;
  studentId: string;
  course: string;
  university: string;
}

const CollegeIdCard: React.FC<CollegeIdCardProps> = ({ studentName, studentId, course, university }) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-xs sm:w-80 border border-gray-200 transform hover:shadow-2xl transition-all duration-300 ease-in-out">
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-red-800 mb-2">{studentName}</h2>
        <p className="text-sm text-gray-600">Student ID: {studentId}</p>
        <p className="text-sm text-gray-600">Course: {course}</p>
        <p className="text-sm text-gray-600">University: {university}</p>
      </div>
      <div className="mt-4 sm:mt-6 text-center">
        <button className="w-full py-2 sm:py-3 px-4 sm:px-6 bg-gray-500 text-white rounded-md hover:bg-teal-600 transition">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default CollegeIdCard;
