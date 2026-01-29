'use client';

import { useState, useMemo } from 'react';
import { ArrowUpDown, ArrowUp, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

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

  const sortedAndFilteredRecords = useMemo(() => {
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

  const totalPages = Math.ceil(sortedAndFilteredRecords.length / pageSize);
  const paginatedRecords = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return sortedAndFilteredRecords.slice(startIndex, endIndex);
  }, [sortedAndFilteredRecords, currentPage, pageSize]);

  const SortIcon = ({ columnKey }: { columnKey: SortKey }) => {
    if (sortKey !== columnKey) {
      return <ArrowUpDown className="ml-2 h-4 w-4" />;
    }
    if (sortDirection === 'asc') {
      return <ArrowUp className="ml-2 h-4 w-4" />;
    }
    return <ArrowDown className="ml-2 h-4 w-4" />;
  };

  const handlePageSizeChange = (value: string) => {
    setPageSize(Number(value));
    setCurrentPage(1); // Reset to first page when changing page size
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const startRow = (currentPage - 1) * pageSize + 1;
  const endRow = Math.min(currentPage * pageSize, sortedAndFilteredRecords.length);

  return (
    <div className="w-full">
      <div className="rounded-md border border-gray-200 bg-white">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50">
              <TableHead 
                className="cursor-pointer select-none text-gray-900"
                onClick={() => handleSort('customerId')}
              >
                <div className="flex items-center">
                  Customer #
                  <SortIcon columnKey="customerId" />
                </div>
              </TableHead>
              <TableHead 
                className="cursor-pointer select-none text-gray-900"
                onClick={() => handleSort('customerName')}
              >
                <div className="flex items-center">
                  Customer Name
                  <SortIcon columnKey="customerName" />
                </div>
              </TableHead>
              <TableHead 
                className="cursor-pointer select-none text-gray-900"
                onClick={() => handleSort('erpTotal')}
              >
                <div className="flex items-center">
                  ERP Total
                  <SortIcon columnKey="erpTotal" />
                </div>
              </TableHead>
              <TableHead 
                className="cursor-pointer select-none text-gray-900"
                onClick={() => handleSort('sprightTotal')}
              >
                <div className="flex items-center">
                  Spright Total
                  <SortIcon columnKey="sprightTotal" />
                </div>
              </TableHead>
              <TableHead 
                className="cursor-pointer select-none text-gray-900"
                onClick={() => handleSort('variance')}
              >
                <div className="flex items-center">
                  Variance
                  <SortIcon columnKey="variance" />
                </div>
              </TableHead>
              <TableHead 
                className="cursor-pointer select-none text-gray-900"
                onClick={() => handleSort('status')}
              >
                <div className="flex items-center">
                  Status
                  <SortIcon columnKey="status" />
                </div>
              </TableHead>
              <TableHead 
                className="cursor-pointer select-none text-gray-900"
                onClick={() => handleSort('rootCause')}
              >
                <div className="flex items-center">
                  Root Cause
                  <SortIcon columnKey="rootCause" />
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedRecords.length > 0 ? (
              paginatedRecords.map((record, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium text-gray-900">{record.customerId}</TableCell>
                  <TableCell className="text-gray-900">{record.customerName}</TableCell>
                  <TableCell className="text-gray-900">{record.erpTotal}</TableCell>
                  <TableCell className="text-gray-900">{record.sprightTotal}</TableCell>
                  <TableCell className="text-gray-900">{record.variance}</TableCell>
                  <TableCell className="text-gray-900">{record.status}</TableCell>
                  <TableCell className="text-gray-900">{record.rootCause}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center text-gray-900">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      {/* Pagination Controls */}
      <div className="flex items-center justify-between px-2 py-4 bg-gray-50 rounded-b-md">
        <div className="flex-1 text-sm text-gray-700">
          Showing {startRow} to {endRow} of {sortedAndFilteredRecords.length} row(s)
        </div>
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium text-gray-700">Rows per page</p>
            <Select
              value={pageSize.toString()}
              onValueChange={handlePageSizeChange}
            >
              <SelectTrigger className="h-8 w-[70px] bg-white text-gray-900 border-gray-200">
                <SelectValue placeholder={pageSize.toString()} />
              </SelectTrigger>
              <SelectContent side="top">
                {[5, 10, 20, 50].map((size) => (
                  <SelectItem key={size} value={size.toString()}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex w-[100px] items-center justify-center text-sm font-medium text-gray-700">
            Page {currentPage} of {totalPages}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="h-8 w-8 p-0 bg-white text-gray-900 hover:bg-gray-100 border-gray-200"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              <span className="sr-only">Go to previous page</span>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0 bg-white text-gray-900 hover:bg-gray-100 border-gray-200"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <span className="sr-only">Go to next page</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
