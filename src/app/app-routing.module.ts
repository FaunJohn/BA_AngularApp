import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { IndexComponent} from './index/index.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'test', component: TestComponent },
  { path: 'list', component: ListComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
