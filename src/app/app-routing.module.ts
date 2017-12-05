import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParentEntityComponent } from './parent-entity/parent-entity.component';
import { ChildEntityComponent } from './child-entity/child-entity.component';
import { EntityLimitsComponent } from './entity-limits/entity-limits.component';

const routes: Routes = [
    { path: '', redirectTo: '/parententities', pathMatch: 'full' },
    { path: 'parententities', component: ParentEntityComponent },
    { path: 'childrentities/:id', component: ChildEntityComponent },
    { path: 'entitylimits/:id', component: EntityLimitsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
