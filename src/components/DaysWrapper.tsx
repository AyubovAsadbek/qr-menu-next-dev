// DaysWrapper.tsx
import { daysOfWeek } from "@/data/data";

const DaysWrapper = () => {
  return (
    <div className="flex-y-center gap-1 mb-2 p-1">
      {daysOfWeek.map((day, index) => (
        <div
          key={index}
          className={`p-1 rounded transition-200 flex-y-center justify-center ${day.bgColor} `}
        >
          <span
            className={`text-xs font-medium transition-200 leading-4 ${day.textColor} `}
          >
            {day.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default DaysWrapper;
