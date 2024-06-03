import { SignedIn } from "@clerk/nextjs";
import Sidebar from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SignedIn>
      <div className="flex h-full w-full">
        <Sidebar />
        {children}
      </div>
    </SignedIn>
  );
};

export default DashboardLayout;
