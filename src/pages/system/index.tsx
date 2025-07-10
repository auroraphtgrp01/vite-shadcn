import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { RBACPermissionSystem } from "@/components/rbac/RBACPermissionSystem";

export default function SystemPage() {
  return (
    <div className="">
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">Basic</TabsTrigger>
          <TabsTrigger value="permission">Permission System</TabsTrigger>
          <TabsTrigger value="danger">Danger Zone</TabsTrigger>
        </TabsList>
        
        <TabsContent value="basic" className="mt-6">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-lg font-semibold mb-4">Basic Settings</h3>
            <p className="text-muted-foreground">1</p>
          </div>
        </TabsContent>
        
        <TabsContent value="permission" className="mt-6">
          <RBACPermissionSystem />
        </TabsContent>
        
        <TabsContent value="danger" className="mt-6">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-lg font-semibold mb-4">Danger Zone</h3>
            <p className="text-muted-foreground">3</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 