import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './cmail-form-group.component.html',
  styleUrls: ['./cmail-form-group.component.css']
})
export class CmailFormGroupComponent implements OnInit {

  @Input() campo;
  valorDaLabel: string = 'Define uma label';

  constructor(private elemento: ElementRef) { }

  ngOnInit() {
    const $input = this.elemento.nativeElement.querySelector('input');
    this.valorDaLabel = $input.getAttribute('placeholder');
    $input.setAttribute('placeholder', ' ');
  }
}
