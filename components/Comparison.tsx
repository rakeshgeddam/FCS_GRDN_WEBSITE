
import React from 'react';

const Comparison: React.FC = () => {
  const rows = [
    { name: 'AI Voice Context', fg: '✅ Native', others: '❌ Text-only' },
    { name: 'iOS MapKit Integration', fg: '✅ Live', others: '❌ Manual' },
    { name: 'Focus Mode Triggers', fg: '✅ Auto', others: '❌ Manual' },
    { name: 'Privacy Focus', fg: '✅ On-device', others: '⚠️ Cloud-sync' },
    { name: 'Price during Beta', fg: 'Free', others: '$10-$30/mo' },
  ];

  return (
    <section className="py-32 bg-brandBlack" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase font-heading tracking-tighter">Why FocusGuardian?</h2>
          <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">Comparison against industry standards</p>
        </div>

        <div className="overflow-x-auto reveal border border-white/5 rounded-[3rem] bg-brandDarkGray/30 p-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-white border-b border-white/5">
                <th className="px-10 py-8 font-black uppercase tracking-widest text-sm">Matrix</th>
                <th className="px-10 py-8 font-black uppercase tracking-widest text-sm text-center text-brandRed">FocusGuardian</th>
                <th className="px-10 py-8 font-black uppercase tracking-widest text-sm text-center">Others</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="px-10 py-8 font-bold text-gray-400 uppercase text-xs tracking-widest">{row.name}</td>
                  <td className="px-10 py-8 text-center text-white font-black">{row.fg}</td>
                  <td className="px-10 py-8 text-center text-gray-600">{row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
