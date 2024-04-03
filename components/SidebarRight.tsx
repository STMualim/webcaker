import Link from "next/link";
import { PowerIcon } from "lucide-react";
import Logo from "./Logo";

const SideNavbarLinks = [
  {
    id: 1,
    title: "What is Caker.id",
    href: "#what-is-caker-id",
  },
  {
    id: 2,
    title: "Installation",
    href: "#installation"
  },
  {
    id: 3,
    title: "Project Structured",
    href: "#project-structured"
  },
];

export default function SidebarRight() {
  return (
    <div className="flex h-full flex-col py-5 border-2 px-10">
      <div className="mb-5 text-sm">
        On This Page
      </div>
      <div className="mt-5 flex flex-col gap-1">
        {SideNavbarLinks.map((item) => (
          <Link className="text-sm" key={item.id} href={item.href}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
