import vinciLogo from "../Header/image.png"


const Header = (props) => {
    return (
      <div>
        <img src={vinciLogo} alt="Logo HE Vinci"></img>
        <h1>{props.course}</h1>
      </div>
    )
  }
export default Header;