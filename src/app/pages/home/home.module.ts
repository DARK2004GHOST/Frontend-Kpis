import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";
import { SidebarComponent } from "../../general/shared/sidebar/sidebar.component";
import { HeaderComponent } from "../../general/shared/header/header.component";
import { FooterComponent } from "../../general/shared/footer/footer.component";
import { RolComponent } from './rol/rol.component';
import { AreaComponent } from './area/area.component';
import { PermisosComponent } from './permisos/permisos.component';

@NgModule({
    declarations: [
        HomeComponent,
        DashboardComponent,
        UsuariosComponent,        
        SidebarComponent,
        HeaderComponent,
        FooterComponent,
        RolComponent,
        AreaComponent,
        PermisosComponent
    ],
    imports: [
        HomeRoutingModule,
        CommonModule,
        HttpClientModule,
        RouterModule
    ],
    providers: [
        BrowserModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }