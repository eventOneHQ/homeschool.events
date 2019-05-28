import { Component, OnInit } from '@angular/core'

import { Event } from '../events'
import { states } from '../states'
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs'
import { map, startWith } from 'rxjs/operators'
import { ApiService } from '../api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  events: Event[]
  events$: Observable<Event[]>
  filter = new FormControl('')
  nowDate = new Date()

  defaultImg = 'assets/blank.svg'

  constructor(private api: ApiService) {}

  includes(text, term) {
    if (text) {
      return text.toLowerCase().includes(term.toLowerCase())
    }
    return false
  }

  search(term: string): Event[] {
    if (!this.events) {
      return
    }

    return this.events.filter(event => {
      const state = states.find(st => st.abbreviation === event.location.state)

      return (
        this.includes(event.name, term) ||
        this.includes(event.location.city, term) ||
        this.includes(state.abbreviation, term) ||
        this.includes(state.name, term)
      )
    })
  }

  ngOnInit() {
    this.nowDate.setHours(0, 0, 0, 0)

    this.getData()
  }

  getData() {
    this.api.getEvents().subscribe((events: Event[]) => {
      for (const event of events) {
        const domain = new URL(event.url).hostname

        event.logo = `https://logo.clearbit.com/${domain}`
      }

      // filter out past events
      this.events = events.filter(event => {
        const endDate = new Date(event.endDate)
        endDate.setHours(0, 0, 0, 0)

        return this.nowDate.getTime() <= endDate.getTime()
      })

      // sort by start date
      this.events = this.events.sort((a, b) => {
        return (
          (new Date(parseFloat(b.startDate)) as any) -
          (new Date(parseFloat(a.startDate)) as any)
        )
      })

      this.events$ = this.filter.valueChanges.pipe(
        startWith(''),
        map(text => this.search(text))
      )
    })
  }
}
