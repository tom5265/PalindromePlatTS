import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PalindromeViewControl from '../palindrome/palindrome.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {};
    
    navigating(word: string) {
       this.navigator.navigate(PalindromeViewControl, {
           parameters: {pall: word}
       });
    }
}

register.viewControl('home-vc', HomeViewControl);
