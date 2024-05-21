const { IoIosArrowUp, IoIosArrowDown } = require("react-icons/io");
import styles from "../../styles/Collapse.module.css";

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="flex flex-col">
      <div
        className={`p-4 flex justify-between cursor-pointer ${
          isOpen ? "bg-secondary text-white" : "bg-[#F4F0EF] text-[#666666]"
        }`}
        onClick={toggleOpen}
      >
        <p className="text-base font-medium">{question}</p>
        {isOpen ? (
          <IoIosArrowUp className="text-white" />
        ) : (
          <IoIosArrowDown className="text-gray-500" />
        )}
      </div>

      <div
        className={` ${styles.collapse} ${
          isOpen ? styles.open : styles.closed
        }`}
      >
        <div className="bg-[#F4F0EF] text-[#666666] p-4">
          <p className="text-base">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
