'use client';

interface DatePickerProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

export default function DatePicker({ selectedDate, onDateChange }: DatePickerProps) {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    onDateChange(newDate);
  };

  const goToPreviousDay = () => {
    const previousDay = new Date(selectedDate);
    previousDay.setDate(previousDay.getDate() - 1);
    onDateChange(previousDay);
  };

  const goToNextDay = () => {
    const nextDay = new Date(selectedDate);
    nextDay.setDate(nextDay.getDate() + 1);
    onDateChange(nextDay);
  };

  const goToToday = () => {
    onDateChange(new Date());
  };

  const formatDate = selectedDate.toISOString().split('T')[0];

  return (
    <div className="flex items-center justify-center gap-6 mb-8">
      <button
        onClick={goToPreviousDay}
        className="group flex items-center gap-2 px-6 py-3 backdrop-blur-sm bg-white/15 dark:bg-stone-800/15 border border-white/20 dark:border-stone-600/20 rounded-2xl hover:bg-white/25 dark:hover:bg-stone-800/25 hover:scale-105 transition-all duration-300 text-stone-700 dark:text-stone-200 hover:text-stone-800 dark:hover:text-white"
        aria-label="Previous day"
      >
        <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
        <span className="font-light">Previous</span>
      </button>
      
      <div className="flex items-center gap-4">
        <input
          type="date"
          value={formatDate}
          onChange={handleDateChange}
          className="px-4 py-3 backdrop-blur-sm bg-white/20 dark:bg-stone-800/20 border border-white/30 dark:border-stone-600/30 rounded-2xl text-stone-800 dark:text-stone-100 placeholder-stone-500 dark:placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400/30 focus:border-transparent transition-all duration-300 hover:bg-white/30 dark:hover:bg-stone-800/30"
        />
        <button
          onClick={goToToday}
          className="px-6 py-3 bg-gradient-to-r from-stone-500 to-zinc-600 text-white rounded-2xl hover:from-stone-600 hover:to-zinc-700 hover:scale-105 transition-all duration-300 font-light shadow-md hover:shadow-lg"
        >
          Today
        </button>
      </div>
      
      <button
        onClick={goToNextDay}
        className="group flex items-center gap-2 px-6 py-3 backdrop-blur-sm bg-white/15 dark:bg-stone-800/15 border border-white/20 dark:border-stone-600/20 rounded-2xl hover:bg-white/25 dark:hover:bg-stone-800/25 hover:scale-105 transition-all duration-300 text-stone-700 dark:text-stone-200 hover:text-stone-800 dark:hover:text-white"
        aria-label="Next day"
      >
        <span className="font-light">Next</span>
        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
      </button>
    </div>
  );
}