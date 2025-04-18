import React from "react";
import { Button } from "@/components/ui/button";

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Trang chủ</h1>
      <div className="grid gap-4">
        <p>Đây là trang chủ của ứng dụng.</p>
        <Button>Bắt đầu</Button>
      </div>
    </div>
  );
};

export default HomePage; 