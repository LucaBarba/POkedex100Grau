import Navbar from "../components/navbar";

import links from "../resources/links";

function Login() {
  return (
    <>
      <Navbar links={[links.register]} />
      <h2>Login</h2>
    </>
  );
}

export default Login;
