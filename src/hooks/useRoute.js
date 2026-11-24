import { useEffect, useState } from "react";
const get = () => window.location.hash.replace(/^#/, "") || "/";
export default function useRoute() {
  const [route, setRoute] = useState(get);
  useEffect(() => {
    const on = () => { setRoute(get()); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return route;
}
