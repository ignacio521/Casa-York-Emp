import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public enviando = false;
  public successMessage = '';
  public errorMessage = '';

  private readonly accessKey = 'a0260763-330e-4cf8-933c-0e3d38ebd06f';

  constructor() { }

  ngOnInit(): void {
  }

  async enviarFormulario(contactForm: NgForm): Promise<void> {
    if (contactForm.invalid || this.enviando) {
      contactForm.control.markAllAsTouched();
      return;
    }

    this.enviando = true;
    this.successMessage = '';
    this.errorMessage = '';

    const formData = new FormData();
    formData.append('access_key', this.accessKey);
    formData.append('subject', 'Nuevo mensaje desde tu pagina web');
    formData.append('from_name', 'Casa York Web');
    formData.append('name', (contactForm.value.name || '').trim());
    formData.append('email', (contactForm.value.email || '').trim());
    formData.append('telefono', (contactForm.value.telefono || '').trim());
    formData.append('message', (contactForm.value.message || '').trim());
    formData.append('botcheck', '');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      });

      const result = await response.json();
      if (response.ok && result.success) {
        this.successMessage = 'Mensaje enviado correctamente. Te responderemos pronto.';
        contactForm.resetForm();
      } else {
        this.errorMessage = 'No se pudo enviar el mensaje. Intenta nuevamente.';
      }
    } catch {
      this.errorMessage = 'Hubo un problema de conexion. Intenta nuevamente.';
    } finally {
      this.enviando = false;
    }
  }

}
