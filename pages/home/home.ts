import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
})
export class HomeComponent {

  stats = [
    {
      title: 'Usuarios Activos',
      value: '24.8K',
      change: '+12%',
    },
    {
      title: 'Ingresos',
      value: '$128K',
      change: '+18%',
    },
    {
      title: 'Conversión',
      value: '8.4%',
      change: '+5%',
    },
    {
      title: 'Tickets',
      value: '312',
      change: '-2%',
    }
  ];

  // 👇 ESTO FALTABA
  projects = [
    {
      name: 'Dashboard Analytics',
      status: 'En progreso',
      progress: 72,
    },
    {
      name: 'Sistema CRM',
      status: 'Completado',
      progress: 100,
    },
    {
      name: 'App Mobile',
      status: 'Pendiente',
      progress: 35,
    }
  ];

}