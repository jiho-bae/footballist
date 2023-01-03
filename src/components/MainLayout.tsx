interface MainLayoutProps {
  children: JSX.Element[] | JSX.Element | string;
}

function MainLayout({ children }: MainLayoutProps) {
  return <main className="px-4 py-0">{children}</main>;
}

export default MainLayout;
