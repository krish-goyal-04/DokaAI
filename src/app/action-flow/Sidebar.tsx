import { useState } from 'react';
import Image from 'next/image';
import {
  FiHome,
  FiSettings,
  FiUsers,
  FiChevronDown,
  FiChevronsLeft,
  FiChevronRight,
  FiBell,
  FiEdit2,
  FiUsers as FiGroup,
  FiFileText,
  FiUser,
  FiClock,
} from 'react-icons/fi';

const topItems: { name: string; icon: React.ReactNode }[] = [
  { name: 'Dashboard', icon: <FiHome /> },
  { name: 'Services', icon: <FiSettings /> },
  { name: 'Configurations', icon: <FiSettings /> },
  { name: 'Members', icon: <FiUsers /> },
];

const bottomItems: { name: string; icon: React.ReactNode }[] = [
  { name: 'Notification Handler', icon: <FiBell /> },
  { name: 'Action flow', icon: <FiEdit2 /> },
  { name: 'Groups', icon: <FiGroup /> },
  { name: 'Templates', icon: <FiFileText /> },
  { name: 'Customers', icon: <FiUser /> },
  { name: 'Logs', icon: <FiClock /> },
];

const Sidebar = () => {
  const [displaySidebar, setDisplaySidebar] = useState(true);

  const toggleSidebar = () => setDisplaySidebar(!displaySidebar);
  return (
    <div className="flex h-screen">
      {displaySidebar ? (
        <aside className="w-[250px] bg-gray-900 border-r border-gray-600 flex flex-col">
          <div className="p-4 flex items-center justify-between">
            <Image src="/Dokaai_Logo.png" width={50} height={10} alt="DokaAI Logo" />
            <FiChevronsLeft
              className="text-gray-300 text-lg cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
          <div className="p-4 flex items-center gap-2 font-bold text-lg">
            <div className="h-8 w-8 rounded bg-pink-600 text-white flex items-center justify-center">
              KG
            </div>
            <span className="flex-1 truncate">Project name</span>
            <FiChevronDown className="ml-1 text-black cursor-pointer" />
          </div>
          <nav className="flex-1 p-4 space-y-4 overflow-auto">
            {topItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-black hover:bg-green-200/70 cursor-pointer"
              >
                {item.icon}
                <span>{item.name}</span>
              </div>
            ))}
            <div className="mt-6 text-xs text-gray-400 uppercase">Notification</div>
            {bottomItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-black hover:bg-green-200/70 cursor-pointer"
              >
                {item.icon}
                <span>{item.name}</span>
              </div>
            ))}
          </nav>
        </aside>
      ) : (
        <aside className="w-10 bg-gray-900 border-r border-gray-600 flex items-center justify-center">
          <FiChevronRight
            className="text-gray-300 text-lg cursor-pointer"
            onClick={toggleSidebar}
          />
        </aside>
      )}
    </div>
  );
};
export default Sidebar;
