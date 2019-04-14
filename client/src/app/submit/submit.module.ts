import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SubmitComponent } from './submit.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

const routes: Routes = [
  {
    path: '',
    component: SubmitComponent
  }
]

@NgModule({
  declarations: [SubmitComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgbModule
  ]
})
export class SubmitModule {}
