import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form/contact-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'prefix' },
  { path: 'contact', component: ContactFormComponent },
  {
    path: 'result/:name',
    loadChildren: () => import('./result/result.module').then(m => m.ResultModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
