import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { FileUploadModule} from 'primeng/fileupload';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
@Component({
  selector: 'app-sillas',
  standalone: true,
  imports: [DividerModule,FileUploadModule,CommonModule,PanelModule],
  templateUrl: './sillas.component.html',
  styleUrl: './sillas.component.scss'
})
export class SillasComponent {

}
