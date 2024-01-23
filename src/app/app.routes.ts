import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WorksComponent } from './components/works/works.component';
import { NgModule } from '@angular/core';
import { CenzorComponent } from './components/works/cenzor/cenzor.component';
import { UserListComponent } from './components/works/user-list/user-list.component';
import { TaskListComponent } from './components/works/task-list/task-list.component';
import { BrowserModule } from '@angular/platform-browser';

export const routes: Routes = [

    { path: 'home', pathMatch: 'full', component: HomeComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    {
        path: 'works', component: WorksComponent, children: [
            { path: 'cenzor', component: CenzorComponent },
            { path: 'userlist', component: UserListComponent },
            { path: 'tasklist', component: TaskListComponent },]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes), RouterLinkActive, BrowserModule,],
    providers: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }