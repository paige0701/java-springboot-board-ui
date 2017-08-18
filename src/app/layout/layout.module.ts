import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes} from "@angular/router";

const layoutRoute: Routes = [
  { path : '', component: LayoutComponent,
  children : [
    { path : '', redirectTo : 'posts', pathMatch: 'full'},
    { path : 'posts', loadChildren: 'app/posts/posts.module#PostsModule'}
  ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(layoutRoute)
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
