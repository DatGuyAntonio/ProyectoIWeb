import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { FileUploadModule} from 'primeng/fileupload';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
@Component({
  selector: 'app-mesas-centro',
  standalone: true,
  imports: [DividerModule,FileUploadModule,CommonModule,PanelModule],
  templateUrl: './mesas-centro.component.html',
  styleUrl: './mesas-centro.component.scss'
})
export class MesasCentroComponent {

}
