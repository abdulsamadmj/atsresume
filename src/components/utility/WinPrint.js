import { FaGithub } from "react-icons/fa";
import { MdPictureAsPdf } from "react-icons/md";

const WinPrint = () => {

const print = () => {
    window.print();
    };

return (
    <>
      <a
        aria-label="Open GitHub"
        className="exclude-print fixed bottom-20 right-10 font-bold rounded-full bg-white text-fuchsia-600 shadow-lg border-2 border-white"
        href="https://github.com/abdulsamadmj/atsresume"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaGithub className="w-10 h-10" title="Open GitHub" />
      </a>
      <button
        aria-label="Download Resume"
        className="exclude-print fixed bottom-5 right-10 font-bold rounded-full bg-white text-fuchsia-600 shadow-lg border-2 border-white"
        onClick={print}
      >
        <MdPictureAsPdf className="w-10 h-10" title="Download Resume" />
      </button>
    </>
    );
};

export default WinPrint;