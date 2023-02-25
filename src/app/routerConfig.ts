
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BattlegroundComponent } from './components/battleground/battleground.component';
import { BookOfCombatantsComponent } from './components/book-of-combatants/book-of-combatants.component';
import { HomeComponent } from './components/home/home.component';
import { RulebookComponent } from './components/rulebook/rulebook.component';

const appRoutes: Routes = [
  { path: '', 
    component: HomeComponent 
  }, {
    path: 'search/:search-term:',
    component: HomeComponent
  }, {
    path: 'battleground',
    component: BattlegroundComponent
  }, {
    path: 'bookofcombatants',
    component: BookOfCombatantsComponent
  }, {
    path: 'rulebook',
    component: RulebookComponent
  }, 

];
export default appRoutes;