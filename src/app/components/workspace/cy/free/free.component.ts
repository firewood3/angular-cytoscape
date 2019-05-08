import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {EleState} from '../../../../ngrx/states/ele.states';
import {UpdateEle} from '../../../../ngrx/actions/ele.actions';
import {CyNode} from '../../../../models/node';
import {EleEffects} from '../../../../ngrx/effects/ele.effects';

declare const cytoscape:any;

@Component({
  selector: 'app-free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.css']
})
export class FreeComponent implements OnInit {

  cy : any;
  cyNode = new CyNode();
  selectedEle: any;

  constructor(public eleStore: Store<EleState>,
              private eleEffects :EleEffects) {}

  ngOnInit() {
    this.onCy();
    this.eleEffects.UpdateStyle.subscribe({
      next: color => {
        if(color != this.colorResolver(this.selectedEle._private.style.color.strValue))
          this.updateColor(color, this.cyNode.id);
      }
    });

    this.eleStore.subscribe({
      next: value => {
        // @ts-ignore
        this.cyNode = value.ele;
      }
    });
  }

  onCy() {
    this.cy = cytoscape({
      container: document.getElementById('cy'),
      elements: {
        nodes: [
          { data: { id: 'desktop', name: 'Cytoscape'} },
          { data: { id: 'js', name: 'Cytoscape.js'} }
        ],
        edges: [
          { data: { source: 'desktop', target: 'js' } }
        ]
      },

      style: [
        {
          selector: 'node',
          style: {
            'content': 'data(name)',
            'text-valign': 'center',
            'color': 'white',
            'text-outline-width': 2,
            'text-outline-color': '#888',
            'background-color': '#888'
          },
        },{
          selector: ':selected',
          style: {
            'background-color': 'black',
            'line-color': 'black',
            'target-arrow-color': 'black',
            'source-arrow-color': 'black',
            'text-outline-color': 'black'
          }
        }, {
          selector: 'node.color-blue',
          style: {
            "color": "blue"
          }
        }, {
          selector: 'node.color-red',
          style: {
            "color": "red"
          }
        }, {
          selector: 'node.color-green',
          style: {
            "color": "green"
          }
        }, {
          selector: 'node.color-yellow',
          style: {
            "color": "yellow"
          }
        }, {
          selector: 'node.color-white',
          style: {
            "color": "white"
          }
        }
      ],
    });

    var myele = this.cy.getElementById('desktop');
    myele.addClass('color-green');

    var eles = this.cy.add([
      { group: 'nodes', data: { id: 'n0', name: 'first' }, position: { x: 500, y: 500 } },
      { group: 'nodes', data: { id: 'n1', name: 'second' }, position: { x: 600, y: 600 } },
      { group: 'edges', data: { id: 'e0', source: 'n0', target: 'n1' } }
    ]);

    this.cy.on('tap', 'node', function(e){
      this.selectedEle = e.target;
      const payload = {
        id: e.target._private.data.id,
        name: e.target._private.data.name,
        color: this.colorResolver(e.target._private.style.color.strValue)
      };
      this.updateEle(payload);
    }.bind(this));

  }

  updateEle(payload: any) {
    this.eleStore.dispatch(new UpdateEle(payload));
  }

  colorResolver(rgb: string): string | null{
    switch (rgb) {
      case 'rgb(255,255,255)' : return 'white';
      case 'rgb(0,0,255)' : return 'blue';
      case 'rgb(0,128,0)' : return 'green';
      case 'rgb(255,0,0)' : return 'red';
      default : return null;
    }
  }

  updateColor(color: string, id: string) {
    if(color === 'white'){
      let node = this.cy.getElementById(id);
      node.removeClass('color-red');
      node.removeClass('color-green');
      node.removeClass('color-blue');
      node.addClass('color-white');
    } else if(color === 'red'){
      let node = this.cy.getElementById(id);
      node.removeClass('color-white');
      node.removeClass('color-green');
      node.removeClass('color-blue');
      node.addClass('color-red');
    } else if(color === 'green'){
      let node = this.cy.getElementById(id);
      node.removeClass('color-white');
      node.removeClass('color-red');
      node.removeClass('color-blue');
      node.addClass('color-green');
    } else if(color === 'blue'){
      let node = this.cy.getElementById(id);
      node.removeClass('color-white');
      node.removeClass('color-red');
      node.removeClass('color-green');
      node.addClass('color-blue');
    }
  }

}
