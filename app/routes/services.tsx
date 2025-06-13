import { Outlet } from "@remix-run/react";

export default function ServicesLayout() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Outlet />
    </div>
  );
}
