import { NavItem, NavItemValue } from "../_types/NavItem";

export interface HeaderProps {
  navItems: NavItem[];
  activeNavItem: NavItemValue;
}

const Header = ({ navItems, activeNavItem }: HeaderProps) => {
  return (
    <header className="fixed right-0 top-0 flex h-dvh w-[3vw] flex-col bg-primary-200">
      {/* <div className="flex gap-1 text-2xl px-4 leading-3 items-center h-4">
          <span className=" text-[#FE5F57]">⏺</span>
          <span className=" text-[#FEBC2E]">⏺</span>
          <span className=" text-[#27C83F]">⏺</span>
        </div> */}
      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={item.onClick}
          className={`${activeNavItem === item.value ? "bg-white text-accent-200 shadow-md" : "text-white"} text-md flex flex-1 items-center justify-center gap-1 font-semibold text-basic-100 [writing-mode:vertical-lr] hover:rounded-md hover:bg-accent-100 hover:bg-opacity-40`}
        >
          <span className="rotate-90">{item.icon} </span>
          <span>{item.name}</span>
        </button>
      ))}
    </header>
  );
};

export default Header;
