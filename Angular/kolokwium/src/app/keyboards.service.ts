import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { KeyboardResponseDTO } from "./models/KeyboardResponse.interface";
import { KeyboardRequestDTO } from "./models/KeyboardRequest.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class KeyboardService {
    constructor (private httpClient: HttpClient){}

    public get(){
        return this.httpClient.get<KeyboardResponseDTO[]>('https://localhost:7199/api/Keyboard/getList')
      }
    
      public post(body: KeyboardRequestDTO):Observable<void>{
        return this.httpClient.post<void>('https://localhost:7199/api/Keyboard',body);
      }
      
      public delete(id: number): Observable<void> {
        return this.httpClient.delete<void>('https://localhost:7199/api/Keyboard/'+id);
      }

}