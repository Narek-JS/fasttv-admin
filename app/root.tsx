import type { Route } from "./+types/root";
import {
  isRouteErrorResponse,
  ScrollRestoration,
  useNavigation,
  Scripts,
  Outlet,
  Links,
  Meta,
} from "react-router";
import { ConfigProvider, App as AntApp } from "antd";
import { THEME_CONFIG } from "./constants/theme";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./store";

import "./i18n";
import "./styles/index.css";
import "@ant-design/v5-patch-for-react-19";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
    rel: "preconnect",
  },
  {
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    rel: "stylesheet",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ConfigProvider theme={THEME_CONFIG} direction="ltr">
          <AntApp>
            <Provider store={store}>
              {children}
              <ScrollRestoration />
              <Scripts />
            </Provider>
          </AntApp>
        </ConfigProvider>
      </body>
    </html>
  );
}

export default function App() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-4 flex-1 overflow-auto">
          {isLoading ? "Loading..." : <Outlet />}
        </main>
      </div>
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
