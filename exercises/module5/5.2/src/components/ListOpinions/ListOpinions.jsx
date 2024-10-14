import { useContext } from 'react';
import { OpinionsContext } from '../../contexts/opinionsContext';
import '../../index.css'

const ListOpinions = () => {
    const { sortedOpinions, voteOpinion } = useContext(OpinionsContext);

    return (
        <div>
            <h2>Opinions</h2>
            <ul>
                {sortedOpinions.map((opinion) => (
                    <li key={opinion.id}>
                        {opinion.text} : {opinion.votes}
                        <button onClick={() => voteOpinion(opinion.id)}>Vote</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListOpinions;