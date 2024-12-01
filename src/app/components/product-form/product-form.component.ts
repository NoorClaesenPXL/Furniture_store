import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'; // <-- Correct imports
import { ReactiveFormsModule } from '@angular/forms'; // <-- Import ReactiveFormsModule here
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule,
    MatInputModule, MatButtonModule, MatFormFieldModule, MatIconModule
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  myForm: FormGroup<{
    name: FormControl<string | null>;
    email: FormControl<string | null>;
    message: FormControl<string | null>;
  }>;


  constructor() {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
