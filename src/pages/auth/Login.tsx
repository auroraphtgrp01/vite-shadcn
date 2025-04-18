import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Eye, EyeOff, Github, Mail, Lock } from "lucide-react";

export default function Login() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        // Mô phỏng gọi API
        setTimeout(() => {
            setIsLoading(false);
            // Chuyển hướng về trang chủ sau khi đăng nhập thành công
            navigate('/');
        }, 2000);
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-violet-50 dark:from-slate-900 dark:to-slate-800 p-4">
            <div className="w-full max-w-md">
                <Card className="border-none shadow-xl backdrop-blur-sm bg-white/90 dark:bg-slate-900/90">
                    <CardHeader className="space-y-2 text-center pb-6">
                        <div className="mx-auto bg-primary/10 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-2xl font-bold tracking-tight">Đăng nhập</CardTitle>
                        <CardDescription>
                            Nhập thông tin đăng nhập của bạn để tiếp tục
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-5">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="email"
                                        placeholder="name@example.com"
                                        type="email"
                                        autoCapitalize="none"
                                        autoComplete="email"
                                        autoCorrect="off"
                                        className="pl-10 h-10 transition-all focus:ring-2 focus:ring-primary/20"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-sm font-medium">Mật khẩu</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="password"
                                        placeholder="••••••••"
                                        type={showPassword ? "text" : "password"}
                                        className="pl-10 pr-10 h-10 transition-all focus:ring-2 focus:ring-primary/20"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="remember"
                                        checked={rememberMe}
                                        onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                                    />
                                    <Label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
                                        Nhớ đăng nhập
                                    </Label>
                                </div>
                                <Link to="/auth/forgot-password" className="text-sm font-medium text-primary hover:underline">
                                    Quên mật khẩu?
                                </Link>
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-10 transition-all hover:shadow-md"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-background border-t-transparent rounded-full"></div>
                                        <span>Đang đăng nhập...</span>
                                    </div>
                                ) : "Đăng nhập"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
