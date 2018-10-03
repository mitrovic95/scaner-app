import { ItemService } from 'app/page/item-page/item.service';
import { UserService } from 'app/page/user-page/user.service';
import { MainPageComponent } from './page/main-page/main-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MeniComponentComponent } from './meni-component/meni-component.component';
import { JwtUtilsService } from 'app/service/jwt-utils.service';
import { CanActivateAuthGuard } from 'app/service/can-activate-auth.guard';
import { AuthenticationService } from 'app/service/authentication-service.service';
import { TokenInterceptorService } from 'app/service/token-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'app/login/login.component';
import { PageNotFoundComponent } from 'app/page/page-not-found/page-not-found.component';
import { UserPageComponent } from './page/user-page/user-page.component';
import { ItemPageComponent } from './page/item-page/item-page.component';
import { CompanyPageComponent } from './page/company-page/company-page.component';
import { NewUpdateUserComponent } from './page/user-page/new-update-user/new-update-user.component';
import { NewUpdateItemComponent } from './page/item-page/new-update-item/new-update-item.component';
import { NewUpdateCompanyComponent } from './page/company-page/new-update-company/new-update-company.component';
import { ItemComponent } from './page/item-page/item/item.component';
import { FormComponent } from './forms/form/form.component';
import { UserComponent } from './page/user-page/user/user.component';
import { CompanyComponent } from './page/company-page/company/company.component';
import { CompanyService } from 'app/page/company-page/company.service';
import { NewCompanyComponent } from './page/company-page/new-company/new-company.component';
import { ExcelService } from 'app/page/item-page/excel.service';
import { NewItemComponent } from './page/item-page/new-item/new-item.component';
import { NewUserComponent } from './page/user-page/new-user/new-user.component';
import { ToastModule} from 'ng2-toastr/ng2-toastr';
import { ToastrCustomOptions } from './toastr/ToastrCustomOptions';
import { ToastOptions } from 'ng2-toastr/src/toast-options';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomFormsModule } from 'ng2-validation';
import { ToolbarComponent } from 'app/shared/toolbar/toolbar.component';
import { SidenavComponent } from 'app/shared/sidenav/sidenav.component';
import { FabMenuComponent } from 'app/shared/fab-menu/fab-menu.component';
import { BarcodeModule } from 'app/barcode/barcode.module';
import { CoreModule } from 'app/modules/core.module';
import { MediaStreamComponent } from 'app/barcode/media-stream/media-stream.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'main', component: MainPageComponent },
  { path: 'user-page', component: UserPageComponent},
  { path: 'user/:id', component: UserComponent },
  { path: 'new-user', component: NewUserComponent},
  { path: 'item-page', component: ItemPageComponent},
  { path: 'item/:id', component: ItemComponent },
  { path: 'new-item', component: NewItemComponent},
  { path: 'company-page', component: CompanyPageComponent},
  { path: 'company/:id', component: CompanyComponent},
  { path: 'new-company', component: NewCompanyComponent},
  { path: 'media-stream-barcode', component: MediaStreamComponent},
   {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    ToolbarComponent,
    SidenavComponent,
    FabMenuComponent,
    PageNotFoundComponent,
    MeniComponentComponent,
    UserPageComponent,
    ItemPageComponent,
    CompanyPageComponent,
    NewUpdateUserComponent,
    NewUpdateItemComponent,
    NewUpdateCompanyComponent,
    ItemComponent,
    FormComponent,
    UserComponent,
    CompanyComponent,
    NewCompanyComponent,
    NewItemComponent,
    NewUserComponent,
    MediaStreamComponent
  ],
  imports: [
BrowserModule,
    HttpClientModule,
    FormsModule,
    ToastModule,
    FormsModule,
    CustomFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    FormsModule,
    BarcodeModule,
    CoreModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false
      }
    )
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
  AuthenticationService,
  UserService,
  ItemService,
  CompanyService,
  ExcelService,
  CanActivateAuthGuard,
  JwtUtilsService,
  {
    provide: ToastOptions,
    useClass: ToastrCustomOptions,
  },
  {
    provide: ToastsManager,
    useClass: ToastsManager
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
