import { Component, Input } from '@angular/core';
import { UserService } from './services/user/user.service';
import { ItemsService } from './services/items/items.service';
import { User } from './model/user';
import { Hero } from './model/hero';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {

	constructor(private userService: UserService, private itemsService: ItemsService) { }

	searchUser: string = 'Raagh-1396';
	userHeroes: Hero[];
	user: User;

	onSearchButtonClick(): void {
		let battletag = this.searchUser;
		let region = "en_US";

		this.userService.getUserInfo(battletag, region).subscribe(
			response => {
				this.user = response;
				this.userHeroes = response.Heroes;
				response.Heroes.forEach((hero, index) => {
					this.itemsService.getHeroEquippedItems(battletag, hero.Id, region).subscribe(
						response => {
							this.userHeroes[index].EquippedItems = response;
						}
					);
				});
			}
		);
	}
}
