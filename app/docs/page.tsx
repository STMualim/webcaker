import React from "react";

// import {
//   ResizableHandle,
//   ResizablePanel,
//   ResizablePanelGroup,
// } from "@/components/ui/resizable";
// import Logo from "@/components/Logo";

const breadcrumb = "docs > getting-started";

export default function Page() {
  return (
    <main className="p-5">
      {/* breadcrumb */}
      <span className="text-sm text-gray-500">{breadcrumb}</span>
      <h1 className="mt-3 text-2xl font-semibold">Introduction</h1>
      <p className="mt-2 text-slate-700 text-base">Welcome to the Caker.id documentation!</p>
    </main>
  );
}
