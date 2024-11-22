import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase/firebaseconfig';
import { collection, getDocs } from 'firebase/firestore';

const StudentDashboard = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const querySnapshot = await getDocs(collection(db, 'assignments'));
      const fetchedResults = [];
      querySnapshot.forEach((doc) => {
        fetchedResults.push(doc.data());
      });
      setResults(fetchedResults);
    };

    fetchResults();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
      <ul>
        {results.map((result, index) => (
          <li key={index} className="border p-2 mb-2">
            {result.title} - {result.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;



