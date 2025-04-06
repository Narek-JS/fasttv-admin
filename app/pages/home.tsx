import { Link, NavLink, useNavigation } from "react-router";
import type { Route } from "./+types/home";
import { ROUTES } from "~/constants/routes";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  return (
    <div>
      <p>Home</p>

      <Link to={ROUTES.LOGIN}>
      go to login
        {/* {({ isPending }) => <span>go to login{isPending && "Loading"}</span>} */}
      </Link>
    </div>
  );
}
