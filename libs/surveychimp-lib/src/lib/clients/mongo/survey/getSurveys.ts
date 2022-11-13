import SurveyModel from './SurveyModel';

export const getSurveys = async () => {
    return SurveyModel.find({});
}