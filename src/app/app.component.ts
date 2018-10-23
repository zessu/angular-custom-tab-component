import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tab-component';
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      email: ''
    });
  }
}
