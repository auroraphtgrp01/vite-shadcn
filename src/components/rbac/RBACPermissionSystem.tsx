import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { 
  Shield, 
  Settings, 
  Plus, 
  Edit, 
  Trash2
} from "lucide-react";

// Mock data types
interface Role {
  id: string;
  name: string;
  description: string;
  color: string;
  userCount: number;
  permissions: string[];
  createdAt: string;
}



interface Permission {
  id: string;
  name: string;
  description: string;
  resource: string;
  action: string;
}

// Mock data
const mockRoles: Role[] = [
  {
    id: "admin",
    name: "Administrator",
    description: "Full system access with all permissions",
    color: "destructive",
    userCount: 2,
    permissions: ["user.create", "user.read", "user.update", "user.delete", "role.manage", "system.config"],
    createdAt: "2024-01-15"
  },
  {
    id: "manager",
    name: "Manager",
    description: "Manage users and reports",
    color: "default",
    userCount: 5,
    permissions: ["user.read", "user.update", "report.read", "report.create"],
    createdAt: "2024-01-20"
  },
  {
    id: "user",
    name: "User",
    description: "Basic user with limited permissions",
    color: "secondary",
    userCount: 25,
    permissions: ["profile.read", "profile.update"],
    createdAt: "2024-01-25"
  }
];



const mockPermissions: Permission[] = [
  { id: "user.create", name: "Create User", description: "Create new user accounts", resource: "User", action: "Create" },
  { id: "user.read", name: "View User", description: "View user information", resource: "User", action: "Read" },
  { id: "user.update", name: "Update User", description: "Edit user information", resource: "User", action: "Update" },
  { id: "user.delete", name: "Delete User", description: "Delete user accounts", resource: "User", action: "Delete" },
  { id: "role.manage", name: "Manage Roles", description: "Create, edit, delete roles", resource: "Role", action: "Manage" },
  { id: "system.config", name: "System Configuration", description: "Change system settings", resource: "System", action: "Config" },
  { id: "report.read", name: "View Reports", description: "Access reports", resource: "Report", action: "Read" },
  { id: "report.create", name: "Create Reports", description: "Create new reports", resource: "Report", action: "Create" },
  { id: "profile.read", name: "View Profile", description: "View personal profile", resource: "Profile", action: "Read" },
  { id: "profile.update", name: "Update Profile", description: "Edit personal profile", resource: "Profile", action: "Update" }
];

export function RBACPermissionSystem() {
  const [roles, setRoles] = useState<Role[]>(mockRoles);
  const [permissions] = useState<Permission[]>(mockPermissions);

  // Role Management
  const RoleManagement = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Role Management</h3>
          <p className="text-sm text-muted-foreground">
            Create and manage roles in the system
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Role
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Role</DialogTitle>
              <DialogDescription>
                Create a new role and assign appropriate permissions
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="role-name">Role Name</Label>
                <Input id="role-name" placeholder="Enter role name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role-description">Description</Label>
                <Input id="role-description" placeholder="Enter role description" />
              </div>
              <div className="grid gap-2">
                <Label>Permissions</Label>
                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                  {permissions.map((permission) => (
                    <div key={permission.id} className="flex items-center space-x-2">
                      <Checkbox id={permission.id} />
                      <Label htmlFor={permission.id} className="text-sm">
                        {permission.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Create Role</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {roles.map((role) => (
          <Card key={role.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{role.name}</CardTitle>
                <Badge variant={role.color as any}>{role.userCount} users</Badge>
              </div>
              <CardDescription className="text-sm">
                {role.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium mb-2">Permissions ({role.permissions.length})</p>
                  <div className="flex flex-wrap gap-1">
                    {role.permissions.slice(0, 3).map((permission) => (
                      <Badge key={permission} variant="outline" className="text-xs">
                        {permissions.find(p => p.id === permission)?.name}
                      </Badge>
                    ))}
                    {role.permissions.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{role.permissions.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
                <Separator />
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="w-3 h-3 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Trash2 className="w-3 h-3 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  // Permissions List
  const PermissionsList = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Permissions Management</h3>
          <p className="text-sm text-muted-foreground">
            View and manage system permissions
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Permission
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Permission</DialogTitle>
              <DialogDescription>
                Add a new permission to the system
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="permission-name">Permission Name</Label>
                <Input id="permission-name" placeholder="Enter permission name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="permission-description">Description</Label>
                <Input id="permission-description" placeholder="Enter permission description" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="permission-resource">Resource</Label>
                <Input id="permission-resource" placeholder="e.g., User, Role, System" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="permission-action">Action</Label>
                <Input id="permission-action" placeholder="e.g., Create, Read, Update, Delete" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Create Permission</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Permission</TableHead>
                <TableHead>Resource</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {permissions.map((permission) => (
                <TableRow key={permission.id}>
                  <TableCell>
                    <p className="font-medium">{permission.name}</p>
                    <p className="text-sm text-muted-foreground">ID: {permission.id}</p>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{permission.resource}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{permission.action}</Badge>
                  </TableCell>
                  <TableCell>
                    <p className="text-sm text-muted-foreground max-w-md">
                      {permission.description}
                    </p>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-1 justify-end">
                      <Button variant="outline" size="sm">
                        <Edit className="w-3 h-3" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Shield className="w-6 h-6 text-primary" />
        <h2 className="text-xl font-semibold">RBAC Permission System</h2>
      </div>
      
      <Tabs defaultValue="roles" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="roles" className="flex items-center space-x-2">
            <Settings className="w-4 h-4" />
            <span>Roles</span>
          </TabsTrigger>
          <TabsTrigger value="permissions" className="flex items-center space-x-2">
            <Shield className="w-4 h-4" />
            <span>Permissions</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="roles" className="mt-6">
          <RoleManagement />
        </TabsContent>
        
        <TabsContent value="permissions" className="mt-6">
          <PermissionsList />
        </TabsContent>
      </Tabs>
    </div>
  );
} 