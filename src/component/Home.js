import Title from './Title';
import Introduction from './Introduction';
import News from './News';
import Research from './Research';
import Members from './Members';
import Papers from './Papers';
import { OpenLabLink } from './OpenLab';

export default function Home(props) {
    return (
        <>
            <Title language={props.language} />
            <Introduction language={props.language} />
            <News language={props.language} onHome={true} />
            <OpenLabLink language={props.language} />
            <Research language={props.language} onHome={true} />
            <Members language={props.language} onHome={true} />
            <Papers language={props.language} onHome={true} />
        </>
    );
}
