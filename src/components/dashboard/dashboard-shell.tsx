import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface DashboardShellProps {
  sidebar: ReactNode;
  header: ReactNode;
  children: ReactNode;
  className?: string;
}

export function DashboardShell({ sidebar, header, children, className }: DashboardShellProps) {
  return (
    <div className={cn("flex min-h-screen bg-background text-foreground", className)}>
      <aside className="hidden border-r bg-muted/40 lg:block lg:w-64 xl:w-72">
        <div className="sticky top-0 flex h-screen flex-col overflow-y-auto p-6">{sidebar}</div>
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
            {header}
          </div>
        </header>
        <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-6 py-6">{children}</main>
      </div>
    </div>
  );
}
