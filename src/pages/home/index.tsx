import React from "react";
import { Card } from "@/components/ui/card";

const HomePage: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Chào mừng đến với Dashboard
        </h1>
        <p className="text-muted-foreground">
          Breadcrumb đã được thêm vào layout và sẽ hiển thị đường dẫn hiện tại của bạn.
        </p>
      </Card>
    </div>
  );
};

export default HomePage; 