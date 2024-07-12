import { Component } from '@angular/core';
import { KeyboardResponseDTO } from '../models/KeyboardResponse.interface';
import { KeyboardService } from '../keyboards.service';

@Component({
  selector: 'app-keyboards',
  templateUrl: './keyboards.component.html',
  styleUrl: './keyboards.component.css'
})
export class KeyboardsComponent {

  public data: KeyboardResponseDTO[]=[];
  public choosedKeyboard?: KeyboardResponseDTO = undefined;
  public isTableView: boolean = true;

  constructor(private keyboardService: KeyboardService){
    this.getData();
  }

  private getData():void{
    this.keyboardService.get().subscribe({
      next: (res)=>{
        //this.data = res;//didnt work?
        res.forEach(item=>{
          this.data.push(item)
        })
      },
      error: (err) => console.error(err),
      complete: () => console.log('complete')
    })
    console.log(this.data)
  }

  public onChooseClick(): void {
    this.choosedKeyboard = undefined;
    this.getData();
  }

  public onChoosedRow(event: KeyboardResponseDTO): void {
    this.choosedKeyboard = event;
  }

}
