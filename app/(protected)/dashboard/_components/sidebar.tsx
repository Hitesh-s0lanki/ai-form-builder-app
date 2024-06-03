"use client";

import CreateNewForm from "@/components/create-new-form-button";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  LibraryBig,
  LineChart,
  MessageSquare,
  Music,
  Settings,
  Shield,
  VideoIcon,
} from "lucide-react";
import { Montserrat, Raleway } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const montserrat = Raleway({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "My Form",
    icon: LibraryBig,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Responses",
    icon: MessageSquare,
    href: "/responses",
    color: "text-violet-500",
  },
  {
    label: "Analytics",
    icon: LineChart,
    href: "/analytics",
    color: "text-pink-700",
  },
  {
    label: "Upgrade",
    icon: Shield,
    href: "/upgrade",
    color: "text-orange-700",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 p-4 flex flex-col h-full w-72 border-r justify-between ">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            Form Builder
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-md group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-muted-foreground/20 rounded-lg transition",
                pathname === route.href
                  ? " bg-muted-foreground/20"
                  : "bg-white hover:bg-muted-foreground/20"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full gap-5 items-center justify-center">
        <CreateNewForm />
        <Progress className="h-3" value={2} max={3} />
        <h2>2 Out of 3 File Created</h2>
        <p className=" text-center text-sm">
          Upgrade your account to access unlimited File
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
