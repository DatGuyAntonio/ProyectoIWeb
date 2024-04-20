import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { FileUploadModule} from 'primeng/fileupload';

import { PanelModule } from 'primeng/panel';
@Component({
  selector: 'app-mesas-noche',
  standalone: true,
  imports: [CommonModule, DividerModule,FileUploadModule,PanelModule],
  templateUrl: './mesas-noche.component.html',
  styleUrl: './mesas-noche.component.scss'
})
export class MesasNocheComponent {

}
