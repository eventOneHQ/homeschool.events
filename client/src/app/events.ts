export interface Event {
  name: string
  url: string
  startDate: string
  endDate: string
  type: string
  location: {
    city: string
    state: string
  }
}

export const events: Event[] = [
  {
    name: '34th Annual IAHE Home Educators’ Convention',
    url: 'https://iahe.net/2019-convention/',
    startDate: '2019-03-22T00:00:00-0400',
    endDate: '2019-03-23T00:00:00-0400',
    type: 'Convention',
    location: {
      city: 'Indianapolis',
      state: 'IN'
    }
  },
  {
    name: '2019 TPA Convention',
    url: 'https://www.teachingparents.org/a04a9985-ea94-4db2-a9cb-b7d4c1caa54b',
    startDate: '2019-04-12T00:00:00-0400',
    endDate: '2019-04-13T00:00:00-0400',
    type: 'Convention',
    location: {
      city: 'Wichita',
      state: 'KS'
    }
  },
  {
    name: 'INCH 2019',
    url: 'https://www.inch.org/conference/',
    startDate: '2019-05-17T00:00:00-0400',
    endDate: '2019-05-18T00:00:00-0400',
    type: 'Convention',
    location: {
      city: 'Lansing',
      state: 'MI'
    }
  },
  {
    name: '2019 HEAV Convention',
    url: 'https://heav.org/convention/',
    startDate: '2019-06-06T00:00:00-0400',
    endDate: '2019-06-06T00:00:00-0400',
    type: 'Convention',
    location: {
      city: 'Richmond',
      state: 'VA'
    }
  },
  {
    name: '2019 CHAP Convention',
    url: 'https://conv.chaponline.com/',
    startDate: '2019-06-14T00:00:00-0400',
    endDate: '2019-06-15T00:00:00-0400',
    type: 'Convention',
    location: {
      city: 'Lancaster',
      state: 'PA'
    }
  }
]
