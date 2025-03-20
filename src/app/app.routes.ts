import { Routes } from '@angular/router';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { HistoryComponent } from './main/history/history.component';
import { StatisticsComponent } from './main/statistics/statistics.component';
import { InformationComponent } from './main/information/information.component';
import { LogoutComponent } from './main/logout/logout.component';
import { SettingsComponent } from './main/settings/settings.component';
import { UserComponent } from './header/user/user.component';
import { BucketComponent } from './header/bucket/bucket.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'dashboard', 
        pathMatch: 'full' 
    },
    {
        path : 'dashboard',
        component : DashboardComponent,
        title : 'Dashboard'
    },
    {
        path : 'history',
        component : HistoryComponent,
        title : 'History Board'
    },
    {
        path : 'statistics',
        component : StatisticsComponent,
        title : 'Statistics'
    },
    {
        path : 'information',
        component : InformationComponent,
        title : 'information'
    },
    {
        path : 'logout',
        component : LogoutComponent,
        title : 'logout'
    },
    {
        path : 'settings',
        component : SettingsComponent,
        title : 'settings'
    },
    {
        path : 'user',
        component : UserComponent,
        title : 'user'
    },
    {
        path : 'bucket',
        component : BucketComponent,
        title : 'bucket'
    }
];
