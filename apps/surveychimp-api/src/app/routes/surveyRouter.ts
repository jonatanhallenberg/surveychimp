import { Router } from 'express';
import { addSurvey, addResponseToSurvey, getSurveyById, getSurvey } from '@surveychimp/surveychimp-lib';
import { body, param, validationResult } from 'express-validator';
import { nextTick } from 'process';

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
router.get(
    '/survey',
    async (req, res, next) => {
        try {
            //validation
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            //do stuff if valid input data
            const survey = await getSurvey();
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
    const survey = await addResponseToSurvey("6358372abe8f15a9145ce5a7", {
        rating: 7,
        comment: "hello guys!"
    });
    res.json(survey);
});


export default router;