import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../services/loading-service';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-screen.html',
  styleUrls: ['./loading-screen.css']
})
export class LoadingScreenComponent {
  loadingService = inject(LoadingService);
  isLoading = this.loadingService.isLoading;
  message = this.loadingService.message;
}