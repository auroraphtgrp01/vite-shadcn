import { Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function SystemPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center space-x-2">
        <Shield className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold text-foreground">System Settings</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Cấu hình hệ thống</CardTitle>
            <CardDescription>Quản lý cài đặt tổng quan</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Các tùy chọn cấu hình sẽ được hiển thị ở đây.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Quyền truy cập</CardTitle>
            <CardDescription>Quản lý phân quyền người dùng</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Bảng phân quyền sẽ được hiển thị ở đây.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Nhật ký hệ thống</CardTitle>
            <CardDescription>Theo dõi hoạt động hệ thống</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Logs hệ thống sẽ được hiển thị ở đây.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 