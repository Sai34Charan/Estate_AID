import React from 'react';
import './DashboardPreview.css';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const DashboardPreview = () => {
  const barData = [
    { name: 'Jan', profit: 4000, risk: 24 },
    { name: 'Feb', profit: 3000, risk: 18 },
    { name: 'Mar', profit: 5200, risk: 22 },
    { name: 'Apr', profit: 2780, risk: 14 },
    { name: 'May', profit: 4890, risk: 16 },
    { name: 'Jun', profit: 6390, risk: 20 },
  ];

  const pieData = [
    { name: 'Residential', value: 45 },
    { name: 'Commercial', value: 25 },
    { name: 'Industrial', value: 15 },
    { name: 'Land', value: 15 },
  ];

  const COLORS = ['#A3E635', '#86efac', '#4ade80', '#22c55e'];

  return (
    <section id="dashboard" className="dashboard">
      <div className="container">
        <h2 className="section-title">Project Dashboard</h2>
        <p className="section-subtitle">High-level view of projected profits, risk exposure, and portfolio mix.</p>

        <div className="dashboard-grid">
          <div className="card">
            <h3 className="chart-title">Profit vs Risk (Monthly)</h3>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
                  <XAxis dataKey="name" stroke="var(--text-color)" />
                  <YAxis stroke="var(--text-color)" />
                  <Tooltip contentStyle={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)'}} />
                  <Legend />
                  <Bar dataKey="profit" fill="#A3E635" name="Profit ($)" />
                  <Bar dataKey="risk" fill="#4A5568" name="Risk Index" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card">
            <h3 className="chart-title">Portfolio Diversification</h3>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" labelLine={false} outerRadius={100} dataKey="value">
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)'}} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;


