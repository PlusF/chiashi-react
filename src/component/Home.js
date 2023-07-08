import Title from './Title';
import Introduction from './Introduction';
import News from './News';
import Access from './Access';

export default function Home(props) {
    return (
        <>
            <Title language={props.language} />
            <Introduction language={props.language} />
            <News language={props.language} />
            <Access language={props.language} />
        </>
    );
}
