import Navbar from "../components/navbar";
import links from "../resources/links";

function Register() {
  return (
    <>
      <Navbar links={[links.login]} />
      <h2>Register</h2>
    </>
  );
}

export default Register;
