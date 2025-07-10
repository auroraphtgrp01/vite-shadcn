import { Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CalendarPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center space-x-2">
        <Calendar className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold text-foreground">Calendar</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Lịch biểu</CardTitle>
            <CardDescription>Xem và quản lý lịch trình của bạn</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Lịch sẽ được hiển thị ở đây.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Sự kiện hôm nay</CardTitle>
            <CardDescription>Các sự kiện trong ngày</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Danh sách sự kiện sẽ được hiển thị ở đây.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 