import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
    });
  }
}
