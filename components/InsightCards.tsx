'use client';

import { TrendingUp, AlertTriangle, Sparkles } from 'lucide-react';

export default function InsightCards() {
  return (
    <div className="grid grid-cols-2 gap-6 mb-6">
      {/* Revenue Impact Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="text-black" size={16} />
            <h3 className="text-base font-semibold text-gray-900">Revenue Impact</h3>
          </div>
          <TrendingUp className="text-blue-600" size={20} />
        </div>
        
        <div className="space-y-4">
          {/* Total Undercharge */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Total Undercharge Identified</span>
              <span className="text-lg font-bold text-blue-600">$203,000</span>
            </div>
            
          </div>

          {/* Breakdown by Category */}
          <div className="pt-3 border-t border-gray-200">
            <p className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wide">Variance Breakdown</p>
            
            <div className="space-y-3">
              {/* Usage Variance */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600">Usage Variance</span>
                  <span className="text-sm font-semibold text-gray-900">$89,400 (44%)</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '44%' }}></div>
                </div>
              </div>

              {/* Timing Differences */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600">Timing Differences</span>
                  <span className="text-sm font-semibold text-gray-900">$52,780 (26%)</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '26%' }}></div>
                </div>
              </div>

              {/* Proration Errors */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600">Proration Errors</span>
                  <span className="text-sm font-semibold text-gray-900">$36,540 (18%)</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '18%' }}></div>
                </div>
              </div>

              {/* Pricing Errors */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600">Pricing Errors</span>
                  <span className="text-sm font-semibold text-gray-900">$24,280 (12%)</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-pink-500 h-1.5 rounded-full" style={{ width: '12%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Insight */}
          <div className="pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-900">Key Finding:</span> 44% of revenue leakage stems from usage discrepancies, 
              suggesting systematic issues in consumption tracking between systems.
            </p>
          </div>
        </div>
      </div>

      {/* Root Cause Analysis Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="text-black" size={16} />
            <h3 className="text-base font-semibold text-gray-900">Root Cause Analysis</h3>
          </div>
          <AlertTriangle className="text-orange-600" size={20} />
        </div>
        
        <div className="space-y-4">
          {/* Primary Issues */}
          <div>
            <p className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wide">Critical Issues (3)</p>
            
            <div className="space-y-3">
              {/* Issue 1 */}
              <div className="p-3 border border-gray-100 rounded-lg">
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Metered Usage Sync Gap</p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Real-time usage data from Spright not syncing to NetSuite billing system, 
                      causing 15-day lag in invoice generation. Affects 42% of customer base.
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 bg-red-100 text-red-700 rounded-full font-medium">
                        High Impact
                      </span>
                      <span className="text-xs text-gray-500">$89.4K revenue at risk</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Issue 2 */}
              <div className="p-3  border border-gray-100 rounded-lg">
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Proration Logic Mismatch</p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Mid-cycle plan changes using different proration methods between systems. 
                      Spright: daily proration vs. NetSuite: monthly proration.
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full font-medium">
                        Low-Med Impact
                      </span>
                      <span className="text-xs text-gray-500">$36.5K discrepancy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendation */}
          <div className="pt-3 border-t border-gray-200">
            <p className="text-xs font-semibold text-gray-900 mb-1">Recommended Action</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Implement automated real-time sync for usage metrics and standardize proration methodology 
              across platforms. Priority: Address usage sync within 30 days to prevent further revenue leakage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
