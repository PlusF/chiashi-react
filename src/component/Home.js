import Title from './Title';
import Introduction from './Introduction';
import News from './News';

export default function Home(props) {
    return (
        <>
            <Title language={props.language} />
            <Introduction language={props.language} />
            <News language={props.language} scroll={true} />
        </>
    );
}
