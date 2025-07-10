import { Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function MessagesPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center space-x-2">
        <Mail className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold text-foreground">Messages</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Hộp thư đến</CardTitle>
            <CardDescription>Tin nhắn mới</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Danh sách tin nhắn sẽ được hiển thị ở đây.</p>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Cuộc trò chuyện</CardTitle>
            <CardDescription>Nội dung tin nhắn</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Chi tiết cuộc trò chuyện sẽ được hiển thị ở đây.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 