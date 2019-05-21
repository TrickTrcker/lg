import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule,ReactiveFormsModule  } from "@angular/forms";
import { HeaderComponent } from "./components/layout/header/header.component";
import { HomeComponent } from "./components/main/home/home.component";
import { FooterComponent } from "./components/layout/footer/footer.component";

import { AppRoutingModule, routes } from "./core/app.routing,module";
import { RouterModule } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Interceptor } from "./core/interceptor";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { MessageService } from "primeng/components/common/messageservice";
import { ToastModule } from "primeng/toast";
import { TokenStorage } from "./core/token.storage";
import { HeaderSliderComponent } from "./components/layout/header-slider/header-slider.component";
import { NgxPageScrollCoreModule } from "ngx-page-scroll-core";
import { NgxPageScrollModule } from "ngx-page-scroll";
import {TabViewModule} from 'primeng/tabview';
import {DialogModule} from 'primeng/dialog';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule,
  MatDatepickerModule,
  DateAdapter,
  MatNativeDateModule,
  MatTabsModule,
  MatDividerModule,
  MatDialogModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatExpansionModule
} from "@angular/material";
import { AttributePipe } from './pipes/attribute.pipe';
import { ConfirmDialogComponent } from "./components/utils/confirm-dialog/confirm-dialog.component";
import { AboutUsComponent } from './components/main/about-us/about-us.component';
import { SkillsTreeComponent } from "./components/main/skills-tree/skills-tree.component";
import { SkillDetailsComponent } from './components/main/skill-details/skill-details.component';
import { CommonService } from './services/common.service';
import { ProfileDetailsComponent } from './components/main/profile-details/profile-details.component';
import { StartedSkillsComponent } from './components/main/started-skills/started-skills.component';
@NgModule({
  declarations: [
    AppComponent,
    AttributePipe,
    ConfirmDialogComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    HeaderSliderComponent,
    AboutUsComponent,
    SkillsTreeComponent,
    SkillDetailsComponent,
    ProfileDetailsComponent,
    StartedSkillsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatDividerModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    HttpClientModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    MatDialogModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    TabViewModule,
    DialogModule,
    ScrollPanelModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    MessageService,
    TokenStorage,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
