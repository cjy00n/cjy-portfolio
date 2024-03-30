interface LayoutProps {
  children: React.ReactNode;
  backGround?: "default" | "dark" | "light";
}

const Layout = ({ children, backGround = "default" }: LayoutProps) => {
  return (
    <div
      className={`flex min-h-dvh w-[97dvw] flex-col items-center justify-center ${backGround === "light" ? "bg-back-100" : backGround === "dark" ? "bg-back-300" : "bg-back-200"}`}
    >
      {children}
    </div>
  );
};

export default Layout;
