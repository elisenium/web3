import vinciLogo from "../Header/image.png"

const Header = ({ course }) => {
  return (
    <div>
      <img src={vinciLogo} alt="logo Vinci"></img>
      <h1>{course}</h1>
    </div>
  );
};

export default Header;