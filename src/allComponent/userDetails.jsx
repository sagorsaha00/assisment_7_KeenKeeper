import { useLocation } from "react-router-dom";
import Header from "./header";
import Call from "./call";
import Footer from "./footer";
export default function UserData( ) {
  const { state } = useLocation();
  const { user } = state;
  console.log("user", user);

  return (
    <>
      <Header></Header>
      <Call user={user} />
      <Footer></Footer>
      
    </>
  );
}
