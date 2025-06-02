import React, { useState } from 'react';
import { FaTrash, FaUndo } from 'react-icons/fa';

const initialLeads = [
  {
    id: 1,
    name: 'K Madhu Sudhan Ram',
    mtId: 'MT00028311132',
    joiningDate: '2025-03-01 11:52:07',
    mobile: '8989777889',
    package: 'Finance Mastery',
  },
  {
    id: 2,
    name: 'Nimai Charan Mahalik',
    mtId: 'MT00028311133',
    joiningDate: '2025-03-02 10:30:15',
    mobile: '9876543210',
    package: 'Finance Mastery',
  },
  {
    id: 3,
    name: 'Dattatray Sameer Khade',
    mtId: 'MT00028311134',
    joiningDate: '2025-03-03 09:20:10',
    mobile: '9123456780',
    package: 'Finance Mastery',
  },
  {
    id: 4,
    name: 'John Doe',
    mtId: 'MT00028311135',
    joiningDate: '2025-03-04 08:10:05',
    mobile: '9988776655',
    package: 'Finance Mastery',
  },
];

const LeadCard = ({ lead, onDelete }) => (
  <div className="flex bg-gray-50 rounded-xl p-4 mb-4 shadow-md border-l-4 border-yellow-400">
    <div className="flex-1">
      <p><span className="text-sm font-medium">Name:</span> <span className="font-semibold">{lead.name}</span></p>
      <p className="text-sm text-gray-600">MT ID: {lead.mtId}</p>
      <p className="text-sm text-gray-600">Joining Date: {lead.joiningDate}</p>
      <p className="text-sm text-gray-600">Mobile No.: {lead.mobile}</p>
      <p className="text-sm text-gray-600">Package: {lead.package}</p>
    </div>
    <button onClick={() => onDelete(lead)} className="text-red-600 hover:text-red-800 ml-4 mt-1">
      <FaTrash className="text-xl" />
    </button>
  </div>
);


const LeadManagement = () => {
  const [leads, setLeads] = useState(initialLeads);
  const [deleted, setDeleted] = useState(null);
  const [sortOption, setSortOption] = useState('');
  const [filterPackage, setFilterPackage] = useState('');

  const deleteLead = (lead) => {
    setDeleted(lead);
    setLeads((prev) => prev.filter((l) => l.id !== lead.id));
  };

  const undoDelete = () => {
    if (deleted) {
      setLeads((prev) => [deleted, ...prev]);
      setDeleted(null);
    }
  };

  const sortedLeads = [...leads].sort((a, b) => {
    if (sortOption === 'name') return a.name.localeCompare(b.name);
    if (sortOption === 'date') return new Date(b.joiningDate) - new Date(a.joiningDate);
    return 0;
  });

  const filteredLeads = filterPackage
    ? sortedLeads.filter((lead) => lead.package === filterPackage)
    : sortedLeads;

  return (
    <div className="min-h-screen bg-gray-200 p-4 md:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-4 md:p-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Lead Management</h1>
          <div className="flex items-center space-x-4">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="px-2 py-1 border rounded text-sm"
            >
              <option value="">Sort By</option>
              <option value="name">Name</option>
              <option value="date">Joining Date</option>
            </select>
            <select
              value={filterPackage}
              onChange={(e) => setFilterPackage(e.target.value)}
              className="px-2 py-1 border rounded text-sm"
            >
              <option value="">Filter Package</option>
              <option value="Finance Mastery">Finance Mastery</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>
          </div>
        </div>

        {deleted && (
          <div className="mb-4 text-green-700 bg-green-100 px-4 py-2 rounded flex items-center justify-between">
            <span>Lead deleted.</span>
            <button onClick={undoDelete} className="text-green-800 font-semibold flex items-center space-x-1">
              <FaUndo /> <span>Undo</span>
            </button>
          </div>
        )}

        <div>
          {filteredLeads.length === 0 ? (
            <p className="text-center text-gray-500">No leads to display.</p>
          ) : (
            filteredLeads.map((lead) => (
              <LeadCard key={lead.id} lead={lead} onDelete={deleteLead} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadManagement;
