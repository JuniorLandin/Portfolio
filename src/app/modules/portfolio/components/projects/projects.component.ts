import { Component, HostListener, inject, signal } from '@angular/core';
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
  
  isMobile: boolean = window.innerWidth < 1000;

  constructor(public dialog: MatDialog) {}


  @HostListener('window:resize', ['$event']) onResize() {
    this.isMobile = window.innerWidth < 1000;
  }

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/uniTaste.png',
      alt: 'Projeto',
      title: 'Lanchonete Faculdade',
      width: '130px',
      height: '100px',
      description: 'Desenvolvi um sistema de pedidos para uma lanchonete universitária utilizando ReactJS, NextJS, NodeJS e MongoDB. Os clientes podem cadastrar produtos, realizar pedidos de forma intuitiva, e a equipe da lanchonete recebe atualizações em tempo real. O sistema proporciona uma experiência eficiente e moderna para clientes e atendentes, promovendo uma gestão eficaz dos pedidos.',
      frameworks: [
        {
          src: 'assets/icons/knowledge/html5.svg',
          alt: "Icone de conhecimento de html5",
          link: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
          name: 'Html5'
        },
        {
          src: 'assets/icons/knowledge/sass.svg',
          alt: "Icone de conhecimento de Sass",
          link: 'https://sass-lang.com/documentation/',
          name: 'Sass'
        },
        {
          src: 'assets/icons/knowledge/react.svg',
          alt: "Icone de conhecimento de React",
          link: 'https://pt-br.react.dev/',
          name: 'ReactJs'
        },
        {
          src: 'assets/icons/knowledge/javascript.svg',
          alt: "Icone de conhecimento de JavaScript",
          link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
          name: 'JavaScript'
        },
        {
          src: 'assets/icons/knowledge/github.svg',
          alt: "Icone de conhecimento de GitHub",
          link: 'https://github.com/',
          name: 'GitHub'
        },
        {
          src: 'assets/icons/knowledge/nodejs.svg',
          alt: "Icone de conhecimento de NodeJs",
          link: 'https://nodejs.org/docs/latest/api/',
          name: 'NodeJs'
        },
      ],
      links: [
        {
          name: "Conhecer",
          href: 'https://github.com/JuniorLandin/new-project-pizzaria'
        }
      ]
    },
    {
      src: 'assets/img/School.png',
      alt: 'Projeto Escola',
      title: 'Projeto Escola',
      width: '130px',
      height: '100px',
      description: 'O projeto "School" é uma plataforma educacional dinâmica e interativa desenvolvida utilizando Angular, TypeScript e Sass. Oferece aos usuários um perfil personalizado, destacando suas conquistas acadêmicas e interações com professores. Além disso, apresenta uma visão abrangente dos cursos disponíveis, proporcionando aos usuários uma experiência educacional completa e adaptada às suas necessidades. A combinação de tecnologias modernas garante uma interface intuitiva e eficiente.',
      frameworks: [
        {
          src: 'assets/icons/knowledge/sass.svg',
          alt: "Icone de conhecimento de Sass",
          link: 'https://sass-lang.com/documentation/',
          name: 'Sass'
        },
        {
          src: 'assets/icons/knowledge/javascript.svg',
          alt: "Icone de conhecimento de JavaScript",
          link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
          name: 'JavaScript'
        },
        {
          src: 'assets/icons/knowledge/github.svg',
          alt: "Icone de conhecimento de GitHub",
          link: 'https://github.com/',
          name: 'GitHub'
        },
        {
          src: 'assets/icons/knowledge/angular2.svg',
          alt: "Icone de conhecimento de Angular2",
          link: 'https://angular.io/docs',
          name: 'Angular'
        },
      ],
      links: [
        {
          name: "Conhecer",
          href: 'https://github.com/JuniorLandin/Project-School'
        }
      ]
    },
    {
      src: 'assets/img/AutoDetaing.png',
      alt: 'Projeto Auto Detaing',
      title: 'Auto Detaing',
      width: '180px',
      height: '150px',
      description: 'O projeto "AutoDetailing" é uma plataforma envolvente de venda de carros desenvolvida com React.js e estilizada com Sass. Com uma interface moderna e responsiva, oferece aos usuários uma experiência intuitiva ao explorar uma variedade de veículos disponíveis. Além de apresentar informações detalhadas sobre cada carro, o design elegante e as funcionalidades interativas destacam as características exclusivas de cada veículo, proporcionando uma experiência de compra online envolvente e personalizada.',
      frameworks: [
        {
          src: 'assets/icons/knowledge/sass.svg',
          alt: "Icone de conhecimento de Sass",
          link: 'https://sass-lang.com/documentation/',
          name: 'Sass'
        },
        {
          src: 'assets/icons/knowledge/github.svg',
          alt: "Icone de conhecimento de GitHub",
          link: 'https://github.com/',
          name: 'GitHub'
        },
        {
          src: 'assets/icons/knowledge/react.svg',
          alt: "Icone de conhecimento de React",
          link: 'https://pt-br.react.dev/',
          name: 'ReactJs'
        }
      ],
      links: [
        {
          name: "Conhecer",
          href: 'https://github.com/JuniorLandin/Auto-Detaing'
        }
      ]
    },
  ])

  public openDialog(data: IProjects){
    const dialogRef = this.dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPainelClass.PROJECTS,
    });
  }
}
