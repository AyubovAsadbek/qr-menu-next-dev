import { workingDaysData } from "@/data/data";

const WorkingDays = () => {
  const date = new Date();
  const weekday = new Intl.DateTimeFormat("ru-RU", { weekday: "long" })
    .format(date)
    .toUpperCase();

  return (
    <div>
      <div className="p-4 flex items-center border-b border-white-400 pb-3.5">
        <h2 className="text-base font-semibold text-black-100">
          График работы
        </h2>
      </div>
      {workingDaysData.map((dayData, index) => {
        const isToday = weekday === dayData.day.toUpperCase();
        return (
          <div
            key={index}
            className={`flex justify-between items-center px-4 border-b border-white-100 ${
              isToday ? "bg-white-400 px-4 py-2" : "h-11"
            } relative`}
          >
            <h3
              className={`font-medium text-base ${
                isToday ? "text-blue-100" : "text-black-100"
              }  flex flex-col leading-none`}
            >
              {isToday && (
                <span className="text-xs leading-3 font-normal text-gray-100 mb-0.5">
                  Сегодня
                </span>
              )}
              {dayData.day}
            </h3>
            {isToday ? (
              <div className="flex-y-center gap-3">
                {dayData.isOpen ? (
                  <h4 className="text-xs font-normal px-1 py-0.5 bg-green-100 text-white rounded">
                    Открыто
                  </h4>
                ) : (
                  <h4 className="text-xs font-normal px-1 py-0.5 bg-red text-white rounded">
                    Закрыто
                  </h4>
                )}
                <span
                  className={`font-normal text-14 ${
                    isToday ? "text-headingTitle" : "text-gray-100"
                  } leading-none`}
                >
                  {dayData.isOpen ? dayData.hours : "Выходной"}
                </span>
              </div>
            ) : null}
            {isToday && (
              <div className="absolute w-1 h-7 bg-blue-100 left-0 rounded-r-lg"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WorkingDays;
