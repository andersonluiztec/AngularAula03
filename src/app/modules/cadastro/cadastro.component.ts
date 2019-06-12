import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators, ControlContainer } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

function marcaCamposDoFormComoTouched(form: FormGroup) {
    const controlKeys = Object.keys(form.controls);
     controlKeys.forEach(controlKeyAtual => {
        form.get(controlKeyAtual).markAsTouched({ onlySelf: true });
    }) 
}

@Component({
    selector: 'cadastro-page',
    templateUrl: './cadastro.component.html'
})

export class CadastroComponent{
    formCadastro: FormGroup = new FormGroup({
        nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
        usuario: new FormControl('', {
            asyncValidators: [this.validaUsuario.bind(this)],
            validators: [Validators.required, Validators.maxLength(10)],
            updateOn: 'blur'     
        })                       
    });

    handleCadastroUsuario() {
          if (this.formCadastro.invalid) {
             marcaCamposDoFormComoTouched(this.formCadastro);
         } else {

         this.httpClient
                .post('http://localhost:3200/users', 
                {
                    name: this.formCadastro.get('nome').value,
                    username: this.formCadastro.value.usuario,
                    phone: "12341234"
                })
                .subscribe(
                    resposta => {
                        console.log('Resposta', resposta);
                        if (resposta) {
                            alert('Usuário salvo com sucesso');
                        }
                    },
                    err => {
                        console.log('Erro', err);
                    },
                    () => {
                        console.log('Terminou');
                    }
                )
            }
    }

    validaUsuario(campo: FormControl) {
        return this.httpClient.get('http://localhost:3200/users').pipe(
            map((resposta: any) => {
                const usuariosFiltrados = resposta.users.filter(user => {
                    return user.username === campo.value;
                });
                const usernameEhInvalido = usuariosFiltrados.length !== 0;
                return usernameEhInvalido ? { usernameEmUso: true } : null;
            })
        );
    }

    constructor(private httpClient: HttpClient) {
    /* fetch('http://localhost:3200/users')
        .then(resposta => {
            if (resposta.ok)
                return resposta.json();
        })
        .then(resposta => {
            console.log(resposta.users);
        })
        .catch(err => {
            console.log('Erro', err.message);
        }) */


/*         httpClient
            .get('http://localhost:3200/users')
            .subscribe(
                resposta => {
                    console.log('Resposta', resposta);
                },
                err => {
                    console.log('Erro', err);
                },
                () => {
                    console.log('Terminou');
                }
            ) */

           /*  httpClient
            .post('http://localhost:3200/users', 
            {
                name: "Anderson2",
                username: "anderson2",
                phone: "12341234"
            })
            .subscribe(
                resposta => {
                    console.log('Resposta', resposta);
                },
                err => {
                    console.log('Erro', err);
                },
                () => {
                    console.log('Terminou');
                }
            ) */
    }
}

