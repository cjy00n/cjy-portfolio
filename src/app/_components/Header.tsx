import { NavItem, NavItemValue } from "../_types/NavItem";

export interface HeaderProps {
  navItems: NavItem[];
  activeNavItem: NavItemValue;
}

const Header = ({ navItems, activeNavItem }: HeaderProps) => {
  console.log(activeNavItem);
  return (
    <header className="sticky bg-primary-200 rounded-t-[18px] top-0 w-full items-center flex flex-col z-10 ">
      <div className="flex w-full items-center ">
        <div className="flex gap-1 text-2xl px-4 leading-3 items-center h-4">
          <span className=" text-[#FE5F57]">⏺</span>
          <span className=" text-[#FEBC2E]">⏺</span>
          <span className=" text-[#27C83F]">⏺</span>
        </div>
        <div className="flex">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={item.onClick}
              className={`${activeNavItem === item.value ? "bg-white py-[1px] text-accent-200 shadow-md rounded-t-lg" : "text-white"} text-basic-100 border-x border-solid border-white text-md items-center gap-1 font-semibold flex border-opacity-60 hover:bg-accent-100 w-48 px-2 py-1 hover:bg-opacity-40 hover:rounded-md `}
            >
              <span>{item.icon} </span>
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="w-full h-2 bg-white" />
    </header>
  );
};

export default Header;
