import { Component, OnInit } from '@angular/core';
declare const cytoscape:any;

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

      style:
        [{
          "selector": "node",
          "style": {
            "text-valign": "center",
            "text-halign": "left",
            "width": 16,
            "height": 16
          }
        }, {
          "selector": "node[type]",
          "style": {
            "label": "data(type)"
          }
        }, {
          "selector": "edge",
          "style": {
            "width": 1,
            "curve-style": "straight"
          }
        }, {
          "selector": "edge[arrow]",
          "style": {
            "target-arrow-shape": "data(arrow)"
          }
        }, {
          "selector": "edge.hollow",
          "style": {
            "target-arrow-fill": "hollow"
          }
        }],

      elements:
        [
          { "data": { "id": "n0", "type": "triangle" } },
          { "data": { "id": "n1" } },
          { "data": { "id": "e0", "source": "n0", "target": "n1", "arrow": "triangle" } },

          { "data": { "id": "n2", "type": "triangle-tee" } },
          { "data": { "id": "n3" } },
          { "data": { "id": "e1", "source": "n2", "target": "n3", "arrow": "triangle-tee" } },

          { "data": { "id": "n4", "type": "triangle-cross" } },
          { "data": { "id": "n5" } },
          { "data": { "id": "e3", "source": "n4", "target": "n5", "arrow": "triangle-cross" } },

          { "data": { "id": "n6", "type": "triangle-backcurve" } },
          { "data": { "id": "n7" } },
          { "data": { "id": "e4", "source": "n6", "target": "n7", "arrow": "triangle-backcurve" } },

          { "data": { "id": "n8", "type": "vee" } },
          { "data": { "id": "n9" } },
          { "data": { "id": "e5", "source": "n8", "target": "n9", "arrow": "vee" } },

          { "data": { "id": "n10", "type": "tee" } },
          { "data": { "id": "n11" } },
          { "data": { "id": "e6", "source": "n10", "target": "n11", "arrow": "tee" } },

          { "data": { "id": "n12", "type": "square" } },
          { "data": { "id": "n13" } },
          { "data": { "id": "e7", "source": "n12", "target": "n13", "arrow": "square" } },

          { "data": { "id": "n14", "type": "circle" } },
          { "data": { "id": "n15" } },
          { "data": { "id": "e8", "source": "n14", "target": "n15", "arrow": "circle" } },

          { "data": { "id": "n16", "type": "diamond" } },
          { "data": { "id": "n17" } },
          { "data": { "id": "e9", "source": "n16", "target": "n17", "arrow": "diamond" } },

          { "data": { "id": "n18", "type": "none" } },
          { "data": { "id": "n19" } },
          { "data": { "id": "e10", "source": "n18", "target": "n19", "arrow": "none" } }
        ],
    });

    document.getElementById('hollow').addEventListener('click', function(){
      cy.edges().toggleClass('hollow');
    });
  }
}
