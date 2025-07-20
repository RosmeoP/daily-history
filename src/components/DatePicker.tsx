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
        className="flex items-center gap-3 px-8 py-4 backdrop-blur-xl bg-white/20 dark:bg-gray-900/40 border border-gray-200/40 dark:border-gray-700/40 rounded-2xl text-gray-700 dark:text-gray-200 shadow-lg"
        aria-label="Previous day"
      >
        <span className="text-lg">←</span>
        <span className="font-light">Previous</span>
      </button>
      
      <div className="flex items-center gap-6">
        <input
          type="date"
          value={formatDate}
          onChange={handleDateChange}
          className="px-6 py-4 backdrop-blur-xl bg-white/25 dark:bg-gray-900/50 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400/50 focus:border-transparent shadow-lg text-center font-medium"
        />
        <button
          onClick={goToToday}
          className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-2xl font-medium shadow-xl"
        >
          Today
        </button>
      </div>
      
      <button
        onClick={goToNextDay}
        className="flex items-center gap-3 px-8 py-4 backdrop-blur-xl bg-white/20 dark:bg-gray-900/40 border border-gray-200/40 dark:border-gray-700/40 rounded-2xl text-gray-700 dark:text-gray-200 shadow-lg"
        aria-label="Next day"
      >
        <span className="font-light">Next</span>
        <span className="text-lg">→</span>
      </button>
    </div>
  );
}