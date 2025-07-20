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
        className="group flex items-center gap-3 px-8 py-4 backdrop-blur-xl bg-white/10 dark:bg-violet-900/20 border border-violet-200/30 dark:border-violet-700/30 rounded-2xl hover:bg-white/20 dark:hover:bg-violet-900/30 hover:scale-105 transition-all duration-300 text-violet-700 dark:text-violet-200 hover:text-violet-800 dark:hover:text-white shadow-lg"
        aria-label="Previous day"
      >
        <span className="group-hover:-translate-x-1 transition-transform duration-300 text-lg">←</span>
        <span className="font-light">Previous</span>
      </button>
      
      <div className="flex items-center gap-6">
        <input
          type="date"
          value={formatDate}
          onChange={handleDateChange}
          className="px-6 py-4 backdrop-blur-xl bg-white/15 dark:bg-violet-900/25 border border-violet-200/40 dark:border-violet-700/40 rounded-2xl text-violet-800 dark:text-violet-100 placeholder-violet-500 dark:placeholder-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400/50 focus:border-transparent transition-all duration-300 hover:bg-white/25 dark:hover:bg-violet-900/35 shadow-lg text-center font-medium"
        />
        <button
          onClick={goToToday}
          className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-2xl hover:from-violet-600 hover:to-purple-700 hover:scale-105 transition-all duration-300 font-medium shadow-xl hover:shadow-2xl"
        >
          Today
        </button>
      </div>
      
      <button
        onClick={goToNextDay}
        className="group flex items-center gap-3 px-8 py-4 backdrop-blur-xl bg-white/10 dark:bg-violet-900/20 border border-violet-200/30 dark:border-violet-700/30 rounded-2xl hover:bg-white/20 dark:hover:bg-violet-900/30 hover:scale-105 transition-all duration-300 text-violet-700 dark:text-violet-200 hover:text-violet-800 dark:hover:text-white shadow-lg"
        aria-label="Next day"
      >
        <span className="font-light">Next</span>
        <span className="group-hover:translate-x-1 transition-transform duration-300 text-lg">→</span>
      </button>
    </div>
  );
}