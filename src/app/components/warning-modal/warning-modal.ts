import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-warning-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './warning-modal.html',
  styleUrl: './warning-modal.css',
})
export class WarningModalComponent {

  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}