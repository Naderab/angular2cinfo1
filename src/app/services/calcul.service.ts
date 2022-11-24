import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() { }
  
  getNumberOf(list:any[], critiria:string, value:any){

    return list.filter ((obj)=>obj[critiria]== value).length
  }



  
  
}
