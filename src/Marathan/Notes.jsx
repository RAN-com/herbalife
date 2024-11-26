import React, { useState, useEffect } from "react";

const Notes = () => {
  const [logs, setLogs] = useState([]);
  const [editingLog, setEditingLog] = useState(null); // Track which log is being edited
  const [editedLog, setEditedLog] = useState({ weight: "", notes: "", date: "", attendance: "" });
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    const savedLogs = JSON.parse(localStorage.getItem("logs")) || [];
    setLogs(savedLogs);
  }, []);

  // Handle changes in the edit form
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedLog({ ...editedLog, [name]: value });
  };

  // Start editing a log
  const handleEditClick = (log) => {
    setEditingLog(log);
    setEditedLog(log); // Pre-fill the edit form with the selected log's data
    setIsModalOpen(true); // Open the modal
  };

  // Save the edited log
  const handleSaveEdit = (e) => {
    e.preventDefault();
    const updatedLogs = logs.map((log) =>
      log.date === editingLog.date ? { ...log, ...editedLog } : log
    );
    setLogs(updatedLogs);
    localStorage.setItem("logs", JSON.stringify(updatedLogs));
    setIsModalOpen(false); // Close the modal
    setEditingLog(null); // Reset editing log
    setEditedLog({ weight: "", notes: "", date: "", attendance: "" }); // Reset edit form
  };

  // Close the modal without saving
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditedLog({ weight: "", notes: "", date: "", attendance: "" }); // Reset edit form
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Your Daily Notes
      </h1>

      {/* Displaying logs in a table */}
      {logs.length > 0 ? (
        <div className="overflow-x-auto max-w-2xl mx-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Date</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Weight</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Notes</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Attendance</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2 text-sm text-gray-700">{log.date}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{log.weight} kg</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{log.notes}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{log.attendance}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    <button
                      onClick={() => handleEditClick(log)}
                      className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-600">
          No notes found! Start logging your journey today.
        </p>
      )}

      {/* Edit Modal (popup) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
            <h2 className="text-2xl font-semibold mb-4">Edit Log</h2>
            <form onSubmit={handleSaveEdit} className="space-y-4">
              <input
                type="date"
                name="date"
                value={editedLog.date}
                onChange={handleEditChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
              <input
                type="number"
                name="weight"
                value={editedLog.weight}
                placeholder="Enter weight"
                onChange={handleEditChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
              <textarea
                name="notes"
                value={editedLog.notes}
                placeholder="Daily notes"
                onChange={handleEditChange}
                className="w-full px-3 py-2 border rounded-lg"
              ></textarea>
              <select
                name="attendance"
                value={editedLog.attendance}
                onChange={handleEditChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              >
                <option value="">Select Attendance</option>
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
              </select>
              <div className="flex justify-end space-x-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notes;
