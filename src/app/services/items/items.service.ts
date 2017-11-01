import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ApiConfiguration } from '../../configuration/api.config';
import { Item } from '../../model/item';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemsService {

    constructor(private http: Http) { }

    getHeroEquippedItems(battletag: string, heroId: number, region: string): Observable<Item[]> {
        let url = ApiConfiguration.Url + '/profile/' + battletag + '/hero/' + heroId + '?locale=' + region + '&apikey=' + ApiConfiguration.Key;
        return this.http.get(url)
            .map((response: Response) => {
                let hero = response.json();
                let items = new Array<Item>();
                Object.keys(hero.items).forEach((propertyName: any) => {
                    let item = hero.items[propertyName];
                    items.push(new Item(item.id, item.name, item.displayColor, item.icon, propertyName));
                });
                return items;
            });
    }


}
