import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../home/home.vc';

export default class PalindromeViewControl extends BaseViewControl {
    templateString: string = require('./palindrome.vc.html');

    context: any = {
       
    };

    navigatedTo(parameter: { pall: string }): void {
        let pally = parameter.pall.toLocaleLowerCase();
        this.context.word = pally;
        this.context.reversed = this.reversePalindrome(pally);
        if (this.context.reversed === this.context.word) {
            this.context.para = 'This word is a palindrome.';
        }
        else {
            this.context.para = 'This word is not a palindrome.';
        }
    }

    reversePalindrome(param: string) {
        var temp = '';
        var i = param.length;

        while (i > 0) {
            temp += param.substring(i - 1, i);
            i--;
        }
        return temp;
    }
}

register.viewControl('palindrome-vc', PalindromeViewControl);
