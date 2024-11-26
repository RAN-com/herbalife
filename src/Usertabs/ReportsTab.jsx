import { useState } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const ReportsTab = () => {
  const [metrics, setMetrics] = useState({
    bmi: { value: 24.5, healthy: true, data: [22, 23, 24, 25, 24.5], editing: false },
    bmr: { value: 1800, healthy: true, data: [1700, 1750, 1800, 1850, 1900], editing: false },
    bodyFat: { value: 15, healthy: false, data: [14, 15, 16, 15.5, 15], editing: false },
    muscleMass: { value: 40, healthy: true, data: [38, 39, 40, 41, 42], editing: false },
    bodyAge: { value: 30, healthy: true, data: [29, 30, 31, 30, 29], editing: false },
    tsf: { value: 12, healthy: false, data: [10, 11, 12, 13, 12], editing: false },
    height: { value: 175, healthy: true, data: [174, 175, 175, 176, 175], editing: false },
    weight: { value: 70, healthy: true, data: [68, 69, 70, 71, 70], editing: false },
  });

  const [selectedMetric, setSelectedMetric] = useState('bmi');

  const chartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [
      {
        label: `${selectedMetric.charAt(0).toUpperCase() + selectedMetric.slice(1)} Over Time`,
        data: metrics[selectedMetric].data,
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.2,
      },
    ],
  };

  const doughnutData = {
    labels: ['Healthy', 'Unhealthy'],
    datasets: [
      {
        data: [metrics[selectedMetric].healthy ? 1 : 0, metrics[selectedMetric].healthy ? 0 : 1],
        backgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        hoverOffset: 4,
      },
    ],
  };

  // Update the value of a metric when the user types in the input field
  const handleInputChange = (metric, value) => {
    setMetrics((prevMetrics) => ({
      ...prevMetrics,
      [metric]: { ...prevMetrics[metric], value: parseFloat(value) || prevMetrics[metric].value },
    }));
  };

  // Toggle edit mode for each metric
  const toggleEditMode = (metric) => {
    setMetrics((prevMetrics) => ({
      ...prevMetrics,
      [metric]: { ...prevMetrics[metric], editing: !prevMetrics[metric].editing },
    }));
  };

  return (
    <div className="p-6">
      <div className="flex gap-5">
        {/* User Profile Card */}
        <div className="flex w-auto">
          <div className="flex flex-wrap gap-4 mt-2">
            {Object.keys(metrics).map((metric) => (
              <div
                key={metric}
                onClick={() => setSelectedMetric(metric)}
                className={`bg-white shadow-lg rounded-lg p-6 cursor-pointer ${metrics[metric].healthy ? 'border-green-500' : 'border-red-500'} border-2 flex-1 flex-grow min-w-[160px] transition-transform duration-200 hover:bg-blue-50 hover:shadow-xl ${metrics[metric].healthy ? 'hover:border-green-400' : 'hover:border-red-400'}`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-blue-500 text-center">{metric.charAt(0).toUpperCase() + metric.slice(1)}</h3>
                  <button
                    onClick={() => toggleEditMode(metric)}
                    className="text-sm text-blue-500 hover:text-blue-700"
                  >
                    {metrics[metric].editing ? 'Save' : 'Edit'}
                  </button>
                </div>
                <div className="text-center">
                  {metrics[metric].editing ? (
                    <input
                      type="number"
                      value={metrics[metric].value}
                      onChange={(e) => handleInputChange(metric, e.target.value)}
                      className="text-2xl font-bold w-full text-center border-2 p-2 rounded"
                    />
                  ) : (
                    <p className="text-2xl font-bold">
                      {metrics[metric].value}
                      {metric === 'bmr' ? ' kcal' : metric === 'bodyFat' ? ' %' : metric === 'height' ? ' cm' : ' kg'}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Graph Section */}
      <div className="bg-white shadow-lg gap-60 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-semibold mb-4">Health Overview</h3>
        <div className="flex">
          {/* Line Chart */}
          <div className="flex-1 w-[700px] h-96">
            <Line data={chartData} options={{ responsive: true }} />
          </div>

          {/* Doughnut Chart */}
          <div className="flex-1 w-80 h-80">
            <h3 className="text-xl font-semibold mb-4">Health Status</h3>
            <Doughnut data={doughnutData} options={{ responsive: true }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsTab;
