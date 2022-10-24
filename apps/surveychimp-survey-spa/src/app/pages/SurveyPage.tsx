import { useParams } from 'react-router-dom';

const SurveyPage = () => {
    const { surveyId } = useParams();
    return (<h1>{surveyId}</h1>)
}

export default SurveyPage;