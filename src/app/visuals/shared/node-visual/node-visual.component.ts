import { Component, Input } from '@angular/core';
import { Node } from '../../../d3';
 
@Component({
  selector: '[nodeVisual]',
  template: `
    <svg:g pointer-event="all"  (mouseover)="sampleFun()" [attr.transform]="'translate(' + node.x + ',' + node.y + ')'">
      <svg:circle
          class="node tooltip"
          [attr.fill]="node.color"
          cx="0"
          cy="0"
          [attr.r]="node.r" >
          <rect>
          <title>Hello, World!</title>
        </rect>
      </svg:circle >
      <svg:text
          class="node-name"
          [attr.font-size]="node.fontSize">
        {{node.id}}
      </svg:text>
    <title class="tooltiptext"> Hello Cango !  You are in {{node.id}}th node.</title>
    </svg:g>
  `,
  styleUrls: ['./node-visual.component.css']
})
export class NodeVisualComponent {
  @Input('nodeVisual') node: Node;

  constructor() {

  }
  ngOnInit(){
    // this.sampleFun();
  }
  sampleFun(){
    debugger;
      console.log("Im gettin called.........////////////")
  }
  
//  function showTooltip(evt :any, text:any) :void{
//     debugger
//     let tooltip = document.getElementById("tooltip");
//     tooltip.innerHTML = text; tooltip.style.display = "block"; tooltip.style.left = evt.pageX + 10 + 'px';
//     tooltip.style.top = evt.pageY + 10 + 'px';
//   }

  // $(document).ready(function(){

  // }
  
  
}
