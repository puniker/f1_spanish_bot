import { DriverRankingResponse, DriversRankingInterface } from "../interfaces/DriversRankingInterfaces";
import { getTemplateColor, PrintColorInterface } from "../utils/getPrintColor";

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
            const colors: PrintColorInterface = getTemplateColor(item.team.id);
            this.drivers.push({
                name: item.driver.name,
                points: (item.points) ? item.points : 0,
                backgroundColor: colors.backgroundColor,
                textColor: colors.textColor,
            });
        })
    }

}