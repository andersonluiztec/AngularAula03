import { Directive, ElementRef } from "@angular/core";


@Directive({
    selector: '[cmailFormField]'
})

export class cmailFormFieldDirective {

    constructor(campoEmHTML: ElementRef) {
        const campo = campoEmHTML.nativeElement;
        campo.setAttribute('id', campo.getAttribute('name'));
        campo.classList.add('mdl-textfield__input');
    }
}