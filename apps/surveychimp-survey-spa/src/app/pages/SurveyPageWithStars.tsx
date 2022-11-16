import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getSurveyById from '../../api/getSurveyById';
import { ISurvey } from '@surveychimp/surveychimp-lib';
import ReactStars from 'react-stars'
import useAnalyticsEventTracker from '../hooks/useAnalyticsEventTracker';

const SurveyPage = () => {
    const gaEventTracker = useAnalyticsEventTracker('Rating stars');
    const { surveyId } = useParams();
    const [survey, setSurvey] = useState<ISurvey>()

    useEffect(() => {
        if (surveyId) {
            getSurveyById(surveyId).then(survey => {
                setSurvey(survey);
            })
        } else {
            //Visa upp att id saknas
        }
    }, [])


    return (<>
        <h1>Survey</h1>
        <p>{survey?.recipient.name}</p>
        <ReactStars
            count={5}
            onChange={() => { gaEventTracker('rate') }}
            size={24}
            color2={'#ffd700'} />
    </>)
}

export default SurveyPage;