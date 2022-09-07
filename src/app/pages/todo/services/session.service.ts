import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly storage: Storage = sessionStorage

  get(key:string):string | null {
    return this.storage.getItem(key) as string;
  }

  set(key:string, value:any):void {
    this.storage.setItem(key, value);
  }
}
