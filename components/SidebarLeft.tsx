import Link from "next/link";
import { PowerIcon } from "lucide-react";
import Logo from "./Logo";

const SideNavbarLinks = [
  {
    id: 1,
    title: "Getting Started",
    href: "/docs",
    breadcrumb: "/docs/getting-started",
    active: true
  },
  {
    id: 2,
    title: "Installation",
    href: "installation",
    breadcrumb: "/docs/installation"
  },
  {
    id: 3,
    title: "Project Structured",
    href: "project-structured",
    breadcrumb: "/docs/project-structured"
  },
];

export default function SidebarLeft() {
  return (
    <div className="flex h-full flex-col py-5 border-2 px-10">
      <Link href={"/"} className="underline mb-5 text-sm">
        Back To Website
      </Link>
      <Link href="/">
        <Logo />
      </Link>
      <div className="mt-5 flex flex-col gap-1">
        {SideNavbarLinks.map((item) => (
          <Link className={`${item.active ? "text-blue-700 font-semibold" : ""} text-sm`} key={item.id} href={item.href}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
