import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EntityService } from '../entities-relationship.service';

@Component({
  selector: 'app-parent-entity',
  templateUrl: './parent-entity.component.html',
  styleUrls: ['./parent-entity.component.css']
})
export class ParentEntityComponent implements OnInit {
  parentEntities: any;

  constructor(
    private entityService: EntityService,
    private router: Router) { }

  getParentEntities() {
    this.entityService.getParents()
      .then(parentEntities => this.parentEntities = parentEntities);
  }

  ngOnInit(): void {
    this.getParentEntities();
  }


}
