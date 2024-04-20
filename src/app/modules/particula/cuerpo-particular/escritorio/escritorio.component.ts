import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { FileUploadModule } from 'primeng/fileupload';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-escritorio',
  standalone: true,
  imports: [DividerModule, FileUploadModule,CommonModule,PanelModule],
  templateUrl: './escritorio.component.html',
  styleUrl: './escritorio.component.scss'
})
export class EscritorioComponent {

}
