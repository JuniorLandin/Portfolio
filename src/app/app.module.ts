import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogProjectsComponent } from './modules/portfolio/components/dialog/dialog-projects/dialog-projects.component';
import { ExperiencesComponent } from './modules/portfolio/components/experiences/experiences.component';
import { HeaderComponent } from './modules/portfolio/components/header/header.component';
import { KnowledgeComponent } from './modules/portfolio/components/knowledge/knowledge.component';
import { ProjectsComponent } from './modules/portfolio/components/projects/projects.component';
import { HomeComponent } from './modules/portfolio/pages/home/home.component';
import { DialogPerfilComponent } from './modules/portfolio/components/dialog/dialog-perfil/dialog-perfil.component';
import { FooterComponent } from './modules/portfolio/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    KnowledgeComponent,
    ExperiencesComponent,
    ProjectsComponent,
    DialogProjectsComponent,
    DialogPerfilComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
