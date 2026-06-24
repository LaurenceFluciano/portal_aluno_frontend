import emailjs from '@emailjs/browser';
import { generateCode } from './generate.code.service';

export function sendVerificationCodeEmail(email){
    /*
    * Os valores utilizados são de um email de teste criado.
    */

    const codigoGerado = generateCode();

    const templateParams = {
      user_email: email,
      codigo: codigoGerado, 
    };
    try {
        emailjs.send('service_ke3g413', 'template_mo7aox1', templateParams, 'GE0MhHPHCBST94fHZ')
    } catch (err) {
        return err
    }
}