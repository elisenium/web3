import { OpinionsProvider } from '../../contexts/opinionsContext';
import ListOpinions from '../ListOpinions/ListOpinions';
import AddOpinion from '../AddOpinion/AddOpinion';

const App = () => {
    return (
        <OpinionsProvider>
            <div>
                <ListOpinions />
                <AddOpinion />
            </div>
        </OpinionsProvider>
    );
};

export default App;