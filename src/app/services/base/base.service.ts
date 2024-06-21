import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  baseInstance = inject(HttpClient)
  baseUrl = 'https://icherniakov.ru/yt-course'
  // baseUrl = 'http://83.147.260.220'

  constructor() { }
}
