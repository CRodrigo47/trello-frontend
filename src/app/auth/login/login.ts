import { Component } from '@angular/core';
import { WarningModalComponent } from "../../components/warning-modal/warning-modal";

@Component({
  selector: 'app-login',
  imports: [WarningModalComponent],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  showWarningModal: boolean = true;

  onModalClose(): void{
    this.showWarningModal = false;
  }
}
