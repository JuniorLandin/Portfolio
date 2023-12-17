import { Component, OnInit, signal } from '@angular/core';

//Interface
import { IKnowledge } from 'src/app/modules/interface/IKnowledge.interface';
import * as AOS from 'aos'

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnInit{

  ngOnInit(): void {
    AOS.init()
    window.addEventListener('load', AOS.refresh)
  }

  public arrayKnowLedge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: "Icone de conhecimento de html5",
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
      name: 'Html5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: "Icone de conhecimento de css3",
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
      name: 'Css'
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: "Icone de conhecimento de Sass",
      link: 'https://sass-lang.com/documentation/',
      name: 'Sass'
    },
    {
      src: 'assets/icons/knowledge/angular2.svg',
      alt: "Icone de conhecimento de Angular2",
      link: 'https://angular.io/docs',
      name: 'Angular'
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
      src: 'assets/icons/knowledge/database.svg',
      alt: "Icone de conhecimento de Database",
      link: 'https://docs.oracle.com/database/121/SQLRF/toc.htm',
      name: 'Oracle SQL'
    },
    {
      src: 'assets/icons/knowledge/github.svg',
      alt: "Icone de conhecimento de GitHub",
      link: 'https://github.com/',
      name: 'GitHub'
    },
    {
      src: 'assets/icons/knowledge/gitlab.svg',
      alt: "Icone de conhecimento de GitLab",
      link: 'https://about.gitlab.com/',
      name: 'GitLab'
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: "Icone de conhecimento de NodeJs",
      link: 'https://nodejs.org/docs/latest/api/',
      name: 'NodeJs'
    },
  ])
}
