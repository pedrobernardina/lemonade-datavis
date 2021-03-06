/* global gViz */
import Component from '@ember/component';
import layout from '../../templates/components/visualizations/scatter-plot';

export default Component.extend({
  layout,

  // Set html elements
  classNames: ["gViz-wrapper"],

  // Main var
  _var: null,

  didRender: function(){

    // Draw visualization
    this.set('_var',
      gViz.vis.scatterPlot()
      ._var(this.get('_var'))
      .container(`.gViz-wrapper-inner[data-id='${this.get('elementId')}']`)
      .data(this.get('data'))
      .build()
    );

  }

});
