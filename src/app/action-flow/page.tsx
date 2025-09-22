'use client';
import React from 'react';
import Sidebar from './Sidebar';
import Image from 'next/image';
import { FiBell } from 'react-icons/fi';
import { pastActionData } from '@/utils/action_flow_data';
import Link from 'next/link';
const tableHeadItems: string[] = ['Action flow name', 'Description', 'Action'];

const ActionFlow = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      {/* Main content */}
      <main className="flex-1 py-6 px-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl text-gray-200 font-semibold">Action flow</h1>
          <div className="flex justify-between items-center gap-4">
            <FiBell className="h-6 w-6" />
            <Image
              src="/profile-Image.png"
              height={35}
              width={35}
              alt="Profile"
              className="rounded-full cursor-pointer"
            />
          </div>
        </div>

        {/* Search */}
        <div className="mb-4 flex justify-between">
          <input
            type="text"
            placeholder="Search flow"
            className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          ></input>
          <Link href="/action-flow/workflow">
            <button className="p-2 border rounded-lg hover:bg-gray-100">
              <Image src="/components/add.svg" height={20} width={20} alt="Add" />
            </button>
          </Link>
        </div>

        {/* Table */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 text-gray-900 text-sm">
              <tr>
                {tableHeadItems.map((item, ind) => (
                  <th className="p-3" key={ind}>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm text-gray-300">
              {pastActionData.map((flow, i) => (
                <tr key={i} className="border-t hover:bg-gray-700">
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
