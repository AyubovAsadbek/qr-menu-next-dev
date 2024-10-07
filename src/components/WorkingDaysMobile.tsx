import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  children: ReactNode;
}

const WorkingTimeModal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  children,
}) => {
  return (
    <div
      className={`bg-[#0000006d] fixed inset-0 flex-center  z-[99] transition-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setIsOpen(false)}
    >
      <div
        className={`bg-white rounded-2xl w-full pt-4 sm:w-[300px] sm:h-[300px] h-[450px] transition-200 ${
          isOpen ? "translate-y-40 sm:translate-y-0" : "translate-y-52"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default WorkingTimeModal;
