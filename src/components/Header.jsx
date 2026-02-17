import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header>
      <h3>Post App</h3>
      <div>
        {user ? (
          <>
            <span>{user.name}</span>


            
            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              Logout
            </button>
          </>


        ) : (
          <span>Guest User</span>
        )}
      </div>
    </header>
  );
}

export default Header;
