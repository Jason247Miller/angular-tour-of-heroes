import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', //creates a global singleton to be used throughout the applicaiton 
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}