import { Component, inject, signal } from '@angular/core';
//Material
import { MatDialog } from '@angular/material/dialog';
//Enum
import { EDialogPainelClass } from 'src/app/modules/enum/EDialogPainelClass.enum';
//Interface
import { IProjects } from 'src/app/modules/interface/IProjects.interface';
//dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  constructor(public dialog: MatDialog) {}

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/vfull.png',
      alt: 'Projeto',
      title: '',
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: "Conhecer",
          href: 'https://vidafullstack.com.br'
        }
      ]
    },
    {
      src: 'assets/img/vfull.png',
      alt: 'Projeto',
      title: '',
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: "Conhecer",
          href: 'https://vidafullstack.com.br'
        }
      ]
    },
    {
      src: 'assets/img/vfull.png',
      alt: 'Projeto',
      title: '',
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: "Conhecer",
          href: 'https://vidafullstack.com.br'
        }
      ]
    },
    {
      src: 'assets/img/vfull.png',
      alt: 'Projeto',
      title: '',
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: "Conhecer",
          href: 'https://vidafullstack.com.br'
        }
      ]
    },
    {
      src: 'assets/img/vfull.png',
      alt: 'Projeto',
      title: '',
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: "Conhecer",
          href: 'https://vidafullstack.com.br'
        }
      ]
    },
    {
      src: 'assets/img/vfull.png',
      alt: 'Projeto',
      title: 'Projeto',
      width: '100px',
      height: '51px',
      description: 'sasasaassasaasassasa',
      links: [
        {
          name: "Conhecer",
          href: 'https://vidafullstack.com.br'
        }
      ]
    }
  ])

  public openDialog(data: IProjects){
    const dialogRef = this.dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPainelClass.PROJECTS
    });
  }
}
