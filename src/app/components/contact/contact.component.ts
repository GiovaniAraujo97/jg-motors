import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  submitted = false;
  submittedMessage = '';

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const name = String(data.get('name') ?? 'cliente');
    const email = String(data.get('email') ?? '');
    const phone = String(data.get('phone') ?? '');
    const plan = String(data.get('plan') ?? '');
    const startDate = String(data.get('startDate') ?? '');

    // Simulate API call (in production replace this with HTTP call)
    this.submitted = true;
    this.submittedMessage = `Obrigado ${name} — recebemos sua solicitação para o plano ${plan}${startDate ? ' a partir de ' + startDate : ''}. Entraremos em contato pelo telefone ${phone} ou e‑mail ${email} em até 24h.`;

    // Compose message for WhatsApp
    const notes = String(data.get('notes') ?? '');
    const cpf = String(data.get('cpf') ?? '');
    const address = String(data.get('address') ?? '');

    const messageLines = [
      'Nova solicitação - JG Motors',
      `Nome: ${name}`,
      `Telefone: ${phone}`,
      `Email: ${email}`,
      `CPF/CNPJ: ${cpf}`,
      `Plano: ${plan}`,
      `Data início: ${startDate}`,
      `Endereço: ${address}`,
      `Observações: ${notes}`,
    ].filter(Boolean);

    const message = encodeURIComponent(messageLines.join('\n'));
    // WhatsApp number with country code (Brazil +55) and area code 11
    const waNumber = '5511958520419';
    const waUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${message}`;

    // Open WhatsApp with prefilled message (user will confirm send in WhatsApp)
    try {
      window.open(waUrl, '_blank');
    } catch (err) {
      console.warn('Could not open WhatsApp URL', err);
    }

    // Reset form after a short delay
    setTimeout(() => form.reset(), 200);
  }
}
