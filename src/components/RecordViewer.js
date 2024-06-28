import React, { useState, useEffect } from 'react';

function RecordViewer() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Fetch records from an API or load from local storage
    // This is a placeholder for demonstration
    setRecords([
      { id: 1, type: 'image', title: 'X-Ray Result', date: '2023-06-15' },
      { id: 2, type: 'lab', title: 'Blood Test', date: '2023-06-10' },
      { id: 3, type: 'note', title: 'Follow-up Visit', date: '2023-06-05' },
    ]);
  }, []);

  return (
    <div className="record-viewer">
      <h2>Medical Records</h2>
      <ul>
        {records.map(record => (
          <li key={record.id}>
            {record.title} - {record.type} ({record.date})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecordViewer;