import { Component, OnInit } from '@angular/core';
declare const cytoscape:any;

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
    var toJson = function(res){ return res.json(); };

    const cy = cytoscape({
      container: document.getElementById('cy'),

      layout: {
        name: 'grid'
      },

      style:
        [{
          "selector": "node",
          "style": {
            "shape": "data(type)",
            "label": "data(type)",
            "height": 40,
            "width": 40
          }
        }, {
          "selector": "node[points]",
          "style": {
            "shape-polygon-points": "data(points)",
            "label": "polygon\n(custom points)",
            "text-wrap": "wrap"
          }
        }],

      elements:
        [{
          "data": {
            "type": "ellipse"
          }
        }, {
          "data": {
            "type": "triangle"
          }
        }, {
          "data": {
            "type": "rectangle"
          }
        }, {
          "data": {
            "type": "round-rectangle"
          }
        }, {
          "data": {
            "type": "bottom-round-rectangle"
          }
        }, {
          "data": {
            "type": "cut-rectangle"
          }
        }, {
          "data": {
            "type": "barrel"
          }
        }, {
          "data": {
            "type": "rhomboid"
          }
        }, {
          "data": {
            "type": "diamond"
          }
        }, {
          "data": {
            "type": "pentagon"
          }
        }, {
          "data": {
            "type": "hexagon"
          }
        }, {
          "data": {
            "type": "concave-hexagon"
          }
        }, {
          "data": {
            "type": "heptagon"
          }
        }, {
          "data": {
            "type": "octagon"
          }
        }, {
          "data": {
            "type": "star"
          }
        }, {
          "data": {
            "type": "tag"
          }
        }, {
          "data": {
            "type": "vee"
          }
        }, {
          "data": {
            "type": "polygon",
            "points": [
              -0.33, -1,
              0.33, -1,
              0.33, -0.33,
              1, -0.33,
              1, 0.33,
              0.33, 0.33,
              0.33, 1,
              -0.33, 1,
              -0.33, 0.33,
              -1, 0.33,
              -1, -0.33,
              -0.33, -0.33
            ]
          }
        }]
    });
  }
}
