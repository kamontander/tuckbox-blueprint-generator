document.addEventListener( 'DOMContentLoaded', function() {

  console.log(
    '%cTuckbox Generator',
    'font-family:sans-serif;font-weight:600;font-size:20px;color:#f58220;'
  );

//  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//  Helper Functions
//  ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

  function hasClass( el, className ) {
    return el.classList ? el.classList.contains( className ) : new RegExp( '\\b'+ className+'\\b' ).test( el.className );
  }

  function addClass( el, className ) {
    if ( el.classList ) el.classList.add( className );
    else if ( !hasClass( el, className ) ) el.className += ' ' + className;
  }

  function removeClass( el, className ) {
    if ( el.classList ) el.classList.remove( className );
    else el.className = el.className.replace( new RegExp( '\\b'+ className+'\\b', 'g' ), '' );
  }

  function kebabToCamel( input ) {
    return input.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
  }

  function camelToKebab( input ) {
    return input.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }

//  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//  Animated Favicon ( https://github.com/dlom/favicon.js/tree/master )
//  ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

  favicon.animate([
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48Y2lyY2xlIGN4PSIxMjgiIGN5PSIxMjgiIHI9IjEyOCIvPjwvc3ZnPg",
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48Y2lyY2xlIGNsYXNzPSJhIiBjeD0iMTI4IiBjeT0iMTI4IiByPSIxMjgiLz48L3N2Zz4="
  ], 500);

//  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//  TweakPane
//  ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀


  const params = {
    title: 'Monsters',
    fontSize: 8,
    fontOutline: true,
    imageTop: '',
    imageFront: '',
    imageRight: '',
    imageBack: '',
    imageLeft: '',
    imageBottom: '',
    width: 64,
    height: 89,
    depth: 17,
    bottomTucked: true,
    thumbTop: true,
    thumbBottom: true,
    thumbWidth: 20,
    flapsWidth: 30,
    tuckWidth: 40,
    trimWidth: 0.5,
    hingeDistance: 7,
    scale: 5,
    colorOutline: '#000000',
    colorCrease: '#ff0000',
    colorTitle: '#0000ff'
  };

  // const pane = new Pane();
  const pane = new Tweakpane.Pane({
    title: 'Parameters',
    expanded: true
  });

  pane.addInput( params, 'scale', {
    label: 'Scale (on screen)',
    min: 1,
    max: 10,
    step: .1
  });

  pane.addInput( params, 'colorOutline', {
    label: 'Outline'
  });

  pane.addInput( params, 'colorCrease', {
    label: 'Crease'
  });

  const titleFolder = pane.addFolder({
    title: 'Title',
    // expanded: false
  });

  titleFolder.addInput( params, 'title', {
    label: 'Title'
  });

  titleFolder.addInput( params, 'fontSize', {
    label: 'Font Size',
    min: 0.1,
    max: 20,
    step: 0.1
  });

  titleFolder.addInput( params, 'colorTitle', {
    label: 'Font Color'
  });

  titleFolder.addInput( params, 'fontOutline', {
    label: 'Outlines'
  });

  const imagesFolder = pane.addFolder({
    title: 'Images (URLs)',
    expanded: false
  });

  imagesFolder.addInput( params, 'imageTop', {
    label: 'Top'
  });

  imagesFolder.addInput( params, 'imageFront', {
    label: 'Front'
  });

  imagesFolder.addInput( params, 'imageRight', {
    label: 'Right'
  });

  imagesFolder.addInput( params, 'imageLeft', {
    label: 'Left'
  });

  imagesFolder.addInput( params, 'imageBack', {
    label: 'Back'
  });

  imagesFolder.addInput( params, 'imageBottom', {
    label: 'Bottom'
  });

  const dimensionsFolder = pane.addFolder({
    title: 'Dimensions [mm]'
  });

  dimensionsFolder.addInput( params, 'width', {
    label: 'Width',
    min: 10,
    step: 1
  });

  dimensionsFolder.addInput( params, 'height', {
    label: 'Height',
    min: 10,
    step: 1
  });

  dimensionsFolder.addInput( params, 'depth', {
    label: 'Depth',
    min: 10,
    step: 1
  });

  dimensionsFolder.addInput( params, 'flapsWidth', {
    label: 'Flaps',
    min: 10,
    max: 30,
    step: 1
  });

  dimensionsFolder.addInput( params, 'tuckWidth', {
    label: 'Tuck Flaps',
    min: 10,
    max: 40,
    step: 1
  });

  dimensionsFolder.addInput( params, 'trimWidth', {
    label: 'Trim',
    min: 0,
    max: 3,
    step: .5
  });

  dimensionsFolder.addInput( params, 'hingeDistance', {
    label: 'Hinge',
    min: 0,
    max: 20,
    step: .5
  });

  dimensionsFolder.addInput( params, 'bottomTucked', {
    label: 'Bottom',
    options: {
      Tucked: true,
      Glued: false
    }
  });

  const thumbFolder = pane.addFolder({
    title: 'Thumb Cutouts'
  });

  thumbFolder.addInput( params, 'thumbTop', {
    label: 'Top'
  });

  const inputThumbBottom = thumbFolder.addInput( params, 'thumbBottom', {
    label: 'Bottom'
  });

  const inputThumbWidth = thumbFolder.addInput( params, 'thumbWidth', {
    label: 'Width',
    min: 10,
    max: 30,
    step: 1
  });

  const btnPrint = pane.addButton({
    title: 'Print'
  });

  btnPrint.on( 'click', function() {
    window.print();
  });

//  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//  Generator
//  ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

  const nameSpace = 'http://www.w3.org/2000/svg';
  const canvasEl = document.getElementById( 'canvas' );
  const svg = document.createElementNS( nameSpace, 'svg' );
  let data = pane.exportPreset();
  let printStylesToInject = '';

  pane.on( 'change', ( ev ) => {
    refreshImage();
  });

  function reloadData() {
    data = pane.exportPreset();
  }

  function refreshImage() {

    reloadData();

    if ( !data.thumbTop && !data.thumbBottom ) {
      inputThumbWidth.disabled = true;
    } else {
      inputThumbWidth.disabled = false;
    }

    if ( !data.bottomTucked ) {
      inputThumbBottom.disabled = true;
      if ( !data.thumbTop ) {
        inputThumbWidth.disabled = true;
      } else {
        inputThumbWidth.disabled = false;
      }
    } else {
      inputThumbBottom.disabled = false;
    }

    drawBlueprint();
  }

  ( function() {
    var node = document.createElement( 'style' );
    document.body.appendChild( node );
    window.addStyleString = function( str ) {
      node.innerHTML = str;
    }
  } () );


  function createSVG() {
    svg.setAttributeNS( null, 'width', '100%' );
    svg.setAttributeNS( null, 'height', '100%' );
    canvasEl.appendChild( svg );
  }

  createSVG();

  function drawBlueprint() {
    let totalWidth = ( data.depth*2 + data.width*2 + data.depth*.8 );
    let totalWidthScaled = totalWidth * data.scale;
    let totalHeight = ( data.depth*2 + data.tuckWidth*2 + data.height*1 );
    let totalHeightScaled = totalHeight * data.scale;
    let outline = document.createElementNS( nameSpace, 'path' );
    let crease = document.createElementNS( nameSpace, 'path' );
    let text = document.createElementNS( nameSpace, 'text' );
    let coords = '';

    let width = data.width * data.scale;
    let height = data.height * data.scale;
    let depth = data.depth * data.scale;
    let trimWidth = data.trimWidth  * data.scale;
    let thumbWidth = data.thumbWidth  * data.scale;
    let flapsWidth = data.flapsWidth  * data.scale;
    let tuckWidth = data.tuckWidth  * data.scale;
    let hingeDistance = data.hingeDistance  * data.scale;

    svg.innerHTML = '';
    svg.setAttributeNS( null, 'viewBox', '0 0 ' + totalWidthScaled + ' ' + totalHeightScaled );
    canvasEl.style.width = totalWidthScaled + 'px';
    canvasEl.style.height = totalHeightScaled + 'px';

    printStylesToInject = '@media print { #canvas { width: ' + totalWidth + 'mm !important; height: ' + totalHeight + 'mm !important; stroke-width: .25pt !important; } }';

    addStyleString( printStylesToInject );

    outline.setAttributeNS( null, 'stroke', data.colorOutline );
    outline.setAttributeNS( null, 'fill', 'none' );
    outline.setAttributeNS( null, 'stroke-linecap', 'round' );
    outline.setAttributeNS( null, 'stroke-linejoin', 'round' );
    crease.setAttributeNS( null, 'stroke', data.colorCrease );
    crease.setAttributeNS( null, 'fill', 'none' );
    crease.setAttributeNS( null, 'stroke-linecap', 'round' );
    crease.setAttributeNS( null, 'stroke-linejoin', 'round' );

    if ( data.imageTop ) {
      let topImage = document.createElementNS( nameSpace, 'image' );

      topImage.setAttributeNS( null, 'width', width );
      topImage.setAttributeNS( null, 'height', depth );
      topImage.setAttributeNS( null, 'preserveAspectRatio', 'xMidYMid slice' );
      topImage.setAttributeNS( 'http://www.w3.org/1999/xlink', 'xlink:href', data.imageTop );
      topImage.setAttributeNS( null, 'x', ( depth*.8 + width + depth ) );
      topImage.setAttributeNS( null, 'y', ( tuckWidth*1 ) );
      svg.appendChild( topImage );
    }

    if ( data.imageFront ) {
      let svgDefs = document.createElementNS( nameSpace, 'defs' );
      let frontImage = document.createElementNS( nameSpace, 'image' );
      let frontImageClip = document.createElementNS( nameSpace, 'clipPath' );
      let frontImageClipPath = document.createElementNS( nameSpace, 'path' );

      frontImageClip.setAttributeNS( null, 'id', 'front-image-clip' );

      coords = 'M' + depth*.8 + ',' + ( depth*1 + tuckWidth*1 );
      coords += 'h' + ( ( width - thumbWidth ) / 2 );
      if ( data.thumbTop ) {
        coords += 'c' + thumbWidth/8 + ',' + thumbWidth/2 + ' ' + ( thumbWidth - thumbWidth/8 ) + ',' + thumbWidth/2 + ' ' + thumbWidth + ',0';
      } else {
        coords += 'h' + thumbWidth;
      }
      coords += 'h' + ( ( width - thumbWidth ) / 2 + trimWidth );
      coords += 'v' + height;
      coords += 'h' + -( ( width - thumbWidth ) / 2 + trimWidth );
      if ( data.bottomTucked && data.thumbBottom ) {
        coords += 'c-' + thumbWidth/8 + ',' + -thumbWidth/2 + ' ' + -( thumbWidth - thumbWidth/8 ) + ',' + -thumbWidth/2 + ' ' + -thumbWidth + ',0';
      } else {
        coords += 'h' + -thumbWidth;
      }
      coords += 'h' + -( ( width - thumbWidth ) / 2 );
      coords += 'v' + -height;

      frontImageClipPath.setAttributeNS( null, 'd', coords );
      frontImageClip.appendChild( frontImageClipPath );
      svgDefs.appendChild( frontImageClip );
      svg.appendChild( svgDefs );

      frontImage.setAttributeNS( null, 'width', width );
      frontImage.setAttributeNS( null, 'height', height );
      frontImage.setAttributeNS( null, 'preserveAspectRatio', 'xMidYMid slice' );
      frontImage.setAttributeNS( 'http://www.w3.org/1999/xlink', 'xlink:href', data.imageFront );
      frontImage.setAttributeNS( null, 'x', ( depth*.8 ) );
      frontImage.setAttributeNS( null, 'y', ( depth*1 + tuckWidth*1 ) );
      frontImage.setAttributeNS( null, 'clip-path', 'url(#front-image-clip)' );
      svg.appendChild( frontImage );
    }

    if ( data.imageRight ) {
      let rightImage = document.createElementNS( nameSpace, 'image' );

      rightImage.setAttributeNS( null, 'width', depth );
      rightImage.setAttributeNS( null, 'height', height );
      rightImage.setAttributeNS( null, 'preserveAspectRatio', 'xMidYMid slice' );
      rightImage.setAttributeNS( 'http://www.w3.org/1999/xlink', 'xlink:href', data.imageRight );
      rightImage.setAttributeNS( null, 'x', ( depth*.8 + width ) );
      rightImage.setAttributeNS( null, 'y', ( depth*1 + tuckWidth*1 ) );
      svg.appendChild( rightImage );
    }

    if ( data.imageBack ) {
      let backImage = document.createElementNS( nameSpace, 'image' );

      backImage.setAttributeNS( null, 'width', width );
      backImage.setAttributeNS( null, 'height', height );
      backImage.setAttributeNS( null, 'preserveAspectRatio', 'xMidYMid slice' );
      backImage.setAttributeNS( 'http://www.w3.org/1999/xlink', 'xlink:href', data.imageBack );
      backImage.setAttributeNS( null, 'x', ( depth*.8 + width + depth ) );
      backImage.setAttributeNS( null, 'y', ( depth*1 + tuckWidth*1 ) );
      svg.appendChild( backImage );
    }

    if ( data.imageLeft ) {
      let leftImage = document.createElementNS( nameSpace, 'image' );

      leftImage.setAttributeNS( null, 'width', depth );
      leftImage.setAttributeNS( null, 'height', height );
      leftImage.setAttributeNS( null, 'preserveAspectRatio', 'xMidYMid slice' );
      leftImage.setAttributeNS( 'http://www.w3.org/1999/xlink', 'xlink:href', data.imageLeft );
      leftImage.setAttributeNS( null, 'x', ( depth*.8 + width*2 + depth ) );
      leftImage.setAttributeNS( null, 'y', ( depth*1 + tuckWidth*1 ) );
      svg.appendChild( leftImage );
    }

    if ( data.imageBottom ) {
      let topImage = document.createElementNS( nameSpace, 'image' );

      topImage.setAttributeNS( null, 'width', width );
      topImage.setAttributeNS( null, 'height', depth );
      topImage.setAttributeNS( null, 'preserveAspectRatio', 'xMidYMid slice' );
      topImage.setAttributeNS( 'http://www.w3.org/1999/xlink', 'xlink:href', data.imageBottom );
      topImage.setAttributeNS( null, 'x', ( depth*.8 + width + depth ) );
      topImage.setAttributeNS( null, 'y', ( tuckWidth*1 + depth + height ) );
      svg.appendChild( topImage );
    }

    coords = 'M' + depth*.8 + ',' + ( depth*1 + tuckWidth*1 );

    coords += 'h' + ( ( width - thumbWidth ) / 2 );
    if ( data.thumbTop ) {
      coords += 'c' + thumbWidth/8 + ',' + thumbWidth/2 + ' ' + ( thumbWidth - thumbWidth/8 ) + ',' + thumbWidth/2 + ' ' + thumbWidth + ',0';
    } else {
      coords += 'h' + thumbWidth;
    }
    coords += 'h' + ( ( width - thumbWidth ) / 2 + trimWidth );

    coords += 'v' + -( flapsWidth - depth/2 );
    coords += 'q' + '0,' + -depth/2 + ' ' + depth/2 + ',' + -depth/2;
    coords += 'h' + ( depth/2 - trimWidth*2 );
    coords += 'v' + flapsWidth;
    coords += 'h' + trimWidth;

    // top tuck
    coords += 'm' + '0,' + hingeDistance;
    coords += 'v' + -( depth*1 + hingeDistance );
    coords += 'v' + -tuckWidth*.3;
    coords += 'c' + '0,' + -tuckWidth/3 + ' ' + width/4 + ',' + -tuckWidth*.7 + ' ' + width/2 + ',' + -tuckWidth*.7;
    coords += 's' + width/2 + ',' + ( tuckWidth*.7 - tuckWidth/3 ) + ' ' + width/2 + ',' + tuckWidth*.7;
    coords += 'v' + tuckWidth*.3;
    coords += 'v' + ( depth*1 + hingeDistance );
    coords += 'm' + '0,' + -hingeDistance;

    coords += 'h' + trimWidth;
    coords += 'v' + -flapsWidth*1;
    coords += 'h' + ( depth/2 - trimWidth*2 );
    coords += 'q' + depth/2 + ',0 ' + depth/2 + ',' + depth/2;
    coords += 'v' + ( flapsWidth - depth/2 );
    coords += 'h' + trimWidth;

    // right side
    coords += 'v' + height;
    coords += 'h' + -trimWidth;
    if ( data.bottomTucked ) {
      coords += 'v' + ( flapsWidth - depth/2 );
      coords += 'q' + '0,' + depth/2 + ' ' + -depth/2 + ',' + depth/2;
      coords += 'h-' + ( depth/2 - trimWidth*2 );
      coords += 'v' + -flapsWidth;
    } else {
      coords += 'l' + -( depth -trimWidth*2 )/2 + ',' + ( depth -trimWidth*2 )/2;
      coords += 'l' + -( depth -trimWidth*2 )/2 + ',' + -( depth -trimWidth*2 )/2;
    }
    coords += 'h' + -trimWidth;


    // bottom side
    if ( data.bottomTucked ) {
      coords += 'v' + depth*1;

      // bottom tuck
      coords += 'v' + tuckWidth*.3;
      coords += 'c' + '0,' + tuckWidth/3 + ' ' + -width/4 + ',' + tuckWidth*.7 + ' ' + -width/2 + ',' + tuckWidth*.7;
      coords += 's' + -width/2 + ',' + -( tuckWidth*.7 - tuckWidth/3 ) + ' ' + -width/2 + ',' + -tuckWidth*.7;
      coords += 'v' + -tuckWidth*.3;
      coords += 'v' + -depth*1;

      coords += 'h' + -trimWidth;
      coords += 'v' + flapsWidth;
      coords += 'h' + -( depth/2 - trimWidth*2 );
      coords += 'q' + -depth/2 + ',0 ' + -depth/2 + ',' + -depth/2;
      coords += 'v' + -( flapsWidth - depth/2 );

      coords += 'h' + -( ( width - thumbWidth ) / 2 + trimWidth );
      if ( data.thumbBottom ) {
        coords += 'c-' + thumbWidth/8 + ',' + -thumbWidth/2 + ' ' + -( thumbWidth - thumbWidth/8 ) + ',' + -thumbWidth/2 + ' ' + -thumbWidth + ',0';
      } else {
        coords += 'h' + -thumbWidth;
      }
      coords += 'h' + -( ( width - thumbWidth ) / 2 );

    } else {
      coords += 'l' + -depth*.8 + ',' + depth*.8;
      coords += 'h' + -( width - depth*1.6 );
      coords += 'l' + -depth*.8 + ',' + -depth*.8;

      coords += 'h' + -trimWidth;
      coords += 'l' + -( depth -trimWidth*2 )/2 + ',' + ( depth -trimWidth*2 )/2;
      coords += 'l' + -( depth -trimWidth*2 )/2 + ',' + -( depth -trimWidth*2 )/2;
      coords += 'h' + -trimWidth;

      coords += 'v' + depth*1;
      coords += 'h' + -width;
      coords += 'v' + -depth;
    }

    coords += 'l' + -depth*.8 + ',' + -depth*.4;
    coords += 'v' + -( height - ( depth*.8 ) );
    coords += 'l' + depth*.8 + ',' + -depth*.4;

    outline.setAttributeNS( null, 'd', coords );
    svg.appendChild( outline );

    // creases
    // vertical
    coords = '';
    coords += 'M' + depth*.8 + ',' + ( depth + tuckWidth );
    coords += 'v' + height;
    coords += 'M' + ( depth*.8 + width ) + ',' + ( depth + tuckWidth );
    coords += 'v' + height;
    coords += 'M' + ( depth*.8 + width + depth ) + ',' + ( tuckWidth + depth + hingeDistance );
    coords += 'v' + ( height - hingeDistance );
    coords += 'M' + ( depth*.8 + width*2 + depth ) + ',' + ( tuckWidth + depth + hingeDistance );
    coords += 'v' + ( height - hingeDistance );

    // horizontal
    coords += 'M' + ( depth*.8 + width + depth ) + ',' + tuckWidth;
    coords += 'h' + ( width );
    coords += 'M' + ( depth*.8 + width + trimWidth ) + ',' + ( tuckWidth + depth );
    coords += 'h' + ( depth - trimWidth*2 );
    coords += 'M' + ( depth*.8 + width + depth ) + ',' + ( tuckWidth + depth );
    coords += 'h' + width;
    coords += 'M' + ( depth*.8 + width*2 + depth + trimWidth ) + ',' + ( tuckWidth + depth );
    coords += 'h' + ( depth - trimWidth*2 );
    coords += 'M' + ( depth*.8 + width + depth ) + ',' + ( tuckWidth + depth + hingeDistance );
    coords += 'h' + width;
    coords += 'M' + ( depth*.8 + width + trimWidth ) + ',' + ( tuckWidth + depth + height );
    coords += 'h' + ( depth - trimWidth*2 );
    coords += 'M' + ( depth*.8 + width + depth ) + ',' + ( tuckWidth + depth + height );
    coords += 'h' + width;
    coords += 'M' + ( depth*.8 + width*2 + depth + trimWidth ) + ',' + ( tuckWidth + depth + height );
    coords += 'h' + ( depth - trimWidth*2 );

    if ( data.bottomTucked ) {
      coords += 'M' + ( depth*.8 + width + depth ) + ',' + ( tuckWidth + depth + height + depth );
      coords += 'h' + ( width );
    } else {
      coords += 'M' + depth*.8 + ',' + ( depth + tuckWidth + height );
      coords += 'h' + width;
    }

    crease.setAttributeNS( null, 'd', coords );
    svg.appendChild( crease );

    let titleArray = data.title.split( '\n' );

    if ( data.fontOutline ) {
      text.setAttributeNS( null, 'stroke', data.colorTitle );
      text.setAttributeNS( null, 'fill', 'none' );
    } else {
      text.setAttributeNS( null, 'fill', data.colorTitle );
      text.setAttributeNS( null, 'stroke', 'none' );
    }
    text.setAttributeNS( null, 'text-anchor', 'middle' );
    text.setAttributeNS( null, 'font-size', data.fontSize * data.scale );
    text.setAttributeNS( null, 'x', ( depth*.8 + width/2 ) );
    text.setAttributeNS( null, 'stroke-linecap', 'round' );
    text.setAttributeNS( null, 'stroke-linejoin', 'round' );


    for (let i = 0; i < titleArray.length; i++) {
      let tspan = document.createElementNS( nameSpace, 'tspan' );
      let txt = document.createTextNode( titleArray[ i ] );

      tspan.setAttributeNS( null, 'x', ( depth*.8 + width/2 ) );
      tspan.setAttributeNS( null, 'dy', '1.2em' );
      tspan.appendChild( txt );
      text.appendChild( tspan );
    }


    svg.appendChild( text );

    var textBoundingBox = text.getBBox();
    text.setAttributeNS( null, 'y', ( depth + tuckWidth + height/2 ) - textBoundingBox.height/2 );

  }

  refreshImage();

});
