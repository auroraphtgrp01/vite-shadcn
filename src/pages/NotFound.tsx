import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Không tìm thấy trang</p>
      <Link to="/">
        <Button>Quay lại trang chủ</Button>
      </Link>
    </div>
  );
};

export default NotFound; 