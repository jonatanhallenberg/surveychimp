import SurveyModel, { ISurveyResponse } from './SurveyModel';

export const addResponseToSurvey = async (surveyId: string, surveyResponse: ISurveyResponse) => {
    const survey = await SurveyModel.findById(surveyId);
    if (!survey) {
        throw 404;
    }

    survey.response = surveyResponse;
    return survey;
}