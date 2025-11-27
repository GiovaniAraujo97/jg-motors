import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="container" style="padding:3rem 1rem; max-width:1200px; margin:0 auto">
      <header style="display:flex;align-items:start;justify-content:space-between;gap:1rem;flex-wrap:wrap">
        <div style="flex:1;min-width:320px">
          <h1>Planos de Empréstimo de Motos</h1>
          <p class="muted">Oferecemos apenas contratos mensais. Escolha a duração do contrato: 6, 12 ou 15 meses — todos com contrato e seguro incluso.</p>
        </div>
        <div style="display:flex;align-items:center;gap:1rem">
          <div class="card" style="padding:0.6rem 1rem">
            <div style="font-weight:800;font-size:1.25rem">Seguro</div>
            <div class="muted">incluso em todos os contratos</div>
          </div>
          <div class="card" style="padding:0.6rem 1rem">
            <div style="font-weight:800;font-size:1.25rem">Entrega</div>
            <div class="muted">entrega e retirada no endereço combinado</div>
          </div>
        </div>
      </header>

      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:1.6rem">
        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <div>
              <h3>6 meses</h3>
              <p class="muted">Contrato mensal com duração de 6 meses — ideal para necessidades de médio prazo.</p>
            </div>
            <div style="font-weight:800;font-size:1.2rem">A partir de R$ 1.200<span style="font-weight:500;font-size:0.85rem">/mês</span></div>
          </div>
          <ul style="margin-top:0.8rem">
            <li>Seguro incluso</li>
            <li>Entrega e retirada</li>
            <li>Manutenção periódica (conforme contrato)</li>
          </ul>
          <div style="margin-top:0.8rem"><a class="btn primary" routerLink="/contato">Contratar</a></div>
        </div>

        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <div>
              <h3>12 meses</h3>
              <p class="muted">Contrato mensal com duração de 12 meses — melhor custo benefício para uso contínuo.</p>
            </div>
            <div style="font-weight:800;font-size:1.2rem">A partir de R$ 1.200<span style="font-weight:500;font-size:0.85rem">/mês</span></div>
          </div>
          <ul style="margin-top:0.8rem">
            <li>Seguro incluso</li>
            <li>Entrega e retirada</li>
            <li>Manutenção periódica e suporte prioritário</li>
          </ul>
          <div style="margin-top:0.8rem"><a class="btn primary" routerLink="/contato">Contratar</a></div>
        </div>

        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <div>
              <h3>15 meses</h3>
              <p class="muted">Contrato mensal estendido de 15 meses — opção para projetos e parcerias de longo prazo.</p>
            </div>
            <div style="font-weight:800;font-size:1.2rem">A partir de R$ 1.200<span style="font-weight:500;font-size:0.85rem">/mês</span></div>
          </div>
          <ul style="margin-top:0.8rem">
            <li>Seguro incluso</li>
            <li>Entrega e retirada</li>
            <li>Manutenção periódica e condições especiais de renovação</li>
          </ul>
          <div style="margin-top:0.8rem"><a class="btn primary" routerLink="/contato">Contratar</a></div>
        </div>
      </div>

      <section style="margin-top:2rem">
        <h2>Como funciona</h2>
        <div class="steps">
          <div class="step card">
            <strong>1 — Escolha a duração</strong>
              <span class="muted">Escolha 6, 12 ou 15 meses. Todos os contratos são mensais e exigem documentação e assinatura.</span>
          </div>
          <div class="step card">
            <strong>2 — Confirmação e entrega</strong>
            <span class="muted">Após assinatura agendamos a entrega com checagem e preparo da moto.</span>
          </div>
          <div class="step card">
            <strong>3 — Uso e manutenção</strong>
            <span class="muted">Seguro incluso; manutenção periódica conforme plano contratado.</span>
          </div>
        </div>
      </section>
    </section>
  `
})
export class ServicesComponent {}
