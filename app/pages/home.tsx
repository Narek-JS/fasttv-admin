import { NavLink, useNavigation } from "react-router";
import type { Route } from "./+types/home";
import { ROUTES } from "~/constants/routes";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  console.log;

  return (
    <div>
      <p>Home</p>

      <NavLink to={ROUTES.LOGIN}>
        {({ isPending }) => <span>Home link {isPending && "Loading"}</span>}
      </NavLink>
    </div>
  );
}
