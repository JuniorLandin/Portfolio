import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPerfilComponent } from '../dialog/dialog-perfil/dialog-perfil.component';
import * as AOS from 'aos'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  isMobile: boolean = window.innerWidth < 700;

  @HostListener('window:resize', ['$event']) onResize() {
    this.isMobile = window.innerWidth < 700;
  }

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh)
  }

  public openDialog(): void {
    
    const dialogRef = this.dialog.open(DialogPerfilComponent, {
      width: this.isMobile ? '100vw' : '40vw',
      position: {
        top: this.isMobile ? '25%' : '5%',
      }
    })
  }
}
