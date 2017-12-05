import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <img src="assets/img/investec-logo.png" height="42" width="70">
    <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
    <span class="navbar-toggler-icon"></span>
  </button>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}

    // <div class="collapse navbar-collapse mr-sm-2" id="navbarSupportedContent">
    //   <ul class="navbar-nav mr-auto">
    //     <li class="nav-item">
    //       <a class="nav-link" routerLink="/parententities">Entity Relationships</a>
    //     </li>
    //     <li class="nav-item">
    //       <a class="nav-link" routerLink="/entitylimits">Entity Limits</a>
    //     </li>
    //   </ul>
    // </div>
