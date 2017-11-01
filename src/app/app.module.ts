import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UserService } from './services/user/user.service';
import { ItemsService } from './services/items/items.service';
import { Http, HttpModule } from '@angular/http';
import { HeroDisplayComponent } from './components/hero-display/hero-display.component';
import { FormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		AppComponent,
		HeroDisplayComponent
	],
	imports: [
		NgbModule.forRoot(),
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [
		UserService,
		ItemsService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
