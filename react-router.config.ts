import type { Config } from "@react-router/dev/config";

export default {
  ssr: false, // disable runtime server rendering
  prerender: ["/", "/login"],
} satisfies Config;
