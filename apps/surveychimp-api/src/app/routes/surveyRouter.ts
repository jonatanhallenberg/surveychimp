import { Router } from 'express';
import { addSurvey, addResponseToSurvey, getSurveyById } from '@surveychimp/surveychimp-lib';
import { body, param, validationResult } from 'express-validator';
import { nextTick } from 'process';
//Hej säger Mackan
const router = Router();

router.get(
    '/survey/:surveyId',
    param("surveyId").isMongoId(),
    async (req, res, next) => {
        try {
            //validation
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            //do stuff if valid input data
            const survey = await getSurveyById(req.params.surveyId);
            res.json(survey);
        } catch (err) {
            next(err);
        }

    });

router.post('/survey', async (req, res) => {
    const survey = await addSurvey({
        recipient: {
            name: "Jonatan",
            mobileNumber: "+46 72 300 36 42"
        }
    });
    res.json(survey);
});

router.patch('/survey/:surveyId', async (req, res) => {
    const survey = await addResponseToSurvey("6354fa3e707d56d9524fd2f3", {
        rating: 3
    });
    res.json(survey);
});


export default router;