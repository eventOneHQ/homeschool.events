import { Component, OnInit } from '@angular/core'
import { states } from '../states'

import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms'

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {
  states: any

  form: FormGroup

  name: AbstractControl
  url: AbstractControl
  startDate: AbstractControl
  endDate: AbstractControl
  type: AbstractControl
  city: AbstractControl
  state: AbstractControl

  constructor() {
    this.states = states
  }

  onSubmit() {
    console.log(this.form.value)
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(200)
      ]),
      url: new FormControl(null, []),
      startDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required])
    })

    this.name = this.form.controls.name
    this.url = this.form.controls.url
    this.startDate = this.form.controls.startDate
    this.endDate = this.form.controls.endDate
    this.type = this.form.controls.type
    this.city = this.form.controls.city
    this.state = this.form.controls.state
  }
}
