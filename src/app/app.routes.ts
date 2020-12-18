import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroeBuscarComponent } from './components/heroe-buscar/heroe-buscar.component';

const ROUTES: Routes = [
    { path: 'home', pathMatch: 'full', component: HomeComponent },
    { path: 'heroes', pathMatch: 'full', component: HeroesComponent },
    { path: 'about', pathMatch: 'full', component: AboutComponent },
    { path: 'notfound', pathMatch: 'full', component: NotfoundComponent },
    { path: 'heroe/:id', pathMatch: 'full', component: HeroeComponent },
    { path: 'heroe-buscar/:termino', pathMatch: 'full', component: HeroeBuscarComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'notfound' }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);