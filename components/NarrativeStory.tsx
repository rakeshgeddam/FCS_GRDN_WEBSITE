
import React, { useState } from 'react';

const NarrativeStory: React.FC = () => {
  // Demo States
  const [focusMode, setFocusMode] = useState('Morning');
  const [somedayList, setSomedayList] = useState(['Build Landing Page', 'Launch App', 'Update Logo']);
  const [laterStack, setLaterStack] = useState<string[]>([]);
  const [flightTime, setFlightTime] = useState('14:00');
  const [cardType, setCardType] = useState('Birthday');

  const moveToLater = (task: string) => {
    setSomedayList(prev => prev.filter(t => t !== task));
    setLaterStack(prev => [...prev, task]);
  };

  return (
    <div className="bg-white dark:bg-brandBlack transition-colors duration-300">
      {/* 1. SOMEDAY STACK: Capture */}
      <section id="story-capture" className="min-h-screen flex items-center py-24 px-4 overflow-hidden border-t border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h4 className="text-brandRed font-black uppercase tracking-[0.3em] mb-4 text-sm">Step 1: Capture</h4>
            <h2 className="text-5xl md:text-7xl font-black uppercase font-heading tracking-tighter mb-8 text-brandBlack dark:text-white">
              Stop losing <br /> tasks to <span className="text-gray-400 dark:text-gray-500">"later".</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-xl">
              You didn't forget because you don't care—you forgot because life moved. Our Someday Stack ensures ideas are parked safely until your brain has space for them.
            </p>
          </div>
          <div className="relative glass-light rounded-[3rem] p-8 md:p-12 reveal border border-black/10 dark:border-white/10">
            <div className="mb-8 flex justify-between items-center">
              <h3 className="font-black uppercase text-xs tracking-widest text-brandBlack/50 dark:text-white/50">Someday Stack</h3>
              <span className="text-brandRed animate-pulse font-black text-xs">● Live Demo</span>
            </div>
            <div className="space-y-4">
              {somedayList.map((task) => (
                <div key={task} className="bg-black/5 dark:bg-brandDarkGray p-6 rounded-2xl flex justify-between items-center group hover:border-brandRed border border-transparent transition-all">
                  <span className="font-bold text-brandBlack dark:text-white">{task}</span>
                  <button 
                    onClick={() => moveToLater(task)}
                    className="text-[10px] font-black uppercase bg-brandBlack/5 dark:bg-white/5 px-3 py-1 rounded-full hover:bg-brandRed hover:text-white transition-colors text-brandBlack dark:text-white"
                  >
                    Park for Later
                  </button>
                </div>
              ))}
              {laterStack.length > 0 && (
                <div className="pt-8 border-t border-black/10 dark:border-white/5">
                  <h4 className="text-[10px] font-black uppercase text-gray-500 dark:text-gray-600 mb-4 tracking-widest">In the Stack ({laterStack.length})</h4>
                  <div className="flex flex-wrap gap-2">
                    {laterStack.map(task => (
                      <span key={task} className="bg-brandRed/10 text-brandRed text-[10px] px-3 py-1 rounded-full font-bold animate-in zoom-in">
                        {task}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. AI SCHEDULER: Plan */}
      <section id="story-plan" className="min-h-screen flex items-center py-24 px-4 overflow-hidden bg-gray-50/50 dark:bg-brandDarkGray/20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2 reveal">
            <h4 className="text-brandRed font-black uppercase tracking-[0.3em] mb-4 text-sm">Step 2: Plan</h4>
            <h2 className="text-5xl md:text-7xl font-black uppercase font-heading tracking-tighter mb-8 text-brandBlack dark:text-white">
              Life happens. <br /> Your schedule <span className="text-gray-400 dark:text-gray-500">listens.</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-xl">
              Flight delayed? Traffic spike? The AI Scheduler doesn't just show the conflict—it fixes it. It recalculates travel buffers and shifts your focus blocks automatically.
            </p>
          </div>
          <div className="lg:order-1 glass rounded-[3rem] p-8 md:p-12 reveal border border-black/5 dark:border-white/10 relative overflow-hidden">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-brandBlack dark:bg-white rounded-xl flex items-center justify-center text-white dark:text-brandBlack font-black">AI</div>
              <div>
                <h4 className="text-[10px] font-black uppercase text-brandRed">Dynamic Scheduling</h4>
                <p className="font-bold text-brandBlack dark:text-white">Flight to London (BA212)</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-xs font-black text-gray-500 dark:text-gray-500 w-12">Flight</span>
                <input 
                  type="time" 
                  value={flightTime} 
                  onChange={(e) => setFlightTime(e.target.value)}
                  className="bg-gray-100 dark:bg-brandBlack border border-black/5 dark:border-white/10 rounded-lg px-4 py-2 font-bold text-brandRed"
                />
              </div>
              
              <div className="relative pt-10 border-t border-black/5 dark:border-white/5 space-y-4">
                <div className="absolute top-0 left-0 w-full h-1 bg-black/5 dark:bg-white/5"></div>
                <div className="grid grid-cols-4 gap-2 h-12">
                   <div className="bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-[10px] font-black opacity-50 dark:opacity-30 text-brandBlack dark:text-white">Packing</div>
                   <div 
                    className="bg-brandRed rounded-lg flex items-center justify-center text-[10px] font-black text-white shadow-lg shadow-brandRed/20 transition-all duration-700"
                    style={{ marginLeft: `${(parseInt(flightTime.split(':')[0]) - 14) * 20}px` }}
                   >
                     Drive to Airport
                   </div>
                   <div className="col-span-2 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-lg flex items-center justify-center text-[10px] font-black text-brandBlack dark:text-white">Flight Window</div>
                </div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black text-center">Auto-adjusting timeline based on {flightTime}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOCUS MODES: Focus */}
      <section id="story-focus" className="min-h-screen flex items-center py-24 px-4 overflow-hidden border-t border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h4 className="text-brandRed font-black uppercase tracking-[0.3em] mb-4 text-sm">Step 3: Focus</h4>
            <h2 className="text-5xl md:text-7xl font-black uppercase font-heading tracking-tighter mb-8 text-brandBlack dark:text-white">
              Your phone <br /> should <span className="text-gray-400 dark:text-gray-500">adapt to you.</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-xl">
              FocusGuardian intelligently toggles system-level Focus Modes based on your activity. Deep work starts? DND is on. Lunch break? Friends can reach you again.
            </p>
          </div>
          <div className="relative reveal">
            <div className="mx-auto w-[280px] h-[580px] bg-white dark:bg-brandBlack border-[8px] border-gray-100 dark:border-brandDarkGray rounded-[3rem] shadow-2xl relative overflow-hidden transition-all duration-500"
                 style={{ borderColor: focusMode === 'Deep' ? '#E63946' : '' }}>
              <div className="absolute top-0 w-full h-8 bg-black dark:bg-black flex justify-center items-center">
                <div className="w-20 h-4 bg-gray-800 dark:bg-gray-900 rounded-full"></div>
              </div>
              
              <div className="p-8 pt-20 text-center">
                <div className="text-6xl mb-6 transition-transform hover:scale-110">
                  {focusMode === 'Morning' && '☀️'}
                  {focusMode === 'Deep' && '🧠'}
                  {focusMode === 'Night' && '🌙'}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-2 text-brandBlack dark:text-white">{focusMode} Mode</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-black">
                  {focusMode === 'Morning' && 'Reviewing Day...'}
                  {focusMode === 'Deep' && 'Blocking Notifications...'}
                  {focusMode === 'Night' && 'Winding Down...'}
                </p>
              </div>

              <div className="absolute bottom-12 w-full px-8 flex flex-col gap-3">
                {['Morning', 'Deep', 'Night'].map(mode => (
                  <button 
                    key={mode}
                    onClick={() => setFocusMode(mode)}
                    className={`py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                      focusMode === mode ? 'bg-brandBlack dark:bg-white text-white dark:text-brandBlack scale-105 shadow-xl' : 'bg-black/5 dark:bg-white/5 text-gray-500'
                    }`}
                  >
                    Set {mode}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REMINDERS: Remember */}
      <section id="story-remember" className="min-h-screen flex items-center py-24 px-4 overflow-hidden bg-gray-50/50 dark:bg-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2 reveal">
            <h4 className="text-brandRed font-black uppercase tracking-[0.3em] mb-4 text-sm">Step 4: Remember</h4>
            <h2 className="text-5xl md:text-7xl font-black uppercase font-heading tracking-tighter mb-8 text-brandBlack dark:text-white">
              Gentle nudges, <br /> <span className="text-gray-400 dark:text-gray-500">not noisy alerts.</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-xl">
              We deliver reminders during your natural scrolling moments via smart widgets. No jarring sirens—just the right info at the right time.
            </p>
          </div>
          <div className="lg:order-1 reveal">
            <div className="space-y-6 max-w-sm mx-auto">
              <div className="glass-light p-6 rounded-3xl border border-black/5 dark:border-white/5 shadow-xl transform -rotate-2 hover:rotate-0 transition-all">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h5 className="font-black text-xs uppercase tracking-widest text-brandRed">Reminder</h5>
                    <p className="font-bold text-brandBlack dark:text-white">Water your plants before lunch</p>
                  </div>
                </div>
              </div>
              <div className="glass-light p-6 rounded-3xl border border-black/5 dark:border-white/5 shadow-xl transform rotate-1 hover:rotate-0 transition-all">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">🚗</span>
                  <div>
                    <h5 className="font-black text-xs uppercase tracking-widest text-gray-500">Commute</h5>
                    <p className="font-bold text-brandBlack dark:text-white">Leave now for the Dentist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GREETING CARDS: Celebrate */}
      <section id="story-celebrate" className="min-h-screen flex items-center py-24 px-4 overflow-hidden border-t border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h4 className="text-brandRed font-black uppercase tracking-[0.3em] mb-4 text-sm">Step 5: Celebrate</h4>
            <h2 className="text-5xl md:text-7xl font-black uppercase font-heading tracking-tighter mb-8 text-brandBlack dark:text-white">
              Focus is more <br /> than <span className="text-gray-400 dark:text-gray-500">tasks.</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-xl">
              Don't let milestones slip by. We scan your "Important Dates" and help you create custom, AI-generated greeting cards in seconds. Relationships are your best productivity hack.
            </p>
          </div>
          <div className="glass-light rounded-[3rem] p-8 md:p-12 reveal border border-black/5 dark:border-white/10 text-center">
             <div className="flex justify-center gap-4 mb-10">
               {['Birthday', 'Anniversary', 'Promotion'].map(type => (
                 <button 
                  key={type}
                  onClick={() => setCardType(type)}
                  className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    cardType === type ? 'bg-brandRed text-white' : 'bg-black/5 dark:bg-white/5 text-gray-500'
                  }`}
                 >
                   {type}
                 </button>
               ))}
             </div>
             <div className="aspect-[4/5] max-w-[300px] mx-auto bg-gray-50 dark:bg-gradient-to-br dark:from-brandDarkGray dark:to-brandBlack rounded-2xl border border-black/10 dark:border-white/10 p-8 flex flex-col justify-between items-center shadow-2xl relative group overflow-hidden transition-colors duration-300">
                <div className="absolute inset-0 bg-brandRed opacity-0 group-hover:opacity-5 transition-opacity"></div>
                <div className="text-5xl">
                   {cardType === 'Birthday' && '🎂'}
                   {cardType === 'Anniversary' && '🥂'}
                   {cardType === 'Promotion' && '🚀'}
                </div>
                <div className="font-heading font-black text-2xl uppercase tracking-tighter text-brandBlack dark:text-white">
                  Happy <br /> {cardType}!
                </div>
                <div className="w-full h-px bg-black/5 dark:bg-white/10"></div>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase">Tap to share with family</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NarrativeStory;
