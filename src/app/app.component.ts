import { Component, OnInit } from '@angular/core';

const jsPlumb = window.jsPlumb;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    jsPlumb.ready(() => {
      jsPlumb.connect({
        source: 'window1',
        target: 'window2',
        paintStyle: { strokeWidth: 2, stroke: 'rgb(243,230,18)' },
        endpointStyle: { fill: 'rgb(243,229,`0)' },
        anchors: ['Right', 'Right'],
        connector: ['Flowchart', {
          cornerRadius: 5
        }],
        overlays: [
          'Arrow',
          ['Label', { label: 'foo', location: 0.25 }]
        ],
      });
    });
  }
}
