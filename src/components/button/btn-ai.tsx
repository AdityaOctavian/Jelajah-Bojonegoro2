import { NavLink } from "react-router-dom";
import AiLogo from "../../assets/ai-logo.svg"

export const ButtonAI = () => {
    return (
      <NavLink to="/ai-lab">
        <button className="fixed bottom-4 right-4 px-2.5 md:px-3.5 py-2.5 z-50 bg-[#072F22] text-white text-[14px] font-medium rounded-full flex justify-center items-center hover:bg-[#0c4633] transition-colors flex justify-center items-center gap-2">
          <img src={AiLogo} width="18" height="18"></img>{" "}
          <span className="hidden md:block text-[14px]">AI Travel Assistant</span>
        </button>
      </NavLink>
    );
} 