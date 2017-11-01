import { ApiConfiguration } from "../configuration/api.config";

export class Item {

    public constructor(id: string, name: string, displayColor: string, icon: string, position: string) {
        this.Id = id;
        this.Name = name;
        this.DisplayColor = displayColor;
        this.Position = position;
        this.TooltipUrl = this.getItemTooltipUrl(id, name);
        this.IconUrl = ApiConfiguration.IconItemUrl + icon + '.png';
    }

    public Id: string;
    public Name: string;
    public DisplayColor: string;
    public IconUrl: string;
    public Position: string;
    public TooltipUrl: string;
    public TransmogItem: Item;

    private getItemTooltipUrl(id: string, name: string): string {
        let slugName = name.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g, "").toLowerCase().replace(/ /g, "-");
        return ApiConfiguration.ItemUrl + slugName + "-" + id;
    }

}