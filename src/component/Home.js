import Title from './Title';
import Introduction from './Introduction';
import News from './News';
import Research from './Research';
import { OpenLabLink } from './OpenLab';
import Papers from './Papers';

export default function Home(props) {
    return (
        <>
            <Title language={props.language} />
            <Introduction language={props.language} />
            <News language={props.language} scroll={true} />
            <OpenLabLink language={props.language} />
            <Research language={props.language} />
            <Papers language={props.language} scroll={true} />
        </>
    );
}
