'use client';
import React from 'react';
import Sidebar from './Sidebar';

const ActionFlow = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      {/* Main content */}
      <main className="flex-1  p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold">Action flow</h1>
          <button className="p-2 border rounded-lg hover:bg-gray-100">＋</button>
        </div>

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search flow"
            className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Table */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 text-gray-600 text-sm">
              <tr>
                <th className="p-3">Action flow name</th>
                <th className="p-3">Description</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {[
                'Notification for Influencers',
                'Influencer Engagement',
                'Influencer Notification System',
                'Influencer Outreach Notification',
                'Influencer Collaboration Reminder',
              ].map((flow, i) => (
                <tr key={i} className="border-t hover:bg-gray-50">
                  <td className="p-3">{flow}</td>
                  <td className="p-3">
                    This flow deals specifically with churn users and all their impacts.
                  </td>
                  <td className="p-3 text-green-600 cursor-pointer">✎</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ActionFlow;
