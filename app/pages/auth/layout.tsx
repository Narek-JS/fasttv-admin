import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div>
      <h2>AuthLayout</h2>
      <Outlet />
    </div>
  );
}
