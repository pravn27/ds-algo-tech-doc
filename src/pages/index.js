import { Redirect } from "@docusaurus/router";

// make default landing page as docs
export default function Home() {
  return (
    <Redirect to="/ds-algo-tech-doc/docs/category/ds--algo-documentations" />
  );
}
