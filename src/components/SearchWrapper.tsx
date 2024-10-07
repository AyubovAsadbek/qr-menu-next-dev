"use client";

import { useState, useRef, ChangeEvent } from "react";
import { Icon } from "./Icon";

const SearchWrapper: React.FC = () => {
  const [value, setValue] = useState<string | null>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClear = () => {
    setValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form className="sm:bg-white flex-grow h-10 sm:h-[76px] rounded-xl sm:shadow-searchWrapper sm:px-4 sm:p-4">
      {/* InputWrapper */}
      <div className="w-full h-full transition-200 border border-white-300 rounded-xl sm:rounded-lg bg-white sm:bg-white-100 flex-y-center sm:shadow-none shadow-searchBottom focus-within:border-blue-500 focus-within:bg-white">
        {/* Search Icon */}
        <Icon
          name="search-icon"
          width={18}
          height={18}
          className="ml-3 mr-2 sm:mx-4"
          color="#8E9BA8"
        />
        {/* Input */}
        <input
          ref={inputRef}
          value={value || ""}
          onChange={handleChange}
          type="text"
          placeholder="Введите для поиска..."
          className="w-full h-full outline-none bg-transparent rounded-lg font-normal sm:pb-0.5 px-1 text-gray-100 text-14 sm:text-base"
        />
        {/* Clear Button */}
        <button
          className={`${
            value ? "opacity-100" : "opacity-0 cursor-auto"
          }  rounded-full p-1 ml-1 mx-2 sm:mx-4 transition-300`}
          onClick={handleClear}
          type="button"
        >
          <Icon name="close-icon" width={18} height={18} color="#8E9BA8" />
        </button>
      </div>
    </form>
  );
};

export default SearchWrapper;
