import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { getCurrentUser } from "../services/Auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar user={user} />
        <main className=" bg-[#050709]  flex-1 overflow-auto p-4">
          <SidebarTrigger className="text-white" />
          <span>{children}</span>
        </main>
      </div>
    </SidebarProvider>
  );
}
