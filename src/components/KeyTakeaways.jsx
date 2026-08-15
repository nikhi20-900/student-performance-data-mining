import React from 'react';
import { CheckCircle2, AlertCircle, Zap } from 'lucide-react';

export default function KeyTakeaways({ findings = [] }) {
  if (!findings || findings.length === 0) return null;

  const getIcon = (type) => {
    switch (type) {
      case 'success': return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
      case 'insight': return <Zap className="w-5 h-5 text-blue-600" />;
      case 'warning': return <AlertCircle className="w-5 h-5 text-amber-600" />;
      default: return <CheckCircle2 className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <div className="my-8 p-5 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50">
      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-600 mb-3">
        💡 Key Takeaways
      </h4>
      <ul className="space-y-2">
        {findings.map((finding, idx) => (
          <li key={idx} className="flex gap-3 text-sm text-slate-700">
            {getIcon(finding.type || 'insight')}
            <span className="font-medium">{finding.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
