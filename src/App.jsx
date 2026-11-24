import useRoute from "./hooks/useRoute";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import Leadership from "./pages/Leadership";
import "./index.css";

export default function App() {
  const route = useRoute();
  const m = route.match(/^\/project\/(\d+)/);
  let page = <Home />;
  if (m) page = <ProjectPage id={m[1]} />;
  else if (route === "/leadership") page = <Leadership />;
  return (<><Nav route={route} /><main>{page}</main><Footer /></>);
}