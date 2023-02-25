import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import appRoutes from './routerConfig';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import {MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { DragDropModule } from '@angular/cdk/drag-drop';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DieRulesComponent } from './components/die-rules/die-rules.component';
import { ParticipantsComponent } from './components/participants/participants.component';
import { HomeComponent } from './components/home/home.component';
import { BookOfCombatantsComponent } from './components/book-of-combatants/book-of-combatants.component';
import { BattlegroundComponent } from './components/battleground/battleground.component';
import { RulebookComponent } from './components/rulebook/rulebook.component';
import { ParticipantsListItemComponent } from './components/participants-list-item/participants-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SearchBarComponent,
    DieRulesComponent,
    ParticipantsComponent,
    HomeComponent,
    BookOfCombatantsComponent,
    BattlegroundComponent,
    RulebookComponent,
    ParticipantsListItemComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    FormsModule ,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    DragDropModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
