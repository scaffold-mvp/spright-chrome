'use client';

import { Search, Play, Plus, Download, MoreVertical, SlidersHorizontal } from 'lucide-react';

interface VarianceRecord {
  customerId: string;
  customerName: string;
  erpTotal: string;
  sprightTotal: string;
  variance: string;
  status: string;
  rootCause: string;
}

const mockRecords: VarianceRecord[] = [
  {
    customerId: 'CUST-360698',
    customerName: 'Acme Company',
    erpTotal: '$25,000',
    sprightTotal: '$25,000',
    variance: '$25,000',
    status: 'Under Charge',
    rootCause: 'Usage Variance',
  },
  {
    customerId: 'CUST-360693',
    customerName: 'Bleech Corp',
    erpTotal: '$525,000',
    sprightTotal: '$525,000',
    variance: '$525,000',
    status: 'Under Charge',
    rootCause: 'Timing Difference',
  },
  {
    customerId: 'CUST-360611',
    customerName: 'Code Lane',
    erpTotal: '$45,787',
    sprightTotal: '$45,787',
    variance: '$45,787',
    status: 'Under Charge',
    rootCause: 'Proration Error',
  },
  {
    customerId: 'CUST-325688',
    customerName: 'Acme Company',
    erpTotal: '$625,000',
    sprightTotal: '$625,000',
    variance: '$625,000',
    status: 'Under Charge',
    rootCause: 'Proration Error',
  },
  {
    customerId: 'CUST-958658',
    customerName: 'Bleech Corp',
    erpTotal: '$25,000',
    sprightTotal: '$25,000',
    variance: '$25,000',
    status: 'Under Charge',
    rootCause: 'Usage Variance',
  },
  {
    customerId: 'CUST-360698',
    customerName: 'Code Lane',
    erpTotal: '$525,000',
    sprightTotal: '$525,000',
    variance: '$525,000',
    status: 'Under Charge',
    rootCause: 'Contract Change',
  },
  {
    customerId: 'CUST-360693',
    customerName: 'Acme Company',
    erpTotal: '$45,787',
    sprightTotal: '$45,787',
    variance: '$45,787',
    status: 'Under Charge',
    rootCause: 'Pricing Error',
  },
  {
    customerId: 'CUST-360611',
    customerName: 'Bleech Corp',
    erpTotal: '$625,000',
    sprightTotal: '$625,000',
    variance: '$625,000',
    status: 'Under Charge',
    rootCause: 'Usage Variance',
  },
  {
    customerId: 'CUST-325688',
    customerName: 'Code Lane',
    erpTotal: '$45,787',
    sprightTotal: '$45,787',
    variance: '$45,787',
    status: 'Under Charge',
    rootCause: 'Timing Difference',
  },
  {
    customerId: 'CUST-958658',
    customerName: 'Acme Company',
    erpTotal: '$625,000',
    sprightTotal: '$625,000',
    variance: '$625,000',
    status: 'Under Charge',
    rootCause: 'Proration Error',
  },
  {
    customerId: 'CUST-958658',
    customerName: 'Code Lane',
    erpTotal: '$525,000',
    sprightTotal: '$525,000',
    variance: '$525,000',
    status: 'Under Charge',
    rootCause: 'Proration Error',
  },
  {
    customerId: 'INV-124734',
    customerName: 'Acme Company',
    erpTotal: '$45,787',
    sprightTotal: '$45,787',
    variance: '$45,787',
    status: 'Under Charge',
    rootCause: 'Usage Variance',
  },
  {
    customerId: 'INV-360698',
    customerName: 'Bleech Corp',
    erpTotal: '$625,000',
    sprightTotal: '$625,000',
    variance: '$625,000',
    status: '',
    rootCause: 'Contract Change',
  },
  {
    customerId: 'INV-660688',
    customerName: 'Code Lane',
    erpTotal: '$45,787',
    sprightTotal: '$45,787',
    variance: '$45,787',
    status: '',
    rootCause: 'Pricing Error',
  },
];

export default function VarianceRecordsTable() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Dark Header Bar */}
      <div className="bg-gradient-to-b from-[#2d2d2d] to-[#252525] px-6 py-4">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold text-lg">Variance Records</h3>
          
          <div className="flex items-center gap-4 flex-1 max-w-xl mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search Customers, Vendors, Accounts"
                className="w-full pl-10 pr-4 py-2 bg-[#3a3a3a] text-white placeholder-gray-400 rounded-lg border border-gray-600 focus:outline-none focus:border-gray-500 text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-700 transition-colors">
              <Play size={16} className="text-gray-300" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-700 transition-colors">
              <Plus size={16} className="text-gray-300" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-700 transition-colors">
              <Download size={16} className="text-gray-300" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-700 transition-colors">
              <MoreVertical size={16} className="text-gray-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#3a3a3a] text-gray-300 text-xs font-semibold uppercase tracking-wider">
              <th className="px-6 py-4 text-left">
                <div className="flex items-center gap-2">
                  <span>Customer #</span>
                  <SlidersHorizontal size={14} className="text-gray-400" />
                </div>
              </th>
              <th className="px-6 py-4 text-left">Customer Name</th>
              <th className="px-6 py-4 text-left">ERP Total</th>
              <th className="px-6 py-4 text-left">Spright Total</th>
              <th className="px-6 py-4 text-left">Variance</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">
                <div className="flex items-center gap-2">
                  <span>Root Cause</span>
                  <SlidersHorizontal size={14} className="text-gray-400" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockRecords.map((record, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  {record.customerId}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {record.customerName}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {record.erpTotal}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {record.sprightTotal}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 font-semibold">
                  {record.variance}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {record.status}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {record.rootCause}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
