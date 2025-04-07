import { NavLink } from "react-router";
import { Image } from "antd";
import logo from "public/svg/logo.svg";

const Logo = () => (
  <NavLink to="/">
    <Image src={logo} alt="Logo" preview={false} height={52} />
  </NavLink>
);

export { Logo };
