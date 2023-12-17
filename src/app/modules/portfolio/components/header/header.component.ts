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

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh)
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(DialogPerfilComponent, {
      width: '40%',
    })
  }
}
