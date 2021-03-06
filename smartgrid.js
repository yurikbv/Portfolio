'use strict';

let smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
let settings = {
  outputStyle: 'scss', /* less || scss || sass || stylus */
  columns: 12, /* number of grid columns */
  offset: '30px', /* gutter width px || % || rem */
  mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
  tab: '  ',
  container: {
    maxWidth: '1200px', /* max-width оn very large screen */
    fields: '30px' /* side fields */
  },
  breakPoints: {
    laptop: {
      width: '992px',
    },
    tablet: {
      width: '768px',
    },
    phone: {
      width: '480px'
    }
  }
};

smartgrid('./app/scss', settings);