import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.page.html',
  styleUrls: ['./login-admin.page.scss'],
})
export class LoginAdminPage implements OnInit {
/*

  loginAdminForm: FormGroup;
  loading = false;
  submitted = false;

*/
  constructor(
  /*
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService
  */) { }

  ngOnInit() {
  /*
      this.loginAdminForm = this.formBuilder.group({
          name: ['', Validators.required],
          password: ['', Validators.required]
      });
  */
  }

  /*

  // convenience getter for easy access to form fields
  get formControls() { return this.loginAdminForm.controls; }

  submitLoginAdmin() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.loginAdminForm.invalid) {
          return;
      }

      this.loading = true;
      this.authenticationService.loginAdmin(this.formControls.name.value, this.formControls.password.value)
          .pipe(first())
          .subscribe(() =>  {
                 this.router.navigateByUrl('/adminDesk');
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }
  admin() {
    this.router.navigateByUrl('/admin');
  }

  */

}
