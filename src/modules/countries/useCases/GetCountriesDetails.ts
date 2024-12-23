import { Request, Response } from "express";
import axios from "axios";

class CountryDetail {
    async GetCountryDetails(request: Request, response: Response): Promise<Response> {
        try {
            const { name } = request.query;
            console.log(name);
            const { data: countryDetails } = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
            return response.status(200).json(countryDetails);
        } catch (error) {
            return response.status(500).json({
                message: "Failed to fetch country details"
            });
        }
    }
}

export { CountryDetail };
