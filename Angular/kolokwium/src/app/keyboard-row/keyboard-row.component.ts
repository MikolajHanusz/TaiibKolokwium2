import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { KeyboardResponseDTO } from '../models/KeyboardResponse.interface';
import { KeyboardService } from '../keyboards.service';
import { KeyboardType } from '../models/KeyboardType.interface';

@Component({
  selector: '[app-keyboard-row]',
  templateUrl: './keyboard-row.component.html',
  styleUrl: './keyboard-row.component.css'
})
export class KeyboardRowComponent {
  getKeyboardTypeText(model: KeyboardType): string {
    switch (model) {
      case KeyboardType.Membranowa:
        return 'membranowa';
      case KeyboardType.Nozycowa:
        return 'nożycowa';
      case KeyboardType.Mechaniczna:
        return 'mechaniczna';
      case KeyboardType.Optyczna:
        return 'optyczna';
      default:
        return 'Brak';
    }
  }

  @Input('app-keyboard-row') keyboard!: KeyboardResponseDTO;
  @Output() choosed = new EventEmitter<KeyboardResponseDTO>();

  private readonly api = inject(KeyboardService);
  submit: any;

  public onChooseClick():void{
    this.api.delete(this.keyboard.id).subscribe();
  }

}
