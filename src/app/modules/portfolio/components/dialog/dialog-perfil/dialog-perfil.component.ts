import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap'
import 'scrollreveal';

@Component({
  selector: 'app-dialog-perfil',
  templateUrl: './dialog-perfil.component.html',
  styleUrls: ['./dialog-perfil.component.scss']
})
export class DialogPerfilComponent implements AfterViewInit {

  @ViewChild('box', { static: true})
  box!: ElementRef<HTMLDivElement>

  @ViewChild('imgClose', {static: true})
  imgClose!: ElementRef<HTMLDivElement>

  @ViewChild('name', {static: true})
  name!: ElementRef<HTMLDivElement>

  @ViewChild('imgPerfil', {static: true})
  imgPerfil!: ElementRef<HTMLDivElement>

  constructor()
    {}

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
      ScrollReveal({ reset: true });

      ScrollReveal().reveal(this.box.nativeElement, { duration: 2000 });
      ScrollReveal().reveal(this.imgClose.nativeElement, { duration: 2000 });
      ScrollReveal().reveal(this.name.nativeElement, { duration: 2000 });
      ScrollReveal().reveal(this.imgPerfil.nativeElement, { duration: 1000 });
    }
}