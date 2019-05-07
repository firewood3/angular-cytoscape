import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {EleState} from '../../../../ngrx/states/ele.states';
import {UpdateEle} from '../../../../ngrx/actions/ele.actions';

declare const cytoscape:any;

@Component({
  selector: 'app-free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.css']
})
export class FreeComponent implements OnInit {

  cy : any;

  constructor(public eleStore: Store<EleState>) {}

  ngOnInit() {
    this.onCy();
    this.eleStore.subscribe({
      next: value=>{
        console.log('free', value);

        // @ts-ignore
        if(value.ele.color === 'white'){
          // @ts-ignore
          let node = this.cy.getElementById(value.ele.id);
          node.addClass('color-white');
          // @ts-ignore
        } else if(value.ele.color === 'red'){
          // @ts-ignore
          let node = this.cy.getElementById(value.ele.id);
          node.addClass('color-red');
          // @ts-ignore
        } else if(value.ele.color === 'green'){
          console.log('green');
          // @ts-ignore

          let node = this.cy.getElementById(value.ele.id);
          node.addClass('color-green');
          // @ts-ignore
        } else if(value.ele.color === 'blue'){
          // @ts-ignore
          let node = this.cy.getElementById(value.ele.id);
          node.addClass('color-blue');
        }
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
    // console.log('my', myele);
    // console.log('my data', myele._private.data);
    // console.log('my style', myele._private.style);

    // myele.addClass('color-blue');


    var eles = this.cy.add([
      { group: 'nodes', data: { id: 'n0', name: 'first' }, position: { x: 500, y: 500 } },
      { group: 'nodes', data: { id: 'n1', name: 'second' }, position: { x: 600, y: 600 } },
      { group: 'edges', data: { id: 'e0', source: 'n0', target: 'n1' } }
    ]);

    this.cy.on('tap', 'node', function(e){
      console.log("root",e);
      // console.log("target_private.data",e.target._private.data);
      console.log("target", e.target._private.style.color.strValue);

      let localColor: string | null = null;

      if(e.target._private.style.color.strValue === 'rgb(255,255,255)') {
        localColor = 'white';
        // @ts-ignore
      } else if(e.target._private.style.color.strValue === 'rgb(0,0,255)') {
        localColor = 'blue';
        // @ts-ignore
      } else if(e.target._private.style.color.strValue === 'rgb(0,128,0)') {
        localColor = 'green';
        // @ts-ignore
      } else if(e.target._private.style.color.strValue === 'rgb(255,0,0)') {
        localColor = 'red';
      }

      const payload = {
        id: e.target._private.data.id,
        name: e.target._private.data.name,
        color: localColor
      };

      this.updateEle(payload);

      try { // your browser may block popups
        // window.open( this.data('href') );
      } catch(e){ // fall back on url change
        // window.location.href = this.data('href');
      }
    }.bind(this));

  }

  updateEle(payload: any) {
    this.eleStore.dispatch(new UpdateEle(payload));
  }

}
