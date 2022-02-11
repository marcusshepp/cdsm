import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';


// tslint:disable-next-line: no-inferrable-types
const API: string = 'https://localhost:44381/api/';

@Component({
  selector: 'app-gains',
  templateUrl: './gains.component.html',
  styleUrls: ['./gains.component.sass']
})
export class GainsComponent {

  public gainForm: FormGroup;
  public get amountGained(): AbstractControl {
    return this.gainForm.get('amountGained');
  }
  public get gainDescription(): AbstractControl {
    return this.gainForm.get('description');

  }
  public lossForm: FormGroup;
  public get amountLost(): AbstractControl {
    return this.lossForm.get('amountLost');
  }
  public get lossDescription(): AbstractControl {
    return this.lossForm.get('description');
  }

  private get gainRequest() {
    return {
      amountGained: this.amountGained.value,
      description: this.gainDescription.value,
    };
  }

  private get lossRequest() {
    return {
      amountLost: this.amountLost.value,
      description: this.lossDescription.value,
    };
  }

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.createGainForm();
    this.createLoseForm();
  }

  public addGain(): void {
    this.http
      .post(`${API}Gains`, this.gainRequest)
      .subscribe((data): void => {
        console.log(`response`, data);
      });
  }

  public addLoss(): void {
    this.http
      .post(`${API}Losses`, this.lossRequest)
      .subscribe((data): void => {
        console.log(`response`, data);
      });
  }

  private createGainForm(): void {
    this.gainForm = this.fb.group({
      amountGained: [''],
      description: [''],
    });
  }

  private createLoseForm(): void {
    this.lossForm = this.fb.group({
      amountLost: [''],
      description: [''],
    });
  }
}
