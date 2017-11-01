import { Injectable } from '@angular/core';
import { ApiConfiguration } from '../../configuration/api.config';
import { User } from '../../model/user';
import { Hero } from '../../model/hero';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUserInfo(battletag: string, region: string): Observable<User> {
    let url = ApiConfiguration.Url + '/profile/' + battletag + '/?locale=' + region + '&apikey=' + ApiConfiguration.Key;
    return this.http.get(url)
      .map((response: Response) => {
        let user = response.json();
        return new User(battletag, region, user.paragonLevel, user.paragonLevelSeason, user.heroes.map(
          hero => new Hero(hero.id, hero.name, hero.class, hero.level, hero.gender, hero.seasonal, hero.dead, hero.kills.elites)
        ));
      });
  }

}
