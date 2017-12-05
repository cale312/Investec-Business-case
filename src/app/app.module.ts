import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { EntityService } from './entities-relationship.service';
import { LimitsService } from './entity-limits/entity-limits.service';

import { AppComponent } from './app.component';
import { ParentEntityComponent } from './parent-entity/parent-entity.component';
import { ChildEntityComponent } from './child-entity/child-entity.component';
import { EntityLimitsComponent } from './entity-limits/entity-limits.component';


@NgModule({
  declarations: [
    AppComponent,
    EntityLimitsComponent,
    ParentEntityComponent,
    ChildEntityComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    EntityService,
    LimitsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
