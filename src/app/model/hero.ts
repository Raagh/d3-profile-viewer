import { Item } from "./item";
import { ApiConfiguration } from "../configuration/api.config";


export class Hero {

    public constructor(id: number, name: string, heroClass: string, level: number,
        gender: number, season: boolean, isDead: boolean, kills: number) {

        this.Id = id;
        this.Name = name;
        this.Class = heroClass;
        this.Level = level;
        this.Gender = gender == 0 ? "male" : "female";
        this.Season = season;
        this.IsDead = isDead;
        this.Kills = kills;
        this.PortraitUrl = this.getPortraitUrl(heroClass, this.Gender);
    }

    public Id: number;
    public Name: string;
    public Class: string;
    public Level: number;
    public Gender: string;
    public Season: boolean;
    public IsDead: boolean;
    public Kills: number;
    public LastUsed: Date;
    public EquippedItems: Item[];
    public PortraitUrl: string;


    private getPortraitUrl(_class: string, _gender: string): string {
        return ApiConfiguration.IconPortraitsUrl + _class.replace("-", "") + '_' + _gender + '.png';
    }

}

