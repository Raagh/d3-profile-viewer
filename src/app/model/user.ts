import { Hero } from "./hero";

export class User {

    public constructor(battleTag: string, region: string, paragon: number, paragonSeason: number, heroes: Hero[]) {
        this.Battletag = battleTag;
        this.Region = region;
        this.Paragon = paragon;
        this.ParagonSeason = paragonSeason;
        this.Heroes = heroes;
    }

    public Battletag: string;
    public Region: string;
    public Paragon: number;
    public ParagonSeason: number;
    public Heroes: Hero[];

}