import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register ChartJS modules
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AttendanceTab = () => {
  const [attendance, setAttendance] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [userName, setUserName] = useState('');
  const [userWeight, setUserWeight] = useState('');

  const markAttendance = (status) => {
    if (!userName.trim()) {
      alert('Please enter the user name before marking attendance.');
      return;
    }

    const dateKey = selectedDate.toISOString().split('T')[0];
    setAttendance((prev) => ({
      ...prev,
      [dateKey]: {
        status,
        name: userName,
        weight: parseFloat(userWeight) || 'N/A', // Ensure weight is a number or 'N/A'
      },
    }));
  };

  // Prepare data for the graph
  const graphData = {
    labels: Object.keys(attendance),
    datasets: [
      {
        label: 'Attendance Status',
        data: Object.values(attendance).map((entry) => (entry.status === 'Present' ? 1 : 0)),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.3,
        fill: true,
        yAxisID: 'y',
      },
      {
        label: 'User Weight',
        data: Object.values(attendance).map((entry) => (entry.weight !== 'N/A' ? entry.weight : null)),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.3,
        fill: true,
        yAxisID: 'y1',
      },
    ],
  };

  const graphOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 1,
        ticks: {
          callback: (value) => (value === 1 ? 'Present' : 'Absent'),
        },
        position: 'left',
      },
      y1: {
        beginAtZero: true,
        position: 'right',
        title: {
          display: true,
          text: 'Weight (kg)',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-green-200 via-green-300 to-green-400">
      <h1 className="text-2xl font-bold mb-4 text-center text-white">Attendance Management</h1>

      <div className="flex flex-col items-center mb-4 space-y-4">
        <input
          type="text"
          placeholder="Enter User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="px-4 py-2 border rounded"
        />
        <input
          type="number"
          placeholder="Enter User Weight (optional)"
          value={userWeight}
          onChange={(e) => setUserWeight(e.target.value)}
          className="px-4 py-2 border rounded"
        />
        <Calendar
          value={selectedDate}
          onChange={setSelectedDate}
          tileClassName={({ date }) => {
            const dateKey = date.toISOString().split('T')[0];
            if (attendance[dateKey]?.status === 'Present') return 'bg-green-400 text-white';
            if (attendance[dateKey]?.status === 'Absent') return 'bg-red-400 text-white';
          }}
        />
      </div>

      <div className="text-center">
        <p className="text-lg font-semibold">
          Selected Date: {selectedDate.toDateString()}
        </p>
        <div className="space-x-4 mt-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={() => markAttendance('Present')}
          >
            Mark Present
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={() => markAttendance('Absent')}
          >
            Mark Absent
          </button>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-bold mb-2 text-center">Attendance Summary</h2>
        <table className="w-full bg-white rounded shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Date</th>
              <th className="p-2">Name</th>
              <th className="p-2">Weight</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(attendance).map(([date, { status, name, weight }]) => (
              <tr key={date} className="border-b">
                <td className="p-2">{date}</td>
                <td className="p-2">{name || 'N/A'}</td>
                <td className="p-2">{weight || 'N/A'}</td>
                <td className={`p-2 ${status === 'Present' ? 'text-green-600' : 'text-red-600'}`}>
                  {status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-bold mb-2 text-center">Attendance and Weight Trends</h2>
        <div className="bg-white p-4 rounded shadow-md">
          {Object.keys(attendance).length > 0 ? (
            <Line data={graphData} options={graphOptions} />
          ) : (
            <p className="text-center text-gray-500">No attendance or weight data to display.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AttendanceTab;
