import { Component, OnInit } from '@angular/core';
declare const cytoscape:any;
declare const edgeArrowTypesData: any;

@Component({
  selector: 'app-edge-arrow-types',
  templateUrl: './edge-arrow-types.component.html',
  styleUrls: ['./edge-arrow-types.component.css']
})
export class EdgeArrowTypesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.onCy();
  }

  onCy(){
    var cy = cytoscape({
      container: document.getElementById('cy'),

      layout: {
        name: 'grid',
        columns: 4
      },

      style: edgeArrowTypesData.style,

      elements: edgeArrowTypesData.elements
    });

    document.getElementById('hollow').addEventListener('click', function(){
      cy.edges().toggleClass('hollow');
    });
  }
}
