import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Shield, 
  Settings, 
  Plus, 
  Edit, 
  Trash2,
  Users,
  Database,
  FileText,
  User,
  ShieldCheck
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
    permissions: [
      "user.create", "user.read", "user.update", "user.delete", "user.import", "user.export",
      "role.create", "role.read", "role.update", "role.delete", "role.assign",
      "system.config", "system.backup", "system.restore", "system.logs", "system.maintenance",
      "report.read", "report.create", "report.update", "report.delete", "report.export", "report.schedule",
      "profile.read", "profile.update", "profile.password", "profile.preferences"
    ],
    createdAt: "2024-01-15"
  },
  {
    id: "manager",
    name: "Manager",
    description: "Manage users and reports with moderate permissions",
    color: "default",
    userCount: 5,
    permissions: [
      "user.read", "user.update", "user.import", "user.export",
      "role.read", "role.assign",
      "report.read", "report.create", "report.update", "report.export", "report.schedule",
      "profile.read", "profile.update", "profile.password", "profile.preferences"
    ],
    createdAt: "2024-01-20"
  },
  {
    id: "user",
    name: "User",
    description: "Basic user with limited permissions",
    color: "secondary",
    userCount: 25,
    permissions: [
      "profile.read", "profile.update", "profile.password", "profile.preferences",
      "report.read"
    ],
    createdAt: "2024-01-25"
  }
];



const mockPermissions: Permission[] = [
  // User Management
  { id: "user.create", name: "Create User", description: "Create new user accounts", resource: "User", action: "Create" },
  { id: "user.read", name: "View User", description: "View user information", resource: "User", action: "Read" },
  { id: "user.update", name: "Update User", description: "Edit user information", resource: "User", action: "Update" },
  { id: "user.delete", name: "Delete User", description: "Delete user accounts", resource: "User", action: "Delete" },
  { id: "user.import", name: "Import Users", description: "Bulk import user data", resource: "User", action: "Import" },
  { id: "user.export", name: "Export Users", description: "Export user data to files", resource: "User", action: "Export" },
  
  // Role Management
  { id: "role.create", name: "Create Roles", description: "Create new system roles", resource: "Role", action: "Create" },
  { id: "role.read", name: "View Roles", description: "View role information", resource: "Role", action: "Read" },
  { id: "role.update", name: "Update Roles", description: "Edit role permissions", resource: "Role", action: "Update" },
  { id: "role.delete", name: "Delete Roles", description: "Remove roles from system", resource: "Role", action: "Delete" },
  { id: "role.assign", name: "Assign Roles", description: "Assign roles to users", resource: "Role", action: "Assign" },
  
  // System Configuration
  { id: "system.config", name: "System Configuration", description: "Change system settings", resource: "System", action: "Config" },
  { id: "system.backup", name: "System Backup", description: "Create system backups", resource: "System", action: "Backup" },
  { id: "system.restore", name: "System Restore", description: "Restore system from backup", resource: "System", action: "Restore" },
  { id: "system.logs", name: "View System Logs", description: "Access system audit logs", resource: "System", action: "Read" },
  { id: "system.maintenance", name: "System Maintenance", description: "Perform system maintenance", resource: "System", action: "Maintain" },
  
  // Report Management
  { id: "report.read", name: "View Reports", description: "Access and view reports", resource: "Report", action: "Read" },
  { id: "report.create", name: "Create Reports", description: "Create new reports", resource: "Report", action: "Create" },
  { id: "report.update", name: "Edit Reports", description: "Modify existing reports", resource: "Report", action: "Update" },
  { id: "report.delete", name: "Delete Reports", description: "Remove reports from system", resource: "Report", action: "Delete" },
  { id: "report.export", name: "Export Reports", description: "Export reports to various formats", resource: "Report", action: "Export" },
  { id: "report.schedule", name: "Schedule Reports", description: "Schedule automatic report generation", resource: "Report", action: "Schedule" },
  
  // Profile Management
  { id: "profile.read", name: "View Profile", description: "View personal profile", resource: "Profile", action: "Read" },
  { id: "profile.update", name: "Update Profile", description: "Edit personal profile", resource: "Profile", action: "Update" },
  { id: "profile.password", name: "Change Password", description: "Change account password", resource: "Profile", action: "Update" },
  { id: "profile.preferences", name: "Manage Preferences", description: "Update user preferences", resource: "Profile", action: "Update" }
];

export function RBACPermissionSystem() {
  const [roles, setRoles] = useState<Role[]>(mockRoles);
  const [permissions] = useState<Permission[]>(mockPermissions);

  // Function to get badge variant based on action type
  const getActionBadgeVariant = (action: string) => {
    switch (action.toLowerCase()) {
      case 'create':
        return 'default'; // Green for creation
      case 'read':
        return 'secondary'; // Blue/gray for reading
      case 'update':
        return 'outline'; // Yellow/warning for updates
      case 'delete':
        return 'destructive'; // Red for deletion
      case 'import':
      case 'export':
        return 'secondary'; // Blue for data operations
      case 'assign':
        return 'default'; // Green for assignment
      case 'schedule':
        return 'outline'; // Gray for scheduling
      case 'backup':
      case 'restore':
        return 'secondary'; // Blue for system operations
      case 'config':
      case 'maintain':
        return 'outline'; // Gray for maintenance
      default:
        return 'outline';
    }
  };

  // Function to get action badge text color for better readability
  const getActionBadgeClass = (action: string) => {
    const baseClass = "text-xs font-medium";
    switch (action.toLowerCase()) {
      case 'create':
      case 'assign':
        return `${baseClass} bg-green-100 text-green-800 border-green-200`;
      case 'read':
        return `${baseClass} bg-blue-100 text-blue-800 border-blue-200`;
      case 'update':
        return `${baseClass} bg-yellow-100 text-yellow-800 border-yellow-200`;
      case 'delete':
        return `${baseClass} bg-red-100 text-red-800 border-red-200`;
      case 'import':
      case 'export':
        return `${baseClass} bg-purple-100 text-purple-800 border-purple-200`;
      case 'backup':
      case 'restore':
        return `${baseClass} bg-indigo-100 text-indigo-800 border-indigo-200`;
      default:
        return `${baseClass} bg-gray-100 text-gray-800 border-gray-200`;
    }
  };

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
          <DialogContent className="dialog-content-wide !w-[90vw] !max-w-[90vw] !h-[92vh] overflow-hidden">
            <DialogHeader>
              <DialogTitle>Create New Role</DialogTitle>
              <DialogDescription>
                Create a new role and assign appropriate permissions
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="role-name">Role Name</Label>
                  <Input id="role-name" placeholder="Enter role name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="role-description">Description</Label>
                  <Input id="role-description" placeholder="Enter role description" />
                </div>
              </div>
              
              <div className="grid gap-4">
                <Label className="text-base font-semibold">Permissions</Label>
                <div className="max-h-[60vh] overflow-y-auto border rounded-lg p-6">
                  <div className="grid gap-6">
                    {Object.entries(permissions.reduce((groups, permission) => {
                      const resource = permission.resource;
                      if (!groups[resource]) {
                        groups[resource] = [];
                      }
                      groups[resource].push(permission);
                      return groups;
                    }, {} as Record<string, Permission[]>)).map(([resource, resourcePermissions]) => (
                      <div key={resource} className="space-y-4">
                        <div className="flex items-center space-x-2 pb-2 border-b">
                          {resource.toLowerCase() === 'user' && <Users className="w-5 h-5 text-primary" />}
                          {resource.toLowerCase() === 'role' && <ShieldCheck className="w-5 h-5 text-primary" />}
                          {resource.toLowerCase() === 'system' && <Database className="w-5 h-5 text-primary" />}
                          {resource.toLowerCase() === 'report' && <FileText className="w-5 h-5 text-primary" />}
                          {resource.toLowerCase() === 'profile' && <User className="w-5 h-5 text-primary" />}
                          <h4 className="font-semibold text-lg">{resource} Permissions</h4>
                          <Badge variant="secondary">
                            {resourcePermissions.length} permissions
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                          {resourcePermissions.map((permission) => (
                            <div key={permission.id} className="border rounded-lg p-4 hover:bg-muted/20 transition-colors">
                              <div className="flex items-start space-x-3">
                                <Checkbox id={`dialog-${permission.id}`} className="mt-1" />
                                <div className="flex-1 space-y-2">
                                  <div className="flex items-center justify-between">
                                    <Label htmlFor={`dialog-${permission.id}`} className="font-medium cursor-pointer">
                                      {permission.name}
                                    </Label>
                                    <Badge variant={getActionBadgeVariant(permission.action)} className={getActionBadgeClass(permission.action)}>
                                      {permission.action}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground leading-relaxed">
                                    {permission.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter className="border-t pt-4">
              <div className="flex justify-between w-full">
                <Button variant="outline">Cancel</Button>
                <Button type="submit">Create Role</Button>
              </div>
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
  const PermissionsList = () => {
    // Group permissions by resource
    const groupedPermissions = permissions.reduce((groups, permission) => {
      const resource = permission.resource;
      if (!groups[resource]) {
        groups[resource] = [];
      }
      groups[resource].push(permission);
      return groups;
    }, {} as Record<string, Permission[]>);

    // Get icon for each resource group
    const getGroupIcon = (resource: string) => {
      switch (resource.toLowerCase()) {
        case 'user': return <Users className="w-4 h-4" />;
        case 'role': return <ShieldCheck className="w-4 h-4" />;
        case 'system': return <Database className="w-4 h-4" />;
        case 'report': return <FileText className="w-4 h-4" />;
        case 'profile': return <User className="w-4 h-4" />;
        default: return <Shield className="w-4 h-4" />;
      }
    };

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Permissions Management</h3>
            <p className="text-sm text-muted-foreground">
              View and manage system permissions organized by resource groups
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
          <CardContent className="p-6">
            <Accordion type="multiple" defaultValue={Object.keys(groupedPermissions)} className="w-full">
              {Object.entries(groupedPermissions).map(([resource, resourcePermissions]) => (
                <AccordionItem key={resource} value={resource}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center space-x-2">
                      {getGroupIcon(resource)}
                      <span className="font-medium">{resource} Permissions</span>
                      <Badge variant="secondary" className="ml-2">
                        {resourcePermissions.length}
                      </Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-4">
                      {resourcePermissions.map((permission) => (
                        <div key={permission.id} className="flex items-center justify-between p-4 border rounded-lg bg-muted/20">
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center space-x-2">
                              <h4 className="font-medium">{permission.name}</h4>
                              <Badge variant={getActionBadgeVariant(permission.action)} className={getActionBadgeClass(permission.action)}>
                                {permission.action}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {permission.description}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              ID: {permission.id}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Edit className="w-3 h-3" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    );
  };

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