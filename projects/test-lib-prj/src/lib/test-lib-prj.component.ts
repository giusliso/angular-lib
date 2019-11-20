import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test-lib-prj',
  template: `
    <p>
     Sono il componente di test
    </p>
  `,
  styles: []
})
export class TestLibPrjComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
