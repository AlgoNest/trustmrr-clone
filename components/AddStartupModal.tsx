import React, { useState } from 'react';
import { PlusIcon } from './Icons';

interface AddStartupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (startupData: any) => void;
}

const AddStartupModal: React.FC<AddStartupModalProps> = ({ isOpen, onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [mrr, setMrr] = useState('');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      name,
      mrr: parseInt(mrr) || 0,
      description,
      growth: Math.floor(Math.random() * 20), // mock growth
      id: Date.now().toString(),
      logo: `https://picsum.photos/seed/${name}/100/100`,
      isVerified: false,
    });
    // Reset
    setName('');
    setMrr('');
    setDescription('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Add Startup</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <PlusIcon className="h-6 w-6 rotate-45 transform" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Startup Name</label>
            <input
              type="text"
              required
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="e.g. TrustMRR"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Monthly Revenue (MRR)</label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">$</span>
              <input
                type="number"
                required
                className="w-full rounded-lg border border-gray-300 p-3 pl-8 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                placeholder="10000"
                value={mrr}
                onChange={(e) => setMrr(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Description</label>
            <textarea
              required
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              rows={3}
              placeholder="Short pitch..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          
          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-black py-3 font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
          >
            Submit Startup
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStartupModal;
