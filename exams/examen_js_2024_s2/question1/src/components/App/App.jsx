import './App.css'
import Navbar from '../Navbar/Navbar'
import { Outlet} from "react-router-dom";


const App = () => {

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>

  );
};

export default App
