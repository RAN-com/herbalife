import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";

const DailyLogWithProgress = () => {
  const [log, setLog] = useState({ weight: "", notes: "", date: "" });
  const [logs, setLogs] = useState(() => JSON.parse(localStorage.getItem("logs")) || []);
  const navigate = useNavigate(); // React Router navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLog({ ...log, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedLogs = [...logs, log];
    setLogs(updatedLogs);
    localStorage.setItem("logs", JSON.stringify(updatedLogs));
    setLog({ weight: "", notes: "", date: "" });
  };

  const dates = logs.map((log) => log.date);
  const weights = logs.map((log) => parseFloat(log.weight));

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Weight Progress",
        data: weights,
        borderColor: "rgba(59, 130, 246, 0.8)",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Daily Log Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Daily Log</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="date"
              name="date"
              value={log.date}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
            <input
              type="number"
              name="weight"
              value={log.weight}
              placeholder="Enter weight"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
            <textarea
              name="notes"
              value={log.notes}
              placeholder="Daily notes"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Save Log
            </button>
          </form>
          
        </div>

        {/* Navigation Button */}
      

        {/* Progress Tracker Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Progress Tracker</h2>
          {logs.length > 0 ? (
            <Line data={data} options={options} />
          ) : (
            <p className="text-gray-600 text-center">No progress data to display.</p>
          )}
            <button
            onClick={() => navigate("/notes")}
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            Go to Notes
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default DailyLogWithProgress;
