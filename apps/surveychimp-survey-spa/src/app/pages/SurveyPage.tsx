import { useParams } from 'react-router-dom';

const SurveyPage = () => {
    const { surveyId } = useParams();
    return (<>
        <h1>Survey</h1>
        <p>{surveyId}</p>
    </>)
}

export default SurveyPage;