import express, { Router, Request, Response, NextFunction } from "express";
import { InformationController } from '../controllers/informationsController';
let router: Router = express.Router();

router.get('/byname/:name', async(req: Request, res: Response, next: NextFunction) => {
    InformationController.getCountryByName(req, res, next);
});

router.get('/bycapital/:capital', async(req: Request, res: Response, next: NextFunction) => {
    InformationController.getCountryByCapital(req, res, next);
});

router.get('/bycodecountry/:code', async(req: Request, res: Response, next: NextFunction) => {
    InformationController.getCountryByCode(req, res, next);
});

module.exports = router;