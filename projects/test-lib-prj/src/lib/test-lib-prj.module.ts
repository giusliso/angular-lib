import { NgModule } from '@angular/core';
import { TestLibPrjComponent } from './test-lib-prj.component';
import { CardComponent } from './components/card/card.component';

const components = [TestLibPrjComponent, CardComponent];

@NgModule({
  declarations: [...components],
  imports: [
  ],
  exports: [...components]
})
export class TestLibPrjModule { }
