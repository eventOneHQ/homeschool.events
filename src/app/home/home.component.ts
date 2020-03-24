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

  clickEvent() {
    window.fathom('trackGoal', 'MAIAITUK', 0)
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
    this.loadTypeform()
    this.nowDate.setHours(0, 0, 0, 0)

    this.getData()
  }

  sortAscDate(a, b) {
    return (new Date(a) as any) - (new Date(b) as any)
  }

  getData() {
    this.api.getEvents().subscribe((events: Event[]) => {
      // filter out past events
      this.events = events.filter(event => {
        const endDate = new Date(event.endDate)
        endDate.setHours(23, 59, 59, 999)

        return this.nowDate.getTime() <= endDate.getTime()
      })

      // sort by start date
      this.events = this.events.sort((a, b) => {
        return this.sortAscDate(a.startDate, b.startDate)
      })

      this.events$ = this.filter.valueChanges.pipe(
        startWith(''),
        map(text => this.search(text))
      )
    })
  }

  loadTypeform() {
    let qs,
      js,
      q,
      s,
      d = document,
      gi = d.getElementById,
      ce = d.createElement,
      gt = d.getElementsByTagName,
      id = 'typef_orm_share',
      b = 'https://embed.typeform.com/'
    if (!gi.call(d, id)) {
      js = ce.call(d, 'script')
      js.id = id
      js.src = b + 'embed.js'
      q = gt.call(d, 'script')[0]
      q.parentNode.insertBefore(js, q)
    }
  }
}
