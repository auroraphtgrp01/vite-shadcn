import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-xl font-bold">SNS Smart Ring</div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-cyan-100 transition-colors">Trang chủ</Link>
              </li>
              <li>
                <Link to="/tutorial" className="hover:text-cyan-100 transition-colors">Hướng dẫn</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;