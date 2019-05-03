import { Component, OnInit } from '@angular/core';
declare const cytoscape:any;
declare const edgeTypesData:any;

@Component({
  selector: 'app-edge-types',
  templateUrl: './edge-types.component.html',
  styleUrls: ['./edge-types.component.css']
})
export class EdgeTypesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.onCy();
  }

  onCy() {
    var cy = cytoscape({
      container: document.getElementById('cy'),

      layout: {
        name: 'grid',
        columns: 4
      },

      style: edgeTypesData.style,

      elements: edgeTypesData.elements

    });

    cy.ready(function(){ // make taxi nodes better organised
      var n13 = cy.$('#n13');
      var n11 = cy.$('#n11');
      var n12 = cy.$('#n12');
      var p11 = n11.position();
      var p12 = n12.position();
      var d = (p12.x - p11.x)/4;

      n13.position({
        x: (p11.x + p12.x)/2,
        y: p11.y - d
      });

      n11.add(n12).position({ y: p11.y + d });
    });
  }

}
