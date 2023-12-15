import { Component, Inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProjects } from 'src/app/modules/interface/IProjects.interface';

@Component({
  selector: 'app-dialog-projects',
  templateUrl: './dialog-projects.component.html',
  styleUrls: ['./dialog-projects.component.scss']
})
export class DialogProjectsComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: IProjects
    ){}

    ngOnInit(): void {
      this.getData.set(this.data)
    }

  public getData = signal<IProjects | null>(null)

}
