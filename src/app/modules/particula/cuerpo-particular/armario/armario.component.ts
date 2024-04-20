import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { FileUploadModule } from 'primeng/fileupload';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-armario',
  standalone: true,
  imports: [DividerModule, FileUploadModule,CommonModule,PanelModule],
  templateUrl: './armario.component.html',
  styleUrl: './armario.component.scss'
})
export class ArmarioComponent {

}
