import React, { useState } from 'react';
import { db } from '../config/firebase/firebaseconfig';
import { collection, addDoc } from 'firebase/firestore';

const TeacherDashboard = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAssignWork = async () => {
    await addDoc(collection(db, 'assignments'), {
      title,
      description,
      teacherId: "teacher_unique_id", // Replace with logged-in teacher's ID
      studentIds: [],
    });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Teacher Dashboard</h1>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Assignment Title"
          className="border p-2 mb-4"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Assignment Description"
          className="border p-2 mb-4"
        ></textarea>
        <button
          onClick={handleAssignWork}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Assign Work
        </button>
      </div>
    </div>
  );
};

export default TeacherDashboard;






