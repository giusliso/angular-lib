import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test-lib-prj',
  template: `
    <p>
      sono il componente della libreria
    </p>
  `,
  styles: []
})
export class TestLibPrjComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
