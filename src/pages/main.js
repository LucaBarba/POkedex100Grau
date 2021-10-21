import Navbar from "../components/navbar";

import links from "../resources/links";

function Main() {
  return (
    <>
      <Navbar links={[links.register, links.login]} />
      <h2>Main</h2>
    </>
  );
}

export default Main;
