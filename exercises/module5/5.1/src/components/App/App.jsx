import BadButton from "../Button/BadButton";
import GoodButton from "../Button/GoodButton";
import OkButton from "../Button/OkButton";
import ResetButton from "../Button/ResetButton";
import { ProviderWrapper } from "../../contexts/counterContext";

const App = () => {
  return (
    <ProviderWrapper>
      <ul>
        <li>
          <span><GoodButton /></span> 
        </li>
        <li>
          <span><OkButton /></span> 
        </li>
        <li>
          <span><BadButton /></span> 
        </li>
      </ul>
      <ResetButton />
    </ProviderWrapper>
  );
};

export default App;