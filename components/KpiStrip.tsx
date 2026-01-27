'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

// Chart data for the last 15 days
const chartData = [
  { day: '1', variance: 120 },
  { day: '2', variance: 245 },
  { day: '3', variance: 85 },
  { day: '4', variance: 193 },
  { day: '5', variance: 280 },
  { day: '6', variance: 156 },
  { day: '7', variance: 95 },
  { day: '8', variance: 203 },
  { day: '9', variance: 167 },
  { day: '10', variance: 310 },
  { day: '11', variance: 78 },
  { day: '12', variance: 225 },
  { day: '13', variance: 142 },
  { day: '14', variance: 268 },
  { day: '15', variance: 203 },
];

export default function KpiStrip() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 mb-5">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-base font-semibold text-gray-900">Total Revenue (Spright)</h3>
          <p className="text-xs text-gray-500 mt-0.5">
            <span className="text-gray-400">Net Suite</span> $882,000 • <span className="text-gray-900 font-medium">Spright</span> $1,085,000
          </p>
        </div>
      </div>

      {/* Main Metrics Row */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        {/* Variance */}
        <div>
          <div className="text-xs text-gray-500 mb-0.5">Variance</div>
          <div className="text-2xl font-bold text-gray-900">$203K</div>
        </div>

        {/* Revenue */}
        <div>
          <div className="text-xs text-gray-500 mb-0.5">Revenue</div>
          <div className="text-2xl font-bold text-gray-900">$1.09M</div>
        </div>

        {/* Bar Chart */}
        <div className="col-span-2">
          <div className="h-16">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis 
                  dataKey="day" 
                  tick={{ fontSize: 9, fill: '#9ca3af' }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 9, fill: '#9ca3af' }}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}K`}
                />
                <Bar 
                  dataKey="variance" 
                  fill="#A49485" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="text-[10px] text-gray-500 mt-1">Spright Variance past 15 Days</div>
        </div>
      </div>

      {/* Bottom Metrics Row */}
      <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gray-200">
        {/* Records */}
        <div>
          <div className="flex items-center gap-1 text-xs text-green-600 font-medium mb-0.5">
            <span>▲</span>
            <span>+12% Week</span>
          </div>
          <div className="text-xl font-bold text-gray-900">80K Records</div>
          <div className="text-xs text-gray-500 mt-0.5">Analyzed</div>
        </div>

        {/* Anomalies */}
        <div>
          <div className="text-xs text-gray-500 mb-0.5">Critical</div>
          <div className="text-xl font-bold text-gray-900">3 Anomalies</div>
          <div className="text-xs text-gray-500 mt-0.5">Issues Found</div>
        </div>
      </div>
    </div>
  );
}
