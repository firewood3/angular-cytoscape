import { Component, OnInit } from '@angular/core';
declare const cytoscape:any;
declare const nodeTypesData: any;
@Component({
  selector: 'app-node-types',
  templateUrl: './node-types.component.html',
  styleUrls: ['./node-types.component.css']
})
export class NodeTypesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.onCy();
  }

  onCy() {

    const cy = cytoscape({
      container: document.getElementById('cy'),

      layout: {
        name: 'grid'
      },

      style: nodeTypesData.style,
      elements: nodeTypesData.elements,
    });
  }
}
