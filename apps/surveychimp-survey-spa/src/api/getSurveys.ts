import { ISurvey } from '@surveychimp/surveychimp-lib';

const getSurveys = async (): Promise<ISurvey[]> => {
    return (await fetch(`/api/survey`)).json();
}

export default getSurveys;