"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";

export default function ClearFilters() {
  const router = useRouter();
  const pathname = usePathname() || "";

  function handleClear() {
    router.replace(pathname, { scroll: false });
  }

  return (
    <div className="px-5 py-4 bg-white rounded-lg shadow-1">
      <div className="flex items-center justify-between">
        <p>Filters:</p>
        <button className="text-blue" onClick={handleClear}>
          Clean All
        </button>
      </div>
    </div>
  );
}
