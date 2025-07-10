import { FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function DocumentsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center space-x-2">
        <FileText className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold text-foreground">Documents</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Tài liệu gần đây</CardTitle>
            <CardDescription>Các tài liệu được truy cập gần đây</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Danh sách tài liệu sẽ được hiển thị ở đây.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Thư mục</CardTitle>
            <CardDescription>Quản lý thư mục tài liệu</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Cấu trúc thư mục sẽ được hiển thị ở đây.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 