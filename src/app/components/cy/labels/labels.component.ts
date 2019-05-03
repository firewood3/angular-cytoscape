import { Component, OnInit } from '@angular/core';
declare const cytoscape: any;
declare const labelsData: any;
@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css']
})
export class LabelsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.onCy();
  }

  onCy() {
    let cy = cytoscape({
      container: document.getElementById('cy'),

      layout: {
        name: 'grid',
        cols: 3
      },

      // style: fetch('src/libs/cytoscape/cy-style.json').then(function(res){
      //   return res.json();
      // }),

      style: labelsData.style,

      elements: labelsData.elements
    });
  }
}
