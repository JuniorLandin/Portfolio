import { Component, OnInit, signal } from '@angular/core';
import { IExperiences } from 'src/app/modules/interface/IExperiences.interface';
import * as AOS from 'aos'

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit{

  ngOnInit(): void {
    AOS.init()
  }

  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Desenvolvedor Front-end Angular",
        p: "Ibrowse | Novembro de 2022 - Atualmente"
      },
      text: "<p>Durante meu estágio como Desenvolvedor Angular, iniciei em novembro de 2022 e continuo a contribuir até o momento atual. Ao longo desse período, adquiri habilidades significativas no desenvolvimento de aplicações utilizando Angular, implementação de Rest APIs, e a gestão eficiente de controle de versão através do GitLab. Além disso, desenvolvi proficiência em consultas SQL utilizando Oracle para manipulação de dados. A aplicação prática dos conceitos do RxJS também se tornou parte integrante do meu conjunto de habilidades, permitindo-me criar aplicações reativas e eficientes. Este estágio tem sido uma experiência enriquecedora que me proporcionou uma compreensão abrangente do ciclo de vida de desenvolvimento de software e fortaleceu minha capacidade de colaborar em projetos desafiadores.</p>"
    },
    {
      summary: {
        strong: "Analista de Suporte de TI",
        p: "CMAA | Agosto de 2021 a Outubro de 2022"
      },
      text: "<p>Atuei como Jovem Aprendiz em Suporte de TI, onde de agosto de 2021 a outubro de 2022, obtive conhecimentos sólidos em suporte técnico, resolução de problemas em hardware e software, além de gerenciamento de redes. Essa experiência anterior contribuiu para a base sólida que complementa meu papel atual, proporcionando-me uma visão abrangente tanto no suporte técnico quanto no desenvolvimento de software.</p>"
    },
  ])
}
