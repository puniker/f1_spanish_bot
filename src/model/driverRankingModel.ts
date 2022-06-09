import { DriverRankingResponse, DriversRankingInterface } from "../interfaces/DriversRankingInterfaces";

interface driversRanking {
    name: string;
    points: number;
    backgroundColor: string;
    textColor: string;
    teamImage?: string;
}

export class DriverRankingModel {

    public season: string;
    public drivers: driversRanking[] = [];

    constructor(data: DriversRankingInterface) {
        this.season = data.parameters.season;
        data.response.map((item: DriverRankingResponse) => {
            this.drivers.push({
                name: item.driver.name,
                points: item.points,
                backgroundColor: 'red',
                textColor: 'white'
            });
        })
    }

}