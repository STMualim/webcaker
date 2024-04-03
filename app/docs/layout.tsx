import SidebarLeft from "@/components/SidebarLeft";
import SideNav from "@/components/SidebarLeft";
import SidebarRight from "@/components/SidebarRight";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs",
  description: "Cari Kerja App docs",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SidebarLeft />
      </div>
      <div className="flex-grow md:overflow-y-auto">{children}</div>
      <div className="w-full flex-none md:w-64">
        <SidebarRight />
      </div>
    </div>
  );
}
