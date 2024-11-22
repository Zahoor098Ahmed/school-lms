import React, { useState } from 'react';
import { db } from '../config/firebase/firebaseconfig';
import { collection, addDoc } from 'firebase/firestore';


const AdminDashboard = () => {
  const [teacherName, setTeacherName] = useState('');
  const [studentName, setStudentName] = useState('');

  const handleAddTeacher = async () => {
    await addDoc(collection(db, 'users'), {
      name: teacherName,
      role: 'teacher',
    });
    setTeacherName('');
  };

  const handleAddStudent = async () => {
    await addDoc(collection(db, 'users'), {
      name: studentName,
      role: 'student',
    });
    setStudentName('');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div>
        <input
          type="text"
          value={teacherName}
          onChange={(e) => setTeacherName(e.target.value)}
          placeholder="Teacher Name"
          className="border p-2 mb-4"
        />
        <button
          onClick={handleAddTeacher}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Teacher
        </button>
      </div>
      <div>
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="Student Name"
          className="border p-2 mb-4"
        />
        <button
          onClick={handleAddStudent}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Student
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
