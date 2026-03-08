import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-8 md:px-8">
      <Outlet />
    </div>
  );
}

export default MainLayout;
