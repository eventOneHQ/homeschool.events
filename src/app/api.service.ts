import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Event } from './events'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = '/api'

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/events`)
  }

  submitEvent(event: Event, token: string): Observable<Event> {
    return this.http.post<Event>(`${this.baseUrl}/events`, event, {
      params: {
        token
      }
    })
  }
}
