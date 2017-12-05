import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Location } from '@angular/common';

import { LimitsService } from './entity-limits.service';

@Component({
  selector: 'app-entity-limits',
  templateUrl: './entity-limits.component.html',
  styleUrls: ['./entity-limits.component.css']
})
export class EntityLimitsComponent implements OnInit {
  limits: any;
  title: any;

  constructor(
    private limitsService: LimitsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  getEntityLimits() {
    const _id = this.activatedRoute.snapshot.params['id'];
    this.limitsService.getLimits(_id)
      .then(limits => {
        return this.limits = limits;
      });
  }

  ngOnInit(): void {
    this.getEntityLimits();
  }

  goBack(): void {
    this.location.back();
  }

}
