import { User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function UserPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center space-x-2">
        <User className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold text-foreground">User Settings</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Thông tin cá nhân</CardTitle>
            <CardDescription>Quản lý thông tin tài khoản</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Form chỉnh sửa thông tin sẽ được hiển thị ở đây.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Bảo mật</CardTitle>
            <CardDescription>Cài đặt bảo mật và quyền riêng tư</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Các tùy chọn bảo mật sẽ được hiển thị ở đây.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 