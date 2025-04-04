import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("pages/home.tsx"),
  route("register", "pages/auth/register.tsx"),

  layout("pages/auth/layout.tsx", [route("login", "pages/auth/login.tsx", {})]),
] satisfies RouteConfig;
