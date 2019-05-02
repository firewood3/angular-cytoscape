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
      // style: [
      //   {
      //     "selector": "node[label]",
      //     "style": {
      //       "label": "data(label)"
      //     }
      //   },
      //
      //   {
      //     "selector": "edge[label]",
      //     "style": {
      //       "label": "data(label)",
      //       "width": 3
      //     }
      //   },
      //
      //   {
      //     "selector": ".top-left",
      //     "style": {
      //       "text-valign": "top",
      //       "text-halign": "left"
      //     }
      //   },
      //
      //   {
      //     "selector": ".top-center",
      //     "style": {
      //       "text-valign": "top",
      //       "text-halign": "center"
      //     }
      //   },
      //
      //   {
      //     "selector": ".top-right",
      //     "style": {
      //       "text-valign": "top",
      //       "text-halign": "right"
      //     }
      //   },
      //
      //   {
      //     "selector": ".center-left",
      //     "style": {
      //       "text-valign": "center",
      //       "text-halign": "left"
      //     }
      //   },
      //
      //   {
      //     "selector": ".center-center",
      //     "style": {
      //       "text-valign": "center",
      //       "text-halign": "center"
      //     }
      //   },
      //
      //   {
      //     "selector": ".center-right",
      //     "style": {
      //       "text-valign": "center",
      //       "text-halign": "right"
      //     }
      //   },
      //
      //   {
      //     "selector": ".bottom-left",
      //     "style": {
      //       "text-valign": "bottom",
      //       "text-halign": "left"
      //     }
      //   },
      //
      //   {
      //     "selector": ".bottom-center",
      //     "style": {
      //       "text-valign": "bottom",
      //       "text-halign": "center"
      //     }
      //   },
      //
      //   {
      //     "selector": ".bottom-right",
      //     "style": {
      //       "text-valign": "bottom",
      //       "text-halign": "right"
      //     }
      //   },
      //
      //   {
      //     "selector": ".multiline-manual",
      //     "style": {
      //       "text-wrap": "wrap"
      //     }
      //   },
      //
      //   {
      //     "selector": ".multiline-auto",
      //     "style": {
      //       "text-wrap": "wrap",
      //       "text-max-width": 80
      //     }
      //   },
      //
      //   {
      //     "selector": ".autorotate",
      //     "style": {
      //       "edge-text-rotation": "autorotate"
      //     }
      //   },
      //
      //   {
      //     "selector": ".background",
      //     "style": {
      //       "text-background-opacity": 1,
      //       "color": "#fff",
      //       "text-background-color": "#888",
      //       "text-background-shape": "roundrectangle",
      //       "text-border-color": "#000",
      //       "text-border-width": 1,
      //       "text-border-opacity": 1
      //     }
      //   },
      //
      //   {
      //     "selector": ".outline",
      //     "style": {
      //       "color": "#fff",
      //       "text-outline-color": "#888",
      //       "text-outline-width": 3
      //     }
      //   }
      // ],
      //
      // elements: [
      //   { data: { label: 'top left' }, classes: 'top-left' },
      //   { data: { label: 'top center' }, classes: 'top-center' },
      //   { data: { label: 'top right' }, classes: 'top-right' },
      //
      //   { data: { label: 'center left' }, classes: 'center-left' },
      //   { data: { label: 'center center' }, classes: 'center-center' },
      //   { data: { label: 'center right' }, classes: 'center-right' },
      //
      //   { data: { label: 'bottom left' }, classes: 'bottom-left' },
      //   { data: { label: 'bottom center' }, classes: 'bottom-center' },
      //   { data: { label: 'bottom right' }, classes: 'bottom-right' },
      //
      //   { data: { label: 'multiline manual\nfoo\nbar\nbaz' }, classes: 'multiline-manual' },
      //   { data: { label: 'multiline auto foo bar baz' }, classes: 'multiline-auto' },
      //   { data: { label: 'outline' }, classes: 'outline' },
      //
      //   { data: { id: 'ar-src' } },
      //   { data: { id: 'ar-tgt' } },
      //   { data: { source: 'ar-src', target: 'ar-tgt', label: 'autorotate (move my nodes)' }, classes: 'autorotate' },
      //   { data: { label: 'background' }, classes: 'background' }
      // ]
      elements: labelsData.elements
    });
  }
}
