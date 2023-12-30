import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { NgtBeforeRenderEvent, NgtStore } from 'angular-three';



@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent  {
  position = [0, 0, 0];

  hovered = false;
  active = false;

  readonly store = inject(NgtStore);

  // stackblitz issue
  readonly camera = (this.store as any).get('camera');
  readonly glDom = (this.store as any).get('gl', 'domElement');
  onBeforeRender(event: NgtBeforeRenderEvent<THREE.Mesh>) {
    event.object.rotation.x += 0.01;
  }
    // throw new Error('Method not implemented.');


}

