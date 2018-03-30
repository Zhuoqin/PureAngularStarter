import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CanDeactivateGuard} from './can-deactivate-guard.service';
import {CarZoneComponent} from './car-zone.component';


const appRoutes: Routes = [
    {
        path: 'zone',
        component: CarZoneComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: true, // <-- debugging purposes only
            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
        CanDeactivateGuard,
    ]
})
export class AppRoutingModule {
}
