import { Input, Output, EventEmitter, Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnChanges {
  data: any;
  isPasswordVisible = false;
  item = {
    'username': '',
    'password': '',
    'email': ''
  };

  constructor() { }


  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  //* Data Set for SignUp Page
  getDataForLayout1 = (): any => {
    return {
      'toolbarTitle': 'Register + logo 1',
      'logo': 'assets/imgs/logo/login.png',
      'title': 'Signup',
      'subtitle': 'Atom UI Kit',
      'register': 'Register',
      'username': 'Username',
      'password': 'Password',
      'email': 'Email',
      'signup': 'Signup',
      'logintext': 'Already have an account? ',
      'login': 'Login'
    };
  }


  onTextChangePasswordFunc () {
    if (event) {
      event.stopPropagation();
    }
    this.item.password = this.getValueFromItem(event)
  }

  getPasswordType () {
    return this.isPasswordVisible ? 'text' : 'password'
  }

  changeVisibility () {
    this.isPasswordVisible = !this.isPasswordVisible
  }

  getIconByType () {
    return this.isPasswordVisible ? 'eye' : 'eye-off'
  }

  getValueFromItem(item) {
    let result = ''
    if (item.detail && item.detail.target) {
      result = item.detail.target.value
    }
    return result;
  }

}
