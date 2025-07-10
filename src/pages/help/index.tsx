import { HelpCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HelpPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center space-x-2">
        <HelpCircle className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold text-foreground">Help & Support</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Câu hỏi thường gặp</CardTitle>
            <CardDescription>Tìm câu trả lời nhanh chóng</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Danh sách FAQ sẽ được hiển thị ở đây.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Hướng dẫn sử dụng</CardTitle>
            <CardDescription>Tài liệu và video hướng dẫn</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Tài liệu hướng dẫn sẽ được hiển thị ở đây.</p>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Liên hệ hỗ trợ</CardTitle>
            <CardDescription>Gửi yêu cầu hỗ trợ kỹ thuật</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Form liên hệ sẽ được hiển thị ở đây.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 