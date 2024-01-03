import { useContext } from "react";
import { userDataContext } from "../App";

function AppHeader() {
  const userNameContext = useContext(userDataContext);

  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {userNameContext.user.username}</h2>
    </div>
  );
}

export default AppHeader;
