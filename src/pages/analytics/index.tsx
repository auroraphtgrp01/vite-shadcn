import { BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center space-x-2">
        <BarChart3 className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Thống kê tổng quan</CardTitle>
            <CardDescription>Dữ liệu tổng quan hệ thống</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Nội dung analytics sẽ được hiển thị ở đây.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Biểu đồ doanh thu</CardTitle>
            <CardDescription>Phân tích doanh thu theo thời gian</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Biểu đồ sẽ được hiển thị ở đây.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Người dùng hoạt động</CardTitle>
            <CardDescription>Thống kê người dùng trực tuyến</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Thông tin người dùng sẽ được hiển thị ở đây.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 