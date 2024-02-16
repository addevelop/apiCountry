import axios, { AxiosResponse } from "axios";
import { url } from "../constantes/apiInformations";
import express, { Response, Request, NextFunction } from "express";
import { MinimalCountryData } from "../interfaces/MinimalCountryData";
import { ApiError } from "../errors/ApiError";
const app = express();

/**
 * @swagger
 * tags:
 *  name: Country
 *  description: Opérations à la récupération d'information sur le pays
 */

export class InformationController{

    /**
     * @swagger
     * information/byname/{pays}:
     *  get: 
     *      summary: Obtient les informations du pays.
     *      description: Recupérer les informations du pays.
     *      tags: [Country]
     *      parameters:
     *          - in: path
     *            name: pays
     *            required: true
     *            description: Nom du pays.
     *            schema:
     *              type: string
     *      responses:
     *          200: 
     *            description: Succès. Retourne les données du pays.
     *          400:
     *            description: Erreur lors de la récupération des données du pays.
     * 
     */
    static async getCountryByName(req: Request, res: Response, next: NextFunction):Promise<void>
    {
        const name: string = req.params.name;
        try
        {
            const response: AxiosResponse = await axios.get(`${url}name/${name}`)
            const data = response.data[0];
            console.log(response.data.name);

            const minimalData: MinimalCountryData = {
                country: data.name.common,
                capital: data.capital[0],
                continant: data.continents[0],
                flag: data.flags.png

            }
            res.json(minimalData);
        }
        catch(error)
        {
            const err = new ApiError("erreur dans le getCountryByName");
            res.status(404).json({error: err, message: err.message, name: name});

        }
    }

    /**
     * @swagger
     * information/bycapital/{capital}:
     *  get: 
     *      summary: Obtient les informations du pays.
     *      description: Recupérer les informations du pays.
     *      tags: [Country]
     *      parameters:
     *          - in: path
     *            name: capital
     *            required: true
     *            description: Nom du pays.
     *            schema:
     *              type: string
     *      responses:
     *          200: 
     *            description: Succès. Retourne les données du pays.
     *          400:
     *            description: Erreur lors de la récupération des données du pays.
     * 
     */
    static async getCountryByCapital(req: Request, res: Response, next: NextFunction):Promise<void>
    {
        const capital: string = req.params.capital;
        try
        {
            const response: AxiosResponse = await axios.get(`${url}capital/${capital}`)
            const data = response.data[0];

            const minimalData: MinimalCountryData = {
                country: data.name.common,
                capital: data.capital[0],
                continant: data.continents[0],
                flag: data.flags.png

            }
            res.json(minimalData);
        }
        catch(error)
        {
            const err = new ApiError("erreur dans le getCountryByCapital");
            res.status(404).json({error: err, message: err.message});

        }
    }

    /**
     * @swagger
     * information/bycode/{code}:
     *  get: 
     *      summary: Obtient les informations du pays.
     *      description: Recupérer les informations du pays.
     *      tags: [Country]
     *      parameters:
     *          - in: path
     *            name: code
     *            required: true
     *            description: Nom du pays.
     *            schema:
     *              type: string
     *      responses:
     *          200: 
     *            description: Succès. Retourne les données du pays.
     *          400:
     *            description: Erreur lors de la récupération des données du pays.
     * 
     */
    static async getCountryByCode(req: Request, res: Response, next: NextFunction):Promise<void>
    {
        const code: string = req.params.code;
        try
        {
            const response: AxiosResponse = await axios.get(`${url}alpha/${code}`)
            const data = response.data[0];

            const minimalData: MinimalCountryData = {
                country: data.name.common,
                capital: data.capital[0],
                continant: data.continents[0],
                flag: data.flags.png

            }
            res.json(minimalData);
        }
        catch(error)
        {
            const err = new ApiError("erreur dans le getCountryByCode");
            res.status(404).json({error: err, message: err.message});

        }
    }


}

