import {Component, View} from "angular2/core";
import {ImgListComponent} from "./image-list.component"

@Component({
   selector: 'my-app',
   template: `
    <div class="page-header">
      <h1>Flickr Image Search Engine </h1>
    </div>
    <img-list></img-list>
    `,
   directives: [ImgListComponent]
})

export class AppComponent {

}
