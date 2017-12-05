import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Location } from '@angular/common';


import { EntityService } from '../entities-relationship.service';

@Component({
  selector: 'app-child-entity',
  templateUrl: './child-entity.component.html',
  styleUrls: ['./child-entity.component.css']
})
export class ChildEntityComponent implements OnInit {
  childrenEntities: any;
  id: number;
  title: any;

  constructor(
    private entityService: EntityService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  getChildrenEntities() {
    const _id = this.activatedRoute.snapshot.params['id'];
    this.entityService.getChildren(_id)
      .then(childrenEntities => {
        return this.childrenEntities = childrenEntities, this.title = childrenEntities[0].Parent_Entity_Name;
      });
  }

  ngOnInit(): void {
    this.getChildrenEntities();
  }

  goBack(): void {
    this.location.back();
  }


}
