import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecepieDetailComponent } from './components/recepies/recepie-detail/recepie-detail.component';
import { RecepieStartComponent } from './components/recepies/recepie-detail/recepie-start/recepie-start.component';
import { RecepiesComponent } from './components/recepies/recepies.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'recipe' },
  { path: 'recipe', component: RecepiesComponent, children: [
    { path: '', component: RecepieStartComponent },
    { path: ':id', component: RecepieDetailComponent },
  ] },
  { path: 'shopping', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
