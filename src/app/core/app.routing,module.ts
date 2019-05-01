import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../components/main/home/home.component';
import { SkillTreeComponent } from '../components/skills/skill-tree/skill-tree.component';
import { AboutUsComponent } from '../components/main/about-us/about-us.component';
// import { SkillsComponent } from '../components/skills/skills.component';
// import { SkillDetailsComponent } from '../components/skills/skill-details/skill-details.component';
// import { SkillAddEditComponent } from '../components/skills/skill-add-edit/skill-add-edit.component';
// import { ProfileComponent } from '../components/profile/profile/profile.component';
// import { ProfileDetailsComponent } from '../components/profile/profile/profile-details/profile-details.component';
// import { ProfileEditComponent } from '../components/profile/profile/profile-edit/profile-edit.component';
// import { ProfileMyStatsComponent } from '../components/profile/profile/profile-my-stats/profile-my-stats.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'tree', component: SkillTreeComponent },
    { path: 'aboutus', component: AboutUsComponent },
    // { path: 'skills/:id', component: SkillsComponent },
    // { path: 'skill-details/:id', component: SkillDetailsComponent },
    // { path: 'skill-add-edit', component: SkillAddEditComponent },
    // { path: 'profile', component: ProfileComponent, children: [
    //     { path: 'profile-details', component: ProfileDetailsComponent},
    //     { path: 'profile-edit', component: ProfileEditComponent},
    //     { path: 'profile-my-stats', component: ProfileMyStatsComponent}
    // ] }
];
 
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {
}