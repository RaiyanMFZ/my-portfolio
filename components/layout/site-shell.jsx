"use client";

import { usePathname } from "next/navigation";
import { HeaderTabs } from "@/components/ui/header-tabs";
import { SimpleFooter } from "@/components/ui/simple-footer";

export function SiteShell({ children }) {
  const pathname = usePathname();
  const isLegalPage = pathname?.startsWith("/legal");

  return (
    <>
      {!isLegalPage && <HeaderTabs />}
      <main className="relative">{children}</main>
      {!isLegalPage && <SimpleFooter />}
    </>
  );
}
