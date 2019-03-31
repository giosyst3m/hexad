import { NgModule } from '@angular/core';
import { KeepHTMLPipe } from './keep-html.pipe';

@NgModule({
  imports: [],
  declarations: [
    KeepHTMLPipe
  ],
  exports: [
    KeepHTMLPipe
  ]
})
export class PipesModule { }
