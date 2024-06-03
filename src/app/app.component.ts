import { Component, inject } from '@angular/core';
import { LoadService } from './loading-overlay/load.service';
import { LoadNewService } from './loading-overlay/load-new.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadService = inject(LoadNewService);
  title = 'gym-diary';
}
