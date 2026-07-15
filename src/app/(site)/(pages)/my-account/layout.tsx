import Breadcrumb from "@/components/Common/Breadcrumb";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import Sidebar from "./_component/sidebar";

export const metadata: Metadata = {
  title: "My Account | Suncity Pallets Liquidation Store",
  description:
    "Manage your Suncity Pallets Liquidation Store account, settings, addresses, and view your orders.",
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Breadcrumb title={"My Account"} pages={["my account"]} />

      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col xl:flex-row gap-7.5">
            <Sidebar />
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
