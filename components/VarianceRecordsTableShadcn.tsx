'use client';

import { useState, useMemo } from 'react';
import { Search, Play, Plus, Download, MoreVertical, SlidersHorizontal, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

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

type SortKey = keyof VarianceRecord;
type SortDirection = 'asc' | 'desc' | null;

export default function VarianceRecordsTableShadcn() {
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      // Cycle through: asc -> desc -> null
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else if (sortDirection === 'desc') {
        setSortDirection(null);
        setSortKey(null);
      }
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  const parseValue = (value: string): number => {
    // Remove $ and commas, then parse as number
    const cleaned = value.replace(/[$,]/g, '');
    return parseFloat(cleaned) || 0;
  };

  const sortedRecords = useMemo(() => {
    let filtered = mockRecords;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (record) =>
          record.customerId.toLowerCase().includes(searchQuery.toLowerCase()) ||
          record.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          record.rootCause.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    if (sortKey && sortDirection) {
      filtered = [...filtered].sort((a, b) => {
        const aVal = a[sortKey];
        const bVal = b[sortKey];

        // Handle numeric values (with $ signs)
        if (sortKey === 'erpTotal' || sortKey === 'sprightTotal' || sortKey === 'variance') {
          const aNum = parseValue(aVal);
          const bNum = parseValue(bVal);
          return sortDirection === 'asc' ? aNum - bNum : bNum - aNum;
        }

        // Handle string values
        const comparison = aVal.localeCompare(bVal);
        return sortDirection === 'asc' ? comparison : -comparison;
      });
    }

    return filtered;
  }, [sortKey, sortDirection, searchQuery]);

  const SortIcon = ({ columnKey }: { columnKey: SortKey }) => {
    if (sortKey !== columnKey) {
      return <ArrowUpDown size={14} className="ml-2 text-gray-400" />;
    }
    if (sortDirection === 'asc') {
      return <ArrowUp size={14} className="ml-2 text-gray-900" />;
    }
    return <ArrowDown size={14} className="ml-2 text-gray-900" />;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      {/* Header Bar */}
      <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-gray-900 font-semibold text-lg">Variance Records</h3>
          
          <div className="flex items-center gap-4 flex-1 max-w-xl mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search Customers, Vendors, Accounts"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white text-gray-900 placeholder-gray-400 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-400 text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 transition-colors">
              <Play size={16} className="text-gray-700" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 transition-colors">
              <Plus size={16} className="text-gray-700" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 transition-colors">
              <Download size={16} className="text-gray-700" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200 transition-colors">
              <MoreVertical size={16} className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50 border-b border-gray-200">
              <TableHead 
                className="text-gray-700 font-semibold cursor-pointer hover:text-gray-900 transition-colors"
                onClick={() => handleSort('customerId')}
              >
                <div className="flex items-center">
                  CUSTOMER #
                  <SortIcon columnKey="customerId" />
                </div>
              </TableHead>
              <TableHead 
                className="text-gray-700 font-semibold cursor-pointer hover:text-gray-900 transition-colors"
                onClick={() => handleSort('customerName')}
              >
                <div className="flex items-center">
                  CUSTOMER NAME
                  <SortIcon columnKey="customerName" />
                </div>
              </TableHead>
              <TableHead 
                className="text-gray-700 font-semibold cursor-pointer hover:text-gray-900 transition-colors"
                onClick={() => handleSort('erpTotal')}
              >
                <div className="flex items-center">
                  ERP TOTAL
                  <SortIcon columnKey="erpTotal" />
                </div>
              </TableHead>
              <TableHead 
                className="text-gray-700 font-semibold cursor-pointer hover:text-gray-900 transition-colors"
                onClick={() => handleSort('sprightTotal')}
              >
                <div className="flex items-center">
                  SPRIGHT TOTAL
                  <SortIcon columnKey="sprightTotal" />
                </div>
              </TableHead>
              <TableHead 
                className="text-gray-700 font-semibold cursor-pointer hover:text-gray-900 transition-colors"
                onClick={() => handleSort('variance')}
              >
                <div className="flex items-center">
                  VARIANCE
                  <SortIcon columnKey="variance" />
                </div>
              </TableHead>
              <TableHead 
                className="text-gray-700 font-semibold cursor-pointer hover:text-gray-900 transition-colors"
                onClick={() => handleSort('status')}
              >
                <div className="flex items-center">
                  STATUS
                  <SortIcon columnKey="status" />
                </div>
              </TableHead>
              <TableHead 
                className="text-gray-700 font-semibold cursor-pointer hover:text-gray-900 transition-colors"
                onClick={() => handleSort('rootCause')}
              >
                <div className="flex items-center">
                  ROOT CAUSE
                  <SortIcon columnKey="rootCause" />
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedRecords.map((record, idx) => (
              <TableRow key={idx} className="hover:bg-gray-50">
                <TableCell className="font-medium text-gray-900">{record.customerId}</TableCell>
                <TableCell className="text-gray-900">{record.customerName}</TableCell>
                <TableCell className="text-gray-900">{record.erpTotal}</TableCell>
                <TableCell className="text-gray-900">{record.sprightTotal}</TableCell>
                <TableCell className="font-semibold text-gray-900">{record.variance}</TableCell>
                <TableCell className="text-gray-700">{record.status}</TableCell>
                <TableCell className="text-gray-700">{record.rootCause}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
