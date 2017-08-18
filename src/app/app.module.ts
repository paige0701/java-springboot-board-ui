import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";
import {environment} from "../environments/environment";
import {HttpModule} from "@angular/http";


// app module 은 이 프로젝트에 root이다. 여기서 부터 프로잭트가 시작된다

// @Angular/cli 안에 있는 routes 를 이용해서 경로를 잡아준다.
// const 로 변수를 선언한다. app module 에서 하위 모듈은 LayoutModule로 잡아두고 path 를 비워두면 localhost:4200 으로 들어가면 바로
// layout module이 호출 된다
const appRoutes: Routes =  [
  { path : '', loadChildren: 'app/layout/layout.module#LayoutModule'}
  ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,


    // @angular-cli 에서 제공하는 RouterModule을 이용하여 위에 선언한 appRoute 를 사용한다고 말하는 것
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
