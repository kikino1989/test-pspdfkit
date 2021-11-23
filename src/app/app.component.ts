import { Component } from '@angular/core';
import PSPDFKit from 'pspdfkit';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  instance;

  constructor() {}

  ngOnInit() {
    PSPDFKit.load({
      // Use the assets directory URL as a base URL. PSPDFKit will download its library assets from here.
      baseUrl: location.protocol + "//" + location.host + "/assets/",
      container: "#pspdfkit-container",
      document: location.protocol + "//" + location.host + "/assets/sample.pdf"
    }).then(instance => {
      console.log('bla')
      this.instance = instance;
    });
  }

  ngOnDestroy() {
    console.log('unbla')
    PSPDFKit.unload(this.instance);
  }
}
