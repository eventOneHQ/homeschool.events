import { ApiService } from './../api.service'
import { Component, OnInit } from '@angular/core'
import { states } from '../states'

import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms'

declare const grecaptcha

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

  constructor(private api: ApiService) {
    this.states = states
  }

  onSubmit() {
    grecaptcha.ready(() => {
      grecaptcha
        .execute('6LdE3qkUAAAAAMdrfrIRC9GtY6y5YAqtJc28HbU9', {
          action: 'eventSubmit'
        })
        .then((token: string) => {
          this.api.submitEvent(this.form.value, token).subscribe(
            newEvent => {
              console.log(newEvent)
            },
            err => {
              console.log(err)
            }
          )
        })
    })
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(500)
      ]),
      url: new FormControl(null, []),
      startDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null, [Validators.required]),
      type: new FormControl('Convention', [Validators.required]),
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
