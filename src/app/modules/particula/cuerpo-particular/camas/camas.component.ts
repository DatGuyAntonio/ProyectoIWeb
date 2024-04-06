import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { FileUploadModule} from 'primeng/fileupload';

import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-camas',
  standalone: true,
  imports: [DividerModule, FileUploadModule,CommonModule,PanelModule],
  templateUrl: './camas.component.html',
  styleUrl: './camas.component.scss'
})
export class CamasComponent {
 
  selectedImage: string | ArrayBuffer | null = null;
  mostrarSubirImagen: boolean = false;

  onFileSelected(event: any): void {
    // Verificar si se seleccionó un archivo de imagen
    if (event.files && event.files.length > 0) {
      const file = event.files[0];

      // Leer el archivo como un objeto de URL
      const reader = new FileReader();
      reader.onload = () => {
        // Actualizar la vista previa con la URL de la imagen
        this.selectedImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  resetPreview(): void {
    // Restablecer la vista previa de la imagen y permitir subir una nueva imagen
    this.selectedImage = null;
    const fileUploadInput = document.getElementById('fileUploadInput') as HTMLInputElement;
    if (fileUploadInput) {
      fileUploadInput.value = ''; // Limpiar la selección de archivo
    }
  }

  mostrarElementoSubirImagen(): void {
    this.mostrarSubirImagen = true;

    console.log(this.mostrarSubirImagen)
}
}
