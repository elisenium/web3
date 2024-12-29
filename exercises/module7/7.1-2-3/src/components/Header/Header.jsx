import { useNavigate } from 'react-router-dom';
import "./Header.css";


const Header = ({urlLogo, children}) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <img src={urlLogo} alt="logo" className="logo" />
      <div>{children}</div>
      <nav className="btn">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/cinema")}>Cinema</button>
        <button onClick={() => navigate("/movielist")}>Movie List</button>
      </nav>
    </header>
  );
};

export default Header;
