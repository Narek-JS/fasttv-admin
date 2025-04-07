import { NavLink } from "react-router";
import { ROUTES } from "~/constants/routes";

export default function Home() {
  return (
    <div>
      <p>Home</p>
      <NavLink to={ROUTES.LOGIN}>
        {({ isPending }) => <span>go to login{isPending && "Loading"}</span>}
      </NavLink>
    </div>
  );
}
