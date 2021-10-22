import Navbar from "../components/navbar";

import links from "../resources/links";

function Profile() {
  return (
    <>
      <Navbar links={[links.logout]} />
      <h1>Profile</h1>
    </>
  );
}

export default Profile;
