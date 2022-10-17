import { useRef, useState, useEffect } from "react";
import { BsPatchPlusFill, BsPatchMinusFill } from "react-icons/bs";

const Dropdown = ({ datas }) => {
  const [isOpen, setIsOpen] = useState(false);
  const liRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (isOpen && liRef.current && !liRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <li
      className={`bg-[#E4EFF7] relative transition-all duration-500 ease-linear origin-top py-4 text-[#004b87] px-4  flex flex-col justify-between my-6`}
      ref={liRef}
    >
      <div className="flex justify-between">
        <p className="font-bold text-lg">{datas.title}</p>

        <div>
          <BsPatchPlusFill
            className={`text-xl cursor-pointer  text-[#288fe3] ${
              isOpen ? "hidden" : "inline"
            }`}
            onClick={handleClick}
          />
          <BsPatchMinusFill
            className={`text-xl cursor-pointer  text-[#288fe3] ${
              !isOpen ? "hidden" : "inline"
            }`}
            onClick={handleClick}
          />
        </div>
      </div>

      {isOpen && (
        <div className="py-4  px-2 md:px-6 lg:px-10">
          <p>{datas.short_details}</p>
        </div>
      )}
    </li>
  );
};

export default Dropdown;
