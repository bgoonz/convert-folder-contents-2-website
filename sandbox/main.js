    /* --- jQuery 1.6.2: http://jquery.com/ --- */
    ( function ( a, b ) {
        function cv( a ) {
          return f.isWindow( a ) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
        }
  
        function cs( a ) {
          if ( !cg[ a ] ) {
            var b = c.body,
              d = f( "<" + a + ">" ).appendTo( b ),
              e = d.css( "display" );
            d.remove();
            if ( e === "none" || e === "" ) {
              ch || ( ch = c.createElement( "iframe" ), ch.frameBorder = ch.width = ch.height = 0 ), b.appendChild(
              ch );
              if ( !ci || !ch.createElement ) ci = ( ch.contentWindow || ch.contentDocument ).document, ci.write( ( c
                .compatMode === "CSS1Compat" ? "<!doctype html>" : "" ) + "<html><body>" ), ci.close();
              d = ci.createElement( a ), ci.body.appendChild( d ), e = f.css( d, "display" ), b.removeChild( ch )
            }
            cg[ a ] = e
          }
          return cg[ a ]
        }
  
        function cr( a, b ) {
          var c = {};
          f.each( cm.concat.apply( [], cm.slice( 0, b ) ), function () {
            c[ this ] = a
          } );
          return c
        }
  
        function cq() {
          cn = b
        }
  
        function cp() {
          setTimeout( cq, 0 );
          return cn = f.now()
        }
  
        function cf() {
          try {
            return new a.ActiveXObject( "Microsoft.XMLHTTP" )
          } catch ( b ) {}
        }
  
        function ce() {
          try {
            return new a.XMLHttpRequest
          } catch ( b ) {}
        }
  
        function b$( a, c ) {
          a.dataFilter && ( c = a.dataFilter( c, a.dataType ) );
          var d = a.dataTypes,
            e = {},
            g, h, i = d.length,
            j, k = d[ 0 ],
            l, m, n, o, p;
          for ( g = 1; g < i; g++ ) {
            if ( g === 1 )
              for ( h in a.converters ) typeof h == "string" && ( e[ h.toLowerCase() ] = a.converters[ h ] );
            l = k, k = d[ g ];
            if ( k === "*" ) k = l;
            else if ( l !== "*" && l !== k ) {
              m = l + " " + k, n = e[ m ] || e[ "* " + k ];
              if ( !n ) {
                p = b;
                for ( o in e ) {
                  j = o.split( " " );
                  if ( j[ 0 ] === l || j[ 0 ] === "*" ) {
                    p = e[ j[ 1 ] + " " + k ];
                    if ( p ) {
                      o = e[ o ], o === !0 ? n = p : p === !0 && ( n = o );
                      break
                    }
                  }
                }
              }!n && !p && f.error( "No conversion from " + m.replace( " ", " to " ) ), n !== !0 && ( c = n ? n( c ) :
                p( o( c ) ) )
            }
          }
          return c
        }
  
        function bZ( a, c, d ) {
          var e = a.contents,
            f = a.dataTypes,
            g = a.responseFields,
            h, i, j, k;
          for ( i in g ) i in d && ( c[ g[ i ] ] = d[ i ] );
          while ( f[ 0 ] === "*" ) f.shift(), h === b && ( h = a.mimeType || c.getResponseHeader( "content-type" ) );
          if ( h )
            for ( i in e )
              if ( e[ i ] && e[ i ].test( h ) ) {
                f.unshift( i );
                break
              } if ( f[ 0 ] in d ) j = f[ 0 ];
          else {
            for ( i in d ) {
              if ( !f[ 0 ] || a.converters[ i + " " + f[ 0 ] ] ) {
                j = i;
                break
              }
              k || ( k = i )
            }
            j = j || k
          }
          if ( j ) {
            j !== f[ 0 ] && f.unshift( j );
            return d[ j ]
          }
        }
  
        function bY( a, b, c, d ) {
          if ( f.isArray( b ) ) f.each( b, function ( b, e ) {
            c || bC.test( a ) ? d( a, e ) : bY( a + "[" + ( typeof e == "object" || f.isArray( e ) ? b : "" ) + "]",
              e, c, d )
          } );
          else if ( !c && b != null && typeof b == "object" )
            for ( var e in b ) bY( a + "[" + e + "]", b[ e ], c, d );
          else d( a, b )
        }
  
        function bX( a, c, d, e, f, g ) {
          f = f || c.dataTypes[ 0 ], g = g || {}, g[ f ] = !0;
          var h = a[ f ],
            i = 0,
            j = h ? h.length : 0,
            k = a === bR,
            l;
          for ( ; i < j && ( k || !l ); i++ ) l = h[ i ]( c, d, e ), typeof l == "string" && ( !k || g[ l ] ? l = b : (
            c.dataTypes.unshift( l ), l = bX( a, c, d, e, l, g ) ) );
          ( k || !l ) && !g[ "*" ] && ( l = bX( a, c, d, e, "*", g ) );
          return l
        }
  
        function bW( a ) {
          return function ( b, c ) {
            typeof b != "string" && ( c = b, b = "*" );
            if ( f.isFunction( c ) ) {
              var d = b.toLowerCase().split( bN ),
                e = 0,
                g = d.length,
                h, i, j;
              for ( ; e < g; e++ ) h = d[ e ], j = /^\+/.test( h ), j && ( h = h.substr( 1 ) || "*" ), i = a[ h ] = a[
                h ] || [], i[ j ? "unshift" : "push" ]( c )
            }
          }
        }
  
        function bA( a, b, c ) {
          var d = b === "width" ? a.offsetWidth : a.offsetHeight,
            e = b === "width" ? bv : bw;
          if ( d > 0 ) {
            c !== "border" && f.each( e, function () {
              c || ( d -= parseFloat( f.css( a, "padding" + this ) ) || 0 ), c === "margin" ? d += parseFloat( f
                .css( a, c + this ) ) || 0 : d -= parseFloat( f.css( a, "border" + this + "Width" ) ) || 0
            } );
            return d + "px"
          }
          d = bx( a, b, b );
          if ( d < 0 || d == null ) d = a.style[ b ] || 0;
          d = parseFloat( d ) || 0, c && f.each( e, function () {
            d += parseFloat( f.css( a, "padding" + this ) ) || 0, c !== "padding" && ( d += parseFloat( f.css( a,
              "border" + this + "Width" ) ) || 0 ), c === "margin" && ( d += parseFloat( f.css( a, c + this ) ) ||
              0 )
          } );
          return d + "px"
        }
  
        function bm( a, b ) {
          b.src ? f.ajax( {
              url: b.src,
              async: !1,
              dataType: "script"
            } ) : f.globalEval( ( b.text || b.textContent || b.innerHTML || "" ).replace( be, "/*$0*/" ) ), b
            .parentNode && b.parentNode.removeChild( b )
        }
  
        function bl( a ) {
          f.nodeName( a, "input" ) ? bk( a ) : "getElementsByTagName" in a && f.grep( a.getElementsByTagName( "input" ),
            bk )
        }
  
        function bk( a ) {
          if ( a.type === "checkbox" || a.type === "radio" ) a.defaultChecked = a.checked
        }
  
        function bj( a ) {
          return "getElementsByTagName" in a ? a.getElementsByTagName( "*" ) : "querySelectorAll" in a ? a
            .querySelectorAll( "*" ) : []
        }
  
        function bi( a, b ) {
          var c;
          if ( b.nodeType === 1 ) {
            b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes( a ), c = b.nodeName
              .toLowerCase();
            if ( c === "object" ) b.outerHTML = a.outerHTML;
            else if ( c !== "input" || a.type !== "checkbox" && a.type !== "radio" ) {
              if ( c === "option" ) b.selected = a.defaultSelected;
              else if ( c === "input" || c === "textarea" ) b.defaultValue = a.defaultValue
            } else a.checked && ( b.defaultChecked = b.checked = a.checked ), b.value !== a.value && ( b.value = a
              .value );
            b.removeAttribute( f.expando )
          }
        }
  
        function bh( a, b ) {
          if ( b.nodeType === 1 && !!f.hasData( a ) ) {
            var c = f.expando,
              d = f.data( a ),
              e = f.data( b, d );
            if ( d = d[ c ] ) {
              var g = d.events;
              e = e[ c ] = f.extend( {}, d );
              if ( g ) {
                delete e.handle, e.events = {};
                for ( var h in g )
                  for ( var i = 0, j = g[ h ].length; i < j; i++ ) f.event.add( b, h + ( g[ h ][ i ].namespace ? "." :
                    "" ) + g[ h ][ i ].namespace, g[ h ][ i ], g[ h ][ i ].data )
              }
            }
          }
        }
  
        function bg( a, b ) {
          return f.nodeName( a, "table" ) ? a.getElementsByTagName( "tbody" )[ 0 ] || a.appendChild( a.ownerDocument
            .createElement( "tbody" ) ) : a
        }
  
        function W( a, b, c ) {
          b = b || 0;
          if ( f.isFunction( b ) ) return f.grep( a, function ( a, d ) {
            var e = !!b.call( a, d, a );
            return e === c
          } );
          if ( b.nodeType ) return f.grep( a, function ( a, d ) {
            return a === b === c
          } );
          if ( typeof b == "string" ) {
            var d = f.grep( a, function ( a ) {
              return a.nodeType === 1
            } );
            if ( R.test( b ) ) return f.filter( b, d, !c );
            b = f.filter( b, d )
          }
          return f.grep( a, function ( a, d ) {
            return f.inArray( a, b ) >= 0 === c
          } )
        }
  
        function V( a ) {
          return !a || !a.parentNode || a.parentNode.nodeType === 11
        }
  
        function N( a, b ) {
          return ( a && a !== "*" ? a + "." : "" ) + b.replace( z, "`" ).replace( A, "&" )
        }
  
        function M( a ) {
          var b, c, d, e, g, h, i, j, k, l, m, n, o, p = [],
            q = [],
            r = f._data( this, "events" );
          if ( !( a.liveFired === this || !r || !r.live || a.target.disabled || a.button && a.type === "click" ) ) {
            a.namespace && ( n = new RegExp( "(^|\\.)" + a.namespace.split( "." ).join( "\\.(?:.*\\.)?" ) +
              "(\\.|$)" ) ), a.liveFired = this;
            var s = r.live.slice( 0 );
            for ( i = 0; i < s.length; i++ ) g = s[ i ], g.origType.replace( x, "" ) === a.type ? q.push( g.selector ) :
              s.splice( i--, 1 );
            e = f( a.target ).closest( q, a.currentTarget );
            for ( j = 0, k = e.length; j < k; j++ ) {
              m = e[ j ];
              for ( i = 0; i < s.length; i++ ) {
                g = s[ i ];
                if ( m.selector === g.selector && ( !n || n.test( g.namespace ) ) && !m.elem.disabled ) {
                  h = m.elem, d = null;
                  if ( g.preType === "mouseenter" || g.preType === "mouseleave" ) a.type = g.preType, d = f( a
                    .relatedTarget ).closest( g.selector )[ 0 ], d && f.contains( h, d ) && ( d = h );
                  ( !d || d !== h ) && p.push( {
                    elem: h,
                    handleObj: g,
                    level: m.level
                  } )
                }
              }
            }
            for ( j = 0, k = p.length; j < k; j++ ) {
              e = p[ j ];
              if ( c && e.level > c ) break;
              a.currentTarget = e.elem, a.data = e.handleObj.data, a.handleObj = e.handleObj, o = e.handleObj
                .origHandler.apply( e.elem, arguments );
              if ( o === !1 || a.isPropagationStopped() ) {
                c = e.level, o === !1 && ( b = !1 );
                if ( a.isImmediatePropagationStopped() ) break
              }
            }
            return b
          }
        }
  
        function K( a, c, d ) {
          var e = f.extend( {}, d[ 0 ] );
          e.type = a, e.originalEvent = {}, e.liveFired = b, f.event.handle.call( c, e ), e.isDefaultPrevented() && d[
            0 ].preventDefault()
        }
  
        function E() {
          return !0
        }
  
        function D() {
          return !1
        }
  
        function m( a, c, d ) {
          var e = c + "defer",
            g = c + "queue",
            h = c + "mark",
            i = f.data( a, e, b, !0 );
          i && ( d === "queue" || !f.data( a, g, b, !0 ) ) && ( d === "mark" || !f.data( a, h, b, !0 ) ) && setTimeout(
            function () {
              !f.data( a, g, b, !0 ) && !f.data( a, h, b, !0 ) && ( f.removeData( a, e, !0 ), i.resolve() )
            }, 0 )
        }
  
        function l( a ) {
          for ( var b in a )
            if ( b !== "toJSON" ) return !1;
          return !0
        }
  
        function k( a, c, d ) {
          if ( d === b && a.nodeType === 1 ) {
            var e = "data-" + c.replace( j, "$1-$2" ).toLowerCase();
            d = a.getAttribute( e );
            if ( typeof d == "string" ) {
              try {
                d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNaN( d ) ? i.test( d ) ? f
                  .parseJSON( d ) : d : parseFloat( d )
              } catch ( g ) {}
              f.data( a, c, d )
            } else d = b
          }
          return d
        }
        var c = a.document,
          d = a.navigator,
          e = a.location,
          f = function () {
            function J() {
              if ( !e.isReady ) {
                try {
                  c.documentElement.doScroll( "left" )
                } catch ( a ) {
                  setTimeout( J, 1 );
                  return
                }
                e.ready()
              }
            }
            var e = function ( a, b ) {
                return new e.fn.init( a, b, h )
              },
              f = a.jQuery,
              g = a.$,
              h, i = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
              j = /\S/,
              k = /^\s+/,
              l = /\s+$/,
              m = /\d/,
              n = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
              o = /^[\],:{}\s]*$/,
              p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
              q = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
              r = /(?:^|:|,)(?:\s*\[)+/g,
              s = /(webkit)[ \/]([\w.]+)/,
              t = /(opera)(?:.*version)?[ \/]([\w.]+)/,
              u = /(msie) ([\w.]+)/,
              v = /(mozilla)(?:.*? rv:([\w.]+))?/,
              w = /-([a-z])/ig,
              x = function ( a, b ) {
                return b.toUpperCase()
              },
              y = d.userAgent,
              z, A, B, C = Object.prototype.toString,
              D = Object.prototype.hasOwnProperty,
              E = Array.prototype.push,
              F = Array.prototype.slice,
              G = String.prototype.trim,
              H = Array.prototype.indexOf,
              I = {};
            e.fn = e.prototype = {
                constructor: e,
                init: function ( a, d, f ) {
                  var g, h, j, k;
                  if ( !a ) return this;
                  if ( a.nodeType ) {
                    this.context = this[ 0 ] = a, this.length = 1;
                    return this
                  }
                  if ( a === "body" && !d && c.body ) {
                    this.context = c, this[ 0 ] = c.body, this.selector = a, this.length = 1;
                    return this
                  }
                  if ( typeof a == "string" ) {
                    a.charAt( 0 ) !== "<" || a.charAt( a.length - 1 ) !== ">" || a.length < 3 ? g = i.exec( a ) :
                      g = [ null, a, null ];
                    if ( g && ( g[ 1 ] || !d ) ) {
                      if ( g[ 1 ] ) {
                        d = d instanceof e ? d[ 0 ] : d, k = d ? d.ownerDocument || d : c, j = n.exec( a ), j ? e
                          .isPlainObject( d ) ? ( a = [ c.createElement( j[ 1 ] ) ], e.fn.attr.call( a, d, !0 ) ) :
                          a = [ k.createElement( j[ 1 ] ) ] : ( j = e.buildFragment( [ g[ 1 ] ], [ k ] ), a = ( j
                            .cacheable ? e.clone( j.fragment ) : j.fragment ).childNodes );
                        return e.merge( this, a )
                      }
                      h = c.getElementById( g[ 2 ] );
                      if ( h && h.parentNode ) {
                        if ( h.id !== g[ 2 ] ) return f.find( a );
                        this.length = 1, this[ 0 ] = h
                      }
                      this.context = c, this.selector = a;
                      return this
                    }
                    return !d || d.jquery ? ( d || f ).find( a ) : this.constructor( d ).find( a )
                  }
                  if ( e.isFunction( a ) ) return f.ready( a );
                  a.selector !== b && ( this.selector = a.selector, this.context = a.context );
                  return e.makeArray( a, this )
                },
                selector: "",
                jquery: "1.6.2",
                length: 0,
                size: function () {
                  return this.length
                },
                toArray: function () {
                  return F.call( this, 0 )
                },
                get: function ( a ) {
                  return a == null ? this.toArray() : a < 0 ? this[ this.length + a ] : this[ a ]
                },
                pushStack: function ( a, b, c ) {
                  var d = this.constructor();
                  e.isArray( a ) ? E.apply( d, a ) : e.merge( d, a ), d.prevObject = this, d.context = this.context,
                    b === "find" ? d.selector = this.selector + ( this.selector ? " " : "" ) + c : b && ( d.selector =
                      this.selector + "." + b + "(" + c + ")" );
                  return d
                },
                each: function ( a, b ) {
                  return e.each( this, a, b )
                },
                ready: function ( a ) {
                  e.bindReady(), A.done( a );
                  return this
                },
                eq: function ( a ) {
                  return a === -1 ? this.slice( a ) : this.slice( a, +a + 1 )
                },
                first: function () {
                  return this.eq( 0 )
                },
                last: function () {
                  return this.eq( -1 )
                },
                slice: function () {
                  return this.pushStack( F.apply( this, arguments ), "slice", F.call( arguments ).join( "," ) )
                },
                map: function ( a ) {
                  return this.pushStack( e.map( this, function ( b, c ) {
                    return a.call( b, c, b )
                  } ) )
                },
                end: function () {
                  return this.prevObject || this.constructor( null )
                },
                push: E,
                sort: [].sort,
                splice: [].splice
              }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () {
                var a, c, d, f, g, h, i = arguments[ 0 ] || {},
                  j = 1,
                  k = arguments.length,
                  l = !1;
                typeof i == "boolean" && ( l = i, i = arguments[ 1 ] || {}, j = 2 ), typeof i != "object" && !e
                  .isFunction( i ) && ( i = {} ), k === j && ( i = this, --j );
                for ( ; j < k; j++ )
                  if ( ( a = arguments[ j ] ) != null )
                    for ( c in a ) {
                      d = i[ c ], f = a[ c ];
                      if ( i === f ) continue;
                      l && f && ( e.isPlainObject( f ) || ( g = e.isArray( f ) ) ) ? ( g ? ( g = !1, h = d && e.isArray(
                          d ) ? d : [] ) : h = d && e.isPlainObject( d ) ? d : {}, i[ c ] = e.extend( l, h, f ) ) :
                        f !== b && ( i[ c ] = f )
                    }
                return i
              }, e.extend( {
                noConflict: function ( b ) {
                  a.$ === e && ( a.$ = g ), b && a.jQuery === e && ( a.jQuery = f );
                  return e
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function ( a ) {
                  a ? e.readyWait++ : e.ready( !0 )
                },
                ready: function ( a ) {
                  if ( a === !0 && !--e.readyWait || a !== !0 && !e.isReady ) {
                    if ( !c.body ) return setTimeout( e.ready, 1 );
                    e.isReady = !0;
                    if ( a !== !0 && --e.readyWait > 0 ) return;
                    A.resolveWith( c, [ e ] ), e.fn.trigger && e( c ).trigger( "ready" ).unbind( "ready" )
                  }
                },
                bindReady: function () {
                  if ( !A ) {
                    A = e._Deferred();
                    if ( c.readyState === "complete" ) return setTimeout( e.ready, 1 );
                    if ( c.addEventListener ) c.addEventListener( "DOMContentLoaded", B, !1 ), a.addEventListener(
                      "load", e.ready, !1 );
                    else if ( c.attachEvent ) {
                      c.attachEvent( "onreadystatechange", B ), a.attachEvent( "onload", e.ready );
                      var b = !1;
                      try {
                        b = a.frameElement == null
                      } catch ( d ) {}
                      c.documentElement.doScroll && b && J()
                    }
                  }
                },
                isFunction: function ( a ) {
                  return e.type( a ) === "function"
                },
                isArray: Array.isArray || function ( a ) {
                  return e.type( a ) === "array"
                },
                isWindow: function ( a ) {
                  return a && typeof a == "object" && "setInterval" in a
                },
                isNaN: function ( a ) {
                  return a == null || !m.test( a ) || isNaN( a )
                },
                type: function ( a ) {
                  return a == null ? String( a ) : I[ C.call( a ) ] || "object"
                },
                isPlainObject: function ( a ) {
                  if ( !a || e.type( a ) !== "object" || a.nodeType || e.isWindow( a ) ) return !1;
                  if ( a.constructor && !D.call( a, "constructor" ) && !D.call( a.constructor.prototype,
                      "isPrototypeOf" ) ) return !1;
                  var c;
                  for ( c in a );
                  return c === b || D.call( a, c )
                },
                isEmptyObject: function ( a ) {
                  for ( var b in a ) return !1;
                  return !0
                },
                error: function ( a ) {
                  throw a
                },
                parseJSON: function ( b ) {
                  if ( typeof b != "string" || !b ) return null;
                  b = e.trim( b );
                  if ( a.JSON && a.JSON.parse ) return a.JSON.parse( b );
                  if ( o.test( b.replace( p, "@" ).replace( q, "]" ).replace( r, "" ) ) ) return ( new Function(
                    "return " + b ) )();
                  e.error( "Invalid JSON: " + b )
                },
                parseXML: function ( b, c, d ) {
                  a.DOMParser ? ( d = new DOMParser, c = d.parseFromString( b, "text/xml" ) ) : ( c =
                      new ActiveXObject( "Microsoft.XMLDOM" ), c.async = "false", c.loadXML( b ) ), d = c
                    .documentElement, ( !d || !d.nodeName || d.nodeName === "parsererror" ) && e.error(
                      "Invalid XML: " + b );
                  return c
                },
                noop: function () {},
                globalEval: function ( b ) {
                  b && j.test( b ) && ( a.execScript || function ( b ) {
                    a.eval.call( a, b )
                  } )( b )
                },
                camelCase: function ( a ) {
                  return a.replace( w, x )
                },
                nodeName: function ( a, b ) {
                  return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function ( a, c, d ) {
                  var f, g = 0,
                    h = a.length,
                    i = h === b || e.isFunction( a );
                  if ( d ) {
                    if ( i ) {
                      for ( f in a )
                        if ( c.apply( a[ f ], d ) === !1 ) break
                    } else
                      for ( ; g < h; )
                        if ( c.apply( a[ g++ ], d ) === !1 ) break
                  } else if ( i ) {
                    for ( f in a )
                      if ( c.call( a[ f ], f, a[ f ] ) === !1 ) break
                  } else
                    for ( ; g < h; )
                      if ( c.call( a[ g ], g, a[ g++ ] ) === !1 ) break;
                  return a
                },
                trim: G ? function ( a ) {
                  return a == null ? "" : G.call( a )
                } : function ( a ) {
                  return a == null ? "" : ( a + "" ).replace( k, "" ).replace( l, "" )
                },
                makeArray: function ( a, b ) {
                  var c = b || [];
                  if ( a != null ) {
                    var d = e.type( a );
                    a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow( a ) ? E
                      .call( c, a ) : e.merge( c, a )
                  }
                  return c
                },
                inArray: function ( a, b ) {
                  if ( H ) return H.call( b, a );
                  for ( var c = 0, d = b.length; c < d; c++ )
                    if ( b[ c ] === a ) return c;
                  return -1
                },
                merge: function ( a, c ) {
                  var d = a.length,
                    e = 0;
                  if ( typeof c.length == "number" )
                    for ( var f = c.length; e < f; e++ ) a[ d++ ] = c[ e ];
                  else
                    while ( c[ e ] !== b ) a[ d++ ] = c[ e++ ];
                  a.length = d;
                  return a
                },
                grep: function ( a, b, c ) {
                  var d = [],
                    e;
                  c = !!c;
                  for ( var f = 0, g = a.length; f < g; f++ ) e = !!b( a[ f ], f ), c !== e && d.push( a[ f ] );
                  return d
                },
                map: function ( a, c, d ) {
                  var f, g, h = [],
                    i = 0,
                    j = a.length,
                    k = a instanceof e || j !== b && typeof j == "number" && ( j > 0 && a[ 0 ] && a[ j - 1 ] ||
                      j === 0 || e.isArray( a ) );
                  if ( k )
                    for ( ; i < j; i++ ) f = c( a[ i ], i, d ), f != null && ( h[ h.length ] = f );
                  else
                    for ( g in a ) f = c( a[ g ], g, d ), f != null && ( h[ h.length ] = f );
                  return h.concat.apply( [], h )
                },
                guid: 1,
                proxy: function ( a, c ) {
                  if ( typeof c == "string" ) {
                    var d = a[ c ];
                    c = a, a = d
                  }
                  if ( !e.isFunction( a ) ) return b;
                  var f = F.call( arguments, 2 ),
                    g = function () {
                      return a.apply( c, f.concat( F.call( arguments ) ) )
                    };
                  g.guid = a.guid = a.guid || g.guid || e.guid++;
                  return g
                },
                access: function ( a, c, d, f, g, h ) {
                  var i = a.length;
                  if ( typeof c == "object" ) {
                    for ( var j in c ) e.access( a, j, c[ j ], f, g, d );
                    return a
                  }
                  if ( d !== b ) {
                    f = !h && f && e.isFunction( d );
                    for ( var k = 0; k < i; k++ ) g( a[ k ], c, f ? d.call( a[ k ], k, g( a[ k ], c ) ) : d, h );
                    return a
                  }
                  return i ? g( a[ 0 ], c ) : b
                },
                now: function () {
                  return ( new Date ).getTime()
                },
                uaMatch: function ( a ) {
                  a = a.toLowerCase();
                  var b = s.exec( a ) || t.exec( a ) || u.exec( a ) || a.indexOf( "compatible" ) < 0 && v.exec(
                    a ) || [];
                  return {
                    browser: b[ 1 ] || "",
                    version: b[ 2 ] || "0"
                  }
                },
                sub: function () {
                  function a( b, c ) {
                    return new a.fn.init( b, c )
                  }
                  e.extend( !0, a, this ), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a
                    .sub = this.sub, a.fn.init = function ( d, f ) {
                      f && f instanceof e && !( f instanceof a ) && ( f = a( f ) );
                      return e.fn.init.call( this, d, f, b )
                    }, a.fn.init.prototype = a.fn;
                  var b = a( c );
                  return a
                },
                browser: {}
              } ), e.each( "Boolean Number String Function Array Date RegExp Object".split( " " ), function ( a, b ) {
                I[ "[object " + b + "]" ] = b.toLowerCase()
              } ), z = e.uaMatch( y ), z.browser && ( e.browser[ z.browser ] = !0, e.browser.version = z.version ), e
              .browser.webkit && ( e.browser.safari = !0 ), j.test( " " ) && ( k = /^[\s\xA0]+/, l = /[\s\xA0]+$/ ), h =
              e( c ), c.addEventListener ? B = function () {
                c.removeEventListener( "DOMContentLoaded", B, !1 ), e.ready()
              } : c.attachEvent && ( B = function () {
                c.readyState === "complete" && ( c.detachEvent( "onreadystatechange", B ), e.ready() )
              } );
            return e
          }(),
          g = "done fail isResolved isRejected promise then always pipe".split( " " ),
          h = [].slice;
        f.extend( {
          _Deferred: function () {
            var a = [],
              b, c, d, e = {
                done: function () {
                  if ( !d ) {
                    var c = arguments,
                      g, h, i, j, k;
                    b && ( k = b, b = 0 );
                    for ( g = 0, h = c.length; g < h; g++ ) i = c[ g ], j = f.type( i ), j === "array" ? e.done
                      .apply( e, i ) : j === "function" && a.push( i );
                    k && e.resolveWith( k[ 0 ], k[ 1 ] )
                  }
                  return this
                },
                resolveWith: function ( e, f ) {
                  if ( !d && !b && !c ) {
                    f = f || [], c = 1;
                    try {
                      while ( a[ 0 ] ) a.shift().apply( e, f )
                    } finally {
                      b = [ e, f ], c = 0
                    }
                  }
                  return this
                },
                resolve: function () {
                  e.resolveWith( this, arguments );
                  return this
                },
                isResolved: function () {
                  return !!c || !!b
                },
                cancel: function () {
                  d = 1, a = [];
                  return this
                }
              };
            return e
          },
          Deferred: function ( a ) {
            var b = f._Deferred(),
              c = f._Deferred(),
              d;
            f.extend( b, {
              then: function ( a, c ) {
                b.done( a ).fail( c );
                return this
              },
              always: function () {
                return b.done.apply( b, arguments ).fail.apply( this, arguments )
              },
              fail: c.done,
              rejectWith: c.resolveWith,
              reject: c.resolve,
              isRejected: c.isResolved,
              pipe: function ( a, c ) {
                return f.Deferred( function ( d ) {
                  f.each( {
                    done: [ a, "resolve" ],
                    fail: [ c, "reject" ]
                  }, function ( a, c ) {
                    var e = c[ 0 ],
                      g = c[ 1 ],
                      h;
                    f.isFunction( e ) ? b[ a ]( function () {
                      h = e.apply( this, arguments ), h && f.isFunction( h.promise ) ? h
                        .promise().then( d.resolve, d.reject ) : d[ g ]( h )
                    } ) : b[ a ]( d[ g ] )
                  } )
                } ).promise()
              },
              promise: function ( a ) {
                if ( a == null ) {
                  if ( d ) return d;
                  d = a = {}
                }
                var c = g.length;
                while ( c-- ) a[ g[ c ] ] = b[ g[ c ] ];
                return a
              }
            } ), b.done( c.cancel ).fail( b.cancel ), delete b.cancel, a && a.call( b, b );
            return b
          },
          when: function ( a ) {
            function i( a ) {
              return function ( c ) {
                b[ a ] = arguments.length > 1 ? h.call( arguments, 0 ) : c, --e || g.resolveWith( g, h.call( b,
                  0 ) )
              }
            }
            var b = arguments,
              c = 0,
              d = b.length,
              e = d,
              g = d <= 1 && a && f.isFunction( a.promise ) ? a : f.Deferred();
            if ( d > 1 ) {
              for ( ; c < d; c++ ) b[ c ] && f.isFunction( b[ c ].promise ) ? b[ c ].promise().then( i( c ), g
                .reject ) : --e;
              e || g.resolveWith( g, b )
            } else g !== a && g.resolveWith( g, d ? [ a ] : [] );
            return g.promise()
          }
        } ), f.support = function () {
          var a = c.createElement( "div" ),
            b = c.documentElement,
            d, e, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u;
          a.setAttribute( "className", "t" ), a.innerHTML =
            "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",
            d = a.getElementsByTagName( "*" ), e = a.getElementsByTagName( "a" )[ 0 ];
          if ( !d || !d.length || !e ) return {};
          g = c.createElement( "select" ), h = g.appendChild( c.createElement( "option" ) ), i = a
            .getElementsByTagName( "input" )[ 0 ], k = {
              leadingWhitespace: a.firstChild.nodeType === 3,
              tbody: !a.getElementsByTagName( "tbody" ).length,
              htmlSerialize: !!a.getElementsByTagName( "link" ).length,
              style: /top/.test( e.getAttribute( "style" ) ),
              hrefNormalized: e.getAttribute( "href" ) === "/a",
              opacity: /^0.55$/.test( e.style.opacity ),
              cssFloat: !!e.style.cssFloat,
              checkOn: i.value === "on",
              optSelected: h.selected,
              getSetAttribute: a.className !== "t",
              submitBubbles: !0,
              changeBubbles: !0,
              focusinBubbles: !1,
              deleteExpando: !0,
              noCloneEvent: !0,
              inlineBlockNeedsLayout: !1,
              shrinkWrapBlocks: !1,
              reliableMarginRight: !0
            }, i.checked = !0, k.noCloneChecked = i.cloneNode( !0 ).checked, g.disabled = !0, k.optDisabled = !h
            .disabled;
          try {
            delete a.test
          } catch ( v ) {
            k.deleteExpando = !1
          }!a.addEventListener && a.attachEvent && a.fireEvent && ( a.attachEvent( "onclick", function () {
              k.noCloneEvent = !1
            } ), a.cloneNode( !0 ).fireEvent( "onclick" ) ), i = c.createElement( "input" ), i.value = "t", i
            .setAttribute( "type", "radio" ), k.radioValue = i.value === "t", i.setAttribute( "checked", "checked" ),
            a.appendChild( i ), l = c.createDocumentFragment(), l.appendChild( a.firstChild ), k.checkClone = l
            .cloneNode( !0 ).cloneNode( !0 ).lastChild.checked, a.innerHTML = "", a.style.width = a.style
            .paddingLeft = "1px", m = c.getElementsByTagName( "body" )[ 0 ], o = c.createElement( m ? "div" :
            "body" ), p = {
              visibility: "hidden",
              width: 0,
              height: 0,
              border: 0,
              margin: 0
            }, m && f.extend( p, {
              position: "absolute",
              left: -1e3,
              top: -1e3
            } );
          for ( t in p ) o.style[ t ] = p[ t ];
          o.appendChild( a ), n = m || b, n.insertBefore( o, n.firstChild ), k.appendChecked = i.checked, k.boxModel =
            a.offsetWidth === 2, "zoom" in a.style && ( a.style.display = "inline", a.style.zoom = 1, k
              .inlineBlockNeedsLayout = a.offsetWidth === 2, a.style.display = "", a.innerHTML =
              "<div style='width:4px;'></div>", k.shrinkWrapBlocks = a.offsetWidth !== 2 ), a.innerHTML =
            "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", q = a
            .getElementsByTagName( "td" ), u = q[ 0 ].offsetHeight === 0, q[ 0 ].style.display = "", q[ 1 ].style
            .display = "none", k.reliableHiddenOffsets = u && q[ 0 ].offsetHeight === 0, a.innerHTML = "", c
            .defaultView && c.defaultView.getComputedStyle && ( j = c.createElement( "div" ), j.style.width = "0", j
              .style.marginRight = "0", a.appendChild( j ), k.reliableMarginRight = ( parseInt( ( c.defaultView
                .getComputedStyle( j, null ) || {
                  marginRight: 0
                } ).marginRight, 10 ) || 0 ) === 0 ), o.innerHTML = "", n.removeChild( o );
          if ( a.attachEvent )
            for ( t in {
                submit: 1,
                change: 1,
                focusin: 1
              } ) s = "on" + t, u = s in a, u || ( a.setAttribute( s, "return;" ), u = typeof a[ s ] == "function" ),
              k[ t + "Bubbles" ] = u;
          o = l = g = h = m = j = a = i = null;
          return k
        }(), f.boxModel = f.support.boxModel;
        var i = /^(?:\{.*\}|\[.*\])$/,
          j = /([a-z])([A-Z])/g;
        f.extend( {
          cache: {},
          uuid: 0,
          expando: "jQuery" + ( f.fn.jquery + Math.random() ).replace( /\D/g, "" ),
          noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
          },
          hasData: function ( a ) {
            a = a.nodeType ? f.cache[ a[ f.expando ] ] : a[ f.expando ];
            return !!a && !l( a )
          },
          data: function ( a, c, d, e ) {
            if ( !!f.acceptData( a ) ) {
              var g = f.expando,
                h = typeof c == "string",
                i, j = a.nodeType,
                k = j ? f.cache : a,
                l = j ? a[ f.expando ] : a[ f.expando ] && f.expando;
              if ( ( !l || e && l && !k[ l ][ g ] ) && h && d === b ) return;
              l || ( j ? a[ f.expando ] = l = ++f.uuid : l = f.expando ), k[ l ] || ( k[ l ] = {}, j || ( k[ l ]
                .toJSON = f.noop ) );
              if ( typeof c == "object" || typeof c == "function" ) e ? k[ l ][ g ] = f.extend( k[ l ][ g ], c ) :
                k[ l ] = f.extend( k[ l ], c );
              i = k[ l ], e && ( i[ g ] || ( i[ g ] = {} ), i = i[ g ] ), d !== b && ( i[ f.camelCase( c ) ] =
              d );
              if ( c === "events" && !i[ c ] ) return i[ g ] && i[ g ].events;
              return h ? i[ f.camelCase( c ) ] || i[ c ] : i
            }
          },
          removeData: function ( b, c, d ) {
            if ( !!f.acceptData( b ) ) {
              var e = f.expando,
                g = b.nodeType,
                h = g ? f.cache : b,
                i = g ? b[ f.expando ] : f.expando;
              if ( !h[ i ] ) return;
              if ( c ) {
                var j = d ? h[ i ][ e ] : h[ i ];
                if ( j ) {
                  delete j[ c ];
                  if ( !l( j ) ) return
                }
              }
              if ( d ) {
                delete h[ i ][ e ];
                if ( !l( h[ i ] ) ) return
              }
              var k = h[ i ][ e ];
              f.support.deleteExpando || h != a ? delete h[ i ] : h[ i ] = null, k ? ( h[ i ] = {}, g || ( h[ i ]
                .toJSON = f.noop ), h[ i ][ e ] = k ) : g && ( f.support.deleteExpando ? delete b[ f.expando ] :
                b.removeAttribute ? b.removeAttribute( f.expando ) : b[ f.expando ] = null )
            }
          },
          _data: function ( a, b, c ) {
            return f.data( a, b, c, !0 )
          },
          acceptData: function ( a ) {
            if ( a.nodeName ) {
              var b = f.noData[ a.nodeName.toLowerCase() ];
              if ( b ) return b !== !0 && a.getAttribute( "classid" ) === b
            }
            return !0
          }
        } ), f.fn.extend( {
          data: function ( a, c ) {
            var d = null;
            if ( typeof a == "undefined" ) {
              if ( this.length ) {
                d = f.data( this[ 0 ] );
                if ( this[ 0 ].nodeType === 1 ) {
                  var e = this[ 0 ].attributes,
                    g;
                  for ( var h = 0, i = e.length; h < i; h++ ) g = e[ h ].name, g.indexOf( "data-" ) === 0 && ( g =
                    f.camelCase( g.substring( 5 ) ), k( this[ 0 ], g, d[ g ] ) )
                }
              }
              return d
            }
            if ( typeof a == "object" ) return this.each( function () {
              f.data( this, a )
            } );
            var j = a.split( "." );
            j[ 1 ] = j[ 1 ] ? "." + j[ 1 ] : "";
            if ( c === b ) {
              d = this.triggerHandler( "getData" + j[ 1 ] + "!", [ j[ 0 ] ] ), d === b && this.length && ( d = f
                .data( this[ 0 ], a ), d = k( this[ 0 ], a, d ) );
              return d === b && j[ 1 ] ? this.data( j[ 0 ] ) : d
            }
            return this.each( function () {
              var b = f( this ),
                d = [ j[ 0 ], c ];
              b.triggerHandler( "setData" + j[ 1 ] + "!", d ), f.data( this, a, c ), b.triggerHandler(
                "changeData" + j[ 1 ] + "!", d )
            } )
          },
          removeData: function ( a ) {
            return this.each( function () {
              f.removeData( this, a )
            } )
          }
        } ), f.extend( {
          _mark: function ( a, c ) {
            a && ( c = ( c || "fx" ) + "mark", f.data( a, c, ( f.data( a, c, b, !0 ) || 0 ) + 1, !0 ) )
          },
          _unmark: function ( a, c, d ) {
            a !== !0 && ( d = c, c = a, a = !1 );
            if ( c ) {
              d = d || "fx";
              var e = d + "mark",
                g = a ? 0 : ( f.data( c, e, b, !0 ) || 1 ) - 1;
              g ? f.data( c, e, g, !0 ) : ( f.removeData( c, e, !0 ), m( c, d, "mark" ) )
            }
          },
          queue: function ( a, c, d ) {
            if ( a ) {
              c = ( c || "fx" ) + "queue";
              var e = f.data( a, c, b, !0 );
              d && ( !e || f.isArray( d ) ? e = f.data( a, c, f.makeArray( d ), !0 ) : e.push( d ) );
              return e || []
            }
          },
          dequeue: function ( a, b ) {
            b = b || "fx";
            var c = f.queue( a, b ),
              d = c.shift(),
              e;
            d === "inprogress" && ( d = c.shift() ), d && ( b === "fx" && c.unshift( "inprogress" ), d.call( a,
              function () {
                f.dequeue( a, b )
              } ) ), c.length || ( f.removeData( a, b + "queue", !0 ), m( a, b, "queue" ) )
          }
        } ), f.fn.extend( {
          queue: function ( a, c ) {
            typeof a != "string" && ( c = a, a = "fx" );
            if ( c === b ) return f.queue( this[ 0 ], a );
            return this.each( function () {
              var b = f.queue( this, a, c );
              a === "fx" && b[ 0 ] !== "inprogress" && f.dequeue( this, a )
            } )
          },
          dequeue: function ( a ) {
            return this.each( function () {
              f.dequeue( this, a )
            } )
          },
          delay: function ( a, b ) {
            a = f.fx ? f.fx.speeds[ a ] || a : a, b = b || "fx";
            return this.queue( b, function () {
              var c = this;
              setTimeout( function () {
                f.dequeue( c, b )
              }, a )
            } )
          },
          clearQueue: function ( a ) {
            return this.queue( a || "fx", [] )
          },
          promise: function ( a, c ) {
            function m() {
              --h || d.resolveWith( e, [ e ] )
            }
            typeof a != "string" && ( c = a, a = b ), a = a || "fx";
            var d = f.Deferred(),
              e = this,
              g = e.length,
              h = 1,
              i = a + "defer",
              j = a + "queue",
              k = a + "mark",
              l;
            while ( g-- )
              if ( l = f.data( e[ g ], i, b, !0 ) || ( f.data( e[ g ], j, b, !0 ) || f.data( e[ g ], k, b, !
                0 ) ) && f.data( e[ g ], i, f._Deferred(), !0 ) ) h++, l.done( m );
            m();
            return d.promise()
          }
        } );
        var n = /[\n\t\r]/g,
          o = /\s+/,
          p = /\r/g,
          q = /^(?:button|input)$/i,
          r = /^(?:button|input|object|select|textarea)$/i,
          s = /^a(?:rea)?$/i,
          t =
          /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
          u = /\:|^on/,
          v, w;
        f.fn.extend( {
          attr: function ( a, b ) {
            return f.access( this, a, b, !0, f.attr )
          },
          removeAttr: function ( a ) {
            return this.each( function () {
              f.removeAttr( this, a )
            } )
          },
          prop: function ( a, b ) {
            return f.access( this, a, b, !0, f.prop )
          },
          removeProp: function ( a ) {
            a = f.propFix[ a ] || a;
            return this.each( function () {
              try {
                this[ a ] = b, delete this[ a ]
              } catch ( c ) {}
            } )
          },
          addClass: function ( a ) {
            var b, c, d, e, g, h, i;
            if ( f.isFunction( a ) ) return this.each( function ( b ) {
              f( this ).addClass( a.call( this, b, this.className ) )
            } );
            if ( a && typeof a == "string" ) {
              b = a.split( o );
              for ( c = 0, d = this.length; c < d; c++ ) {
                e = this[ c ];
                if ( e.nodeType === 1 )
                  if ( !e.className && b.length === 1 ) e.className = a;
                  else {
                    g = " " + e.className + " ";
                    for ( h = 0, i = b.length; h < i; h++ ) ~g.indexOf( " " + b[ h ] + " " ) || ( g += b[ h ] +
                      " " );
                    e.className = f.trim( g )
                  }
              }
            }
            return this
          },
          removeClass: function ( a ) {
            var c, d, e, g, h, i, j;
            if ( f.isFunction( a ) ) return this.each( function ( b ) {
              f( this ).removeClass( a.call( this, b, this.className ) )
            } );
            if ( a && typeof a == "string" || a === b ) {
              c = ( a || "" ).split( o );
              for ( d = 0, e = this.length; d < e; d++ ) {
                g = this[ d ];
                if ( g.nodeType === 1 && g.className )
                  if ( a ) {
                    h = ( " " + g.className + " " ).replace( n, " " );
                    for ( i = 0, j = c.length; i < j; i++ ) h = h.replace( " " + c[ i ] + " ", " " );
                    g.className = f.trim( h )
                  } else g.className = ""
              }
            }
            return this
          },
          toggleClass: function ( a, b ) {
            var c = typeof a,
              d = typeof b == "boolean";
            if ( f.isFunction( a ) ) return this.each( function ( c ) {
              f( this ).toggleClass( a.call( this, c, this.className, b ), b )
            } );
            return this.each( function () {
              if ( c === "string" ) {
                var e, g = 0,
                  h = f( this ),
                  i = b,
                  j = a.split( o );
                while ( e = j[ g++ ] ) i = d ? i : !h.hasClass( e ), h[ i ? "addClass" : "removeClass" ]( e )
              } else if ( c === "undefined" || c === "boolean" ) this.className && f._data( this,
                  "__className__", this.className ), this.className = this.className || a === !1 ? "" : f
                ._data( this, "__className__" ) || ""
            } )
          },
          hasClass: function ( a ) {
            var b = " " + a + " ";
            for ( var c = 0, d = this.length; c < d; c++ )
              if ( ( " " + this[ c ].className + " " ).replace( n, " " ).indexOf( b ) > -1 ) return !0;
            return !1
          },
          val: function ( a ) {
            var c, d, e = this[ 0 ];
            if ( !arguments.length ) {
              if ( e ) {
                c = f.valHooks[ e.nodeName.toLowerCase() ] || f.valHooks[ e.type ];
                if ( c && "get" in c && ( d = c.get( e, "value" ) ) !== b ) return d;
                d = e.value;
                return typeof d == "string" ? d.replace( p, "" ) : d == null ? "" : d
              }
              return b
            }
            var g = f.isFunction( a );
            return this.each( function ( d ) {
              var e = f( this ),
                h;
              if ( this.nodeType === 1 ) {
                g ? h = a.call( this, d, e.val() ) : h = a, h == null ? h = "" : typeof h == "number" ? h +=
                  "" : f.isArray( h ) && ( h = f.map( h, function ( a ) {
                    return a == null ? "" : a + ""
                  } ) ), c = f.valHooks[ this.nodeName.toLowerCase() ] || f.valHooks[ this.type ];
                if ( !c || !( "set" in c ) || c.set( this, h, "value" ) === b ) this.value = h
              }
            } )
          }
        } ), f.extend( {
          valHooks: {
            option: {
              get: function ( a ) {
                var b = a.attributes.value;
                return !b || b.specified ? a.value : a.text
              }
            },
            select: {
              get: function ( a ) {
                var b, c = a.selectedIndex,
                  d = [],
                  e = a.options,
                  g = a.type === "select-one";
                if ( c < 0 ) return null;
                for ( var h = g ? c : 0, i = g ? c + 1 : e.length; h < i; h++ ) {
                  var j = e[ h ];
                  if ( j.selected && ( f.support.optDisabled ? !j.disabled : j.getAttribute( "disabled" ) ===
                      null ) && ( !j.parentNode.disabled || !f.nodeName( j.parentNode, "optgroup" ) ) ) {
                    b = f( j ).val();
                    if ( g ) return b;
                    d.push( b )
                  }
                }
                if ( g && !d.length && e.length ) return f( e[ c ] ).val();
                return d
              },
              set: function ( a, b ) {
                var c = f.makeArray( b );
                f( a ).find( "option" ).each( function () {
                  this.selected = f.inArray( f( this ).val(), c ) >= 0
                } ), c.length || ( a.selectedIndex = -1 );
                return c
              }
            }
          },
          attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
          },
          attrFix: {
            tabindex: "tabIndex"
          },
          attr: function ( a, c, d, e ) {
            var g = a.nodeType;
            if ( !a || g === 3 || g === 8 || g === 2 ) return b;
            if ( e && c in f.attrFn ) return f( a )[ c ]( d );
            if ( !( "getAttribute" in a ) ) return f.prop( a, c, d );
            var h, i, j = g !== 1 || !f.isXMLDoc( a );
            j && ( c = f.attrFix[ c ] || c, i = f.attrHooks[ c ], i || ( t.test( c ) ? i = w : v && c !==
              "className" && ( f.nodeName( a, "form" ) || u.test( c ) ) && ( i = v ) ) );
            if ( d !== b ) {
              if ( d === null ) {
                f.removeAttr( a, c );
                return b
              }
              if ( i && "set" in i && j && ( h = i.set( a, d, c ) ) !== b ) return h;
              a.setAttribute( c, "" + d );
              return d
            }
            if ( i && "get" in i && j && ( h = i.get( a, c ) ) !== null ) return h;
            h = a.getAttribute( c );
            return h === null ? b : h
          },
          removeAttr: function ( a, b ) {
            var c;
            a.nodeType === 1 && ( b = f.attrFix[ b ] || b, f.support.getSetAttribute ? a.removeAttribute( b ) : (
              f.attr( a, b, "" ), a.removeAttributeNode( a.getAttributeNode( b ) ) ), t.test( b ) && ( c = f
              .propFix[ b ] || b ) in a && ( a[ c ] = !1 ) )
          },
          attrHooks: {
            type: {
              set: function ( a, b ) {
                if ( q.test( a.nodeName ) && a.parentNode ) f.error( "type property can't be changed" );
                else if ( !f.support.radioValue && b === "radio" && f.nodeName( a, "input" ) ) {
                  var c = a.value;
                  a.setAttribute( "type", b ), c && ( a.value = c );
                  return b
                }
              }
            },
            tabIndex: {
              get: function ( a ) {
                var c = a.getAttributeNode( "tabIndex" );
                return c && c.specified ? parseInt( c.value, 10 ) : r.test( a.nodeName ) || s.test( a
                  .nodeName ) && a.href ? 0 : b
              }
            },
            value: {
              get: function ( a, b ) {
                if ( v && f.nodeName( a, "button" ) ) return v.get( a, b );
                return b in a ? a.value : null
              },
              set: function ( a, b, c ) {
                if ( v && f.nodeName( a, "button" ) ) return v.set( a, b, c );
                a.value = b
              }
            }
          },
          propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
          },
          prop: function ( a, c, d ) {
            var e = a.nodeType;
            if ( !a || e === 3 || e === 8 || e === 2 ) return b;
            var g, h, i = e !== 1 || !f.isXMLDoc( a );
            i && ( c = f.propFix[ c ] || c, h = f.propHooks[ c ] );
            return d !== b ? h && "set" in h && ( g = h.set( a, d, c ) ) !== b ? g : a[ c ] = d : h && "get" in
              h && ( g = h.get( a, c ) ) !== b ? g : a[ c ]
          },
          propHooks: {}
        } ), w = {
          get: function ( a, c ) {
            return f.prop( a, c ) ? c.toLowerCase() : b
          },
          set: function ( a, b, c ) {
            var d;
            b === !1 ? f.removeAttr( a, c ) : ( d = f.propFix[ c ] || c, d in a && ( a[ d ] = !0 ), a.setAttribute(
              c, c.toLowerCase() ) );
            return c
          }
        }, f.support.getSetAttribute || ( f.attrFix = f.propFix, v = f.attrHooks.name = f.attrHooks.title = f.valHooks
          .button = {
            get: function ( a, c ) {
              var d;
              d = a.getAttributeNode( c );
              return d && d.nodeValue !== "" ? d.nodeValue : b
            },
            set: function ( a, b, c ) {
              var d = a.getAttributeNode( c );
              if ( d ) {
                d.nodeValue = b;
                return b
              }
            }
          }, f.each( [ "width", "height" ], function ( a, b ) {
            f.attrHooks[ b ] = f.extend( f.attrHooks[ b ], {
              set: function ( a, c ) {
                if ( c === "" ) {
                  a.setAttribute( b, "auto" );
                  return c
                }
              }
            } )
          } ) ), f.support.hrefNormalized || f.each( [ "href", "src", "width", "height" ], function ( a, c ) {
          f.attrHooks[ c ] = f.extend( f.attrHooks[ c ], {
            get: function ( a ) {
              var d = a.getAttribute( c, 2 );
              return d === null ? b : d
            }
          } )
        } ), f.support.style || ( f.attrHooks.style = {
          get: function ( a ) {
            return a.style.cssText.toLowerCase() || b
          },
          set: function ( a, b ) {
            return a.style.cssText = "" + b
          }
        } ), f.support.optSelected || ( f.propHooks.selected = f.extend( f.propHooks.selected, {
          get: function ( a ) {
            var b = a.parentNode;
            b && ( b.selectedIndex, b.parentNode && b.parentNode.selectedIndex )
          }
        } ) ), f.support.checkOn || f.each( [ "radio", "checkbox" ], function () {
          f.valHooks[ this ] = {
            get: function ( a ) {
              return a.getAttribute( "value" ) === null ? "on" : a.value
            }
          }
        } ), f.each( [ "radio", "checkbox" ], function () {
          f.valHooks[ this ] = f.extend( f.valHooks[ this ], {
            set: function ( a, b ) {
              if ( f.isArray( b ) ) return a.checked = f.inArray( f( a ).val(), b ) >= 0
            }
          } )
        } );
        var x = /\.(.*)$/,
          y = /^(?:textarea|input|select)$/i,
          z = /\./g,
          A = / /g,
          B = /[^\w\s.|`]/g,
          C = function ( a ) {
            return a.replace( B, "\\$&" )
          };
        f.event = {
          add: function ( a, c, d, e ) {
            if ( a.nodeType !== 3 && a.nodeType !== 8 ) {
              if ( d === !1 ) d = D;
              else if ( !d ) return;
              var g, h;
              d.handler && ( g = d, d = g.handler ), d.guid || ( d.guid = f.guid++ );
              var i = f._data( a );
              if ( !i ) return;
              var j = i.events,
                k = i.handle;
              j || ( i.events = j = {} ), k || ( i.handle = k = function ( a ) {
                return typeof f != "undefined" && ( !a || f.event.triggered !== a.type ) ? f.event.handle.apply(
                  k.elem, arguments ) : b
              } ), k.elem = a, c = c.split( " " );
              var l, m = 0,
                n;
              while ( l = c[ m++ ] ) {
                h = g ? f.extend( {}, g ) : {
                  handler: d,
                  data: e
                }, l.indexOf( "." ) > -1 ? ( n = l.split( "." ), l = n.shift(), h.namespace = n.slice( 0 ).sort()
                  .join( "." ) ) : ( n = [], h.namespace = "" ), h.type = l, h.guid || ( h.guid = d.guid );
                var o = j[ l ],
                  p = f.event.special[ l ] || {};
                if ( !o ) {
                  o = j[ l ] = [];
                  if ( !p.setup || p.setup.call( a, e, n, k ) === !1 ) a.addEventListener ? a.addEventListener( l,
                    k, !1 ) : a.attachEvent && a.attachEvent( "on" + l, k )
                }
                p.add && ( p.add.call( a, h ), h.handler.guid || ( h.handler.guid = d.guid ) ), o.push( h ), f.event
                  .global[ l ] = !0
              }
              a = null
            }
          },
          global: {},
          remove: function ( a, c, d, e ) {
            if ( a.nodeType !== 3 && a.nodeType !== 8 ) {
              d === !1 && ( d = D );
              var g, h, i, j, k = 0,
                l, m, n, o, p, q, r, s = f.hasData( a ) && f._data( a ),
                t = s && s.events;
              if ( !s || !t ) return;
              c && c.type && ( d = c.handler, c = c.type );
              if ( !c || typeof c == "string" && c.charAt( 0 ) === "." ) {
                c = c || "";
                for ( h in t ) f.event.remove( a, h + c );
                return
              }
              c = c.split( " " );
              while ( h = c[ k++ ] ) {
                r = h, q = null, l = h.indexOf( "." ) < 0, m = [], l || ( m = h.split( "." ), h = m.shift(), n =
                    new RegExp( "(^|\\.)" + f.map( m.slice( 0 ).sort(), C ).join( "\\.(?:.*\\.)?" ) + "(\\.|$)" ) ),
                  p = t[ h ];
                if ( !p ) continue;
                if ( !d ) {
                  for ( j = 0; j < p.length; j++ ) {
                    q = p[ j ];
                    if ( l || n.test( q.namespace ) ) f.event.remove( a, r, q.handler, j ), p.splice( j--, 1 )
                  }
                  continue
                }
                o = f.event.special[ h ] || {};
                for ( j = e || 0; j < p.length; j++ ) {
                  q = p[ j ];
                  if ( d.guid === q.guid ) {
                    if ( l || n.test( q.namespace ) ) e == null && p.splice( j--, 1 ), o.remove && o.remove.call( a,
                      q );
                    if ( e != null ) break
                  }
                }
                if ( p.length === 0 || e != null && p.length === 1 )( !o.teardown || o.teardown.call( a, m ) === !
                  1 ) && f.removeEvent( a, h, s.handle ), g = null, delete t[ h ]
              }
              if ( f.isEmptyObject( t ) ) {
                var u = s.handle;
                u && ( u.elem = null ), delete s.events, delete s.handle, f.isEmptyObject( s ) && f.removeData( a,
                  b, !0 )
              }
            }
          },
          customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
          },
          trigger: function ( c, d, e, g ) {
            var h = c.type || c,
              i = [],
              j;
            h.indexOf( "!" ) >= 0 && ( h = h.slice( 0, -1 ), j = !0 ), h.indexOf( "." ) >= 0 && ( i = h.split(
              "." ), h = i.shift(), i.sort() );
            if ( !!e && !f.event.customEvent[ h ] || !!f.event.global[ h ] ) {
              c = typeof c == "object" ? c[ f.expando ] ? c : new f.Event( h, c ) : new f.Event( h ), c.type = h, c
                .exclusive = j, c.namespace = i.join( "." ), c.namespace_re = new RegExp( "(^|\\.)" + i.join(
                  "\\.(?:.*\\.)?" ) + "(\\.|$)" );
              if ( g || !e ) c.preventDefault(), c.stopPropagation();
              if ( !e ) {
                f.each( f.cache, function () {
                  var a = f.expando,
                    b = this[ a ];
                  b && b.events && b.events[ h ] && f.event.trigger( c, d, b.handle.elem )
                } );
                return
              }
              if ( e.nodeType === 3 || e.nodeType === 8 ) return;
              c.result = b, c.target = e, d = d != null ? f.makeArray( d ) : [], d.unshift( c );
              var k = e,
                l = h.indexOf( ":" ) < 0 ? "on" + h : "";
              do {
                var m = f._data( k, "handle" );
                c.currentTarget = k, m && m.apply( k, d ), l && f.acceptData( k ) && k[ l ] && k[ l ].apply( k,
                  d ) === !1 && ( c.result = !1, c.preventDefault() ), k = k.parentNode || k.ownerDocument || k ===
                  c.target.ownerDocument && a
              } while ( k && !c.isPropagationStopped() );
              if ( !c.isDefaultPrevented() ) {
                var n, o = f.event.special[ h ] || {};
                if ( ( !o._default || o._default.call( e.ownerDocument, c ) === !1 ) && ( h !== "click" || !f
                    .nodeName( e, "a" ) ) && f.acceptData( e ) ) {
                  try {
                    l && e[ h ] && ( n = e[ l ], n && ( e[ l ] = null ), f.event.triggered = h, e[ h ]() )
                  } catch ( p ) {}
                  n && ( e[ l ] = n ), f.event.triggered = b
                }
              }
              return c.result
            }
          },
          handle: function ( c ) {
            c = f.event.fix( c || a.event );
            var d = ( ( f._data( this, "events" ) || {} )[ c.type ] || [] ).slice( 0 ),
              e = !c.exclusive && !c.namespace,
              g = Array.prototype.slice.call( arguments, 0 );
            g[ 0 ] = c, c.currentTarget = this;
            for ( var h = 0, i = d.length; h < i; h++ ) {
              var j = d[ h ];
              if ( e || c.namespace_re.test( j.namespace ) ) {
                c.handler = j.handler, c.data = j.data, c.handleObj = j;
                var k = j.handler.apply( this, g );
                k !== b && ( c.result = k, k === !1 && ( c.preventDefault(), c.stopPropagation() ) );
                if ( c.isImmediatePropagationStopped() ) break
              }
            }
            return c.result
          },
          props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which"
            .split( " " ),
          fix: function ( a ) {
            if ( a[ f.expando ] ) return a;
            var d = a;
            a = f.Event( d );
            for ( var e = this.props.length, g; e; ) g = this.props[ --e ], a[ g ] = d[ g ];
            a.target || ( a.target = a.srcElement || c ), a.target.nodeType === 3 && ( a.target = a.target
              .parentNode ), !a.relatedTarget && a.fromElement && ( a.relatedTarget = a.fromElement === a.target ?
              a.toElement : a.fromElement );
            if ( a.pageX == null && a.clientX != null ) {
              var h = a.target.ownerDocument || c,
                i = h.documentElement,
                j = h.body;
              a.pageX = a.clientX + ( i && i.scrollLeft || j && j.scrollLeft || 0 ) - ( i && i.clientLeft || j && j
                .clientLeft || 0 ), a.pageY = a.clientY + ( i && i.scrollTop || j && j.scrollTop || 0 ) - ( i && i
                .clientTop || j && j.clientTop || 0 )
            }
            a.which == null && ( a.charCode != null || a.keyCode != null ) && ( a.which = a.charCode != null ? a
                .charCode : a.keyCode ), !a.metaKey && a.ctrlKey && ( a.metaKey = a.ctrlKey ), !a.which && a
              .button !== b && ( a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0 );
            return a
          },
          guid: 1e8,
          proxy: f.proxy,
          special: {
            ready: {
              setup: f.bindReady,
              teardown: f.noop
            },
            live: {
              add: function ( a ) {
                f.event.add( this, N( a.origType, a.selector ), f.extend( {}, a, {
                  handler: M,
                  guid: a.handler.guid
                } ) )
              },
              remove: function ( a ) {
                f.event.remove( this, N( a.origType, a.selector ), a )
              }
            },
            beforeunload: {
              setup: function ( a, b, c ) {
                f.isWindow( this ) && ( this.onbeforeunload = c )
              },
              teardown: function ( a, b ) {
                this.onbeforeunload === b && ( this.onbeforeunload = null )
              }
            }
          }
        }, f.removeEvent = c.removeEventListener ? function ( a, b, c ) {
          a.removeEventListener && a.removeEventListener( b, c, !1 )
        } : function ( a, b, c ) {
          a.detachEvent && a.detachEvent( "on" + b, c )
        }, f.Event = function ( a, b ) {
          if ( !this.preventDefault ) return new f.Event( a, b );
          a && a.type ? ( this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented ||
              a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? E : D ) : this.type = a, b && f
            .extend( this, b ), this.timeStamp = f.now(), this[ f.expando ] = !0
        }, f.Event.prototype = {
          preventDefault: function () {
            this.isDefaultPrevented = E;
            var a = this.originalEvent;
            !a || ( a.preventDefault ? a.preventDefault() : a.returnValue = !1 )
          },
          stopPropagation: function () {
            this.isPropagationStopped = E;
            var a = this.originalEvent;
            !a || ( a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0 )
          },
          stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = E, this.stopPropagation()
          },
          isDefaultPrevented: D,
          isPropagationStopped: D,
          isImmediatePropagationStopped: D
        };
        var F = function ( a ) {
            var b = a.relatedTarget,
              c = !1,
              d = a.type;
            a.type = a.data, b !== this && ( b && ( c = f.contains( this, b ) ), c || ( f.event.handle.apply( this,
              arguments ), a.type = d ) )
          },
          G = function ( a ) {
            a.type = a.data, f.event.handle.apply( this, arguments )
          };
        f.each( {
          mouseenter: "mouseover",
          mouseleave: "mouseout"
        }, function ( a, b ) {
          f.event.special[ a ] = {
            setup: function ( c ) {
              f.event.add( this, b, c && c.selector ? G : F, a )
            },
            teardown: function ( a ) {
              f.event.remove( this, b, a && a.selector ? G : F )
            }
          }
        } ), f.support.submitBubbles || ( f.event.special.submit = {
          setup: function ( a, b ) {
            if ( !f.nodeName( this, "form" ) ) f.event.add( this, "click.specialSubmit", function ( a ) {
              var b = a.target,
                c = b.type;
              ( c === "submit" || c === "image" ) && f( b ).closest( "form" ).length && K( "submit", this,
                arguments )
            } ), f.event.add( this, "keypress.specialSubmit", function ( a ) {
              var b = a.target,
                c = b.type;
              ( c === "text" || c === "password" ) && f( b ).closest( "form" ).length && a.keyCode === 13 &&
                K( "submit", this, arguments )
            } );
            else return !1
          },
          teardown: function ( a ) {
            f.event.remove( this, ".specialSubmit" )
          }
        } );
        if ( !f.support.changeBubbles ) {
          var H, I = function ( a ) {
              var b = a.type,
                c = a.value;
              b === "radio" || b === "checkbox" ? c = a.checked : b === "select-multiple" ? c = a.selectedIndex > -1 ? f
                .map( a.options, function ( a ) {
                  return a.selected
                } ).join( "-" ) : "" : f.nodeName( a, "select" ) && ( c = a.selectedIndex );
              return c
            },
            J = function ( c ) {
              var d = c.target,
                e, g;
              if ( !!y.test( d.nodeName ) && !d.readOnly ) {
                e = f._data( d, "_change_data" ), g = I( d ), ( c.type !== "focusout" || d.type !== "radio" ) && f
                  ._data( d, "_change_data", g );
                if ( e === b || g === e ) return;
                if ( e != null || g ) c.type = "change", c.liveFired = b, f.event.trigger( c, arguments[ 1 ], d )
              }
            };
          f.event.special.change = {
            filters: {
              focusout: J,
              beforedeactivate: J,
              click: function ( a ) {
                var b = a.target,
                  c = f.nodeName( b, "input" ) ? b.type : "";
                ( c === "radio" || c === "checkbox" || f.nodeName( b, "select" ) ) && J.call( this, a )
              },
              keydown: function ( a ) {
                var b = a.target,
                  c = f.nodeName( b, "input" ) ? b.type : "";
                ( a.keyCode === 13 && !f.nodeName( b, "textarea" ) || a.keyCode === 32 && ( c === "checkbox" ||
                  c === "radio" ) || c === "select-multiple" ) && J.call( this, a )
              },
              beforeactivate: function ( a ) {
                var b = a.target;
                f._data( b, "_change_data", I( b ) )
              }
            },
            setup: function ( a, b ) {
              if ( this.type === "file" ) return !1;
              for ( var c in H ) f.event.add( this, c + ".specialChange", H[ c ] );
              return y.test( this.nodeName )
            },
            teardown: function ( a ) {
              f.event.remove( this, ".specialChange" );
              return y.test( this.nodeName )
            }
          }, H = f.event.special.change.filters, H.focus = H.beforeactivate
        }
        f.support.focusinBubbles || f.each( {
          focus: "focusin",
          blur: "focusout"
        }, function ( a, b ) {
          function e( a ) {
            var c = f.event.fix( a );
            c.type = b, c.originalEvent = {}, f.event.trigger( c, null, c.target ), c.isDefaultPrevented() && a
              .preventDefault()
          }
          var d = 0;
          f.event.special[ b ] = {
            setup: function () {
              d++ === 0 && c.addEventListener( a, e, !0 )
            },
            teardown: function () {
              --d === 0 && c.removeEventListener( a, e, !0 )
            }
          }
        } ), f.each( [ "bind", "one" ], function ( a, c ) {
          f.fn[ c ] = function ( a, d, e ) {
            var g;
            if ( typeof a == "object" ) {
              for ( var h in a ) this[ c ]( h, d, a[ h ], e );
              return this
            }
            if ( arguments.length === 2 || d === !1 ) e = d, d = b;
            c === "one" ? ( g = function ( a ) {
              f( this ).unbind( a, g );
              return e.apply( this, arguments )
            }, g.guid = e.guid || f.guid++ ) : g = e;
            if ( a === "unload" && c !== "one" ) this.one( a, d, e );
            else
              for ( var i = 0, j = this.length; i < j; i++ ) f.event.add( this[ i ], a, g, d );
            return this
          }
        } ), f.fn.extend( {
          unbind: function ( a, b ) {
            if ( typeof a == "object" && !a.preventDefault )
              for ( var c in a ) this.unbind( c, a[ c ] );
            else
              for ( var d = 0, e = this.length; d < e; d++ ) f.event.remove( this[ d ], a, b );
            return this
          },
          delegate: function ( a, b, c, d ) {
            return this.live( b, c, d, a )
          },
          undelegate: function ( a, b, c ) {
            return arguments.length === 0 ? this.unbind( "live" ) : this.die( b, null, c, a )
          },
          trigger: function ( a, b ) {
            return this.each( function () {
              f.event.trigger( a, b, this )
            } )
          },
          triggerHandler: function ( a, b ) {
            if ( this[ 0 ] ) return f.event.trigger( a, b, this[ 0 ], !0 )
          },
          toggle: function ( a ) {
            var b = arguments,
              c = a.guid || f.guid++,
              d = 0,
              e = function ( c ) {
                var e = ( f.data( this, "lastToggle" + a.guid ) || 0 ) % d;
                f.data( this, "lastToggle" + a.guid, e + 1 ), c.preventDefault();
                return b[ e ].apply( this, arguments ) || !1
              };
            e.guid = c;
            while ( d < b.length ) b[ d++ ].guid = c;
            return this.click( e )
          },
          hover: function ( a, b ) {
            return this.mouseenter( a ).mouseleave( b || a )
          }
        } );
        var L = {
          focus: "focusin",
          blur: "focusout",
          mouseenter: "mouseover",
          mouseleave: "mouseout"
        };
        f.each( [ "live", "die" ], function ( a, c ) {
            f.fn[ c ] = function ( a, d, e, g ) {
              var h, i = 0,
                j, k, l, m = g || this.selector,
                n = g ? this : f( this.context );
              if ( typeof a == "object" && !a.preventDefault ) {
                for ( var o in a ) n[ c ]( o, d, a[ o ], m );
                return this
              }
              if ( c === "die" && !a && g && g.charAt( 0 ) === "." ) {
                n.unbind( g );
                return this
              }
              if ( d === !1 || f.isFunction( d ) ) e = d || D, d = b;
              a = ( a || "" ).split( " " );
              while ( ( h = a[ i++ ] ) != null ) {
                j = x.exec( h ), k = "", j && ( k = j[ 0 ], h = h.replace( x, "" ) );
                if ( h === "hover" ) {
                  a.push( "mouseenter" + k, "mouseleave" + k );
                  continue
                }
                l = h, L[ h ] ? ( a.push( L[ h ] + k ), h = h + k ) : h = ( L[ h ] || h ) + k;
                if ( c === "live" )
                  for ( var p = 0, q = n.length; p < q; p++ ) f.event.add( n[ p ], "live." + N( h, m ), {
                    data: d,
                    selector: m,
                    handler: e,
                    origType: h,
                    origHandler: e,
                    preType: l
                  } );
                else n.unbind( "live." + N( h, m ), e )
              }
              return this
            }
          } ), f.each(
            "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error"
            .split( " " ),
            function ( a, b ) {
              f.fn[ b ] = function ( a, c ) {
                c == null && ( c = a, a = null );
                return arguments.length > 0 ? this.bind( b, a, c ) : this.trigger( b )
              }, f.attrFn && ( f.attrFn[ b ] = !0 )
            } ),
          function () {
            function u( a, b, c, d, e, f ) {
              for ( var g = 0, h = d.length; g < h; g++ ) {
                var i = d[ g ];
                if ( i ) {
                  var j = !1;
                  i = i[ a ];
                  while ( i ) {
                    if ( i.sizcache === c ) {
                      j = d[ i.sizset ];
                      break
                    }
                    if ( i.nodeType === 1 ) {
                      f || ( i.sizcache = c, i.sizset = g );
                      if ( typeof b != "string" ) {
                        if ( i === b ) {
                          j = !0;
                          break
                        }
                      } else if ( k.filter( b, [ i ] ).length > 0 ) {
                        j = i;
                        break
                      }
                    }
                    i = i[ a ]
                  }
                  d[ g ] = j
                }
              }
            }
  
            function t( a, b, c, d, e, f ) {
              for ( var g = 0, h = d.length; g < h; g++ ) {
                var i = d[ g ];
                if ( i ) {
                  var j = !1;
                  i = i[ a ];
                  while ( i ) {
                    if ( i.sizcache === c ) {
                      j = d[ i.sizset ];
                      break
                    }
                    i.nodeType === 1 && !f && ( i.sizcache = c, i.sizset = g );
                    if ( i.nodeName.toLowerCase() === b ) {
                      j = i;
                      break
                    }
                    i = i[ a ]
                  }
                  d[ g ] = j
                }
              }
            }
            var a =
              /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
              d = 0,
              e = Object.prototype.toString,
              g = !1,
              h = !0,
              i = /\\/g,
              j = /\W/;
            [ 0, 0 ].sort( function () {
              h = !1;
              return 0
            } );
            var k = function ( b, d, f, g ) {
              f = f || [], d = d || c;
              var h = d;
              if ( d.nodeType !== 1 && d.nodeType !== 9 ) return [];
              if ( !b || typeof b != "string" ) return f;
              var i, j, n, o, q, r, s, t, u = !0,
                w = k.isXML( d ),
                x = [],
                y = b;
              do {
                a.exec( "" ), i = a.exec( y );
                if ( i ) {
                  y = i[ 3 ], x.push( i[ 1 ] );
                  if ( i[ 2 ] ) {
                    o = i[ 3 ];
                    break
                  }
                }
              } while ( i );
              if ( x.length > 1 && m.exec( b ) )
                if ( x.length === 2 && l.relative[ x[ 0 ] ] ) j = v( x[ 0 ] + x[ 1 ], d );
                else {
                  j = l.relative[ x[ 0 ] ] ? [ d ] : k( x.shift(), d );
                  while ( x.length ) b = x.shift(), l.relative[ b ] && ( b += x.shift() ), j = v( b, j )
                }
              else {
                !g && x.length > 1 && d.nodeType === 9 && !w && l.match.ID.test( x[ 0 ] ) && !l.match.ID.test( x[ x
                  .length - 1 ] ) && ( q = k.find( x.shift(), d, w ), d = q.expr ? k.filter( q.expr, q.set )[ 0 ] :
                  q.set[ 0 ] );
                if ( d ) {
                  q = g ? {
                      expr: x.pop(),
                      set: p( g )
                    } : k.find( x.pop(), x.length === 1 && ( x[ 0 ] === "~" || x[ 0 ] === "+" ) && d.parentNode ? d
                      .parentNode : d, w ), j = q.expr ? k.filter( q.expr, q.set ) : q.set, x.length > 0 ? n = p(
                    j ) : u = !1;
                  while ( x.length ) r = x.pop(), s = r, l.relative[ r ] ? s = x.pop() : r = "", s == null && ( s =
                    d ), l.relative[ r ]( n, s, w )
                } else n = x = []
              }
              n || ( n = j ), n || k.error( r || b );
              if ( e.call( n ) === "[object Array]" )
                if ( !u ) f.push.apply( f, n );
                else if ( d && d.nodeType === 1 )
                for ( t = 0; n[ t ] != null; t++ ) n[ t ] && ( n[ t ] === !0 || n[ t ].nodeType === 1 && k.contains(
                  d, n[ t ] ) ) && f.push( j[ t ] );
              else
                for ( t = 0; n[ t ] != null; t++ ) n[ t ] && n[ t ].nodeType === 1 && f.push( j[ t ] );
              else p( n, f );
              o && ( k( o, h, f, g ), k.uniqueSort( f ) );
              return f
            };
            k.uniqueSort = function ( a ) {
              if ( r ) {
                g = h, a.sort( r );
                if ( g )
                  for ( var b = 1; b < a.length; b++ ) a[ b ] === a[ b - 1 ] && a.splice( b--, 1 )
              }
              return a
            }, k.matches = function ( a, b ) {
              return k( a, null, null, b )
            }, k.matchesSelector = function ( a, b ) {
              return k( b, null, null, [ a ] ).length > 0
            }, k.find = function ( a, b, c ) {
              var d;
              if ( !a ) return [];
              for ( var e = 0, f = l.order.length; e < f; e++ ) {
                var g, h = l.order[ e ];
                if ( g = l.leftMatch[ h ].exec( a ) ) {
                  var j = g[ 1 ];
                  g.splice( 1, 1 );
                  if ( j.substr( j.length - 1 ) !== "\\" ) {
                    g[ 1 ] = ( g[ 1 ] || "" ).replace( i, "" ), d = l.find[ h ]( g, b, c );
                    if ( d != null ) {
                      a = a.replace( l.match[ h ], "" );
                      break
                    }
                  }
                }
              }
              d || ( d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName( "*" ) : [] );
              return {
                set: d,
                expr: a
              }
            }, k.filter = function ( a, c, d, e ) {
              var f, g, h = a,
                i = [],
                j = c,
                m = c && c[ 0 ] && k.isXML( c[ 0 ] );
              while ( a && c.length ) {
                for ( var n in l.filter )
                  if ( ( f = l.leftMatch[ n ].exec( a ) ) != null && f[ 2 ] ) {
                    var o, p, q = l.filter[ n ],
                      r = f[ 1 ];
                    g = !1, f.splice( 1, 1 );
                    if ( r.substr( r.length - 1 ) === "\\" ) continue;
                    j === i && ( i = [] );
                    if ( l.preFilter[ n ] ) {
                      f = l.preFilter[ n ]( f, j, d, i, e, m );
                      if ( !f ) g = o = !0;
                      else if ( f === !0 ) continue
                    }
                    if ( f )
                      for ( var s = 0;
                        ( p = j[ s ] ) != null; s++ )
                        if ( p ) {
                          o = q( p, f, s, j );
                          var t = e ^ !!o;
                          d && o != null ? t ? g = !0 : j[ s ] = !1 : t && ( i.push( p ), g = !0 )
                        } if ( o !== b ) {
                      d || ( j = i ), a = a.replace( l.match[ n ], "" );
                      if ( !g ) return [];
                      break
                    }
                  } if ( a === h )
                  if ( g == null ) k.error( a );
                  else break;
                h = a
              }
              return j
            }, k.error = function ( a ) {
              throw "Syntax error, unrecognized expression: " + a
            };
            var l = k.selectors = {
                order: [ "ID", "NAME", "TAG" ],
                match: {
                  ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                  CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                  NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                  ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                  TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                  CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                  POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                  PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {
                  "class": "className",
                  "for": "htmlFor"
                },
                attrHandle: {
                  href: function ( a ) {
                    return a.getAttribute( "href" )
                  },
                  type: function ( a ) {
                    return a.getAttribute( "type" )
                  }
                },
                relative: {
                  "+": function ( a, b ) {
                    var c = typeof b == "string",
                      d = c && !j.test( b ),
                      e = c && !d;
                    d && ( b = b.toLowerCase() );
                    for ( var f = 0, g = a.length, h; f < g; f++ )
                      if ( h = a[ f ] ) {
                        while ( ( h = h.previousSibling ) && h.nodeType !== 1 );
                        a[ f ] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                      } e && k.filter( b, a, !0 )
                  },
                  ">": function ( a, b ) {
                    var c, d = typeof b == "string",
                      e = 0,
                      f = a.length;
                    if ( d && !j.test( b ) ) {
                      b = b.toLowerCase();
                      for ( ; e < f; e++ ) {
                        c = a[ e ];
                        if ( c ) {
                          var g = c.parentNode;
                          a[ e ] = g.nodeName.toLowerCase() === b ? g : !1
                        }
                      }
                    } else {
                      for ( ; e < f; e++ ) c = a[ e ], c && ( a[ e ] = d ? c.parentNode : c.parentNode === b );
                      d && k.filter( b, a, !0 )
                    }
                  },
                  "": function ( a, b, c ) {
                    var e, f = d++,
                      g = u;
                    typeof b == "string" && !j.test( b ) && ( b = b.toLowerCase(), e = b, g = t ), g( "parentNode", b,
                      f, a, e, c )
                  },
                  "~": function ( a, b, c ) {
                    var e, f = d++,
                      g = u;
                    typeof b == "string" && !j.test( b ) && ( b = b.toLowerCase(), e = b, g = t ), g(
                      "previousSibling", b, f, a, e, c )
                  }
                },
                find: {
                  ID: function ( a, b, c ) {
                    if ( typeof b.getElementById != "undefined" && !c ) {
                      var d = b.getElementById( a[ 1 ] );
                      return d && d.parentNode ? [ d ] : []
                    }
                  },
                  NAME: function ( a, b ) {
                    if ( typeof b.getElementsByName != "undefined" ) {
                      var c = [],
                        d = b.getElementsByName( a[ 1 ] );
                      for ( var e = 0, f = d.length; e < f; e++ ) d[ e ].getAttribute( "name" ) === a[ 1 ] && c.push(
                        d[ e ] );
                      return c.length === 0 ? null : c
                    }
                  },
                  TAG: function ( a, b ) {
                    if ( typeof b.getElementsByTagName != "undefined" ) return b.getElementsByTagName( a[ 1 ] )
                  }
                },
                preFilter: {
                  CLASS: function ( a, b, c, d, e, f ) {
                    a = " " + a[ 1 ].replace( i, "" ) + " ";
                    if ( f ) return a;
                    for ( var g = 0, h;
                      ( h = b[ g ] ) != null; g++ ) h && ( e ^ ( h.className && ( " " + h.className + " " ).replace(
                      /[\t\n\r]/g, " " ).indexOf( a ) >= 0 ) ? c || d.push( h ) : c && ( b[ g ] = !1 ) );
                    return !1
                  },
                  ID: function ( a ) {
                    return a[ 1 ].replace( i, "" )
                  },
                  TAG: function ( a, b ) {
                    return a[ 1 ].replace( i, "" ).toLowerCase()
                  },
                  CHILD: function ( a ) {
                    if ( a[ 1 ] === "nth" ) {
                      a[ 2 ] || k.error( a[ 0 ] ), a[ 2 ] = a[ 2 ].replace( /^\+|\s*/g, "" );
                      var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec( a[ 2 ] === "even" && "2n" || a[ 2 ] === "odd" &&
                        "2n+1" || !/\D/.test( a[ 2 ] ) && "0n+" + a[ 2 ] || a[ 2 ] );
                      a[ 2 ] = b[ 1 ] + ( b[ 2 ] || 1 ) - 0, a[ 3 ] = b[ 3 ] - 0
                    } else a[ 2 ] && k.error( a[ 0 ] );
                    a[ 0 ] = d++;
                    return a
                  },
                  ATTR: function ( a, b, c, d, e, f ) {
                    var g = a[ 1 ] = a[ 1 ].replace( i, "" );
                    !f && l.attrMap[ g ] && ( a[ 1 ] = l.attrMap[ g ] ), a[ 4 ] = ( a[ 4 ] || a[ 5 ] || "" ).replace(
                      i, "" ), a[ 2 ] === "~=" && ( a[ 4 ] = " " + a[ 4 ] + " " );
                    return a
                  },
                  PSEUDO: function ( b, c, d, e, f ) {
                    if ( b[ 1 ] === "not" )
                      if ( ( a.exec( b[ 3 ] ) || "" ).length > 1 || /^\w/.test( b[ 3 ] ) ) b[ 3 ] = k( b[ 3 ], null,
                        null, c );
                      else {
                        var g = k.filter( b[ 3 ], c, d, !0 ^ f );
                        d || e.push.apply( e, g );
                        return !1
                      }
                    else if ( l.match.POS.test( b[ 0 ] ) || l.match.CHILD.test( b[ 0 ] ) ) return !0;
                    return b
                  },
                  POS: function ( a ) {
                    a.unshift( !0 );
                    return a
                  }
                },
                filters: {
                  enabled: function ( a ) {
                    return a.disabled === !1 && a.type !== "hidden"
                  },
                  disabled: function ( a ) {
                    return a.disabled === !0
                  },
                  checked: function ( a ) {
                    return a.checked === !0
                  },
                  selected: function ( a ) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return a.selected === !0
                  },
                  parent: function ( a ) {
                    return !!a.firstChild
                  },
                  empty: function ( a ) {
                    return !a.firstChild
                  },
                  has: function ( a, b, c ) {
                    return !!k( c[ 3 ], a ).length
                  },
                  header: function ( a ) {
                    return /h\d/i.test( a.nodeName )
                  },
                  text: function ( a ) {
                    var b = a.getAttribute( "type" ),
                      c = a.type;
                    return a.nodeName.toLowerCase() === "input" && "text" === c && ( b === c || b === null )
                  },
                  radio: function ( a ) {
                    return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                  },
                  checkbox: function ( a ) {
                    return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                  },
                  file: function ( a ) {
                    return a.nodeName.toLowerCase() === "input" && "file" === a.type
                  },
                  password: function ( a ) {
                    return a.nodeName.toLowerCase() === "input" && "password" === a.type
                  },
                  submit: function ( a ) {
                    var b = a.nodeName.toLowerCase();
                    return ( b === "input" || b === "button" ) && "submit" === a.type
                  },
                  image: function ( a ) {
                    return a.nodeName.toLowerCase() === "input" && "image" === a.type
                  },
                  reset: function ( a ) {
                    var b = a.nodeName.toLowerCase();
                    return ( b === "input" || b === "button" ) && "reset" === a.type
                  },
                  button: function ( a ) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && "button" === a.type || b === "button"
                  },
                  input: function ( a ) {
                    return /input|select|textarea|button/i.test( a.nodeName )
                  },
                  focus: function ( a ) {
                    return a === a.ownerDocument.activeElement
                  }
                },
                setFilters: {
                  first: function ( a, b ) {
                    return b === 0
                  },
                  last: function ( a, b, c, d ) {
                    return b === d.length - 1
                  },
                  even: function ( a, b ) {
                    return b % 2 === 0
                  },
                  odd: function ( a, b ) {
                    return b % 2 === 1
                  },
                  lt: function ( a, b, c ) {
                    return b < c[ 3 ] - 0
                  },
                  gt: function ( a, b, c ) {
                    return b > c[ 3 ] - 0
                  },
                  nth: function ( a, b, c ) {
                    return c[ 3 ] - 0 === b
                  },
                  eq: function ( a, b, c ) {
                    return c[ 3 ] - 0 === b
                  }
                },
                filter: {
                  PSEUDO: function ( a, b, c, d ) {
                    var e = b[ 1 ],
                      f = l.filters[ e ];
                    if ( f ) return f( a, c, b, d );
                    if ( e === "contains" ) return ( a.textContent || a.innerText || k.getText( [ a ] ) || "" )
                      .indexOf( b[ 3 ] ) >= 0;
                    if ( e === "not" ) {
                      var g = b[ 3 ];
                      for ( var h = 0, i = g.length; h < i; h++ )
                        if ( g[ h ] === a ) return !1;
                      return !0
                    }
                    k.error( e )
                  },
                  CHILD: function ( a, b ) {
                    var c = b[ 1 ],
                      d = a;
                    switch ( c ) {
                      case "only":
                      case "first":
                        while ( d = d.previousSibling )
                          if ( d.nodeType === 1 ) return !1;
                        if ( c === "first" ) return !0;
                        d = a;
                      case "last":
                        while ( d = d.nextSibling )
                          if ( d.nodeType === 1 ) return !1;
                        return !0;
                      case "nth":
                        var e = b[ 2 ],
                          f = b[ 3 ];
                        if ( e === 1 && f === 0 ) return !0;
                        var g = b[ 0 ],
                          h = a.parentNode;
                        if ( h && ( h.sizcache !== g || !a.nodeIndex ) ) {
                          var i = 0;
                          for ( d = h.firstChild; d; d = d.nextSibling ) d.nodeType === 1 && ( d.nodeIndex = ++i );
                          h.sizcache = g
                        }
                        var j = a.nodeIndex - f;
                        return e === 0 ? j === 0 : j % e === 0 && j / e >= 0
                    }
                  },
                  ID: function ( a, b ) {
                    return a.nodeType === 1 && a.getAttribute( "id" ) === b
                  },
                  TAG: function ( a, b ) {
                    return b === "*" && a.nodeType === 1 || a.nodeName.toLowerCase() === b
                  },
                  CLASS: function ( a, b ) {
                    return ( " " + ( a.className || a.getAttribute( "class" ) ) + " " ).indexOf( b ) > -1
                  },
                  ATTR: function ( a, b ) {
                    var c = b[ 1 ],
                      d = l.attrHandle[ c ] ? l.attrHandle[ c ]( a ) : a[ c ] != null ? a[ c ] : a.getAttribute( c ),
                      e = d + "",
                      f = b[ 2 ],
                      g = b[ 4 ];
                    return d == null ? f === "!=" : f === "=" ? e === g : f === "*=" ? e.indexOf( g ) >= 0 : f ===
                      "~=" ? ( " " + e + " " ).indexOf( g ) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(
                        g ) === 0 : f === "$=" ? e.substr( e.length - g.length ) === g : f === "|=" ? e === g || e
                      .substr( 0, g.length + 1 ) === g + "-" : !1 : e && d !== !1
                  },
                  POS: function ( a, b, c, d ) {
                    var e = b[ 2 ],
                      f = l.setFilters[ e ];
                    if ( f ) return f( a, c, b, d )
                  }
                }
              },
              m = l.match.POS,
              n = function ( a, b ) {
                return "\\" + ( b - 0 + 1 )
              };
            for ( var o in l.match ) l.match[ o ] = new RegExp( l.match[ o ].source + /(?![^\[]*\])(?![^\(]*\))/
              .source ), l.leftMatch[ o ] = new RegExp( /(^(?:.|\r|\n)*?)/.source + l.match[ o ].source.replace(
              /\\(\d+)/g, n ) );
            var p = function ( a, b ) {
              a = Array.prototype.slice.call( a, 0 );
              if ( b ) {
                b.push.apply( b, a );
                return b
              }
              return a
            };
            try {
              Array.prototype.slice.call( c.documentElement.childNodes, 0 )[ 0 ].nodeType
            } catch ( q ) {
              p = function ( a, b ) {
                var c = 0,
                  d = b || [];
                if ( e.call( a ) === "[object Array]" ) Array.prototype.push.apply( d, a );
                else if ( typeof a.length == "number" )
                  for ( var f = a.length; c < f; c++ ) d.push( a[ c ] );
                else
                  for ( ; a[ c ]; c++ ) d.push( a[ c ] );
                return d
              }
            }
            var r, s;
            c.documentElement.compareDocumentPosition ? r = function ( a, b ) {
                if ( a === b ) {
                  g = !0;
                  return 0
                }
                if ( !a.compareDocumentPosition || !b.compareDocumentPosition ) return a.compareDocumentPosition ? -1 :
                  1;
                return a.compareDocumentPosition( b ) & 4 ? -1 : 1
              } : ( r = function ( a, b ) {
                if ( a === b ) {
                  g = !0;
                  return 0
                }
                if ( a.sourceIndex && b.sourceIndex ) return a.sourceIndex - b.sourceIndex;
                var c, d, e = [],
                  f = [],
                  h = a.parentNode,
                  i = b.parentNode,
                  j = h;
                if ( h === i ) return s( a, b );
                if ( !h ) return -1;
                if ( !i ) return 1;
                while ( j ) e.unshift( j ), j = j.parentNode;
                j = i;
                while ( j ) f.unshift( j ), j = j.parentNode;
                c = e.length, d = f.length;
                for ( var k = 0; k < c && k < d; k++ )
                  if ( e[ k ] !== f[ k ] ) return s( e[ k ], f[ k ] );
                return k === c ? s( a, f[ k ], -1 ) : s( e[ k ], b, 1 )
              }, s = function ( a, b, c ) {
                if ( a === b ) return c;
                var d = a.nextSibling;
                while ( d ) {
                  if ( d === b ) return -1;
                  d = d.nextSibling
                }
                return 1
              } ), k.getText = function ( a ) {
                var b = "",
                  c;
                for ( var d = 0; a[ d ]; d++ ) c = a[ d ], c.nodeType === 3 || c.nodeType === 4 ? b += c.nodeValue : c
                  .nodeType !== 8 && ( b += k.getText( c.childNodes ) );
                return b
              },
              function () {
                var a = c.createElement( "div" ),
                  d = "script" + ( new Date ).getTime(),
                  e = c.documentElement;
                a.innerHTML = "<a name='" + d + "'/>", e.insertBefore( a, e.firstChild ), c.getElementById( d ) && ( l
                  .find.ID = function ( a, c, d ) {
                    if ( typeof c.getElementById != "undefined" && !d ) {
                      var e = c.getElementById( a[ 1 ] );
                      return e ? e.id === a[ 1 ] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode(
                        "id" ).nodeValue === a[ 1 ] ? [ e ] : b : []
                    }
                  }, l.filter.ID = function ( a, b ) {
                    var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode( "id" );
                    return a.nodeType === 1 && c && c.nodeValue === b
                  } ), e.removeChild( a ), e = a = null
              }(),
              function () {
                var a = c.createElement( "div" );
                a.appendChild( c.createComment( "" ) ), a.getElementsByTagName( "*" ).length > 0 && ( l.find.TAG =
                    function ( a, b ) {
                      var c = b.getElementsByTagName( a[ 1 ] );
                      if ( a[ 1 ] === "*" ) {
                        var d = [];
                        for ( var e = 0; c[ e ]; e++ ) c[ e ].nodeType === 1 && d.push( c[ e ] );
                        c = d
                      }
                      return c
                    } ), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !=
                  "undefined" && a.firstChild.getAttribute( "href" ) !== "#" && ( l.attrHandle.href = function ( a ) {
                    return a.getAttribute( "href", 2 )
                  } ), a = null
              }(), c.querySelectorAll && function () {
                var a = k,
                  b = c.createElement( "div" ),
                  d = "__sizzle__";
                b.innerHTML = "<p class='TEST'></p>";
                if ( !b.querySelectorAll || b.querySelectorAll( ".TEST" ).length !== 0 ) {
                  k = function ( b, e, f, g ) {
                    e = e || c;
                    if ( !g && !k.isXML( e ) ) {
                      var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec( b );
                      if ( h && ( e.nodeType === 1 || e.nodeType === 9 ) ) {
                        if ( h[ 1 ] ) return p( e.getElementsByTagName( b ), f );
                        if ( h[ 2 ] && l.find.CLASS && e.getElementsByClassName ) return p( e.getElementsByClassName(
                          h[ 2 ] ), f )
                      }
                      if ( e.nodeType === 9 ) {
                        if ( b === "body" && e.body ) return p( [ e.body ], f );
                        if ( h && h[ 3 ] ) {
                          var i = e.getElementById( h[ 3 ] );
                          if ( !i || !i.parentNode ) return p( [], f );
                          if ( i.id === h[ 3 ] ) return p( [ i ], f )
                        }
                        try {
                          return p( e.querySelectorAll( b ), f )
                        } catch ( j ) {}
                      } else if ( e.nodeType === 1 && e.nodeName.toLowerCase() !== "object" ) {
                        var m = e,
                          n = e.getAttribute( "id" ),
                          o = n || d,
                          q = e.parentNode,
                          r = /^\s*[+~]/.test( b );
                        n ? o = o.replace( /'/g, "\\$&" ) : e.setAttribute( "id", o ), r && q && ( e = e.parentNode );
                        try {
                          if ( !r || q ) return p( e.querySelectorAll( "[id='" + o + "'] " + b ), f )
                        } catch ( s ) {} finally {
                          n || m.removeAttribute( "id" )
                        }
                      }
                    }
                    return a( b, e, f, g )
                  };
                  for ( var e in a ) k[ e ] = a[ e ];
                  b = null
                }
              }(),
              function () {
                var a = c.documentElement,
                  b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
                if ( b ) {
                  var d = !b.call( c.createElement( "div" ), "div" ),
                    e = !1;
                  try {
                    b.call( c.documentElement, "[test!='']:sizzle" )
                  } catch ( f ) {
                    e = !0
                  }
                  k.matchesSelector = function ( a, c ) {
                    c = c.replace( /\=\s*([^'"\]]*)\s*\]/g, "='$1']" );
                    if ( !k.isXML( a ) ) try {
                      if ( e || !l.match.PSEUDO.test( c ) && !/!=/.test( c ) ) {
                        var f = b.call( a, c );
                        if ( f || !d || a.document && a.document.nodeType !== 11 ) return f
                      }
                    } catch ( g ) {}
                    return k( c, null, null, [ a ] ).length > 0
                  }
                }
              }(),
              function () {
                var a = c.createElement( "div" );
                a.innerHTML = "<div class='test e'></div><div class='test'></div>";
                if ( !!a.getElementsByClassName && a.getElementsByClassName( "e" ).length !== 0 ) {
                  a.lastChild.className = "e";
                  if ( a.getElementsByClassName( "e" ).length === 1 ) return;
                  l.order.splice( 1, 0, "CLASS" ), l.find.CLASS = function ( a, b, c ) {
                    if ( typeof b.getElementsByClassName != "undefined" && !c ) return b.getElementsByClassName( a[
                      1 ] )
                  }, a = null
                }
              }(), c.documentElement.contains ? k.contains = function ( a, b ) {
                return a !== b && ( a.contains ? a.contains( b ) : !0 )
              } : c.documentElement.compareDocumentPosition ? k.contains = function ( a, b ) {
                return !!( a.compareDocumentPosition( b ) & 16 )
              } : k.contains = function () {
                return !1
              }, k.isXML = function ( a ) {
                var b = ( a ? a.ownerDocument || a : 0 ).documentElement;
                return b ? b.nodeName !== "HTML" : !1
              };
            var v = function ( a, b ) {
              var c, d = [],
                e = "",
                f = b.nodeType ? [ b ] : b;
              while ( c = l.match.PSEUDO.exec( a ) ) e += c[ 0 ], a = a.replace( l.match.PSEUDO, "" );
              a = l.relative[ a ] ? a + "*" : a;
              for ( var g = 0, h = f.length; g < h; g++ ) k( a, f[ g ], d );
              return k.filter( e, d )
            };
            f.find = k, f.expr = k.selectors, f.expr[ ":" ] = f.expr.filters, f.unique = k.uniqueSort, f.text = k
              .getText, f.isXMLDoc = k.isXML, f.contains = k.contains
          }();
        var O = /Until$/,
          P = /^(?:parents|prevUntil|prevAll)/,
          Q = /,/,
          R = /^.[^:#\[\.,]*$/,
          S = Array.prototype.slice,
          T = f.expr.match.POS,
          U = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
          };
        f.fn.extend( {
          find: function ( a ) {
            var b = this,
              c, d;
            if ( typeof a != "string" ) return f( a ).filter( function () {
              for ( c = 0, d = b.length; c < d; c++ )
                if ( f.contains( b[ c ], this ) ) return !0
            } );
            var e = this.pushStack( "", "find", a ),
              g, h, i;
            for ( c = 0, d = this.length; c < d; c++ ) {
              g = e.length, f.find( a, this[ c ], e );
              if ( c > 0 )
                for ( h = g; h < e.length; h++ )
                  for ( i = 0; i < g; i++ )
                    if ( e[ i ] === e[ h ] ) {
                      e.splice( h--, 1 );
                      break
                    }
            }
            return e
          },
          has: function ( a ) {
            var b = f( a );
            return this.filter( function () {
              for ( var a = 0, c = b.length; a < c; a++ )
                if ( f.contains( this, b[ a ] ) ) return !0
            } )
          },
          not: function ( a ) {
            return this.pushStack( W( this, a, !1 ), "not", a )
          },
          filter: function ( a ) {
            return this.pushStack( W( this, a, !0 ), "filter", a )
          },
          is: function ( a ) {
            return !!a && ( typeof a == "string" ? f.filter( a, this ).length > 0 : this.filter( a ).length > 0 )
          },
          closest: function ( a, b ) {
            var c = [],
              d, e, g = this[ 0 ];
            if ( f.isArray( a ) ) {
              var h, i, j = {},
                k = 1;
              if ( g && a.length ) {
                for ( d = 0, e = a.length; d < e; d++ ) i = a[ d ], j[ i ] || ( j[ i ] = T.test( i ) ? f( i, b ||
                  this.context ) : i );
                while ( g && g.ownerDocument && g !== b ) {
                  for ( i in j ) h = j[ i ], ( h.jquery ? h.index( g ) > -1 : f( g ).is( h ) ) && c.push( {
                    selector: i,
                    elem: g,
                    level: k
                  } );
                  g = g.parentNode, k++
                }
              }
              return c
            }
            var l = T.test( a ) || typeof a != "string" ? f( a, b || this.context ) : 0;
            for ( d = 0, e = this.length; d < e; d++ ) {
              g = this[ d ];
              while ( g ) {
                if ( l ? l.index( g ) > -1 : f.find.matchesSelector( g, a ) ) {
                  c.push( g );
                  break
                }
                g = g.parentNode;
                if ( !g || !g.ownerDocument || g === b || g.nodeType === 11 ) break
              }
            }
            c = c.length > 1 ? f.unique( c ) : c;
            return this.pushStack( c, "closest", a )
          },
          index: function ( a ) {
            if ( !a || typeof a == "string" ) return f.inArray( this[ 0 ], a ? f( a ) : this.parent()
          .children() );
            return f.inArray( a.jquery ? a[ 0 ] : a, this )
          },
          add: function ( a, b ) {
            var c = typeof a == "string" ? f( a, b ) : f.makeArray( a && a.nodeType ? [ a ] : a ),
              d = f.merge( this.get(), c );
            return this.pushStack( V( c[ 0 ] ) || V( d[ 0 ] ) ? d : f.unique( d ) )
          },
          andSelf: function () {
            return this.add( this.prevObject )
          }
        } ), f.each( {
          parent: function ( a ) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
          },
          parents: function ( a ) {
            return f.dir( a, "parentNode" )
          },
          parentsUntil: function ( a, b, c ) {
            return f.dir( a, "parentNode", c )
          },
          next: function ( a ) {
            return f.nth( a, 2, "nextSibling" )
          },
          prev: function ( a ) {
            return f.nth( a, 2, "previousSibling" )
          },
          nextAll: function ( a ) {
            return f.dir( a, "nextSibling" )
          },
          prevAll: function ( a ) {
            return f.dir( a, "previousSibling" )
          },
          nextUntil: function ( a, b, c ) {
            return f.dir( a, "nextSibling", c )
          },
          prevUntil: function ( a, b, c ) {
            return f.dir( a, "previousSibling", c )
          },
          siblings: function ( a ) {
            return f.sibling( a.parentNode.firstChild, a )
          },
          children: function ( a ) {
            return f.sibling( a.firstChild )
          },
          contents: function ( a ) {
            return f.nodeName( a, "iframe" ) ? a.contentDocument || a.contentWindow.document : f.makeArray( a
              .childNodes )
          }
        }, function ( a, b ) {
          f.fn[ a ] = function ( c, d ) {
            var e = f.map( this, b, c ),
              g = S.call( arguments );
            O.test( a ) || ( d = c ), d && typeof d == "string" && ( e = f.filter( d, e ) ), e = this.length >
              1 && !U[ a ] ? f.unique( e ) : e, ( this.length > 1 || Q.test( d ) ) && P.test( a ) && ( e = e
                .reverse() );
            return this.pushStack( e, a, g.join( "," ) )
          }
        } ), f.extend( {
          filter: function ( a, b, c ) {
            c && ( a = ":not(" + a + ")" );
            return b.length === 1 ? f.find.matchesSelector( b[ 0 ], a ) ? [ b[ 0 ] ] : [] : f.find.matches( a, b )
          },
          dir: function ( a, c, d ) {
            var e = [],
              g = a[ c ];
            while ( g && g.nodeType !== 9 && ( d === b || g.nodeType !== 1 || !f( g ).is( d ) ) ) g.nodeType ===
              1 && e.push( g ), g = g[ c ];
            return e
          },
          nth: function ( a, b, c, d ) {
            b = b || 1;
            var e = 0;
            for ( ; a; a = a[ c ] )
              if ( a.nodeType === 1 && ++e === b ) break;
            return a
          },
          sibling: function ( a, b ) {
            var c = [];
            for ( ; a; a = a.nextSibling ) a.nodeType === 1 && a !== b && c.push( a );
            return c
          }
        } );
        var X = / jQuery\d+="(?:\d+|null)"/g,
          Y = /^\s+/,
          Z = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
          $ = /<([\w:]+)/,
          _ = /<tbody/i,
          ba = /<|&#?\w+;/,
          bb = /<(?:script|object|embed|option|style)/i,
          bc = /checked\s*(?:[^=]|=\s*.checked.)/i,
          bd = /\/(java|ecma)script/i,
          be = /^\s*<!(?:\[CDATA\[|\-\-)/,
          bf = {
            option: [ 1, "<select multiple='multiple'>", "</select>" ],
            legend: [ 1, "<fieldset>", "</fieldset>" ],
            thead: [ 1, "<table>", "</table>" ],
            tr: [ 2, "<table><tbody>", "</tbody></table>" ],
            td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
            col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
            area: [ 1, "<map>", "</map>" ],
            _default: [ 0, "", "" ]
          };
        bf.optgroup = bf.option, bf.tbody = bf.tfoot = bf.colgroup = bf.caption = bf.thead, bf.th = bf.td, f.support
          .htmlSerialize || ( bf._default = [ 1, "div<div>", "</div>" ] ), f.fn.extend( {
            text: function ( a ) {
              if ( f.isFunction( a ) ) return this.each( function ( b ) {
                var c = f( this );
                c.text( a.call( this, b, c.text() ) )
              } );
              if ( typeof a != "object" && a !== b ) return this.empty().append( ( this[ 0 ] && this[ 0 ]
                .ownerDocument || c ).createTextNode( a ) );
              return f.text( this )
            },
            wrapAll: function ( a ) {
              if ( f.isFunction( a ) ) return this.each( function ( b ) {
                f( this ).wrapAll( a.call( this, b ) )
              } );
              if ( this[ 0 ] ) {
                var b = f( a, this[ 0 ].ownerDocument ).eq( 0 ).clone( !0 );
                this[ 0 ].parentNode && b.insertBefore( this[ 0 ] ), b.map( function () {
                  var a = this;
                  while ( a.firstChild && a.firstChild.nodeType === 1 ) a = a.firstChild;
                  return a
                } ).append( this )
              }
              return this
            },
            wrapInner: function ( a ) {
              if ( f.isFunction( a ) ) return this.each( function ( b ) {
                f( this ).wrapInner( a.call( this, b ) )
              } );
              return this.each( function () {
                var b = f( this ),
                  c = b.contents();
                c.length ? c.wrapAll( a ) : b.append( a )
              } )
            },
            wrap: function ( a ) {
              return this.each( function () {
                f( this ).wrapAll( a )
              } )
            },
            unwrap: function () {
              return this.parent().each( function () {
                f.nodeName( this, "body" ) || f( this ).replaceWith( this.childNodes )
              } ).end()
            },
            append: function () {
              return this.domManip( arguments, !0, function ( a ) {
                this.nodeType === 1 && this.appendChild( a )
              } )
            },
            prepend: function () {
              return this.domManip( arguments, !0, function ( a ) {
                this.nodeType === 1 && this.insertBefore( a, this.firstChild )
              } )
            },
            before: function () {
              if ( this[ 0 ] && this[ 0 ].parentNode ) return this.domManip( arguments, !1, function ( a ) {
                this.parentNode.insertBefore( a, this )
              } );
              if ( arguments.length ) {
                var a = f( arguments[ 0 ] );
                a.push.apply( a, this.toArray() );
                return this.pushStack( a, "before", arguments )
              }
            },
            after: function () {
              if ( this[ 0 ] && this[ 0 ].parentNode ) return this.domManip( arguments, !1, function ( a ) {
                this.parentNode.insertBefore( a, this.nextSibling )
              } );
              if ( arguments.length ) {
                var a = this.pushStack( this, "after", arguments );
                a.push.apply( a, f( arguments[ 0 ] ).toArray() );
                return a
              }
            },
            remove: function ( a, b ) {
              for ( var c = 0, d;
                ( d = this[ c ] ) != null; c++ )
                if ( !a || f.filter( a, [ d ] ).length ) !b && d.nodeType === 1 && ( f.cleanData( d
                    .getElementsByTagName( "*" ) ), f.cleanData( [ d ] ) ), d.parentNode && d.parentNode
                  .removeChild( d );
              return this
            },
            empty: function () {
              for ( var a = 0, b;
                ( b = this[ a ] ) != null; a++ ) {
                b.nodeType === 1 && f.cleanData( b.getElementsByTagName( "*" ) );
                while ( b.firstChild ) b.removeChild( b.firstChild )
              }
              return this
            },
            clone: function ( a, b ) {
              a = a == null ? !1 : a, b = b == null ? a : b;
              return this.map( function () {
                return f.clone( this, a, b )
              } )
            },
            html: function ( a ) {
              if ( a === b ) return this[ 0 ] && this[ 0 ].nodeType === 1 ? this[ 0 ].innerHTML.replace( X, "" ) :
                null;
              if ( typeof a == "string" && !bb.test( a ) && ( f.support.leadingWhitespace || !Y.test( a ) ) && !bf[
                  ( $.exec( a ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
                a = a.replace( Z, "<$1></$2>" );
                try {
                  for ( var c = 0, d = this.length; c < d; c++ ) this[ c ].nodeType === 1 && ( f.cleanData( this[
                    c ].getElementsByTagName( "*" ) ), this[ c ].innerHTML = a )
                } catch ( e ) {
                  this.empty().append( a )
                }
              } else f.isFunction( a ) ? this.each( function ( b ) {
                var c = f( this );
                c.html( a.call( this, b, c.html() ) )
              } ) : this.empty().append( a );
              return this
            },
            replaceWith: function ( a ) {
              if ( this[ 0 ] && this[ 0 ].parentNode ) {
                if ( f.isFunction( a ) ) return this.each( function ( b ) {
                  var c = f( this ),
                    d = c.html();
                  c.replaceWith( a.call( this, b, d ) )
                } );
                typeof a != "string" && ( a = f( a ).detach() );
                return this.each( function () {
                  var b = this.nextSibling,
                    c = this.parentNode;
                  f( this ).remove(), b ? f( b ).before( a ) : f( c ).append( a )
                } )
              }
              return this.length ? this.pushStack( f( f.isFunction( a ) ? a() : a ), "replaceWith", a ) : this
            },
            detach: function ( a ) {
              return this.remove( a, !0 )
            },
            domManip: function ( a, c, d ) {
              var e, g, h, i, j = a[ 0 ],
                k = [];
              if ( !f.support.checkClone && arguments.length === 3 && typeof j == "string" && bc.test( j ) )
              return this.each( function () {
                  f( this ).domManip( a, c, d, !0 )
                } );
              if ( f.isFunction( j ) ) return this.each( function ( e ) {
                var g = f( this );
                a[ 0 ] = j.call( this, e, c ? g.html() : b ), g.domManip( a, c, d )
              } );
              if ( this[ 0 ] ) {
                i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length ===
                  this.length ? e = {
                    fragment: i
                  } : e = f.buildFragment( a, this, k ), h = e.fragment, h.childNodes.length === 1 ? g = h = h
                  .firstChild : g = h.firstChild;
                if ( g ) {
                  c = c && f.nodeName( g, "tr" );
                  for ( var l = 0, m = this.length, n = m - 1; l < m; l++ ) d.call( c ? bg( this[ l ], g ) : this[
                    l ], e.cacheable || m > 1 && l < n ? f.clone( h, !0, !0 ) : h )
                }
                k.length && f.each( k, bm )
              }
              return this
            }
          } ), f.buildFragment = function ( a, b, d ) {
            var e, g, h, i;
            b && b[ 0 ] && ( i = b[ 0 ].ownerDocument || b[ 0 ] ), i.createDocumentFragment || ( i = c ), a.length ===
              1 && typeof a[ 0 ] == "string" && a[ 0 ].length < 512 && i === c && a[ 0 ].charAt( 0 ) === "<" && !bb
              .test( a[ 0 ] ) && ( f.support.checkClone || !bc.test( a[ 0 ] ) ) && ( g = !0, h = f.fragments[ a[ 0 ] ],
                h && h !== 1 && ( e = h ) ), e || ( e = i.createDocumentFragment(), f.clean( a, i, e, d ) ), g && ( f
                .fragments[ a[ 0 ] ] = h ? e : 1 );
            return {
              fragment: e,
              cacheable: g
            }
          }, f.fragments = {}, f.each( {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
          }, function ( a, b ) {
            f.fn[ a ] = function ( c ) {
              var d = [],
                e = f( c ),
                g = this.length === 1 && this[ 0 ].parentNode;
              if ( g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1 ) {
                e[ b ]( this[ 0 ] );
                return this
              }
              for ( var h = 0, i = e.length; h < i; h++ ) {
                var j = ( h > 0 ? this.clone( !0 ) : this ).get();
                f( e[ h ] )[ b ]( j ), d = d.concat( j )
              }
              return this.pushStack( d, a, e.selector )
            }
          } ), f.extend( {
            clone: function ( a, b, c ) {
              var d = a.cloneNode( !0 ),
                e, g, h;
              if ( ( !f.support.noCloneEvent || !f.support.noCloneChecked ) && ( a.nodeType === 1 || a.nodeType ===
                  11 ) && !f.isXMLDoc( a ) ) {
                bi( a, d ), e = bj( a ), g = bj( d );
                for ( h = 0; e[ h ]; ++h ) bi( e[ h ], g[ h ] )
              }
              if ( b ) {
                bh( a, d );
                if ( c ) {
                  e = bj( a ), g = bj( d );
                  for ( h = 0; e[ h ]; ++h ) bh( e[ h ], g[ h ] )
                }
              }
              e = g = null;
              return d
            },
            clean: function ( a, b, d, e ) {
              var g;
              b = b || c, typeof b.createElement == "undefined" && ( b = b.ownerDocument || b[ 0 ] && b[ 0 ]
                .ownerDocument || c );
              var h = [],
                i;
              for ( var j = 0, k;
                ( k = a[ j ] ) != null; j++ ) {
                typeof k == "number" && ( k += "" );
                if ( !k ) continue;
                if ( typeof k == "string" )
                  if ( !ba.test( k ) ) k = b.createTextNode( k );
                  else {
                    k = k.replace( Z, "<$1></$2>" );
                    var l = ( $.exec( k ) || [ "", "" ] )[ 1 ].toLowerCase(),
                      m = bf[ l ] || bf._default,
                      n = m[ 0 ],
                      o = b.createElement( "div" );
                    o.innerHTML = m[ 1 ] + k + m[ 2 ];
                    while ( n-- ) o = o.lastChild;
                    if ( !f.support.tbody ) {
                      var p = _.test( k ),
                        q = l === "table" && !p ? o.firstChild && o.firstChild.childNodes : m[ 1 ] === "<table>" &&
                        !p ? o.childNodes : [];
                      for ( i = q.length - 1; i >= 0; --i ) f.nodeName( q[ i ], "tbody" ) && !q[ i ].childNodes
                        .length && q[ i ].parentNode.removeChild( q[ i ] )
                    }!f.support.leadingWhitespace && Y.test( k ) && o.insertBefore( b.createTextNode( Y.exec( k )[
                      0 ] ), o.firstChild ), k = o.childNodes
                  } var r;
                if ( !f.support.appendChecked )
                  if ( k[ 0 ] && typeof ( r = k.length ) == "number" )
                    for ( i = 0; i < r; i++ ) bl( k[ i ] );
                  else bl( k );
                k.nodeType ? h.push( k ) : h = f.merge( h, k )
              }
              if ( d ) {
                g = function ( a ) {
                  return !a.type || bd.test( a.type )
                };
                for ( j = 0; h[ j ]; j++ )
                  if ( e && f.nodeName( h[ j ], "script" ) && ( !h[ j ].type || h[ j ].type.toLowerCase() ===
                      "text/javascript" ) ) e.push( h[ j ].parentNode ? h[ j ].parentNode.removeChild( h[ j ] ) : h[
                    j ] );
                  else {
                    if ( h[ j ].nodeType === 1 ) {
                      var s = f.grep( h[ j ].getElementsByTagName( "script" ), g );
                      h.splice.apply( h, [ j + 1, 0 ].concat( s ) )
                    }
                    d.appendChild( h[ j ] )
                  }
              }
              return h
            },
            cleanData: function ( a ) {
              var b, c, d = f.cache,
                e = f.expando,
                g = f.event.special,
                h = f.support.deleteExpando;
              for ( var i = 0, j;
                ( j = a[ i ] ) != null; i++ ) {
                if ( j.nodeName && f.noData[ j.nodeName.toLowerCase() ] ) continue;
                c = j[ f.expando ];
                if ( c ) {
                  b = d[ c ] && d[ c ][ e ];
                  if ( b && b.events ) {
                    for ( var k in b.events ) g[ k ] ? f.event.remove( j, k ) : f.removeEvent( j, k, b.handle );
                    b.handle && ( b.handle.elem = null )
                  }
                  h ? delete j[ f.expando ] : j.removeAttribute && j.removeAttribute( f.expando ), delete d[ c ]
                }
              }
            }
          } );
        var bn = /alpha\([^)]*\)/i,
          bo = /opacity=([^)]*)/,
          bp = /([A-Z]|^ms)/g,
          bq = /^-?\d+(?:px)?$/i,
          br = /^-?\d/,
          bs = /^[+\-]=/,
          bt = /[^+\-\.\de]+/g,
          bu = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
          },
          bv = [ "Left", "Right" ],
          bw = [ "Top", "Bottom" ],
          bx, by, bz;
        f.fn.css = function ( a, c ) {
          if ( arguments.length === 2 && c === b ) return this;
          return f.access( this, a, c, !0, function ( a, c, d ) {
            return d !== b ? f.style( a, c, d ) : f.css( a, c )
          } )
        }, f.extend( {
          cssHooks: {
            opacity: {
              get: function ( a, b ) {
                if ( b ) {
                  var c = bx( a, "opacity", "opacity" );
                  return c === "" ? "1" : c
                }
                return a.style.opacity
              }
            }
          },
          cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
          },
          cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
          },
          style: function ( a, c, d, e ) {
            if ( !!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style ) {
              var g, h, i = f.camelCase( c ),
                j = a.style,
                k = f.cssHooks[ i ];
              c = f.cssProps[ i ] || i;
              if ( d === b ) {
                if ( k && "get" in k && ( g = k.get( a, !1, e ) ) !== b ) return g;
                return j[ c ]
              }
              h = typeof d;
              if ( h === "number" && isNaN( d ) || d == null ) return;
              h === "string" && bs.test( d ) && ( d = +d.replace( bt, "" ) + parseFloat( f.css( a, c ) ), h =
                "number" ), h === "number" && !f.cssNumber[ i ] && ( d += "px" );
              if ( !k || !( "set" in k ) || ( d = k.set( a, d ) ) !== b ) try {
                j[ c ] = d
              } catch ( l ) {}
            }
          },
          css: function ( a, c, d ) {
            var e, g;
            c = f.camelCase( c ), g = f.cssHooks[ c ], c = f.cssProps[ c ] || c, c === "cssFloat" && ( c =
              "float" );
            if ( g && "get" in g && ( e = g.get( a, !0, d ) ) !== b ) return e;
            if ( bx ) return bx( a, c )
          },
          swap: function ( a, b, c ) {
            var d = {};
            for ( var e in b ) d[ e ] = a.style[ e ], a.style[ e ] = b[ e ];
            c.call( a );
            for ( e in b ) a.style[ e ] = d[ e ]
          }
        } ), f.curCSS = f.css, f.each( [ "height", "width" ], function ( a, b ) {
          f.cssHooks[ b ] = {
            get: function ( a, c, d ) {
              var e;
              if ( c ) {
                if ( a.offsetWidth !== 0 ) return bA( a, b, d );
                f.swap( a, bu, function () {
                  e = bA( a, b, d )
                } );
                return e
              }
            },
            set: function ( a, b ) {
              if ( !bq.test( b ) ) return b;
              b = parseFloat( b );
              if ( b >= 0 ) return b + "px"
            }
          }
        } ), f.support.opacity || ( f.cssHooks.opacity = {
          get: function ( a, b ) {
            return bo.test( ( b && a.currentStyle ? a.currentStyle.filter : a.style.filter ) || "" ) ? parseFloat(
              RegExp.$1 ) / 100 + "" : b ? "1" : ""
          },
          set: function ( a, b ) {
            var c = a.style,
              d = a.currentStyle;
            c.zoom = 1;
            var e = f.isNaN( b ) ? "" : "alpha(opacity=" + b * 100 + ")",
              g = d && d.filter || c.filter || "";
            c.filter = bn.test( g ) ? g.replace( bn, e ) : g + " " + e
          }
        } ), f( function () {
          f.support.reliableMarginRight || ( f.cssHooks.marginRight = {
            get: function ( a, b ) {
              var c;
              f.swap( a, {
                display: "inline-block"
              }, function () {
                b ? c = bx( a, "margin-right", "marginRight" ) : c = a.style.marginRight
              } );
              return c
            }
          } )
        } ), c.defaultView && c.defaultView.getComputedStyle && ( by = function ( a, c ) {
          var d, e, g;
          c = c.replace( bp, "-$1" ).toLowerCase();
          if ( !( e = a.ownerDocument.defaultView ) ) return b;
          if ( g = e.getComputedStyle( a, null ) ) d = g.getPropertyValue( c ), d === "" && !f.contains( a
            .ownerDocument.documentElement, a ) && ( d = f.style( a, c ) );
          return d
        } ), c.documentElement.currentStyle && ( bz = function ( a, b ) {
          var c, d = a.currentStyle && a.currentStyle[ b ],
            e = a.runtimeStyle && a.runtimeStyle[ b ],
            f = a.style;
          !bq.test( d ) && br.test( d ) && ( c = f.left, e && ( a.runtimeStyle.left = a.currentStyle.left ), f
            .left = b === "fontSize" ? "1em" : d || 0, d = f.pixelLeft + "px", f.left = c, e && ( a.runtimeStyle
              .left = e ) );
          return d === "" ? "auto" : d
        } ), bx = by || bz, f.expr && f.expr.filters && ( f.expr.filters.hidden = function ( a ) {
          var b = a.offsetWidth,
            c = a.offsetHeight;
          return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && ( a.style.display || f.css( a,
            "display" ) ) === "none"
        }, f.expr.filters.visible = function ( a ) {
          return !f.expr.filters.hidden( a )
        } );
        var bB = /%20/g,
          bC = /\[\]$/,
          bD = /\r?\n/g,
          bE = /#.*$/,
          bF = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
          bG = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
          bH = /^(?:about|app|app\-storage|.+\-extension|file|widget):$/,
          bI = /^(?:GET|HEAD)$/,
          bJ = /^\/\//,
          bK = /\?/,
          bL = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
          bM = /^(?:select|textarea)/i,
          bN = /\s+/,
          bO = /([?&])_=[^&]*/,
          bP = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
          bQ = f.fn.load,
          bR = {},
          bS = {},
          bT, bU;
        try {
          bT = e.href
        } catch ( bV ) {
          bT = c.createElement( "a" ), bT.href = "", bT = bT.href
        }
        bU = bP.exec( bT.toLowerCase() ) || [], f.fn.extend( {
          load: function ( a, c, d ) {
            if ( typeof a != "string" && bQ ) return bQ.apply( this, arguments );
            if ( !this.length ) return this;
            var e = a.indexOf( " " );
            if ( e >= 0 ) {
              var g = a.slice( e, a.length );
              a = a.slice( 0, e )
            }
            var h = "GET";
            c && ( f.isFunction( c ) ? ( d = c, c = b ) : typeof c == "object" && ( c = f.param( c, f.ajaxSettings
              .traditional ), h = "POST" ) );
            var i = this;
            f.ajax( {
              url: a,
              type: h,
              dataType: "html",
              data: c,
              complete: function ( a, b, c ) {
                c = a.responseText, a.isResolved() && ( a.done( function ( a ) {
                    c = a
                  } ), i.html( g ? f( "<div>" ).append( c.replace( bL, "" ) ).find( g ) : c ) ), d && i
                  .each( d, [ c, b, a ] )
              }
            } );
            return this
          },
          serialize: function () {
            return f.param( this.serializeArray() )
          },
          serializeArray: function () {
            return this.map( function () {
              return this.elements ? f.makeArray( this.elements ) : this
            } ).filter( function () {
              return this.name && !this.disabled && ( this.checked || bM.test( this.nodeName ) || bG.test(
                this.type ) )
            } ).map( function ( a, b ) {
              var c = f( this ).val();
              return c == null ? null : f.isArray( c ) ? f.map( c, function ( a, c ) {
                return {
                  name: b.name,
                  value: a.replace( bD, "\r\n" )
                }
              } ) : {
                name: b.name,
                value: c.replace( bD, "\r\n" )
              }
            } ).get()
          }
        } ), f.each( "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split( " " ), function ( a,
        b ) {
          f.fn[ b ] = function ( a ) {
            return this.bind( b, a )
          }
        } ), f.each( [ "get", "post" ], function ( a, c ) {
          f[ c ] = function ( a, d, e, g ) {
            f.isFunction( d ) && ( g = g || e, e = d, d = b );
            return f.ajax( {
              type: c,
              url: a,
              data: d,
              success: e,
              dataType: g
            } )
          }
        } ), f.extend( {
          getScript: function ( a, c ) {
            return f.get( a, b, c, "script" )
          },
          getJSON: function ( a, b, c ) {
            return f.get( a, b, c, "json" )
          },
          ajaxSetup: function ( a, b ) {
            b ? f.extend( !0, a, f.ajaxSettings, b ) : ( b = a, a = f.extend( !0, f.ajaxSettings, b ) );
            for ( var c in {
                context: 1,
                url: 1
              } ) c in b ? a[ c ] = b[ c ] : c in f.ajaxSettings && ( a[ c ] = f.ajaxSettings[ c ] );
            return a
          },
          ajaxSettings: {
            url: bT,
            isLocal: bH.test( bU[ 1 ] ),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
              xml: "application/xml, text/xml",
              html: "text/html",
              text: "text/plain",
              json: "application/json, text/javascript",
              "*": "*/*"
            },
            contents: {
              xml: /xml/,
              html: /html/,
              json: /json/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText"
            },
            converters: {
              "* text": a.String,
              "text html": !0,
              "text json": f.parseJSON,
              "text xml": f.parseXML
            }
          },
          ajaxPrefilter: bW( bR ),
          ajaxTransport: bW( bS ),
          ajax: function ( a, c ) {
            function w( a, c, l, m ) {
              if ( s !== 2 ) {
                s = 2, q && clearTimeout( q ), p = b, n = m || "", v.readyState = a ? 4 : 0;
                var o, r, u, w = l ? bZ( d, v, l ) : b,
                  x, y;
                if ( a >= 200 && a < 300 || a === 304 ) {
                  if ( d.ifModified ) {
                    if ( x = v.getResponseHeader( "Last-Modified" ) ) f.lastModified[ k ] = x;
                    if ( y = v.getResponseHeader( "Etag" ) ) f.etag[ k ] = y
                  }
                  if ( a === 304 ) c = "notmodified", o = !0;
                  else try {
                    r = b$( d, w ), c = "success", o = !0
                  } catch ( z ) {
                    c = "parsererror", u = z
                  }
                } else {
                  u = c;
                  if ( !c || a ) c = "error", a < 0 && ( a = 0 )
                }
                v.status = a, v.statusText = c, o ? h.resolveWith( e, [ r, c, v ] ) : h.rejectWith( e, [ v, c,
                  u ] ), v.statusCode( j ), j = b, t && g.trigger( "ajax" + ( o ? "Success" : "Error" ), [ v, d,
                  o ? r : u
                ] ), i.resolveWith( e, [ v, c ] ), t && ( g.trigger( "ajaxComplete", [ v, d ] ), --f.active || f
                  .event.trigger( "ajaxStop" ) )
              }
            }
            typeof a == "object" && ( c = a, a = b ), c = c || {};
            var d = f.ajaxSetup( {}, c ),
              e = d.context || d,
              g = e !== d && ( e.nodeType || e instanceof f ) ? f( e ) : f.event,
              h = f.Deferred(),
              i = f._Deferred(),
              j = d.statusCode || {},
              k, l = {},
              m = {},
              n, o, p, q, r, s = 0,
              t, u, v = {
                readyState: 0,
                setRequestHeader: function ( a, b ) {
                  if ( !s ) {
                    var c = a.toLowerCase();
                    a = m[ c ] = m[ c ] || a, l[ a ] = b
                  }
                  return this
                },
                getAllResponseHeaders: function () {
                  return s === 2 ? n : null
                },
                getResponseHeader: function ( a ) {
                  var c;
                  if ( s === 2 ) {
                    if ( !o ) {
                      o = {};
                      while ( c = bF.exec( n ) ) o[ c[ 1 ].toLowerCase() ] = c[ 2 ]
                    }
                    c = o[ a.toLowerCase() ]
                  }
                  return c === b ? null : c
                },
                overrideMimeType: function ( a ) {
                  s || ( d.mimeType = a );
                  return this
                },
                abort: function ( a ) {
                  a = a || "abort", p && p.abort( a ), w( 0, a );
                  return this
                }
              };
            h.promise( v ), v.success = v.done, v.error = v.fail, v.complete = i.done, v.statusCode = function (
                a ) {
                if ( a ) {
                  var b;
                  if ( s < 2 )
                    for ( b in a ) j[ b ] = [ j[ b ], a[ b ] ];
                  else b = a[ v.status ], v.then( b, b )
                }
                return this
              }, d.url = ( ( a || d.url ) + "" ).replace( bE, "" ).replace( bJ, bU[ 1 ] + "//" ), d.dataTypes = f
              .trim( d.dataType || "*" ).toLowerCase().split( bN ), d.crossDomain == null && ( r = bP.exec( d.url
                .toLowerCase() ), d.crossDomain = !( !r || r[ 1 ] == bU[ 1 ] && r[ 2 ] == bU[ 2 ] && ( r[ 3 ] ||
                ( r[ 1 ] === "http:" ? 80 : 443 ) ) == ( bU[ 3 ] || ( bU[ 1 ] === "http:" ? 80 : 443 ) ) ) ), d
              .data && d.processData && typeof d.data != "string" && ( d.data = f.param( d.data, d
              .traditional ) ), bX( bR, d, c, v );
            if ( s === 2 ) return !1;
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bI.test( d.type ), t && f.active++ ===
              0 && f.event.trigger( "ajaxStart" );
            if ( !d.hasContent ) {
              d.data && ( d.url += ( bK.test( d.url ) ? "&" : "?" ) + d.data ), k = d.url;
              if ( d.cache === !1 ) {
                var x = f.now(),
                  y = d.url.replace( bO, "$1_=" + x );
                d.url = y + ( y === d.url ? ( bK.test( d.url ) ? "&" : "?" ) + "_=" + x : "" )
              }
            }( d.data && d.hasContent && d.contentType !== !1 || c.contentType ) && v.setRequestHeader(
              "Content-Type", d.contentType ), d.ifModified && ( k = k || d.url, f.lastModified[ k ] && v
              .setRequestHeader( "If-Modified-Since", f.lastModified[ k ] ), f.etag[ k ] && v.setRequestHeader(
                "If-None-Match", f.etag[ k ] ) ), v.setRequestHeader( "Accept", d.dataTypes[ 0 ] && d.accepts[ d
              .dataTypes[ 0 ] ] ? d.accepts[ d.dataTypes[ 0 ] ] + ( d.dataTypes[ 0 ] !== "*" ?
              ", */*; q=0.01" : "" ) : d.accepts[ "*" ] );
            for ( u in d.headers ) v.setRequestHeader( u, d.headers[ u ] );
            if ( d.beforeSend && ( d.beforeSend.call( e, v, d ) === !1 || s === 2 ) ) {
              v.abort();
              return !1
            }
            for ( u in {
                success: 1,
                error: 1,
                complete: 1
              } ) v[ u ]( d[ u ] );
            p = bX( bS, d, c, v );
            if ( !p ) w( -1, "No Transport" );
            else {
              v.readyState = 1, t && g.trigger( "ajaxSend", [ v, d ] ), d.async && d.timeout > 0 && ( q =
                setTimeout( function () {
                  v.abort( "timeout" )
                }, d.timeout ) );
              try {
                s = 1, p.send( l, w )
              } catch ( z ) {
                status < 2 ? w( -1, z ) : f.error( z )
              }
            }
            return v
          },
          param: function ( a, c ) {
            var d = [],
              e = function ( a, b ) {
                b = f.isFunction( b ) ? b() : b, d[ d.length ] = encodeURIComponent( a ) + "=" +
                  encodeURIComponent( b )
              };
            c === b && ( c = f.ajaxSettings.traditional );
            if ( f.isArray( a ) || a.jquery && !f.isPlainObject( a ) ) f.each( a, function () {
              e( this.name, this.value )
            } );
            else
              for ( var g in a ) bY( g, a[ g ], c, e );
            return d.join( "&" ).replace( bB, "+" )
          }
        } ), f.extend( {
          active: 0,
          lastModified: {},
          etag: {}
        } );
        var b_ = f.now(),
          ca = /(\=)\?(&|$)|\?\?/i;
        f.ajaxSetup( {
          jsonp: "callback",
          jsonpCallback: function () {
            return f.expando + "_" + b_++
          }
        } ), f.ajaxPrefilter( "json jsonp", function ( b, c, d ) {
          var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
          if ( b.dataTypes[ 0 ] === "jsonp" || b.jsonp !== !1 && ( ca.test( b.url ) || e && ca.test( b.data ) ) ) {
            var g, h = b.jsonpCallback = f.isFunction( b.jsonpCallback ) ? b.jsonpCallback() : b.jsonpCallback,
              i = a[ h ],
              j = b.url,
              k = b.data,
              l = "$1" + h + "$2";
            b.jsonp !== !1 && ( j = j.replace( ca, l ), b.url === j && ( e && ( k = k.replace( ca, l ) ), b.data ===
                k && ( j += ( /\?/.test( j ) ? "&" : "?" ) + b.jsonp + "=" + h ) ) ), b.url = j, b.data = k, a[
              h ] = function ( a ) {
                g = [ a ]
              }, d.always( function () {
                a[ h ] = i, g && f.isFunction( i ) && a[ h ]( g[ 0 ] )
              } ), b.converters[ "script json" ] = function () {
                g || f.error( h + " was not called" );
                return g[ 0 ]
              }, b.dataTypes[ 0 ] = "json";
            return "script"
          }
        } ), f.ajaxSetup( {
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /javascript|ecmascript/
          },
          converters: {
            "text script": function ( a ) {
              f.globalEval( a );
              return a
            }
          }
        } ), f.ajaxPrefilter( "script", function ( a ) {
          a.cache === b && ( a.cache = !1 ), a.crossDomain && ( a.type = "GET", a.global = !1 )
        } ), f.ajaxTransport( "script", function ( a ) {
          if ( a.crossDomain ) {
            var d, e = c.head || c.getElementsByTagName( "head" )[ 0 ] || c.documentElement;
            return {
              send: function ( f, g ) {
                d = c.createElement( "script" ), d.async = "async", a.scriptCharset && ( d.charset = a
                  .scriptCharset ), d.src = a.url, d.onload = d.onreadystatechange = function ( a, c ) {
                  if ( c || !d.readyState || /loaded|complete/.test( d.readyState ) ) d.onload = d
                    .onreadystatechange = null, e && d.parentNode && e.removeChild( d ), d = b, c || g( 200,
                      "success" )
                }, e.insertBefore( d, e.firstChild )
              },
              abort: function () {
                d && d.onload( 0, 1 )
              }
            }
          }
        } );
        var cb = a.ActiveXObject ? function () {
            for ( var a in cd ) cd[ a ]( 0, 1 )
          } : !1,
          cc = 0,
          cd;
        f.ajaxSettings.xhr = a.ActiveXObject ? function () {
            return !this.isLocal && ce() || cf()
          } : ce,
          function ( a ) {
            f.extend( f.support, {
              ajax: !!a,
              cors: !!a && "withCredentials" in a
            } )
          }( f.ajaxSettings.xhr() ), f.support.ajax && f.ajaxTransport( function ( c ) {
            if ( !c.crossDomain || f.support.cors ) {
              var d;
              return {
                send: function ( e, g ) {
                  var h = c.xhr(),
                    i, j;
                  c.username ? h.open( c.type, c.url, c.async, c.username, c.password ) : h.open( c.type, c.url, c
                    .async );
                  if ( c.xhrFields )
                    for ( j in c.xhrFields ) h[ j ] = c.xhrFields[ j ];
                  c.mimeType && h.overrideMimeType && h.overrideMimeType( c.mimeType ), !c.crossDomain && !e[
                    "X-Requested-With" ] && ( e[ "X-Requested-With" ] = "XMLHttpRequest" );
                  try {
                    for ( j in e ) h.setRequestHeader( j, e[ j ] )
                  } catch ( k ) {}
                  h.send( c.hasContent && c.data || null ), d = function ( a, e ) {
                    var j, k, l, m, n;
                    try {
                      if ( d && ( e || h.readyState === 4 ) ) {
                        d = b, i && ( h.onreadystatechange = f.noop, cb && delete cd[ i ] );
                        if ( e ) h.readyState !== 4 && h.abort();
                        else {
                          j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n
                            .documentElement && ( m.xml = n ), m.text = h.responseText;
                          try {
                            k = h.statusText
                          } catch ( o ) {
                            k = ""
                          }!j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && ( j = 204 )
                        }
                      }
                    } catch ( p ) {
                      e || g( -1, p )
                    }
                    m && g( j, k, m, l )
                  }, !c.async || h.readyState === 4 ? d() : ( i = ++cc, cb && ( cd || ( cd = {}, f( a ).unload(
                    cb ) ), cd[ i ] = d ), h.onreadystatechange = d )
                },
                abort: function () {
                  d && d( 0, 1 )
                }
              }
            }
          } );
        var cg = {},
          ch, ci, cj = /^(?:toggle|show|hide)$/,
          ck = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
          cl, cm = [
            [ "height", "marginTop", "marginBottom", "paddingTop", "paddingBottom" ],
            [ "width", "marginLeft", "marginRight", "paddingLeft", "paddingRight" ],
            [ "opacity" ]
          ],
          cn, co = a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame;
        f.fn.extend( {
          show: function ( a, b, c ) {
            var d, e;
            if ( a || a === 0 ) return this.animate( cr( "show", 3 ), a, b, c );
            for ( var g = 0, h = this.length; g < h; g++ ) d = this[ g ], d.style && ( e = d.style.display, !f
              ._data( d, "olddisplay" ) && e === "none" && ( e = d.style.display = "" ), e === "" && f.css( d,
                "display" ) === "none" && f._data( d, "olddisplay", cs( d.nodeName ) ) );
            for ( g = 0; g < h; g++ ) {
              d = this[ g ];
              if ( d.style ) {
                e = d.style.display;
                if ( e === "" || e === "none" ) d.style.display = f._data( d, "olddisplay" ) || ""
              }
            }
            return this
          },
          hide: function ( a, b, c ) {
            if ( a || a === 0 ) return this.animate( cr( "hide", 3 ), a, b, c );
            for ( var d = 0, e = this.length; d < e; d++ )
              if ( this[ d ].style ) {
                var g = f.css( this[ d ], "display" );
                g !== "none" && !f._data( this[ d ], "olddisplay" ) && f._data( this[ d ], "olddisplay", g )
              } for ( d = 0; d < e; d++ ) this[ d ].style && ( this[ d ].style.display = "none" );
            return this
          },
          _toggle: f.fn.toggle,
          toggle: function ( a, b, c ) {
            var d = typeof a == "boolean";
            f.isFunction( a ) && f.isFunction( b ) ? this._toggle.apply( this, arguments ) : a == null || d ? this
              .each( function () {
                var b = d ? a : f( this ).is( ":hidden" );
                f( this )[ b ? "show" : "hide" ]()
              } ) : this.animate( cr( "toggle", 3 ), a, b, c );
            return this
          },
          fadeTo: function ( a, b, c, d ) {
            return this.filter( ":hidden" ).css( "opacity", 0 ).show().end().animate( {
              opacity: b
            }, a, c, d )
          },
          animate: function ( a, b, c, d ) {
            var e = f.speed( b, c, d );
            if ( f.isEmptyObject( a ) ) return this.each( e.complete, [ !1 ] );
            a = f.extend( {}, a );
            return this[ e.queue === !1 ? "each" : "queue" ]( function () {
              e.queue === !1 && f._mark( this );
              var b = f.extend( {}, e ),
                c = this.nodeType === 1,
                d = c && f( this ).is( ":hidden" ),
                g, h, i, j, k, l, m, n, o;
              b.animatedProperties = {};
              for ( i in a ) {
                g = f.camelCase( i ), i !== g && ( a[ g ] = a[ i ], delete a[ i ] ), h = a[ g ], f.isArray(
                  h ) ? ( b.animatedProperties[ g ] = h[ 1 ], h = a[ g ] = h[ 0 ] ) : b.animatedProperties[
                  g ] = b.specialEasing && b.specialEasing[ g ] || b.easing || "swing";
                if ( h === "hide" && d || h === "show" && !d ) return b.complete.call( this );
                c && ( g === "height" || g === "width" ) && ( b.overflow = [ this.style.overflow, this.style
                  .overflowX, this.style.overflowY
                ], f.css( this, "display" ) === "inline" && f.css( this, "float" ) === "none" && ( f
                  .support.inlineBlockNeedsLayout ? ( j = cs( this.nodeName ), j === "inline" ? this.style
                    .display = "inline-block" : ( this.style.display = "inline", this.style.zoom = 1 ) ) :
                  this.style.display = "inline-block" ) )
              }
              b.overflow != null && ( this.style.overflow = "hidden" );
              for ( i in a ) k = new f.fx( this, b, i ), h = a[ i ], cj.test( h ) ? k[ h === "toggle" ? d ?
                "show" : "hide" : h ]() : ( l = ck.exec( h ), m = k.cur(), l ? ( n = parseFloat( l[ 2 ] ),
                o = l[ 3 ] || ( f.cssNumber[ i ] ? "" : "px" ), o !== "px" && ( f.style( this, i, ( n ||
                  1 ) + o ), m = ( n || 1 ) / k.cur() * m, f.style( this, i, m + o ) ), l[ 1 ] && ( n = (
                  l[ 1 ] === "-=" ? -1 : 1 ) * n + m ), k.custom( m, n, o ) ) : k.custom( m, h, "" ) );
              return !0
            } )
          },
          stop: function ( a, b ) {
            a && this.queue( [] ), this.each( function () {
              var a = f.timers,
                c = a.length;
              b || f._unmark( !0, this );
              while ( c-- ) a[ c ].elem === this && ( b && a[ c ]( !0 ), a.splice( c, 1 ) )
            } ), b || this.dequeue();
            return this
          }
        } ), f.each( {
          slideDown: cr( "show", 1 ),
          slideUp: cr( "hide", 1 ),
          slideToggle: cr( "toggle", 1 ),
          fadeIn: {
            opacity: "show"
          },
          fadeOut: {
            opacity: "hide"
          },
          fadeToggle: {
            opacity: "toggle"
          }
        }, function ( a, b ) {
          f.fn[ a ] = function ( a, c, d ) {
            return this.animate( b, a, c, d )
          }
        } ), f.extend( {
          speed: function ( a, b, c ) {
            var d = a && typeof a == "object" ? f.extend( {}, a ) : {
              complete: c || !c && b || f.isFunction( a ) && a,
              duration: a,
              easing: c && b || b && !f.isFunction( b ) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f
              .fx.speeds[ d.duration ] : f.fx.speeds._default, d.old = d.complete, d.complete = function ( a ) {
                f.isFunction( d.old ) && d.old.call( this ), d.queue !== !1 ? f.dequeue( this ) : a !== !1 && f
                  ._unmark( this )
              };
            return d
          },
          easing: {
            linear: function ( a, b, c, d ) {
              return c + d * a
            },
            swing: function ( a, b, c, d ) {
              return ( -Math.cos( a * Math.PI ) / 2 + .5 ) * d + c
            }
          },
          timers: [],
          fx: function ( a, b, c ) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
          }
        } ), f.fx.prototype = {
          update: function () {
            this.options.step && this.options.step.call( this.elem, this.now, this ), ( f.fx.step[ this.prop ] || f
              .fx.step._default )( this )
          },
          cur: function () {
            if ( this.elem[ this.prop ] != null && ( !this.elem.style || this.elem.style[ this.prop ] == null ) )
              return this.elem[ this.prop ];
            var a, b = f.css( this.elem, this.prop );
            return isNaN( a = parseFloat( b ) ) ? !b || b === "auto" ? 0 : b : a
          },
          custom: function ( a, b, c ) {
            function h( a ) {
              return d.step( a )
            }
            var d = this,
              e = f.fx,
              g;
            this.startTime = cn || cp(), this.start = a, this.end = b, this.unit = c || this.unit || ( f.cssNumber[
                this.prop ] ? "" : "px" ), this.now = this.start, this.pos = this.state = 0, h.elem = this.elem,
            h() && f.timers.push( h ) && !cl && ( co ? ( cl = !0, g = function () {
                cl && ( co( g ), e.tick() )
              }, co( g ) ) : cl = setInterval( e.tick, e.interval ) )
          },
          show: function () {
            this.options.orig[ this.prop ] = f.style( this.elem, this.prop ), this.options.show = !0, this.custom(
              this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur() ), f( this.elem ).show()
          },
          hide: function () {
            this.options.orig[ this.prop ] = f.style( this.elem, this.prop ), this.options.hide = !0, this.custom(
              this.cur(), 0 )
          },
          step: function ( a ) {
            var b = cn || cp(),
              c = !0,
              d = this.elem,
              e = this.options,
              g, h;
            if ( a || b >= e.duration + this.startTime ) {
              this.now = this.end, this.pos = this.state = 1, this.update(), e.animatedProperties[ this.prop ] = !0;
              for ( g in e.animatedProperties ) e.animatedProperties[ g ] !== !0 && ( c = !1 );
              if ( c ) {
                e.overflow != null && !f.support.shrinkWrapBlocks && f.each( [ "", "X", "Y" ], function ( a, b ) {
                  d.style[ "overflow" + b ] = e.overflow[ a ]
                } ), e.hide && f( d ).hide();
                if ( e.hide || e.show )
                  for ( var i in e.animatedProperties ) f.style( d, i, e.orig[ i ] );
                e.complete.call( d )
              }
              return !1
            }
            e.duration == Infinity ? this.now = b : ( h = b - this.startTime, this.state = h / e.duration, this
              .pos = f.easing[ e.animatedProperties[ this.prop ] ]( this.state, h, 0, 1, e.duration ), this.now =
              this.start + ( this.end - this.start ) * this.pos ), this.update();
            return !0
          }
        }, f.extend( f.fx, {
          tick: function () {
            for ( var a = f.timers, b = 0; b < a.length; ++b ) a[ b ]() || a.splice( b--, 1 );
            a.length || f.fx.stop()
          },
          interval: 13,
          stop: function () {
            clearInterval( cl ), cl = null
          },
          speeds: {
            slow: 600,
            fast: 200,
            _default: 400
          },
          step: {
            opacity: function ( a ) {
              f.style( a.elem, "opacity", a.now )
            },
            _default: function ( a ) {
              a.elem.style && a.elem.style[ a.prop ] != null ? a.elem.style[ a.prop ] = ( a.prop === "width" || a
                .prop === "height" ? Math.max( 0, a.now ) : a.now ) + a.unit : a.elem[ a.prop ] = a.now
            }
          }
        } ), f.expr && f.expr.filters && ( f.expr.filters.animated = function ( a ) {
          return f.grep( f.timers, function ( b ) {
            return a === b.elem
          } ).length
        } );
        var ct = /^t(?:able|d|h)$/i,
          cu = /^(?:body|html)$/i;
        "getBoundingClientRect" in c.documentElement ? f.fn.offset = function ( a ) {
          var b = this[ 0 ],
            c;
          if ( a ) return this.each( function ( b ) {
            f.offset.setOffset( this, a, b )
          } );
          if ( !b || !b.ownerDocument ) return null;
          if ( b === b.ownerDocument.body ) return f.offset.bodyOffset( b );
          try {
            c = b.getBoundingClientRect()
          } catch ( d ) {}
          var e = b.ownerDocument,
            g = e.documentElement;
          if ( !c || !f.contains( g, b ) ) return c ? {
            top: c.top,
            left: c.left
          } : {
            top: 0,
            left: 0
          };
          var h = e.body,
            i = cv( e ),
            j = g.clientTop || h.clientTop || 0,
            k = g.clientLeft || h.clientLeft || 0,
            l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop,
            m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft,
            n = c.top + l - j,
            o = c.left + m - k;
          return {
            top: n,
            left: o
          }
        } : f.fn.offset = function ( a ) {
          var b = this[ 0 ];
          if ( a ) return this.each( function ( b ) {
            f.offset.setOffset( this, a, b )
          } );
          if ( !b || !b.ownerDocument ) return null;
          if ( b === b.ownerDocument.body ) return f.offset.bodyOffset( b );
          f.offset.initialize();
          var c, d = b.offsetParent,
            e = b,
            g = b.ownerDocument,
            h = g.documentElement,
            i = g.body,
            j = g.defaultView,
            k = j ? j.getComputedStyle( b, null ) : b.currentStyle,
            l = b.offsetTop,
            m = b.offsetLeft;
          while ( ( b = b.parentNode ) && b !== i && b !== h ) {
            if ( f.offset.supportsFixedPosition && k.position === "fixed" ) break;
            c = j ? j.getComputedStyle( b, null ) : b.currentStyle, l -= b.scrollTop, m -= b.scrollLeft, b === d && (
                l += b.offsetTop, m += b.offsetLeft, f.offset.doesNotAddBorder && ( !f.offset
                  .doesAddBorderForTableAndCells || !ct.test( b.nodeName ) ) && ( l += parseFloat( c
                  .borderTopWidth ) || 0, m += parseFloat( c.borderLeftWidth ) || 0 ), e = d, d = b.offsetParent ), f
              .offset.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && ( l += parseFloat( c
                .borderTopWidth ) || 0, m += parseFloat( c.borderLeftWidth ) || 0 ), k = c
          }
          if ( k.position === "relative" || k.position === "static" ) l += i.offsetTop, m += i.offsetLeft;
          f.offset.supportsFixedPosition && k.position === "fixed" && ( l += Math.max( h.scrollTop, i.scrollTop ),
            m += Math.max( h.scrollLeft, i.scrollLeft ) );
          return {
            top: l,
            left: m
          }
        }, f.offset = {
          initialize: function () {
            var a = c.body,
              b = c.createElement( "div" ),
              d, e, g, h, i = parseFloat( f.css( a, "marginTop" ) ) || 0,
              j =
              "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            f.extend( b.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
              } ), b.innerHTML = j, a.insertBefore( b, a.firstChild ), d = b.firstChild, e = d.firstChild, h = d
              .nextSibling.firstChild.firstChild, this.doesNotAddBorder = e.offsetTop !== 5, this
              .doesAddBorderForTableAndCells = h.offsetTop === 5, e.style.position = "fixed", e.style.top = "20px",
              this.supportsFixedPosition = e.offsetTop === 20 || e.offsetTop === 15, e.style.position = e.style
              .top = "", d.style.overflow = "hidden", d.style.position = "relative", this
              .subtractsBorderForOverflowNotVisible = e.offsetTop === -5, this.doesNotIncludeMarginInBodyOffset = a
              .offsetTop !== i, a.removeChild( b ), f.offset.initialize = f.noop
          },
          bodyOffset: function ( a ) {
            var b = a.offsetTop,
              c = a.offsetLeft;
            f.offset.initialize(), f.offset.doesNotIncludeMarginInBodyOffset && ( b += parseFloat( f.css( a,
              "marginTop" ) ) || 0, c += parseFloat( f.css( a, "marginLeft" ) ) || 0 );
            return {
              top: b,
              left: c
            }
          },
          setOffset: function ( a, b, c ) {
            var d = f.css( a, "position" );
            d === "static" && ( a.style.position = "relative" );
            var e = f( a ),
              g = e.offset(),
              h = f.css( a, "top" ),
              i = f.css( a, "left" ),
              j = ( d === "absolute" || d === "fixed" ) && f.inArray( "auto", [ h, i ] ) > -1,
              k = {},
              l = {},
              m, n;
            j ? ( l = e.position(), m = l.top, n = l.left ) : ( m = parseFloat( h ) || 0, n = parseFloat( i ) ||
              0 ), f.isFunction( b ) && ( b = b.call( a, c, g ) ), b.top != null && ( k.top = b.top - g.top + m ), b
              .left != null && ( k.left = b.left - g.left + n ), "using" in b ? b.using.call( a, k ) : e.css( k )
          }
        }, f.fn.extend( {
          position: function () {
            if ( !this[ 0 ] ) return null;
            var a = this[ 0 ],
              b = this.offsetParent(),
              c = this.offset(),
              d = cu.test( b[ 0 ].nodeName ) ? {
                top: 0,
                left: 0
              } : b.offset();
            c.top -= parseFloat( f.css( a, "marginTop" ) ) || 0, c.left -= parseFloat( f.css( a,
              "marginLeft" ) ) || 0, d.top += parseFloat( f.css( b[ 0 ], "borderTopWidth" ) ) || 0, d.left +=
              parseFloat( f.css( b[ 0 ], "borderLeftWidth" ) ) || 0;
            return {
              top: c.top - d.top,
              left: c.left - d.left
            }
          },
          offsetParent: function () {
            return this.map( function () {
              var a = this.offsetParent || c.body;
              while ( a && !cu.test( a.nodeName ) && f.css( a, "position" ) === "static" ) a = a.offsetParent;
              return a
            } )
          }
        } ), f.each( [ "Left", "Top" ], function ( a, c ) {
          var d = "scroll" + c;
          f.fn[ d ] = function ( c ) {
            var e, g;
            if ( c === b ) {
              e = this[ 0 ];
              if ( !e ) return null;
              g = cv( e );
              return g ? "pageXOffset" in g ? g[ a ? "pageYOffset" : "pageXOffset" ] : f.support.boxModel && g
                .document.documentElement[ d ] || g.document.body[ d ] : e[ d ]
            }
            return this.each( function () {
              g = cv( this ), g ? g.scrollTo( a ? f( g ).scrollLeft() : c, a ? c : f( g ).scrollTop() ) :
                this[ d ] = c
            } )
          }
        } ), f.each( [ "Height", "Width" ], function ( a, c ) {
          var d = c.toLowerCase();
          f.fn[ "inner" + c ] = function () {
            var a = this[ 0 ];
            return a && a.style ? parseFloat( f.css( a, d, "padding" ) ) : null
          }, f.fn[ "outer" + c ] = function ( a ) {
            var b = this[ 0 ];
            return b && b.style ? parseFloat( f.css( b, d, a ? "margin" : "border" ) ) : null
          }, f.fn[ d ] = function ( a ) {
            var e = this[ 0 ];
            if ( !e ) return a == null ? null : this;
            if ( f.isFunction( a ) ) return this.each( function ( b ) {
              var c = f( this );
              c[ d ]( a.call( this, b, c[ d ]() ) )
            } );
            if ( f.isWindow( e ) ) {
              var g = e.document.documentElement[ "client" + c ];
              return e.document.compatMode === "CSS1Compat" && g || e.document.body[ "client" + c ] || g
            }
            if ( e.nodeType === 9 ) return Math.max( e.documentElement[ "client" + c ], e.body[ "scroll" + c ], e
              .documentElement[ "scroll" + c ], e.body[ "offset" + c ], e.documentElement[ "offset" + c ] );
            if ( a === b ) {
              var h = f.css( e, d ),
                i = parseFloat( h );
              return f.isNaN( i ) ? h : i
            }
            return this.css( d, typeof a == "string" ? a : a + "px" )
          }
        } ), a.jQuery = a.$ = f
      } )( window );
    </script>
  
    <script type="text/javascript">
      /* --- Tablesorter: http://tablesorter.com/ --- */
      /* Slightly modified for use with Snap2HTML: Removed trim to allow folders to sort at top. Replaced parseInt with parseFloat to fix sort problems with some file sizes */
      ( function ( $ ) {
        $.extend( {
          tablesorter: new
          function () {
            var parsers = [],
              widgets = [];
            this.defaults = {
              cssHeader: "header",
              cssAsc: "headerSortUp",
              cssDesc: "headerSortDown",
              cssChildRow: "expand-child",
              sortInitialOrder: "asc",
              sortMultiSortKey: "shiftKey",
              sortForce: null,
              sortAppend: null,
              sortLocaleCompare: true,
              textExtraction: "simple",
              parsers: {},
              widgets: [],
              widgetZebra: {
                css: [ "even", "odd" ]
              },
              headers: {},
              widthFixed: false,
              cancelSelection: true,
              sortList: [],
              headerList: [],
              dateFormat: "us",
              decimal: '/\.|\,/g',
              onRenderHeader: null,
              selectorHeaders: 'thead th',
              debug: false
            };
  
            function benchmark( s, d ) {
              log( s + "," + ( new Date().getTime() - d.getTime() ) + "ms" );
            }
            this.benchmark = benchmark;
  
            function log( s ) {
              if ( typeof console != "undefined" && typeof console.debug != "undefined" ) {
                console.log( s );
              } else {
                alert( s );
              }
            }
  
            function buildParserCache( table, $headers ) {
              if ( table.config.debug ) {
                var parsersDebug = "";
              }
              if ( table.tBodies.length == 0 ) return;
              var rows = table.tBodies[ 0 ].rows;
              if ( rows[ 0 ] ) {
                var list = [],
                  cells = rows[ 0 ].cells,
                  l = cells.length;
                for ( var i = 0; i < l; i++ ) {
                  var p = false;
                  if ( $.metadata && ( $( $headers[ i ] ).metadata() && $( $headers[ i ] ).metadata().sorter ) ) {
                    p = getParserById( $( $headers[ i ] ).metadata().sorter );
                  } else if ( ( table.config.headers[ i ] && table.config.headers[ i ].sorter ) ) {
                    p = getParserById( table.config.headers[ i ].sorter );
                  }
                  if ( !p ) {
                    p = detectParserForColumn( table, rows, -1, i );
                  }
                  if ( table.config.debug ) {
                    parsersDebug += "column:" + i + " parser:" + p.id + "\n";
                  }
                  list.push( p );
                }
              }
              if ( table.config.debug ) {
                log( parsersDebug );
              }
              return list;
            };
  
            function detectParserForColumn( table, rows, rowIndex, cellIndex ) {
              var l = parsers.length,
                node = false,
                nodeValue = false,
                keepLooking = true;
              while ( nodeValue == '' && keepLooking ) {
                rowIndex++;
                if ( rows[ rowIndex ] ) {
                  node = getNodeFromRowAndCellIndex( rows, rowIndex, cellIndex );
                  nodeValue = trimAndGetNodeText( table.config, node );
                  if ( table.config.debug ) {
                    log( 'Checking if value was empty on row:' + rowIndex );
                  }
                } else {
                  keepLooking = false;
                }
              }
              for ( var i = 1; i < l; i++ ) {
                if ( parsers[ i ].is( nodeValue, table, node ) ) {
                  return parsers[ i ];
                }
              }
              return parsers[ 0 ];
            }
  
            function getNodeFromRowAndCellIndex( rows, rowIndex, cellIndex ) {
              return rows[ rowIndex ].cells[ cellIndex ];
            }
  
            function trimAndGetNodeText( config, node ) {
              return $.trim( getElementText( config, node ) );
            }
  
            function getParserById( name ) {
              var l = parsers.length;
              for ( var i = 0; i < l; i++ ) {
                if ( parsers[ i ].id.toLowerCase() == name.toLowerCase() ) {
                  return parsers[ i ];
                }
              }
              return false;
            }
  
            function buildCache( table ) {
              if ( table.config.debug ) {
                var cacheTime = new Date();
              }
              var totalRows = ( table.tBodies[ 0 ] && table.tBodies[ 0 ].rows.length ) || 0,
                totalCells = ( table.tBodies[ 0 ].rows[ 0 ] && table.tBodies[ 0 ].rows[ 0 ].cells.length ) || 0,
                parsers = table.config.parsers,
                cache = {
                  row: [],
                  normalized: []
                };
              for ( var i = 0; i < totalRows; ++i ) {
                var c = $( table.tBodies[ 0 ].rows[ i ] ),
                  cols = [];
                if ( c.hasClass( table.config.cssChildRow ) ) {
                  cache.row[ cache.row.length - 1 ] = cache.row[ cache.row.length - 1 ].add( c );
                  continue;
                }
                cache.row.push( c );
                for ( var j = 0; j < totalCells; ++j ) {
                  cols.push( parsers[ j ].format( getElementText( table.config, c[ 0 ].cells[ j ] ), table, c[ 0 ]
                    .cells[ j ] ) );
                }
                cols.push( cache.normalized.length );
                cache.normalized.push( cols );
                cols = null;
              };
              if ( table.config.debug ) {
                benchmark( "Building cache for " + totalRows + " rows:", cacheTime );
              }
              return cache;
            };
  
            function getElementText( config, node ) {
              var text = "";
              if ( !node ) return "";
              if ( !config.supportsTextContent ) config.supportsTextContent = node.textContent || false;
              if ( config.textExtraction == "simple" ) {
                if ( config.supportsTextContent ) {
                  text = node.textContent;
                } else {
                  if ( node.childNodes[ 0 ] && node.childNodes[ 0 ].hasChildNodes() ) {
                    text = node.childNodes[ 0 ].innerHTML;
                  } else {
                    text = node.innerHTML;
                  }
                }
              } else {
                if ( typeof ( config.textExtraction ) == "function" ) {
                  text = config.textExtraction( node );
                } else {
                  text = $( node ).text();
                }
              }
              return text;
            }
  
            function appendToTable( table, cache ) {
              if ( table.config.debug ) {
                var appendTime = new Date()
              }
              var c = cache,
                r = c.row,
                n = c.normalized,
                totalRows = n.length,
                checkCell = ( n[ 0 ].length - 1 ),
                tableBody = $( table.tBodies[ 0 ] ),
                rows = [];
              for ( var i = 0; i < totalRows; i++ ) {
                var pos = n[ i ][ checkCell ];
                rows.push( r[ pos ] );
                if ( !table.config.appender ) {
                  var l = r[ pos ].length;
                  for ( var j = 0; j < l; j++ ) {
                    tableBody[ 0 ].appendChild( r[ pos ][ j ] );
                  }
                }
              }
              if ( table.config.appender ) {
                table.config.appender( table, rows );
              }
              rows = null;
              if ( table.config.debug ) {
                benchmark( "Rebuilt table:", appendTime );
              }
              applyWidget( table );
              setTimeout( function () {
                $( table ).trigger( "sortEnd" );
              }, 0 );
            };
  
            function buildHeaders( table ) {
              if ( table.config.debug ) {
                var time = new Date();
              }
              var meta = ( $.metadata ) ? true : false;
              var header_index = computeTableHeaderCellIndexes( table );
              $tableHeaders = $( table.config.selectorHeaders, table ).each( function ( index ) {
                this.column = header_index[ this.parentNode.rowIndex + "-" + this.cellIndex ];
                this.order = formatSortingOrder( table.config.sortInitialOrder );
                this.count = this.order;
                if ( checkHeaderMetadata( this ) || checkHeaderOptions( table, index ) ) this.sortDisabled =
                  true;
                if ( checkHeaderOptionsSortingLocked( table, index ) ) this.order = this.lockedOrder =
                  checkHeaderOptionsSortingLocked( table, index );
                if ( !this.sortDisabled ) {
                  var $th = $( this ).addClass( table.config.cssHeader );
                  if ( table.config.onRenderHeader ) table.config.onRenderHeader.apply( $th );
                }
                table.config.headerList[ index ] = this;
              } );
              if ( table.config.debug ) {
                benchmark( "Built headers:", time );
                log( $tableHeaders );
              }
              return $tableHeaders;
            };
  
            function computeTableHeaderCellIndexes( t ) {
              var matrix = [];
              var lookup = {};
              var thead = t.getElementsByTagName( 'THEAD' )[ 0 ];
              var trs = thead.getElementsByTagName( 'TR' );
              for ( var i = 0; i < trs.length; i++ ) {
                var cells = trs[ i ].cells;
                for ( var j = 0; j < cells.length; j++ ) {
                  var c = cells[ j ];
                  var rowIndex = c.parentNode.rowIndex;
                  var cellId = rowIndex + "-" + c.cellIndex;
                  var rowSpan = c.rowSpan || 1;
                  var colSpan = c.colSpan || 1
                  var firstAvailCol;
                  if ( typeof ( matrix[ rowIndex ] ) == "undefined" ) {
                    matrix[ rowIndex ] = [];
                  }
                  for ( var k = 0; k < matrix[ rowIndex ].length + 1; k++ ) {
                    if ( typeof ( matrix[ rowIndex ][ k ] ) == "undefined" ) {
                      firstAvailCol = k;
                      break;
                    }
                  }
                  lookup[ cellId ] = firstAvailCol;
                  for ( var k = rowIndex; k < rowIndex + rowSpan; k++ ) {
                    if ( typeof ( matrix[ k ] ) == "undefined" ) {
                      matrix[ k ] = [];
                    }
                    var matrixrow = matrix[ k ];
                    for ( var l = firstAvailCol; l < firstAvailCol + colSpan; l++ ) {
                      matrixrow[ l ] = "x";
                    }
                  }
                }
              }
              return lookup;
            }
  
            function checkCellColSpan( table, rows, row ) {
              var arr = [],
                r = table.tHead.rows,
                c = r[ row ].cells;
              for ( var i = 0; i < c.length; i++ ) {
                var cell = c[ i ];
                if ( cell.colSpan > 1 ) {
                  arr = arr.concat( checkCellColSpan( table, headerArr, row++ ) );
                } else {
                  if ( table.tHead.length == 1 || ( cell.rowSpan > 1 || !r[ row + 1 ] ) ) {
                    arr.push( cell );
                  }
                }
              }
              return arr;
            };
  
            function checkHeaderMetadata( cell ) {
              if ( ( $.metadata ) && ( $( cell ).metadata().sorter === false ) ) {
                return true;
              };
              return false;
            }
  
            function checkHeaderOptions( table, i ) {
              if ( ( table.config.headers[ i ] ) && ( table.config.headers[ i ].sorter === false ) ) {
                return true;
              };
              return false;
            }
  
            function checkHeaderOptionsSortingLocked( table, i ) {
              if ( ( table.config.headers[ i ] ) && ( table.config.headers[ i ].lockedOrder ) ) return table.config
                .headers[ i ].lockedOrder;
              return false;
            }
  
            function applyWidget( table ) {
              var c = table.config.widgets;
              var l = c.length;
              for ( var i = 0; i < l; i++ ) {
                getWidgetById( c[ i ] ).format( table );
              }
            }
  
            function getWidgetById( name ) {
              var l = widgets.length;
              for ( var i = 0; i < l; i++ ) {
                if ( widgets[ i ].id.toLowerCase() == name.toLowerCase() ) {
                  return widgets[ i ];
                }
              }
            };
  
            function formatSortingOrder( v ) {
              if ( typeof ( v ) != "Number" ) {
                return ( v.toLowerCase() == "desc" ) ? 1 : 0;
              } else {
                return ( v == 1 ) ? 1 : 0;
              }
            }
  
            function isValueInArray( v, a ) {
              var l = a.length;
              for ( var i = 0; i < l; i++ ) {
                if ( a[ i ][ 0 ] == v ) {
                  return true;
                }
              }
              return false;
            }
  
            function setHeadersCss( table, $headers, list, css ) {
              $headers.removeClass( css[ 0 ] ).removeClass( css[ 1 ] );
              var h = [];
              $headers.each( function ( offset ) {
                if ( !this.sortDisabled ) {
                  h[ this.column ] = $( this );
                }
              } );
              var l = list.length;
              for ( var i = 0; i < l; i++ ) {
                h[ list[ i ][ 0 ] ].addClass( css[ list[ i ][ 1 ] ] );
              }
            }
  
            function fixColumnWidth( table, $headers ) {
              var c = table.config;
              if ( c.widthFixed ) {
                var colgroup = $( '<colgroup>' );
                $( "tr:first td", table.tBodies[ 0 ] ).each( function () {
                  colgroup.append( $( '<col>' ).css( 'width', $( this ).width() ) );
                } );
                $( table ).prepend( colgroup );
              };
            }
  
            function updateHeaderSortCount( table, sortList ) {
              var c = table.config,
                l = sortList.length;
              for ( var i = 0; i < l; i++ ) {
                var s = sortList[ i ],
                  o = c.headerList[ s[ 0 ] ];
                o.count = s[ 1 ];
                o.count++;
              }
            }
  
            function multisort( table, sortList, cache ) {
              if ( table.config.debug ) {
                var sortTime = new Date();
              }
              var dynamicExp = "var sortWrapper = function(a,b) {",
                l = sortList.length;
              for ( var i = 0; i < l; i++ ) {
                var c = sortList[ i ][ 0 ];
                var order = sortList[ i ][ 1 ];
                var s = ( table.config.parsers[ c ].type == "text" ) ? ( ( order == 0 ) ? makeSortFunction( "text",
                  "asc", c ) : makeSortFunction( "text", "desc", c ) ) : ( ( order == 0 ) ? makeSortFunction(
                  "numeric", "asc", c ) : makeSortFunction( "numeric", "desc", c ) );
                var e = "e" + i;
                dynamicExp += "var " + e + " = " + s;
                dynamicExp += "if(" + e + ") { return " + e + "; } ";
                dynamicExp += "else { ";
              }
              var orgOrderCol = cache.normalized[ 0 ].length - 1;
              dynamicExp += "return a[" + orgOrderCol + "]-b[" + orgOrderCol + "];";
              for ( var i = 0; i < l; i++ ) {
                dynamicExp += "}; ";
              }
              dynamicExp += "return 0; ";
              dynamicExp += "}; ";
              if ( table.config.debug ) {
                benchmark( "Evaling expression:" + dynamicExp, new Date() );
              }
              eval( dynamicExp );
              cache.normalized.sort( sortWrapper );
              if ( table.config.debug ) {
                benchmark( "Sorting on " + sortList.toString() + " and dir " + order + " time:", sortTime );
              }
              return cache;
            };
  
            function makeSortFunction( type, direction, index ) {
              var a = "a[" + index + "]",
                b = "b[" + index + "]";
              if ( type == 'text' && direction == 'asc' ) {
                return "(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b +
                  " === null ? Number.NEGATIVE_INFINITY : (" + a + " < " + b + ") ? -1 : 1 )));";
              } else if ( type == 'text' && direction == 'desc' ) {
                return "(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b +
                  " === null ? Number.NEGATIVE_INFINITY : (" + b + " < " + a + ") ? -1 : 1 )));";
              } else if ( type == 'numeric' && direction == 'asc' ) {
                return "(" + a + " === null && " + b + " === null) ? 0 :(" + a +
                  " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + a +
                  " - " + b + "));";
              } else if ( type == 'numeric' && direction == 'desc' ) {
                return "(" + a + " === null && " + b + " === null) ? 0 :(" + a +
                  " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + b +
                  " - " + a + "));";
              }
            };
  
            function makeSortText( i ) {
              return "((a[" + i + "] < b[" + i + "]) ? -1 : ((a[" + i + "] > b[" + i + "]) ? 1 : 0));";
            };
  
            function makeSortTextDesc( i ) {
              return "((b[" + i + "] < a[" + i + "]) ? -1 : ((b[" + i + "] > a[" + i + "]) ? 1 : 0));";
            };
  
            function makeSortNumeric( i ) {
              return "a[" + i + "]-b[" + i + "];";
            };
  
            function makeSortNumericDesc( i ) {
              return "b[" + i + "]-a[" + i + "];";
            };
  
            function sortText( a, b ) {
              if ( table.config.sortLocaleCompare ) return a.localeCompare( b );
              return ( ( a < b ) ? -1 : ( ( a > b ) ? 1 : 0 ) );
            };
  
            function sortTextDesc( a, b ) {
              if ( table.config.sortLocaleCompare ) return b.localeCompare( a );
              return ( ( b < a ) ? -1 : ( ( b > a ) ? 1 : 0 ) );
            };
  
            function sortNumeric( a, b ) {
              return a - b;
            };
  
            function sortNumericDesc( a, b ) {
              return b - a;
            };
  
            function getCachedSortType( parsers, i ) {
              return parsers[ i ].type;
            };
            this.construct = function ( settings ) {
              return this.each( function () {
                if ( !this.tHead || !this.tBodies ) return;
                var $this, $document, $headers, cache, config, shiftDown = 0,
                  sortOrder;
                this.config = {};
                config = $.extend( this.config, $.tablesorter.defaults, settings );
                $this = $( this );
                $.data( this, "tablesorter", config );
                $headers = buildHeaders( this );
                this.config.parsers = buildParserCache( this, $headers );
                cache = buildCache( this );
                var sortCSS = [ config.cssDesc, config.cssAsc ];
                fixColumnWidth( this );
                $headers.click( function ( e ) {
                  var totalRows = ( $this[ 0 ].tBodies[ 0 ] && $this[ 0 ].tBodies[ 0 ].rows.length ) || 0;
                  if ( !this.sortDisabled && totalRows > 0 ) {
                    $this.trigger( "sortStart" );
                    var $cell = $( this );
                    var i = this.column;
                    this.order = this.count++ % 2;
                    if ( this.lockedOrder ) this.order = this.lockedOrder;
                    if ( !e[ config.sortMultiSortKey ] ) {
                      config.sortList = [];
                      if ( config.sortForce != null ) {
                        var a = config.sortForce;
                        for ( var j = 0; j < a.length; j++ ) {
                          if ( a[ j ][ 0 ] != i ) {
                            config.sortList.push( a[ j ] );
                          }
                        }
                      }
                      config.sortList.push( [ i, this.order ] );
                    } else {
                      if ( isValueInArray( i, config.sortList ) ) {
                        for ( var j = 0; j < config.sortList.length; j++ ) {
                          var s = config.sortList[ j ],
                            o = config.headerList[ s[ 0 ] ];
                          if ( s[ 0 ] == i ) {
                            o.count = s[ 1 ];
                            o.count++;
                            s[ 1 ] = o.count % 2;
                          }
                        }
                      } else {
                        config.sortList.push( [ i, this.order ] );
                      }
                    };
                    setTimeout( function () {
                      setHeadersCss( $this[ 0 ], $headers, config.sortList, sortCSS );
                      appendToTable( $this[ 0 ], multisort( $this[ 0 ], config.sortList, cache ) );
                    }, 1 );
                    return false;
                  }
                } ).mousedown( function () {
                  if ( config.cancelSelection ) {
                    this.onselectstart = function () {
                      return false
                    };
                    return false;
                  }
                } );
                $this.bind( "update", function () {
                  var me = this;
                  setTimeout( function () {
                    me.config.parsers = buildParserCache( me, $headers );
                    cache = buildCache( me );
                  }, 1 );
                } ).bind( "updateCell", function ( e, cell ) {
                  var config = this.config;
                  var pos = [ ( cell.parentNode.rowIndex - 1 ), cell.cellIndex ];
                  cache.normalized[ pos[ 0 ] ][ pos[ 1 ] ] = config.parsers[ pos[ 1 ] ].format(
                    getElementText( config, cell ), cell );
                } ).bind( "sorton", function ( e, list ) {
                  $( this ).trigger( "sortStart" );
                  config.sortList = list;
                  var sortList = config.sortList;
                  updateHeaderSortCount( this, sortList );
                  setHeadersCss( this, $headers, sortList, sortCSS );
                  appendToTable( this, multisort( this, sortList, cache ) );
                } ).bind( "appendCache", function () {
                  appendToTable( this, cache );
                } ).bind( "applyWidgetId", function ( e, id ) {
                  getWidgetById( id ).format( this );
                } ).bind( "applyWidgets", function () {
                  applyWidget( this );
                } );
                if ( $.metadata && ( $( this ).metadata() && $( this ).metadata().sortlist ) ) {
                  config.sortList = $( this ).metadata().sortlist;
                }
                if ( config.sortList.length > 0 ) {
                  $this.trigger( "sorton", [ config.sortList ] );
                }
                applyWidget( this );
              } );
            };
            this.addParser = function ( parser ) {
              var l = parsers.length,
                a = true;
              for ( var i = 0; i < l; i++ ) {
                if ( parsers[ i ].id.toLowerCase() == parser.id.toLowerCase() ) {
                  a = false;
                }
              }
              if ( a ) {
                parsers.push( parser );
              };
            };
            this.addWidget = function ( widget ) {
              widgets.push( widget );
            };
            this.formatFloat = function ( s ) {
              var i = parseFloat( s );
              return ( isNaN( i ) ) ? 0 : i;
            };
            this.formatInt = function ( s ) {
              var i = parseInt( s );
              return ( isNaN( i ) ) ? 0 : i;
            };
            this.isDigit = function ( s, config ) {
              return /^[-+]?\d*$/.test( $.trim( s.replace( /[,.']/g, '' ) ) );
            };
            this.clearTableBody = function ( table ) {
              if ( $.browser.msie ) {
                function empty() {
                  while ( this.firstChild )
                    this.removeChild( this.firstChild );
                }
                empty.apply( table.tBodies[ 0 ] );
              } else {
                table.tBodies[ 0 ].innerHTML = "";
              }
            };
          }
        } );
        $.fn.extend( {
          tablesorter: $.tablesorter.construct
        } );
        var ts = $.tablesorter;
        ts.addParser( {
          id: "text",
          is: function ( s ) {
            return true;
          },
          format: function ( s ) {
            return s.toLocaleLowerCase();
          },
          type: "text"
        } );
        ts.addParser( {
          id: "digit",
          is: function ( s, table ) {
            var c = table.config;
            return $.tablesorter.isDigit( s, c );
          },
          format: function ( s ) {
            return $.tablesorter.formatFloat( s );
          },
          type: "numeric"
        } );
        ts.addParser( {
          id: "ipAddress",
          is: function ( s ) {
            return /^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test( s );
          },
          format: function ( s ) {
            var a = s.split( "." ),
              r = "",
              l = a.length;
            for ( var i = 0; i < l; i++ ) {
              var item = a[ i ];
              if ( item.length == 2 ) {
                r += "0" + item;
              } else {
                r += item;
              }
            }
            return $.tablesorter.formatFloat( r );
          },
          type: "numeric"
        } );
        ts.addParser( {
          id: "url",
          is: function ( s ) {
            return /^(https?|ftp|file):\/\/$/.test( s );
          },
          format: function ( s ) {
            return jQuery.trim( s.replace( new RegExp( /(https?|ftp|file):\/\// ), '' ) );
          },
          type: "text"
        } );
        ts.addParser( {
          id: "isoDate",
          is: function ( s ) {
            return /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test( s );
          },
          format: function ( s ) {
            return $.tablesorter.formatFloat( ( s != "" ) ? new Date( s.replace( new RegExp( /-/g ), "/" ) )
              .getTime() : "0" );
          },
          type: "numeric"
        } );
        ts.addParser( {
          id: "percent",
          is: function ( s ) {
            return /\%$/.test( $.trim( s ) );
          },
          format: function ( s ) {
            return $.tablesorter.formatFloat( s.replace( new RegExp( /%/g ), "" ) );
          },
          type: "numeric"
        } );
        ts.addParser( {
          id: "usLongDate",
          is: function ( s ) {
            return s.match( new RegExp(
              /^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/
              ) );
          },
          format: function ( s ) {
            return $.tablesorter.formatFloat( new Date( s ).getTime() );
          },
          type: "numeric"
        } );
        ts.addParser( {
          id: "shortDate",
          is: function ( s ) {
            return /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test( s );
          },
          format: function ( s, table ) {
            var c = table.config;
            s = s.replace( /\-/g, "/" );
            if ( c.dateFormat == "us" ) {
              s = s.replace( /(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$1/$2" );
            } else if ( c.dateFormat == "uk" ) {
              s = s.replace( /(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$2/$1" );
            } else if ( c.dateFormat == "dd/mm/yy" || c.dateFormat == "dd-mm-yy" ) {
              s = s.replace( /(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/, "$1/$2/$3" );
            }
            return $.tablesorter.formatFloat( new Date( s ).getTime() );
          },
          type: "numeric"
        } );
        ts.addParser( {
          id: "time",
          is: function ( s ) {
            return /^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test( s );
          },
          format: function ( s ) {
            return $.tablesorter.formatFloat( new Date( "2000/01/01 " + s ).getTime() );
          },
          type: "numeric"
        } );
        ts.addParser( {
          id: "metadata",
          is: function ( s ) {
            return false;
          },
          format: function ( s, table, cell ) {
            var c = table.config,
              p = ( !c.parserMetadataName ) ? 'sortValue' : c.parserMetadataName;
            return $( cell ).metadata()[ p ];
          },
          type: "numeric"
        } );
        ts.addParser( {
          id: "filesize",
          is: function ( s ) {
            return /^.*(bytes|KB|MB|GB|TB)$/.test( s );
          },
          format: function ( s ) {
            if ( s.indexOf( "bytes" ) >= 0 ) return parseFloat( s );
            if ( s.indexOf( "KB" ) >= 0 ) return parseFloat( s ) * 1024;
            if ( s.indexOf( "MB" ) >= 0 ) return parseFloat( s ) * 1024 * 1024;
            if ( s.indexOf( "GB" ) >= 0 ) return parseFloat( s ) * 1024 * 1024 * 1024;
            if ( s.indexOf( "TB" ) >= 0 ) return parseFloat( s ) * 1024 * 1024 * 1024 * 1024;
          },
          type: "numeric"
        } );
        ts.addWidget( {
          id: "zebra",
          format: function ( table ) {
            if ( table.config.debug ) {
              var time = new Date();
            }
            var $tr, row = -1,
              odd;
            $( "tr:visible", table.tBodies[ 0 ] ).each( function ( i ) {
              $tr = $( this );
              if ( !$tr.hasClass( table.config.cssChildRow ) ) row++;
              odd = ( row % 2 == 0 );
              $tr.removeClass( table.config.widgetZebra.css[ odd ? 0 : 1 ] ).addClass( table.config
                .widgetZebra.css[ odd ? 1 : 0 ] )
            } );
            if ( table.config.debug ) {
              $.tablesorter.benchmark( "Applying Zebra widget", time );
            }
          }
        } );
      } )( jQuery );
    </script>
  
    <script type="text/javascript">
      /* --- Splitter: http://methvin.com/splitter/ --- */ ;
      ( function ( $ ) {
        $.fn.splitter = function ( args ) {
          args = args || {};
          return this.each( function () {
            var zombie;
  
            function startSplitMouse( evt ) {
              if ( opts.outline )
                zombie = zombie || bar.clone( false ).insertAfter( A );
              panes.css( "-webkit-user-select", "none" );
              bar.addClass( opts.activeClass );
              A._posSplit = A[ 0 ][ opts.pxSplit ] - evt[ opts.eventPos ];
              $( document ).bind( "mousemove", doSplitMouse ).bind( "mouseup", endSplitMouse );
            }
  
            function doSplitMouse( evt ) {
              var newPos = A._posSplit + evt[ opts.eventPos ];
              if ( opts.outline ) {
                newPos = Math.max( 0, Math.min( newPos, splitter._DA - bar._DA ) );
                bar.css( opts.origin, newPos );
              } else
                resplit( newPos );
            }
  
            function endSplitMouse( evt ) {
              bar.removeClass( opts.activeClass );
              var newPos = A._posSplit + evt[ opts.eventPos ];
              if ( opts.outline ) {
                zombie.remove();
                zombie = null;
                resplit( newPos );
              }
              panes.css( "-webkit-user-select", "text" );
              $( document ).unbind( "mousemove", doSplitMouse ).unbind( "mouseup", endSplitMouse );
            }
  
            function resplit( newPos ) {
              newPos = Math.max( A._min, splitter._DA - B._max, Math.min( newPos, A._max, splitter._DA - bar._DA -
                B._min ) );
              bar._DA = bar[ 0 ][ opts.pxSplit ];
              bar.css( opts.origin, newPos ).css( opts.fixed, splitter._DF );
              A.css( opts.origin, 0 ).css( opts.split, newPos ).css( opts.fixed, splitter._DF );
              B.css( opts.origin, newPos + bar._DA ).css( opts.split, splitter._DA - bar._DA - newPos ).css( opts
                .fixed, splitter._DF );
              if ( !$.browser.msie )
                panes.trigger( "resize" );
            }
  
            function dimSum( jq, dims ) {
              var sum = 0;
              for ( var i = 1; i < arguments.length; i++ )
                sum += Math.max( parseInt( jq.css( arguments[ i ] ) ) || 0, 0 );
              return sum;
            }
            var vh = ( args.splitHorizontal ? 'h' : args.splitVertical ? 'v' : args.type ) || 'v';
            var opts = $.extend( {
              activeClass: 'active',
              pxPerKey: 8,
              tabIndex: 0,
              accessKey: ''
            }, {
              v: {
                keyLeft: 39,
                keyRight: 37,
                cursor: "e-resize",
                splitbarClass: "vsplitbar",
                outlineClass: "voutline",
                type: 'v',
                eventPos: "pageX",
                origin: "left",
                split: "width",
                pxSplit: "offsetWidth",
                side1: "Left",
                side2: "Right",
                fixed: "height",
                pxFixed: "offsetHeight",
                side3: "Top",
                side4: "Bottom"
              },
              h: {
                keyTop: 40,
                keyBottom: 38,
                cursor: "n-resize",
                splitbarClass: "hsplitbar",
                outlineClass: "houtline",
                type: 'h',
                eventPos: "pageY",
                origin: "top",
                split: "height",
                pxSplit: "offsetHeight",
                side1: "Top",
                side2: "Bottom",
                fixed: "width",
                pxFixed: "offsetWidth",
                side3: "Left",
                side4: "Right"
              }
            } [ vh ], args );
            var splitter = $( this ).css( {
              position: "relative"
            } );
            var panes = $( ">*", splitter[ 0 ] ).css( {
              position: "absolute",
              "z-index": "1",
              "-moz-outline-style": "none"
            } );
            var A = $( panes[ 0 ] );
            var B = $( panes[ 1 ] );
            var focuser = $( '<a href="javascript:void(0)"></a>' ).attr( {
              accessKey: opts.accessKey,
              tabIndex: opts.tabIndex,
              title: opts.splitbarClass
            } ).bind( $.browser.opera ? "click" : "focus", function () {
              this.focus();
              bar.addClass( opts.activeClass )
            } ).bind( "keydown", function ( e ) {
              var key = e.which || e.keyCode;
              var dir = key == opts[ "key" + opts.side1 ] ? 1 : key == opts[ "key" + opts.side2 ] ? -1 : 0;
              if ( dir )
                resplit( A[ 0 ][ opts.pxSplit ] + dir * opts.pxPerKey, false );
            } ).bind( "blur", function () {
              bar.removeClass( opts.activeClass )
            } );
            var bar = $( panes[ 2 ] || '<div></div>' ).insertAfter( A ).css( "z-index", "100" ).append( focuser )
              .attr( {
                "class": opts.splitbarClass,
                unselectable: "on"
              } ).css( {
                position: "absolute",
                "user-select": "none",
                "-webkit-user-select": "none",
                "-khtml-user-select": "none",
                "-moz-user-select": "none"
              } ).bind( "mousedown", startSplitMouse );
            if ( /^(auto|default|)$/.test( bar.css( "cursor" ) ) )
              bar.css( "cursor", opts.cursor );
            bar._DA = bar[ 0 ][ opts.pxSplit ];
            splitter._PBF = $.boxModel ? dimSum( splitter, "border" + opts.side3 + "Width", "border" + opts
              .side4 + "Width" ) : 0;
            splitter._PBA = $.boxModel ? dimSum( splitter, "border" + opts.side1 + "Width", "border" + opts
              .side2 + "Width" ) : 0;
            A._pane = opts.side1;
            B._pane = opts.side2;
            $.each( [ A, B ], function () {
              this._min = opts[ "min" + this._pane ] || dimSum( this, "min-" + opts.split );
              this._max = opts[ "max" + this._pane ] || dimSum( this, "max-" + opts.split ) || 9999;
              this._init = opts[ "size" + this._pane ] === true ? parseInt( $.curCSS( this[ 0 ], opts
                .split ) ) : opts[ "size" + this._pane ];
            } );
            var initPos = A._init;
            if ( !isNaN( B._init ) )
              initPos = splitter[ 0 ][ opts.pxSplit ] - splitter._PBA - B._init - bar._DA;
            if ( opts.cookie ) {
              if ( !$.cookie )
                alert( 'jQuery.splitter(): jQuery cookie plugin required' );
              var ckpos = parseInt( $.cookie( opts.cookie ) );
              if ( !isNaN( ckpos ) )
                initPos = ckpos;
              $( window ).bind( "unload", function () {
                var state = String( bar.css( opts.origin ) );
                $.cookie( opts.cookie, state, {
                  expires: opts.cookieExpires || 365,
                  path: opts.cookiePath || document.location.pathname
                } );
              } );
            }
            if ( isNaN( initPos ) )
              initPos = Math.round( ( splitter[ 0 ][ opts.pxSplit ] - splitter._PBA - bar._DA ) / 2 );
            if ( opts.anchorToWindow ) {
              splitter._hadjust = dimSum( splitter, "borderTopWidth", "borderBottomWidth", "marginBottom" );
              splitter._hmin = Math.max( dimSum( splitter, "minHeight" ), 20 );
              $( window ).bind( "resize", function () {
                var top = splitter.offset().top;
                var wh = $( window ).height();
                splitter.css( "height", Math.max( wh - top - splitter._hadjust, splitter._hmin ) + "px" );
                if ( !$.browser.msie ) splitter.trigger( "resize" );
              } ).trigger( "resize" );
            } else if ( opts.resizeToWidth && !$.browser.msie )
              $( window ).bind( "resize", function () {
                splitter.trigger( "resize" );
              } );
            splitter.bind( "resize", function ( e, size ) {
              if ( e.target != this ) return;
              splitter._DF = splitter[ 0 ][ opts.pxFixed ] - splitter._PBF;
              splitter._DA = splitter[ 0 ][ opts.pxSplit ] - splitter._PBA;
              if ( splitter._DF <= 0 || splitter._DA <= 0 ) return;
              resplit( !isNaN( size ) ? size : ( !( opts.sizeRight || opts.sizeBottom ) ? A[ 0 ][ opts
                .pxSplit ] : splitter._DA - B[ 0 ][ opts.pxSplit ] - bar._DA ) );
            } ).trigger( "resize", [ initPos ] );
          } );
        };
      } )( jQuery );
    </script>
  
    <script type="text/javascript">
      /* --- jQuery UI v1.8.24:  https://github.com/jquery/jquery-ui --- */
      /* --- Used by DynaTree --- Only required modules included --- */
      /* jquery.ui.core.js */
      ( function ( a, b ) {
        function c( b, c ) {
          var e = b.nodeName.toLowerCase();
          if ( "area" === e ) {
            var f = b.parentNode,
              g = f.name,
              h;
            return !b.href || !g || f.nodeName.toLowerCase() !== "map" ? !1 : ( h = a( "img[usemap=#" + g + "]" )[ 0 ],
              !!h && d( h ) )
          }
          return ( /input|select|textarea|button|object/.test( e ) ? !b.disabled : "a" == e ? b.href || c : c ) && d(
            b )
        }
  
        function d( b ) {
          return !a( b ).parents().andSelf().filter( function () {
            return a.curCSS( this, "visibility" ) === "hidden" || a.expr.filters.hidden( this )
          } ).length
        }
        a.ui = a.ui || {};
        if ( a.ui.version ) return;
        a.extend( a.ui, {
          version: "1.8.24",
          keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91
          }
        } ), a.fn.extend( {
          propAttr: a.fn.prop || a.fn.attr,
          _focus: a.fn.focus,
          focus: function ( b, c ) {
            return typeof b == "number" ? this.each( function () {
              var d = this;
              setTimeout( function () {
                a( d ).focus(), c && c.call( d )
              }, b )
            } ) : this._focus.apply( this, arguments )
          },
          scrollParent: function () {
            var b;
            return a.browser.msie && /(static|relative)/.test( this.css( "position" ) ) || /absolute/.test( this
              .css( "position" ) ) ? b = this.parents().filter( function () {
              return /(relative|absolute|fixed)/.test( a.curCSS( this, "position", 1 ) ) && /(auto|scroll)/
                .test( a.curCSS( this, "overflow", 1 ) + a.curCSS( this, "overflow-y", 1 ) + a.curCSS( this,
                  "overflow-x", 1 ) )
            } ).eq( 0 ) : b = this.parents().filter( function () {
              return /(auto|scroll)/.test( a.curCSS( this, "overflow", 1 ) + a.curCSS( this, "overflow-y",
                1 ) + a.curCSS( this, "overflow-x", 1 ) )
            } ).eq( 0 ), /fixed/.test( this.css( "position" ) ) || !b.length ? a( document ) : b
          },
          zIndex: function ( c ) {
            if ( c !== b ) return this.css( "zIndex", c );
            if ( this.length ) {
              var d = a( this[ 0 ] ),
                e, f;
              while ( d.length && d[ 0 ] !== document ) {
                e = d.css( "position" );
                if ( e === "absolute" || e === "relative" || e === "fixed" ) {
                  f = parseInt( d.css( "zIndex" ), 10 );
                  if ( !isNaN( f ) && f !== 0 ) return f
                }
                d = d.parent()
              }
            }
            return 0
          },
          disableSelection: function () {
            return this.bind( ( a.support.selectstart ? "selectstart" : "mousedown" ) + ".ui-disableSelection",
              function ( a ) {
                a.preventDefault()
              } )
          },
          enableSelection: function () {
            return this.unbind( ".ui-disableSelection" )
          }
        } ), a( "<a>" ).outerWidth( 1 ).jquery || a.each( [ "Width", "Height" ], function ( c, d ) {
          function h( b, c, d, f ) {
            return a.each( e, function () {
              c -= parseFloat( a.curCSS( b, "padding" + this, !0 ) ) || 0, d && ( c -= parseFloat( a.curCSS( b,
                "border" + this + "Width", !0 ) ) || 0 ), f && ( c -= parseFloat( a.curCSS( b, "margin" +
                this, !0 ) ) || 0 )
            } ), c
          }
          var e = d === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
            f = d.toLowerCase(),
            g = {
              innerWidth: a.fn.innerWidth,
              innerHeight: a.fn.innerHeight,
              outerWidth: a.fn.outerWidth,
              outerHeight: a.fn.outerHeight
            };
          a.fn[ "inner" + d ] = function ( c ) {
            return c === b ? g[ "inner" + d ].call( this ) : this.each( function () {
              a( this ).css( f, h( this, c ) + "px" )
            } )
          }, a.fn[ "outer" + d ] = function ( b, c ) {
            return typeof b != "number" ? g[ "outer" + d ].call( this, b ) : this.each( function () {
              a( this ).css( f, h( this, b, !0, c ) + "px" )
            } )
          }
        } ), a.extend( a.expr[ ":" ], {
          data: a.expr.createPseudo ? a.expr.createPseudo( function ( b ) {
            return function ( c ) {
              return !!a.data( c, b )
            }
          } ) : function ( b, c, d ) {
            return !!a.data( b, d[ 3 ] )
          },
          focusable: function ( b ) {
            return c( b, !isNaN( a.attr( b, "tabindex" ) ) )
          },
          tabbable: function ( b ) {
            var d = a.attr( b, "tabindex" ),
              e = isNaN( d );
            return ( e || d >= 0 ) && c( b, !e )
          }
        } ), a( function () {
          var b = document.body,
            c = b.appendChild( c = document.createElement( "div" ) );
          c.offsetHeight, a.extend( c.style, {
              minHeight: "100px",
              height: "auto",
              padding: 0,
              borderWidth: 0
            } ), a.support.minHeight = c.offsetHeight === 100, a.support.selectstart = "onselectstart" in c, b
            .removeChild( c ).style.display = "none"
        } ), a.curCSS || ( a.curCSS = a.css ), a.extend( a.ui, {
          plugin: {
            add: function ( b, c, d ) {
              var e = a.ui[ b ].prototype;
              for ( var f in d ) e.plugins[ f ] = e.plugins[ f ] || [], e.plugins[ f ].push( [ c, d[ f ] ] )
            },
            call: function ( a, b, c ) {
              var d = a.plugins[ b ];
              if ( !d || !a.element[ 0 ].parentNode ) return;
              for ( var e = 0; e < d.length; e++ ) a.options[ d[ e ][ 0 ] ] && d[ e ][ 1 ].apply( a.element, c )
            }
          },
          contains: function ( a, b ) {
            return document.compareDocumentPosition ? a.compareDocumentPosition( b ) & 16 : a !== b && a.contains(
              b )
          },
          hasScroll: function ( b, c ) {
            if ( a( b ).css( "overflow" ) === "hidden" ) return !1;
            var d = c && c === "left" ? "scrollLeft" : "scrollTop",
              e = !1;
            return b[ d ] > 0 ? !0 : ( b[ d ] = 1, e = b[ d ] > 0, b[ d ] = 0, e )
          },
          isOverAxis: function ( a, b, c ) {
            return a > b && a < b + c
          },
          isOver: function ( b, c, d, e, f, g ) {
            return a.ui.isOverAxis( b, d, f ) && a.ui.isOverAxis( c, e, g )
          }
        } )
      } )( jQuery );;
      /*! jQuery UI - v1.8.24 - 2012-09-28
              /* jquery.ui.widget.js */
      ( function ( a, b ) {
        if ( a.cleanData ) {
          var c = a.cleanData;
          a.cleanData = function ( b ) {
            for ( var d = 0, e;
              ( e = b[ d ] ) != null; d++ ) try {
              a( e ).triggerHandler( "remove" )
            } catch ( f ) {}
            c( b )
          }
        } else {
          var d = a.fn.remove;
          a.fn.remove = function ( b, c ) {
            return this.each( function () {
              return c || ( !b || a.filter( b, [ this ] ).length ) && a( "*", this ).add( [ this ] ).each(
                function () {
                  try {
                    a( this ).triggerHandler( "remove" )
                  } catch ( b ) {}
                } ), d.call( a( this ), b, c )
            } )
          }
        }
        a.widget = function ( b, c, d ) {
          var e = b.split( "." )[ 0 ],
            f;
          b = b.split( "." )[ 1 ], f = e + "-" + b, d || ( d = c, c = a.Widget ), a.expr[ ":" ][ f ] = function (
          c ) {
            return !!a.data( c, b )
          }, a[ e ] = a[ e ] || {}, a[ e ][ b ] = function ( a, b ) {
            arguments.length && this._createWidget( a, b )
          };
          var g = new c;
          g.options = a.extend( !0, {}, g.options ), a[ e ][ b ].prototype = a.extend( !0, g, {
            namespace: e,
            widgetName: b,
            widgetEventPrefix: a[ e ][ b ].prototype.widgetEventPrefix || b,
            widgetBaseClass: f
          }, d ), a.widget.bridge( b, a[ e ][ b ] )
        }, a.widget.bridge = function ( c, d ) {
          a.fn[ c ] = function ( e ) {
            var f = typeof e == "string",
              g = Array.prototype.slice.call( arguments, 1 ),
              h = this;
            return e = !f && g.length ? a.extend.apply( null, [ !0, e ].concat( g ) ) : e, f && e.charAt( 0 ) ===
              "_" ? h : ( f ? this.each( function () {
                var d = a.data( this, c ),
                  f = d && a.isFunction( d[ e ] ) ? d[ e ].apply( d, g ) : d;
                if ( f !== d && f !== b ) return h = f, !1
              } ) : this.each( function () {
                var b = a.data( this, c );
                b ? b.option( e || {} )._init() : a.data( this, c, new d( e, this ) )
              } ), h )
          }
        }, a.Widget = function ( a, b ) {
          arguments.length && this._createWidget( a, b )
        }, a.Widget.prototype = {
          widgetName: "widget",
          widgetEventPrefix: "",
          options: {
            disabled: !1
          },
          _createWidget: function ( b, c ) {
            a.data( c, this.widgetName, this ), this.element = a( c ), this.options = a.extend( !0, {}, this
              .options, this._getCreateOptions(), b );
            var d = this;
            this.element.bind( "remove." + this.widgetName, function () {
              d.destroy()
            } ), this._create(), this._trigger( "create" ), this._init()
          },
          _getCreateOptions: function () {
            return a.metadata && a.metadata.get( this.element[ 0 ] )[ this.widgetName ]
          },
          _create: function () {},
          _init: function () {},
          destroy: function () {
            this.element.unbind( "." + this.widgetName ).removeData( this.widgetName ), this.widget().unbind( "." +
              this.widgetName ).removeAttr( "aria-disabled" ).removeClass( this.widgetBaseClass + "-disabled " +
              "ui-state-disabled" )
          },
          widget: function () {
            return this.element
          },
          option: function ( c, d ) {
            var e = c;
            if ( arguments.length === 0 ) return a.extend( {}, this.options );
            if ( typeof c == "string" ) {
              if ( d === b ) return this.options[ c ];
              e = {}, e[ c ] = d
            }
            return this._setOptions( e ), this
          },
          _setOptions: function ( b ) {
            var c = this;
            return a.each( b, function ( a, b ) {
              c._setOption( a, b )
            } ), this
          },
          _setOption: function ( a, b ) {
            return this.options[ a ] = b, a === "disabled" && this.widget()[ b ? "addClass" : "removeClass" ]( this
              .widgetBaseClass + "-disabled" + " " + "ui-state-disabled" ).attr( "aria-disabled", b ), this
          },
          enable: function () {
            return this._setOption( "disabled", !1 )
          },
          disable: function () {
            return this._setOption( "disabled", !0 )
          },
          _trigger: function ( b, c, d ) {
            var e, f, g = this.options[ b ];
            d = d || {}, c = a.Event( c ), c.type = ( b === this.widgetEventPrefix ? b : this.widgetEventPrefix +
              b ).toLowerCase(), c.target = this.element[ 0 ], f = c.originalEvent;
            if ( f )
              for ( e in f ) e in c || ( c[ e ] = f[ e ] );
            return this.element.trigger( c, d ), !( a.isFunction( g ) && g.call( this.element[ 0 ], c, d ) === !1 ||
              c.isDefaultPrevented() )
          }
        }
      } )( jQuery );;
      /*! jQuery UI - v1.8.24 - 2012-09-28
              /* jquery.ui.position.js */
      ( function ( a, b ) {
        a.ui = a.ui || {};
        var c = /left|center|right/,
          d = /top|center|bottom/,
          e = "center",
          f = {},
          g = a.fn.position,
          h = a.fn.offset;
        a.fn.position = function ( b ) {
            if ( !b || !b.of ) return g.apply( this, arguments );
            b = a.extend( {}, b );
            var h = a( b.of ),
              i = h[ 0 ],
              j = ( b.collision || "flip" ).split( " " ),
              k = b.offset ? b.offset.split( " " ) : [ 0, 0 ],
              l, m, n;
            return i.nodeType === 9 ? ( l = h.width(), m = h.height(), n = {
                top: 0,
                left: 0
              } ) : i.setTimeout ? ( l = h.width(), m = h.height(), n = {
                top: h.scrollTop(),
                left: h.scrollLeft()
              } ) : i.preventDefault ? ( b.at = "left top", l = m = 0, n = {
                top: b.of.pageY,
                left: b.of.pageX
              } ) : ( l = h.outerWidth(), m = h.outerHeight(), n = h.offset() ), a.each( [ "my", "at" ], function () {
                var a = ( b[ this ] || "" ).split( " " );
                a.length === 1 && ( a = c.test( a[ 0 ] ) ? a.concat( [ e ] ) : d.test( a[ 0 ] ) ? [ e ].concat( a ) :
                  [ e, e ] ), a[ 0 ] = c.test( a[ 0 ] ) ? a[ 0 ] : e, a[ 1 ] = d.test( a[ 1 ] ) ? a[ 1 ] : e, b[
                  this ] = a
              } ), j.length === 1 && ( j[ 1 ] = j[ 0 ] ), k[ 0 ] = parseInt( k[ 0 ], 10 ) || 0, k.length === 1 && ( k[
                1 ] = k[ 0 ] ), k[ 1 ] = parseInt( k[ 1 ], 10 ) || 0, b.at[ 0 ] === "right" ? n.left += l : b.at[
              0 ] === e && ( n.left += l / 2 ), b.at[ 1 ] === "bottom" ? n.top += m : b.at[ 1 ] === e && ( n.top += m /
                2 ), n.left += k[ 0 ], n.top += k[ 1 ], this.each( function () {
                var c = a( this ),
                  d = c.outerWidth(),
                  g = c.outerHeight(),
                  h = parseInt( a.curCSS( this, "marginLeft", !0 ) ) || 0,
                  i = parseInt( a.curCSS( this, "marginTop", !0 ) ) || 0,
                  o = d + h + ( parseInt( a.curCSS( this, "marginRight", !0 ) ) || 0 ),
                  p = g + i + ( parseInt( a.curCSS( this, "marginBottom", !0 ) ) || 0 ),
                  q = a.extend( {}, n ),
                  r;
                b.my[ 0 ] === "right" ? q.left -= d : b.my[ 0 ] === e && ( q.left -= d / 2 ), b.my[ 1 ] === "bottom" ?
                  q.top -= g : b.my[ 1 ] === e && ( q.top -= g / 2 ), f.fractions || ( q.left = Math.round( q.left ),
                    q.top = Math.round( q.top ) ), r = {
                    left: q.left - h,
                    top: q.top - i
                  }, a.each( [ "left", "top" ], function ( c, e ) {
                    a.ui.position[ j[ c ] ] && a.ui.position[ j[ c ] ][ e ]( q, {
                      targetWidth: l,
                      targetHeight: m,
                      elemWidth: d,
                      elemHeight: g,
                      collisionPosition: r,
                      collisionWidth: o,
                      collisionHeight: p,
                      offset: k,
                      my: b.my,
                      at: b.at
                    } )
                  } ), a.fn.bgiframe && c.bgiframe(), c.offset( a.extend( q, {
                    using: b.using
                  } ) )
              } )
          }, a.ui.position = {
            fit: {
              left: function ( b, c ) {
                var d = a( window ),
                  e = c.collisionPosition.left + c.collisionWidth - d.width() - d.scrollLeft();
                b.left = e > 0 ? b.left - e : Math.max( b.left - c.collisionPosition.left, b.left )
              },
              top: function ( b, c ) {
                var d = a( window ),
                  e = c.collisionPosition.top + c.collisionHeight - d.height() - d.scrollTop();
                b.top = e > 0 ? b.top - e : Math.max( b.top - c.collisionPosition.top, b.top )
              }
            },
            flip: {
              left: function ( b, c ) {
                if ( c.at[ 0 ] === e ) return;
                var d = a( window ),
                  f = c.collisionPosition.left + c.collisionWidth - d.width() - d.scrollLeft(),
                  g = c.my[ 0 ] === "left" ? -c.elemWidth : c.my[ 0 ] === "right" ? c.elemWidth : 0,
                  h = c.at[ 0 ] === "left" ? c.targetWidth : -c.targetWidth,
                  i = -2 * c.offset[ 0 ];
                b.left += c.collisionPosition.left < 0 ? g + h + i : f > 0 ? g + h + i : 0
              },
              top: function ( b, c ) {
                if ( c.at[ 1 ] === e ) return;
                var d = a( window ),
                  f = c.collisionPosition.top + c.collisionHeight - d.height() - d.scrollTop(),
                  g = c.my[ 1 ] === "top" ? -c.elemHeight : c.my[ 1 ] === "bottom" ? c.elemHeight : 0,
                  h = c.at[ 1 ] === "top" ? c.targetHeight : -c.targetHeight,
                  i = -2 * c.offset[ 1 ];
                b.top += c.collisionPosition.top < 0 ? g + h + i : f > 0 ? g + h + i : 0
              }
            }
          }, a.offset.setOffset || ( a.offset.setOffset = function ( b, c ) {
            /static/.test( a.curCSS( b, "position" ) ) && ( b.style.position = "relative" );
            var d = a( b ),
              e = d.offset(),
              f = parseInt( a.curCSS( b, "top", !0 ), 10 ) || 0,
              g = parseInt( a.curCSS( b, "left", !0 ), 10 ) || 0,
              h = {
                top: c.top - e.top + f,
                left: c.left - e.left + g
              };
            "using" in c ? c.using.call( b, h ) : d.css( h )
          }, a.fn.offset = function ( b ) {
            var c = this[ 0 ];
            return !c || !c.ownerDocument ? null : b ? a.isFunction( b ) ? this.each( function ( c ) {
              a( this ).offset( b.call( this, c, a( this ).offset() ) )
            } ) : this.each( function () {
              a.offset.setOffset( this, b )
            } ) : h.call( this )
          } ), a.curCSS || ( a.curCSS = a.css ),
          function () {
            var b = document.getElementsByTagName( "body" )[ 0 ],
              c = document.createElement( "div" ),
              d, e, g, h, i;
            d = document.createElement( b ? "div" : "body" ), g = {
              visibility: "hidden",
              width: 0,
              height: 0,
              border: 0,
              margin: 0,
              background: "none"
            }, b && a.extend( g, {
              position: "absolute",
              left: "-1000px",
              top: "-1000px"
            } );
            for ( var j in g ) d.style[ j ] = g[ j ];
            d.appendChild( c ), e = b || document.documentElement, e.insertBefore( d, e.firstChild ), c.style.cssText =
              "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;", h = a( c )
              .offset( function ( a, b ) {
                return b
              } ).offset(), d.innerHTML = "", e.removeChild( d ), i = h.top + h.left + ( b ? 2e3 : 0 ), f.fractions =
              i > 21 && i < 22
          }()
      } )( jQuery );;
      /*! jQuery UI - v1.8.24 - 2012-09-28
              /* jquery.effects.core.js */
      jQuery.effects || function ( a, b ) {
        function c( b ) {
          var c;
          return b && b.constructor == Array && b.length == 3 ? b : ( c =
              /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec( b ) ) ? [ parseInt( c[ 1 ], 10 ),
              parseInt( c[ 2 ], 10 ), parseInt( c[ 3 ], 10 )
            ] : ( c = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/
              .exec( b ) ) ? [ parseFloat( c[ 1 ] ) * 2.55, parseFloat( c[ 2 ] ) * 2.55, parseFloat( c[ 3 ] ) * 2.55 ] :
            ( c = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec( b ) ) ? [ parseInt( c[ 1 ], 16 ), parseInt(
              c[ 2 ], 16 ), parseInt( c[ 3 ], 16 ) ] : ( c = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec( b ) ) ? [
              parseInt( c[ 1 ] + c[ 1 ], 16 ), parseInt( c[ 2 ] + c[ 2 ], 16 ), parseInt( c[ 3 ] + c[ 3 ], 16 )
            ] : ( c = /rgba\(0, 0, 0, 0\)/.exec( b ) ) ? e.transparent : e[ a.trim( b ).toLowerCase() ]
        }
  
        function d( b, d ) {
          var e;
          do {
            e = ( a.curCSS || a.css )( b, d );
            if ( e != "" && e != "transparent" || a.nodeName( b, "body" ) ) break;
            d = "backgroundColor"
          } while ( b = b.parentNode );
          return c( e )
        }
  
        function h() {
          var a = document.defaultView ? document.defaultView.getComputedStyle( this, null ) : this.currentStyle,
            b = {},
            c, d;
          if ( a && a.length && a[ 0 ] && a[ a[ 0 ] ] ) {
            var e = a.length;
            while ( e-- ) c = a[ e ], typeof a[ c ] == "string" && ( d = c.replace( /\-(\w)/g, function ( a, b ) {
              return b.toUpperCase()
            } ), b[ d ] = a[ c ] )
          } else
            for ( c in a ) typeof a[ c ] == "string" && ( b[ c ] = a[ c ] );
          return b
        }
  
        function i( b ) {
          var c, d;
          for ( c in b ) d = b[ c ], ( d == null || a.isFunction( d ) || c in g || /scrollbar/.test( c ) || !/color/i
            .test( c ) && isNaN( parseFloat( d ) ) ) && delete b[ c ];
          return b
        }
  
        function j( a, b ) {
          var c = {
              _: 0
            },
            d;
          for ( d in b ) a[ d ] != b[ d ] && ( c[ d ] = b[ d ] );
          return c
        }
  
        function k( b, c, d, e ) {
          typeof b == "object" && ( e = c, d = null, c = b, b = c.effect ), a.isFunction( c ) && ( e = c, d = null,
          c = {} );
          if ( typeof c == "number" || a.fx.speeds[ c ] ) e = d, d = c, c = {};
          return a.isFunction( d ) && ( e = d, d = null ), c = c || {}, d = d || c.duration, d = a.fx.off ? 0 :
            typeof d == "number" ? d : d in a.fx.speeds ? a.fx.speeds[ d ] : a.fx.speeds._default, e = e || c.complete,
            [ b, c, d, e ]
        }
  
        function l( b ) {
          return !b || typeof b == "number" || a.fx.speeds[ b ] ? !0 : typeof b == "string" && !a.effects[ b ] ? !0 : !1
        }
        a.effects = {}, a.each( [ "backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor",
          "borderTopColor", "borderColor", "color", "outlineColor"
        ], function ( b, e ) {
          a.fx.step[ e ] = function ( a ) {
            a.colorInit || ( a.start = d( a.elem, e ), a.end = c( a.end ), a.colorInit = !0 ), a.elem.style[ e ] =
              "rgb(" + Math.max( Math.min( parseInt( a.pos * ( a.end[ 0 ] - a.start[ 0 ] ) + a.start[ 0 ], 10 ),
                255 ), 0 ) + "," + Math.max( Math.min( parseInt( a.pos * ( a.end[ 1 ] - a.start[ 1 ] ) + a.start[
                1 ], 10 ), 255 ), 0 ) + "," + Math.max( Math.min( parseInt( a.pos * ( a.end[ 2 ] - a.start[
                2 ] ) + a.start[ 2 ], 10 ), 255 ), 0 ) + ")"
          }
        } );
        var e = {
            aqua: [ 0, 255, 255 ],
            azure: [ 240, 255, 255 ],
            beige: [ 245, 245, 220 ],
            black: [ 0, 0, 0 ],
            blue: [ 0, 0, 255 ],
            brown: [ 165, 42, 42 ],
            cyan: [ 0, 255, 255 ],
            darkblue: [ 0, 0, 139 ],
            darkcyan: [ 0, 139, 139 ],
            darkgrey: [ 169, 169, 169 ],
            darkgreen: [ 0, 100, 0 ],
            darkkhaki: [ 189, 183, 107 ],
            darkmagenta: [ 139, 0, 139 ],
            darkolivegreen: [ 85, 107, 47 ],
            darkorange: [ 255, 140, 0 ],
            darkorchid: [ 153, 50, 204 ],
            darkred: [ 139, 0, 0 ],
            darksalmon: [ 233, 150, 122 ],
            darkviolet: [ 148, 0, 211 ],
            fuchsia: [ 255, 0, 255 ],
            gold: [ 255, 215, 0 ],
            green: [ 0, 128, 0 ],
            indigo: [ 75, 0, 130 ],
            khaki: [ 240, 230, 140 ],
            lightblue: [ 173, 216, 230 ],
            lightcyan: [ 224, 255, 255 ],
            lightgreen: [ 144, 238, 144 ],
            lightgrey: [ 211, 211, 211 ],
            lightpink: [ 255, 182, 193 ],
            lightyellow: [ 255, 255, 224 ],
            lime: [ 0, 255, 0 ],
            magenta: [ 255, 0, 255 ],
            maroon: [ 128, 0, 0 ],
            navy: [ 0, 0, 128 ],
            olive: [ 128, 128, 0 ],
            orange: [ 255, 165, 0 ],
            pink: [ 255, 192, 203 ],
            purple: [ 128, 0, 128 ],
            violet: [ 128, 0, 128 ],
            red: [ 255, 0, 0 ],
            silver: [ 192, 192, 192 ],
            white: [ 255, 255, 255 ],
            yellow: [ 255, 255, 0 ],
            transparent: [ 255, 255, 255 ]
          },
          f = [ "add", "remove", "toggle" ],
          g = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
          };
        a.effects.animateClass = function ( b, c, d, e ) {
          return a.isFunction( d ) && ( e = d, d = null ), this.queue( function () {
            var g = a( this ),
              k = g.attr( "style" ) || " ",
              l = i( h.call( this ) ),
              m, n = g.attr( "class" ) || "";
            a.each( f, function ( a, c ) {
              b[ c ] && g[ c + "Class" ]( b[ c ] )
            } ), m = i( h.call( this ) ), g.attr( "class", n ), g.animate( j( l, m ), {
              queue: !1,
              duration: c,
              easing: d,
              complete: function () {
                a.each( f, function ( a, c ) {
                    b[ c ] && g[ c + "Class" ]( b[ c ] )
                  } ), typeof g.attr( "style" ) == "object" ? ( g.attr( "style" ).cssText = "", g.attr(
                    "style" ).cssText = k ) : g.attr( "style", k ), e && e.apply( this, arguments ), a
                  .dequeue( this )
              }
            } )
          } )
        }, a.fn.extend( {
          _addClass: a.fn.addClass,
          addClass: function ( b, c, d, e ) {
            return c ? a.effects.animateClass.apply( this, [ {
              add: b
            }, c, d, e ] ) : this._addClass( b )
          },
          _removeClass: a.fn.removeClass,
          removeClass: function ( b, c, d, e ) {
            return c ? a.effects.animateClass.apply( this, [ {
              remove: b
            }, c, d, e ] ) : this._removeClass( b )
          },
          _toggleClass: a.fn.toggleClass,
          toggleClass: function ( c, d, e, f, g ) {
            return typeof d == "boolean" || d === b ? e ? a.effects.animateClass.apply( this, [ d ? {
              add: c
            } : {
              remove: c
            }, e, f, g ] ) : this._toggleClass( c, d ) : a.effects.animateClass.apply( this, [ {
              toggle: c
            }, d, e, f ] )
          },
          switchClass: function ( b, c, d, e, f ) {
            return a.effects.animateClass.apply( this, [ {
              add: c,
              remove: b
            }, d, e, f ] )
          }
        } ), a.extend( a.effects, {
          version: "1.8.24",
          save: function ( a, b ) {
            for ( var c = 0; c < b.length; c++ ) b[ c ] !== null && a.data( "ec.storage." + b[ c ], a[ 0 ].style[
              b[ c ] ] )
          },
          restore: function ( a, b ) {
            for ( var c = 0; c < b.length; c++ ) b[ c ] !== null && a.css( b[ c ], a.data( "ec.storage." + b[
              c ] ) )
          },
          setMode: function ( a, b ) {
            return b == "toggle" && ( b = a.is( ":hidden" ) ? "show" : "hide" ), b
          },
          getBaseline: function ( a, b ) {
            var c, d;
            switch ( a[ 0 ] ) {
              case "top":
                c = 0;
                break;
              case "middle":
                c = .5;
                break;
              case "bottom":
                c = 1;
                break;
              default:
                c = a[ 0 ] / b.height
            }
            switch ( a[ 1 ] ) {
              case "left":
                d = 0;
                break;
              case "center":
                d = .5;
                break;
              case "right":
                d = 1;
                break;
              default:
                d = a[ 1 ] / b.width
            }
            return {
              x: d,
              y: c
            }
          },
          createWrapper: function ( b ) {
            if ( b.parent().is( ".ui-effects-wrapper" ) ) return b.parent();
            var c = {
                width: b.outerWidth( !0 ),
                height: b.outerHeight( !0 ),
                "float": b.css( "float" )
              },
              d = a( "<div></div>" ).addClass( "ui-effects-wrapper" ).css( {
                fontSize: "100%",
                background: "transparent",
                border: "none",
                margin: 0,
                padding: 0
              } ),
              e = document.activeElement;
            try {
              e.id
            } catch ( f ) {
              e = document.body
            }
            return b.wrap( d ), ( b[ 0 ] === e || a.contains( b[ 0 ], e ) ) && a( e ).focus(), d = b.parent(), b
              .css( "position" ) == "static" ? ( d.css( {
                position: "relative"
              } ), b.css( {
                position: "relative"
              } ) ) : ( a.extend( c, {
                position: b.css( "position" ),
                zIndex: b.css( "z-index" )
              } ), a.each( [ "top", "left", "bottom", "right" ], function ( a, d ) {
                c[ d ] = b.css( d ), isNaN( parseInt( c[ d ], 10 ) ) && ( c[ d ] = "auto" )
              } ), b.css( {
                position: "relative",
                top: 0,
                left: 0,
                right: "auto",
                bottom: "auto"
              } ) ), d.css( c ).show()
          },
          removeWrapper: function ( b ) {
            var c, d = document.activeElement;
            return b.parent().is( ".ui-effects-wrapper" ) ? ( c = b.parent().replaceWith( b ), ( b[ 0 ] === d || a
              .contains( b[ 0 ], d ) ) && a( d ).focus(), c ) : b
          },
          setTransition: function ( b, c, d, e ) {
            return e = e || {}, a.each( c, function ( a, c ) {
              var f = b.cssUnit( c );
              f[ 0 ] > 0 && ( e[ c ] = f[ 0 ] * d + f[ 1 ] )
            } ), e
          }
        } ), a.fn.extend( {
          effect: function ( b, c, d, e ) {
            var f = k.apply( this, arguments ),
              g = {
                options: f[ 1 ],
                duration: f[ 2 ],
                callback: f[ 3 ]
              },
              h = g.options.mode,
              i = a.effects[ b ];
            return a.fx.off || !i ? h ? this[ h ]( g.duration, g.callback ) : this.each( function () {
              g.callback && g.callback.call( this )
            } ) : i.call( this, g )
          },
          _show: a.fn.show,
          show: function ( a ) {
            if ( l( a ) ) return this._show.apply( this, arguments );
            var b = k.apply( this, arguments );
            return b[ 1 ].mode = "show", this.effect.apply( this, b )
          },
          _hide: a.fn.hide,
          hide: function ( a ) {
            if ( l( a ) ) return this._hide.apply( this, arguments );
            var b = k.apply( this, arguments );
            return b[ 1 ].mode = "hide", this.effect.apply( this, b )
          },
          __toggle: a.fn.toggle,
          toggle: function ( b ) {
            if ( l( b ) || typeof b == "boolean" || a.isFunction( b ) ) return this.__toggle.apply( this,
              arguments );
            var c = k.apply( this, arguments );
            return c[ 1 ].mode = "toggle", this.effect.apply( this, c )
          },
          cssUnit: function ( b ) {
            var c = this.css( b ),
              d = [];
            return a.each( [ "em", "px", "%", "pt" ], function ( a, b ) {
              c.indexOf( b ) > 0 && ( d = [ parseFloat( c ), b ] )
            } ), d
          }
        } );
        var m = {};
        a.each( [ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function ( a, b ) {
          m[ b ] = function ( b ) {
            return Math.pow( b, a + 2 )
          }
        } ), a.extend( m, {
          Sine: function ( a ) {
            return 1 - Math.cos( a * Math.PI / 2 )
          },
          Circ: function ( a ) {
            return 1 - Math.sqrt( 1 - a * a )
          },
          Elastic: function ( a ) {
            return a === 0 || a === 1 ? a : -Math.pow( 2, 8 * ( a - 1 ) ) * Math.sin( ( ( a - 1 ) * 80 - 7.5 ) *
              Math.PI / 15 )
          },
          Back: function ( a ) {
            return a * a * ( 3 * a - 2 )
          },
          Bounce: function ( a ) {
            var b, c = 4;
            while ( a < ( ( b = Math.pow( 2, --c ) ) - 1 ) / 11 );
            return 1 / Math.pow( 4, 3 - c ) - 7.5625 * Math.pow( ( b * 3 - 2 ) / 22 - a, 2 )
          }
        } ), a.each( m, function ( b, c ) {
          a.easing[ "easeIn" + b ] = c, a.easing[ "easeOut" + b ] = function ( a ) {
            return 1 - c( 1 - a )
          }, a.easing[ "easeInOut" + b ] = function ( a ) {
            return a < .5 ? c( a * 2 ) / 2 : c( a * -2 + 2 ) / -2 + 1
          }
        } )
      }( jQuery );;
      /*! jQuery UI - v1.8.24 - 2012-09-28
              /* jquery.effects.transfer.js */
      ( function ( a, b ) {
        a.effects.transfer = function ( b ) {
          return this.queue( function () {
            var c = a( this ),
              d = a( b.options.to ),
              e = d.offset(),
              f = {
                top: e.top,
                left: e.left,
                height: d.innerHeight(),
                width: d.innerWidth()
              },
              g = c.offset(),
              h = a( '<div class="ui-effects-transfer"></div>' ).appendTo( document.body ).addClass( b.options
                .className ).css( {
                top: g.top,
                left: g.left,
                height: c.innerHeight(),
                width: c.innerWidth(),
                position: "absolute"
              } ).animate( f, b.duration, b.options.easing, function () {
                h.remove(), b.callback && b.callback.apply( c[ 0 ], arguments ), c.dequeue()
              } )
          } )
        }
      } )( jQuery );;
    </script>
  
    <script type="text/javascript">
      /* --- Dynatree Plugin - v1.2.4 https://github.com/mar10/dynatree --- */
      /* --- Slightly modified for use with Snap2HTML(in "_onClick: function(event) {" focus x3 was removed to prevent page from jumping around) */
      function _log( e, t ) {
        return;
        if ( !_canLog ) return;
        var n = Array.prototype.slice.apply( arguments, [ 1 ] ),
          r = new Date,
          i = r.getHours() + ":" + r.getMinutes() + ":" + r.getSeconds() + "." + r.getMilliseconds();
        n[ 0 ] = i + " - " + n[ 0 ];
        try {
          switch ( e ) {
            case "info":
              window.console.info.apply( window.console, n );
              break;
            case "warn":
              window.console.warn.apply( window.console, n );
              break;
            default:
              window.console.log.apply( window.console, n )
          }
        } catch ( s ) {
          window.console ? s.number === -2146827850 && window.console.log( n.join( ", " ) ) : _canLog = !1
        }
      }
  
      function _checkBrowser() {
        function n( e ) {
          e = e.toLowerCase();
          var t = /(chrome)[ \/]([\w.]+)/.exec( e ) || /(webkit)[ \/]([\w.]+)/.exec( e ) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( e ) || /(msie) ([\w.]+)/.exec( e ) || e.indexOf( "compatible" ) <
            0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( e ) || [];
          return {
            browser: t[ 1 ] || "",
            version: t[ 2 ] || "0"
          }
        }
        var e, t;
        return e = n( navigator.userAgent ), t = {}, e.browser && ( t[ e.browser ] = !0, t.version = e.version ), t
          .chrome ? t.webkit = !0 : t.webkit && ( t.safari = !0 ), t
      }
  
      function logMsg( e ) {
        Array.prototype.unshift.apply( arguments, [ "debug" ] ), _log.apply( this, arguments )
      }
      var _canLog = !0,
        BROWSER = jQuery.browser || _checkBrowser(),
        getDynaTreePersistData = null,
        DTNodeStatus_Error = -1,
        DTNodeStatus_Loading = 1,
        DTNodeStatus_Ok = 0;
      ( function ( $ ) {
        function getDtNodeFromElement( e ) {
          return alert( "getDtNodeFromElement is deprecated" ), $.ui.dynatree.getNode( e )
        }
  
        function noop() {}
  
        function versionCompare( e, t ) {
          var n = ( "" + e ).split( "." ),
            r = ( "" + t ).split( "." ),
            i = Math.min( n.length, r.length ),
            s, o, u;
          for ( u = 0; u < i; u++ ) {
            s = parseInt( n[ u ], 10 ), o = parseInt( r[ u ], 10 ), isNaN( s ) && ( s = n[ u ] ), isNaN( o ) && ( o = r[
              u ] );
            if ( s == o ) continue;
            return s > o ? 1 : s < o ? -1 : NaN
          }
          return n.length === r.length ? 0 : n.length < r.length ? -1 : 1
        }
  
        function _initDragAndDrop( e ) {
          var t = e.options.dnd || null;
          t && ( t.onDragStart || t.onDrop ) && _registerDnd(), t && t.onDragStart && e.$tree.draggable( {
            addClasses: !1,
            appendTo: "body",
            containment: !1,
            delay: 0,
            distance: 4,
            revert: !1,
            scroll: !0,
            scrollSpeed: 7,
            scrollSensitivity: 10,
            connectToDynatree: !0,
            helper: function ( e ) {
              var t = $.ui.dynatree.getNode( e.target );
              return t ? t.tree._onDragEvent( "helper", t, null, e, null, null ) : "<div></div>"
            },
            start: function ( e, t ) {
              var n = t.helper.data( "dtSourceNode" );
              return !!n
            },
            _last: null
          } ), t && t.onDrop && e.$tree.droppable( {
            addClasses: !1,
            tolerance: "intersect",
            greedy: !1,
            _last: null
          } )
        }
        var Class = {
            create: function () {
              return function () {
                this.initialize.apply( this, arguments )
              }
            }
          },
          DynaTreeNode = Class.create();
        DynaTreeNode.prototype = {
          initialize: function ( e, t, n ) {
            this.parent = e, this.tree = t, typeof n == "string" && ( n = {
                title: n
              } ), n.key ? n.key = "" + n.key : n.key = "_" + t._nodeCount++, this.data = $.extend( {}, $.ui
                .dynatree.nodedatadefaults, n ), this.li = null, this.span = null, this.ul = null, this.childList =
              null, this._isLoading = !1, this.hasSubSel = !1, this.bExpanded = !1, this.bSelected = !1
          },
          toString: function () {
            return "DynaTreeNode<" + this.data.key + ">: '" + this.data.title + "'"
          },
          toDict: function ( e, t ) {
            var n = $.extend( {}, this.data );
            n.activate = this.tree.activeNode === this, n.focus = this.tree.focusNode === this, n.expand = this
              .bExpanded, n.select = this.bSelected, t && t( n );
            if ( e && this.childList ) {
              n.children = [];
              for ( var r = 0, i = this.childList.length; r < i; r++ ) n.children.push( this.childList[ r ].toDict(
                !0, t ) )
            } else delete n.children;
            return n
          },
          fromDict: function ( e ) {
            var t = e.children;
            if ( t === undefined ) {
              this.data = $.extend( this.data, e ), this.render();
              return
            }
            e = $.extend( {}, e ), e.children = undefined, this.data = $.extend( this.data, e ), this
              .removeChildren(), this.addChild( t )
          },
          _getInnerHtml: function () {
            var e = this.tree,
              t = e.options,
              n = e.cache,
              r = this.getLevel(),
              i = this.data,
              s = "",
              o;
            r < t.minExpandLevel ? r > 1 && ( s += n.tagConnector ) : this.hasChildren() !== !1 ? s += n
              .tagExpander : s += n.tagConnector, t.checkbox && i.hideCheckbox !== !0 && !i.isStatusNode && ( s += n
                .tagCheckbox ), i.icon ? ( i.icon.charAt( 0 ) === "/" ? o = i.icon : o = t.imagePath + i.icon, s +=
                "<img src='" + o + "' alt='' />" ) : i.icon !== !1 && ( i.iconClass ? s += "<span class=' " + i
                .iconClass + "'></span>" : s += n.tagNodeIcon );
            var u = "";
            t.onCustomRender && ( u = t.onCustomRender.call( e, this ) || "" );
            if ( !u ) {
              var a = i.tooltip ? ' title="' + i.tooltip.replace( /\"/g, "&quot;" ) + '"' : "",
                f = i.href || "#";
              t.noLink || i.noLink ? u = '<span style="display:inline-block;" class="' + t.classNames.title + '"' +
                a + ">" + i.title + "</span>" : u = '<a href="' + f + '" class="' + t.classNames.title + '"' + a +
                ">" + i.title + "</a>"
            }
            return s += u, s
          },
          _fixOrder: function () {
            var e = this.childList;
            if ( !e || !this.ul ) return;
            var t = this.ul.firstChild;
            for ( var n = 0, r = e.length - 1; n < r; n++ ) {
              var i = e[ n ],
                s = t.dtnode;
              i !== s ? ( this.tree.logDebug( "_fixOrder: mismatch at index " + n + ": " + i + " != " + s ), this.ul
                .insertBefore( i.li, s.li ) ) : t = t.nextSibling
            }
          },
          render: function ( e, t ) {
            var n = this.tree,
              r = this.parent,
              i = this.data,
              s = n.options,
              o = s.classNames,
              u = this.isLastSibling(),
              a = !1;
            if ( !r && !this.ul ) this.li = this.span = null, this.ul = document.createElement( "ul" ), s
              .minExpandLevel > 1 ? this.ul.className = o.container + " " + o.noConnector : this.ul.className = o
              .container;
            else if ( r ) {
              this.li || ( a = !0, this.li = document.createElement( "li" ), this.li.dtnode = this, i.key && s
                .generateIds && ( this.li.id = s.idPrefix + i.key ), this.span = document.createElement( "span" ),
                this.span.className = o.title, this.li.appendChild( this.span ), r.ul || ( r.ul = document
                  .createElement( "ul" ), r.ul.style.display = "none", r.li.appendChild( r.ul ) ), r.ul
                .appendChild( this.li ) ), this.span.innerHTML = this._getInnerHtml();
              var f = [];
              f.push( o.node ), i.isFolder && f.push( o.folder ), this.bExpanded && f.push( o.expanded ), this
                .hasChildren() !== !1 && f.push( o.hasChildren ), i.isLazy && this.childList === null && f.push( o
                  .lazy ), u && f.push( o.lastsib ), this.bSelected && f.push( o.selected ), this.hasSubSel && f
                .push( o.partsel ), n.activeNode === this && f.push( o.active ), i.addClass && f.push( i.addClass ),
                f.push( o.combinedExpanderPrefix + ( this.bExpanded ? "e" : "c" ) + ( i.isLazy && this.childList ===
                  null ? "d" : "" ) + ( u ? "l" : "" ) ), f.push( o.combinedIconPrefix + ( this.bExpanded ? "e" :
                  "c" ) + ( i.isFolder ? "f" : "" ) ), this.span.className = f.join( " " ), this.li.className = u ?
                o.lastsib : "", a && s.onCreate && s.onCreate.call( n, this, this.span ), s.onRender && s.onRender
                .call( n, this, this.span )
            }
            if ( ( this.bExpanded || t === !0 ) && this.childList ) {
              for ( var l = 0, c = this.childList.length; l < c; l++ ) this.childList[ l ].render( !1, t );
              this._fixOrder()
            }
            if ( this.ul ) {
              var h = this.ul.style.display === "none",
                p = !!this.bExpanded;
              if ( e && s.fx && h === p ) {
                var d = s.fx.duration || 200;
                $( this.ul ).animate( s.fx, d )
              } else this.ul.style.display = this.bExpanded || !r ? "" : "none"
            }
          },
          getKeyPath: function ( e ) {
            var t = [];
            return this.visitParents( function ( e ) {
              e.parent && t.unshift( e.data.key )
            }, !e ), "/" + t.join( this.tree.options.keyPathSeparator )
          },
          getParent: function () {
            return this.parent
          },
          getChildren: function () {
            return this.hasChildren() === undefined ? undefined : this.childList
          },
          hasChildren: function () {
            if ( this.data.isLazy ) return this.childList === null || this.childList === undefined ? undefined :
              this.childList.length === 0 ? !1 : this.childList.length === 1 && this.childList[ 0 ]
            .isStatusNode() ? undefined : !0;
            return !!this.childList
          },
          isFirstSibling: function () {
            var e = this.parent;
            return !e || e.childList[ 0 ] === this
          },
          isLastSibling: function () {
            var e = this.parent;
            return !e || e.childList[ e.childList.length - 1 ] === this
          },
          isLoading: function () {
            return !!this._isLoading
          },
          getPrevSibling: function () {
            if ( !this.parent ) return null;
            var e = this.parent.childList;
            for ( var t = 1, n = e.length; t < n; t++ )
              if ( e[ t ] === this ) return e[ t - 1 ];
            return null
          },
          getNextSibling: function () {
            if ( !this.parent ) return null;
            var e = this.parent.childList;
            for ( var t = 0, n = e.length - 1; t < n; t++ )
              if ( e[ t ] === this ) return e[ t + 1 ];
            return null
          },
          isStatusNode: function () {
            return this.data.isStatusNode === !0
          },
          isChildOf: function ( e ) {
            return this.parent && this.parent === e
          },
          isDescendantOf: function ( e ) {
            if ( !e ) return !1;
            var t = this.parent;
            while ( t ) {
              if ( t === e ) return !0;
              t = t.parent
            }
            return !1
          },
          countChildren: function () {
            var e = this.childList;
            if ( !e ) return 0;
            var t = e.length;
            for ( var n = 0, r = t; n < r; n++ ) {
              var i = e[ n ];
              t += i.countChildren()
            }
            return t
          },
          sortChildren: function ( e, t ) {
            var n = this.childList;
            if ( !n ) return;
            e = e || function ( e, t ) {
              var n = e.data.title.toLowerCase(),
                r = t.data.title.toLowerCase();
              return n === r ? 0 : n > r ? 1 : -1
            }, n.sort( e );
            if ( t )
              for ( var r = 0, i = n.length; r < i; r++ ) n[ r ].childList && n[ r ].sortChildren( e,
              "$norender$" );
            t !== "$norender$" && this.render()
          },
          _setStatusNode: function ( e ) {
            var t = this.childList ? this.childList[ 0 ] : null;
            if ( !e ) {
              if ( t && t.isStatusNode() ) {
                try {
                  this.ul && ( this.ul.removeChild( t.li ), t.li = null )
                } catch ( n ) {}
                this.childList.length === 1 ? this.childList = [] : this.childList.shift()
              }
            } else t ? ( e.isStatusNode = !0, e.key = "_statusNode", t.data = e, t.render() ) : ( e.isStatusNode = !
              0, e.key = "_statusNode", t = this.addChild( e ) )
          },
          setLazyNodeStatus: function ( e, t ) {
            var n = t && t.tooltip ? t.tooltip : null,
              r = t && t.info ? " (" + t.info + ")" : "";
            switch ( e ) {
              case DTNodeStatus_Ok:
                this._setStatusNode( null ), $( this.span ).removeClass( this.tree.options.classNames.nodeLoading ),
                  this._isLoading = !1, this.tree.options.autoFocus && ( this === this.tree.tnRoot && this
                    .childList && this.childList.length > 0 ? this.childList[ 0 ].focus() : this.focus() );
                break;
              case DTNodeStatus_Loading:
                this._isLoading = !0, $( this.span ).addClass( this.tree.options.classNames.nodeLoading ), this
                  .parent || this._setStatusNode( {
                    title: this.tree.options.strings.loading + r,
                    tooltip: n,
                    addClass: this.tree.options.classNames.nodeWait
                  } );
                break;
              case DTNodeStatus_Error:
                this._isLoading = !1, this._setStatusNode( {
                  title: this.tree.options.strings.loadError + r,
                  tooltip: n,
                  addClass: this.tree.options.classNames.nodeError
                } );
                break;
              default:
                throw "Bad LazyNodeStatus: '" + e + "'."
            }
          },
          _parentList: function ( e, t ) {
            var n = [],
              r = t ? this : this.parent;
            while ( r )( e || r.parent ) && n.unshift( r ), r = r.parent;
            return n
          },
          getLevel: function () {
            var e = 0,
              t = this.parent;
            while ( t ) e++, t = t.parent;
            return e
          },
          _getTypeForOuterNodeEvent: function ( e ) {
            var t = this.tree.options.classNames,
              n = e.target;
            if ( n.className.indexOf( t.node ) < 0 ) return null;
            var r = e.pageX - n.offsetLeft,
              i = e.pageY - n.offsetTop;
            for ( var s = 0, o = n.childNodes.length; s < o; s++ ) {
              var u = n.childNodes[ s ],
                a = u.offsetLeft - n.offsetLeft,
                f = u.offsetTop - n.offsetTop,
                l = u.clientWidth,
                c = u.clientHeight;
              if ( r >= a && r <= a + l && i >= f && i <= f + c ) {
                if ( u.className == t.title ) return "title";
                if ( u.className == t.expander ) return "expander";
                if ( u.className == t.checkbox ) return "checkbox";
                if ( u.className == t.nodeIcon ) return "icon"
              }
            }
            return "prefix"
          },
          getEventTargetType: function ( e ) {
            var t = e && e.target ? e.target.className : "",
              n = this.tree.options.classNames;
            return t === n.title ? "title" : t === n.expander ? "expander" : t === n.checkbox ? "checkbox" : t === n
              .nodeIcon ? "icon" : t === n.empty || t === n.vline || t === n.connector ? "prefix" : t.indexOf( n
                .node ) >= 0 ? this._getTypeForOuterNodeEvent( e ) : null
          },
          isVisible: function () {
            var e = this._parentList( !0, !1 );
            for ( var t = 0, n = e.length; t < n; t++ )
              if ( !e[ t ].bExpanded ) return !1;
            return !0
          },
          makeVisible: function () {
            var e = this._parentList( !0, !1 );
            for ( var t = 0, n = e.length; t < n; t++ ) e[ t ]._expand( !0 )
          },
          focus: function () {
            this.makeVisible();
            try {
              $( this.span ).find( ">a" ).focus()
            } catch ( e ) {}
          },
          isFocused: function () {
            return this.tree.tnFocused === this
          },
          _activate: function ( e, t ) {
            this.tree.logDebug( "dtnode._activate(%o, fireEvents=%o) - %o", e, t, this );
            var n = this.tree.options;
            if ( this.data.isStatusNode ) return;
            if ( t && n.onQueryActivate && n.onQueryActivate.call( this.tree, e, this ) === !1 ) return;
            if ( e ) {
              if ( this.tree.activeNode ) {
                if ( this.tree.activeNode === this ) return;
                this.tree.activeNode.deactivate()
              }
              n.activeVisible && this.makeVisible(), this.tree.activeNode = this, n.persist && $.cookie( n
                  .cookieId + "-active", this.data.key, n.cookie ), this.tree.persistence.activeKey = this.data.key,
                $( this.span ).addClass( n.classNames.active ), t && n.onActivate && n.onActivate.call( this.tree,
                  this )
            } else if ( this.tree.activeNode === this ) {
              if ( n.onQueryActivate && n.onQueryActivate.call( this.tree, !1, this ) === !1 ) return;
              $( this.span ).removeClass( n.classNames.active ), n.persist && $.cookie( n.cookieId + "-active", "",
                  n.cookie ), this.tree.persistence.activeKey = null, this.tree.activeNode = null, t && n
                .onDeactivate && n.onDeactivate.call( this.tree, this )
            }
          },
          activate: function () {
            this._activate( !0, !0 )
          },
          activateSilently: function () {
            this._activate( !0, !1 )
          },
          deactivate: function () {
            this._activate( !1, !0 )
          },
          isActive: function () {
            return this.tree.activeNode === this
          },
          _userActivate: function () {
            var e = !0,
              t = !1;
            if ( this.data.isFolder ) switch ( this.tree.options.clickFolderMode ) {
              case 2:
                e = !1, t = !0;
                break;
              case 3:
                e = t = !0
            }
            this.parent === null && ( t = !1 ), t && ( this.toggleExpand(), this.focus() ), e && this.activate()
          },
          _setSubSel: function ( e ) {
            e ? ( this.hasSubSel = !0, $( this.span ).addClass( this.tree.options.classNames.partsel ) ) : ( this
              .hasSubSel = !1, $( this.span ).removeClass( this.tree.options.classNames.partsel ) )
          },
          _updatePartSelectionState: function () {
            var e;
            if ( !this.hasChildren() ) return e = this.bSelected && !this.data.unselectable && !this.data
              .isStatusNode, this._setSubSel( !1 ), e;
            var t, n, r = this.childList,
              i = !0,
              s = !0;
            for ( t = 0, n = r.length; t < n; t++ ) {
              var o = r[ t ],
                u = o._updatePartSelectionState();
              u !== !1 && ( s = !1 ), u !== !0 && ( i = !1 )
            }
            return i ? e = !0 : s ? e = !1 : e = undefined, this._setSubSel( e === undefined ), this.bSelected =
              e === !0, e
          },
          _fixSelectionState: function () {
            var e, t, n;
            if ( this.bSelected ) {
              this.visit( function ( e ) {
                e.parent._setSubSel( !0 ), e.data.unselectable || e._select( !0, !1, !1 )
              } ), e = this.parent;
              while ( e ) {
                e._setSubSel( !0 );
                var r = !0;
                for ( t = 0, n = e.childList.length; t < n; t++ ) {
                  var i = e.childList[ t ];
                  if ( !i.bSelected && !i.data.isStatusNode && !i.data.unselectable ) {
                    r = !1;
                    break
                  }
                }
                r && e._select( !0, !1, !1 ), e = e.parent
              }
            } else {
              this._setSubSel( !1 ), this.visit( function ( e ) {
                e._setSubSel( !1 ), e._select( !1, !1, !1 )
              } ), e = this.parent;
              while ( e ) {
                e._select( !1, !1, !1 );
                var s = !1;
                for ( t = 0, n = e.childList.length; t < n; t++ )
                  if ( e.childList[ t ].bSelected || e.childList[ t ].hasSubSel ) {
                    s = !0;
                    break
                  } e._setSubSel( s ), e = e.parent
              }
            }
          },
          _select: function ( e, t, n ) {
            var r = this.tree.options;
            if ( this.data.isStatusNode ) return;
            if ( this.bSelected === e ) return;
            if ( t && r.onQuerySelect && r.onQuerySelect.call( this.tree, e, this ) === !1 ) return;
            r.selectMode == 1 && e && this.tree.visit( function ( e ) {
              if ( e.bSelected ) return e._select( !1, !1, !1 ), !1
            } ), this.bSelected = e, e ? ( r.persist && this.tree.persistence.addSelect( this.data.key ), $( this
                .span ).addClass( r.classNames.selected ), n && r.selectMode === 3 && this._fixSelectionState(),
              t && r.onSelect && r.onSelect.call( this.tree, !0, this ) ) : ( r.persist && this.tree.persistence
              .clearSelect( this.data.key ), $( this.span ).removeClass( r.classNames.selected ), n && r
              .selectMode === 3 && this._fixSelectionState(), t && r.onSelect && r.onSelect.call( this.tree, !1,
                this ) )
          },
          select: function ( e ) {
            return this.data.unselectable ? this.bSelected : this._select( e !== !1, !0, !0 )
          },
          toggleSelect: function () {
            return this.select( !this.bSelected )
          },
          isSelected: function () {
            return this.bSelected
          },
          isLazy: function () {
            return !!this.data.isLazy
          },
          _loadContent: function () {
            try {
              var e = this.tree.options;
              this.tree.logDebug( "_loadContent: start - %o", this ), this.setLazyNodeStatus(
                DTNodeStatus_Loading ), !0 === e.onLazyRead.call( this.tree, this ) && ( this.setLazyNodeStatus(
                  DTNodeStatus_Ok ), this.tree.logDebug( "_loadContent: succeeded - %o", this ) )
            } catch ( t ) {
              this.tree.logWarning( "_loadContent: failed - %o", t ), this.setLazyNodeStatus( DTNodeStatus_Error, {
                tooltip: "" + t
              } )
            }
          },
          _expand: function ( e, t ) {
            if ( this.bExpanded === e ) {
              this.tree.logDebug( "dtnode._expand(%o) IGNORED - %o", e, this );
              return
            }
            this.tree.logDebug( "dtnode._expand(%o) - %o", e, this );
            var n = this.tree.options;
            if ( !e && this.getLevel() < n.minExpandLevel ) {
              this.tree.logDebug( "dtnode._expand(%o) prevented collapse - %o", e, this );
              return
            }
            if ( n.onQueryExpand && n.onQueryExpand.call( this.tree, e, this ) === !1 ) return;
            this.bExpanded = e, n.persist && ( e ? this.tree.persistence.addExpand( this.data.key ) : this.tree
              .persistence.clearExpand( this.data.key ) );
            var r = ( !this.data.isLazy || this.childList !== null ) && !this._isLoading && !t;
            this.render( r );
            if ( this.bExpanded && this.parent && n.autoCollapse ) {
              var i = this._parentList( !1, !0 );
              for ( var s = 0, o = i.length; s < o; s++ ) i[ s ].collapseSiblings()
            }
            n.activeVisible && this.tree.activeNode && !this.tree.activeNode.isVisible() && this.tree.activeNode
              .deactivate();
            if ( e && this.data.isLazy && this.childList === null && !this._isLoading ) {
              this._loadContent();
              return
            }
            n.onExpand && n.onExpand.call( this.tree, e, this )
          },
          isExpanded: function () {
            return this.bExpanded
          },
          expand: function ( e ) {
            e = e !== !1;
            if ( !this.childList && !this.data.isLazy && e ) return;
            if ( this.parent === null && !e ) return;
            this._expand( e )
          },
          scheduleAction: function ( e, t ) {
            this.tree.timer && ( clearTimeout( this.tree.timer ), this.tree.logDebug( "clearTimeout(%o)", this.tree
              .timer ) );
            var n = this;
            switch ( e ) {
              case "cancel":
                break;
              case "expand":
                this.tree.timer = setTimeout( function () {
                  n.tree.logDebug( "setTimeout: trigger expand" ), n.expand( !0 )
                }, t );
                break;
              case "activate":
                this.tree.timer = setTimeout( function () {
                  n.tree.logDebug( "setTimeout: trigger activate" ), n.activate()
                }, t );
                break;
              default:
                throw "Invalid mode " + e
            }
            this.tree.logDebug( "setTimeout(%s, %s): %s", e, t, this.tree.timer )
          },
          toggleExpand: function () {
            this.expand( !this.bExpanded )
          },
          collapseSiblings: function () {
            if ( this.parent === null ) return;
            var e = this.parent.childList;
            for ( var t = 0, n = e.length; t < n; t++ ) e[ t ] !== this && e[ t ].bExpanded && e[ t ]._expand( !1 )
          },
          _onClick: function ( e ) {
            var t = this.getEventTargetType( e );
            if ( t === "expander" ) this.toggleExpand();
            else if ( t === "checkbox" ) this.toggleSelect();
            else {
              this._userActivate();
              var n = this.span.getElementsByTagName( "a" );
              if ( !n[ 0 ] ) return !0;
            }
            e.preventDefault()
          },
          _onDblClick: function ( e ) {},
          _onKeydown: function ( e ) {
            var t = !0,
              n;
            switch ( e.which ) {
              case 107:
              case 187:
                this.bExpanded || this.toggleExpand();
                break;
              case 109:
              case 189:
                this.bExpanded && this.toggleExpand();
                break;
              case 32:
                this._userActivate();
                break;
              case 8:
                this.parent && this.parent.focus();
                break;
              case 37:
                this.bExpanded ? ( this.toggleExpand(), this.focus() ) : this.parent && this.parent.parent && this
                  .parent.focus();
                break;
              case 39:
                !this.bExpanded && ( this.childList || this.data.isLazy ) ? ( this.toggleExpand(), this.focus() ) :
                  this.childList && this.childList[ 0 ].focus();
                break;
              case 38:
                n = this.getPrevSibling();
                while ( n && n.bExpanded && n.childList ) n = n.childList[ n.childList.length - 1 ];
                !n && this.parent && this.parent.parent && ( n = this.parent ), n && n.focus();
                break;
              case 40:
                if ( this.bExpanded && this.childList ) n = this.childList[ 0 ];
                else {
                  var r = this._parentList( !1, !0 );
                  for ( var i = r.length - 1; i >= 0; i-- ) {
                    n = r[ i ].getNextSibling();
                    if ( n ) break
                  }
                }
                n && n.focus();
                break;
              default:
                t = !1
            }
            t && e.preventDefault()
          },
          _onKeypress: function ( e ) {},
          _onFocus: function ( e ) {
            var t = this.tree.options;
            if ( e.type == "blur" || e.type == "focusout" ) t.onBlur && t.onBlur.call( this.tree, this ), this.tree
              .tnFocused && $( this.tree.tnFocused.span ).removeClass( t.classNames.focused ), this.tree.tnFocused =
              null, t.persist && $.cookie( t.cookieId + "-focus", "", t.cookie );
            else if ( e.type == "focus" || e.type == "focusin" ) this.tree.tnFocused && this.tree.tnFocused !==
              this && ( this.tree.logDebug( "dtnode.onFocus: out of sync: curFocus: %o", this.tree.tnFocused ), $(
                this.tree.tnFocused.span ).removeClass( t.classNames.focused ) ), this.tree.tnFocused = this, t
              .onFocus && t.onFocus.call( this.tree, this ), $( this.tree.tnFocused.span ).addClass( t.classNames
                .focused ), t.persist && $.cookie( t.cookieId + "-focus", this.data.key, t.cookie )
          },
          visit: function ( e, t ) {
            var n = !0;
            if ( t === !0 ) {
              n = e( this );
              if ( n === !1 || n == "skip" ) return n
            }
            if ( this.childList )
              for ( var r = 0, i = this.childList.length; r < i; r++ ) {
                n = this.childList[ r ].visit( e, !0 );
                if ( n === !1 ) break
              }
            return n
          },
          visitParents: function ( e, t ) {
            if ( t && e( this ) === !1 ) return !1;
            var n = this.parent;
            while ( n ) {
              if ( e( n ) === !1 ) return !1;
              n = n.parent
            }
            return !0
          },
          remove: function () {
            if ( this === this.tree.root ) throw "Cannot remove system root";
            return this.parent.removeChild( this )
          },
          removeChild: function ( e ) {
            var t = this.childList;
            if ( t.length == 1 ) {
              if ( e !== t[ 0 ] ) throw "removeChild: invalid child";
              return this.removeChildren()
            }
            e === this.tree.activeNode && e.deactivate(), this.tree.options.persist && ( e.bSelected && this.tree
              .persistence.clearSelect( e.data.key ), e.bExpanded && this.tree.persistence.clearExpand( e.data
                .key ) ), e.removeChildren( !0 ), this.ul && this.ul.removeChild( e.li );
            for ( var n = 0, r = t.length; n < r; n++ )
              if ( t[ n ] === e ) {
                this.childList.splice( n, 1 );
                break
              }
          },
          removeChildren: function ( e, t ) {
            this.tree.logDebug( "%s.removeChildren(%o)", this, e );
            var n = this.tree,
              r = this.childList;
            if ( r ) {
              for ( var i = 0, s = r.length; i < s; i++ ) {
                var o = r[ i ];
                o === n.activeNode && !t && o.deactivate(), this.tree.options.persist && !t && ( o.bSelected && this
                  .tree.persistence.clearSelect( o.data.key ), o.bExpanded && this.tree.persistence.clearExpand( o
                    .data.key ) ), o.removeChildren( !0, t ), this.ul && $( "li", $( this.ul ) ).remove()
              }
              this.childList = null
            }
            e || ( this._isLoading = !1, this.render() )
          },
          setTitle: function ( e ) {
            this.fromDict( {
              title: e
            } )
          },
          reload: function ( e ) {
            throw "Use reloadChildren() instead"
          },
          reloadChildren: function ( e ) {
            if ( this.parent === null ) throw "Use tree.reload() instead";
            if ( !this.data.isLazy ) throw "node.reloadChildren() requires lazy nodes.";
            if ( e ) {
              var t = this,
                n = "nodeLoaded.dynatree." + this.tree.$tree.attr( "id" ) + "." + this.data.key;
              this.tree.$tree.bind( n, function ( r, i, s ) {
                t.tree.$tree.unbind( n ), t.tree.logDebug( "loaded %o, %o, %o", r, i, s );
                if ( i !== t ) throw "got invalid load event";
                e.call( t.tree, i, s )
              } )
            }
            this.removeChildren(), this._loadContent()
          },
          _loadKeyPath: function ( e, t ) {
            var n = this.tree;
            n.logDebug( "%s._loadKeyPath(%s)", this, e );
            if ( e === "" ) throw "Key path must not be empty";
            var r = e.split( n.options.keyPathSeparator );
            if ( r[ 0 ] === "" ) throw "Key path must be relative (don't start with '/')";
            var i = r.shift();
            if ( this.childList )
              for ( var s = 0, o = this.childList.length; s < o; s++ ) {
                var u = this.childList[ s ];
                if ( u.data.key === i ) {
                  if ( r.length === 0 ) t.call( n, u, "ok" );
                  else if ( !u.data.isLazy || u.childList !== null && u.childList !== undefined ) t.call( n, u,
                    "loaded" ), u._loadKeyPath( r.join( n.options.keyPathSeparator ), t );
                  else {
                    n.logDebug( "%s._loadKeyPath(%s) -> reloading %s...", this, e, u );
                    var a = this;
                    u.reloadChildren( function ( i, s ) {
                      s ? ( n.logDebug( "%s._loadKeyPath(%s) -> reloaded %s.", i, e, i ), t.call( n, u,
                        "loaded" ), i._loadKeyPath( r.join( n.options.keyPathSeparator ), t ) ) : ( n
                        .logWarning( "%s._loadKeyPath(%s) -> reloadChildren() failed.", a, e ), t.call( n, u,
                          "error" ) )
                    } )
                  }
                  return
                }
              }
            t.call( n, undefined, "notfound", i, r.length === 0 ), n.logWarning( "Node not found: " + i );
            return
          },
          resetLazy: function () {
            if ( this.parent === null ) throw "Use tree.reload() instead";
            if ( !this.data.isLazy ) throw "node.resetLazy() requires lazy nodes.";
            this.expand( !1 ), this.removeChildren()
          },
          _addChildNode: function ( e, t ) {
            var n = this.tree,
              r = n.options,
              i = n.persistence;
            e.parent = this, this.childList === null ? this.childList = [] : t || this.childList.length > 0 && $(
              this.childList[ this.childList.length - 1 ].span ).removeClass( r.classNames.lastsib );
            if ( t ) {
              var s = $.inArray( t, this.childList );
              if ( s < 0 ) throw "<beforeNode> must be a child of <this>";
              this.childList.splice( s, 0, e )
            } else this.childList.push( e );
            var o = n.isInitializing();
            r.persist && i.cookiesFound && o ? ( i.activeKey === e.data.key && ( n.activeNode = e ), i
              .focusedKey === e.data.key && ( n.focusNode = e ), e.bExpanded = $.inArray( e.data.key, i
                .expandedKeyList ) >= 0, e.bSelected = $.inArray( e.data.key, i.selectedKeyList ) >= 0 ) : ( e
              .data.activate && ( n.activeNode = e, r.persist && ( i.activeKey = e.data.key ) ), e.data.focus && (
                n.focusNode = e, r.persist && ( i.focusedKey = e.data.key ) ), e.bExpanded = e.data.expand === !0,
              e.bExpanded && r.persist && i.addExpand( e.data.key ), e.bSelected = e.data.select === !0, e
              .bSelected && r.persist && i.addSelect( e.data.key ) ), r.minExpandLevel >= e.getLevel() && ( this
              .bExpanded = !0 );
            if ( e.bSelected && r.selectMode == 3 ) {
              var u = this;
              while ( u ) u.hasSubSel || u._setSubSel( !0 ), u = u.parent
            }
            return n.bEnableUpdate && this.render(), e
          },
          addChild: function ( e, t ) {
            if ( typeof e == "string" ) throw "Invalid data type for " + e;
            if ( !e || e.length === 0 ) return;
            if ( e instanceof DynaTreeNode ) return this._addChildNode( e, t );
            e.length || ( e = [ e ] );
            var n = this.tree.enableUpdate( !1 ),
              r = null;
            for ( var i = 0, s = e.length; i < s; i++ ) {
              var o = e[ i ],
                u = this._addChildNode( new DynaTreeNode( this, this.tree, o ), t );
              r || ( r = u ), o.children && u.addChild( o.children, null )
            }
            return this.tree.enableUpdate( n ), r
          },
          append: function ( e ) {
            return this.tree.logWarning( "node.append() is deprecated (use node.addChild() instead)." ), this
              .addChild( e, null )
          },
          appendAjax: function ( e ) {
            var t = this;
            this.removeChildren( !1, !0 ), this.setLazyNodeStatus( DTNodeStatus_Loading );
            if ( e.debugLazyDelay ) {
              var n = e.debugLazyDelay;
              e.debugLazyDelay = 0, this.tree.logInfo( "appendAjax: waiting for debugLazyDelay " + n ), setTimeout(
                function () {
                  t.appendAjax( e )
                }, n );
              return
            }
            var r = e.success,
              i = e.error,
              s = "nodeLoaded.dynatree." + this.tree.$tree.attr( "id" ) + "." + this.data.key,
              o = $.extend( {}, this.tree.options.ajaxDefaults, e, {
                success: function ( e, n, i ) {
                  var u = t.tree.phase;
                  t.tree.phase = "init", o.postProcess ? e = o.postProcess.call( this, e, this.dataType ) : e &&
                    e.hasOwnProperty( "d" ) && ( e = typeof e.d == "string" ? $.parseJSON( e.d ) : e.d ), ( !$
                      .isArray( e ) || e.length !== 0 ) && t.addChild( e, null ), t.tree.phase = "postInit",
                    r && r.call( o, t, e, n ), t.tree.logDebug( "trigger " + s ), t.tree.$tree.trigger( s, [ t,
                      !0
                    ] ), t.tree.phase = u, t.setLazyNodeStatus( DTNodeStatus_Ok ), $.isArray( e ) && e
                    .length === 0 && ( t.childList = [], t.render() )
                },
                error: function ( e, n, r ) {
                  t.tree.logWarning( "appendAjax failed:", n, ":\n", e, "\n", r ), i && i.call( o, t, e, n, r ),
                    t.tree.$tree.trigger( s, [ t, !1 ] ), t.setLazyNodeStatus( DTNodeStatus_Error, {
                      info: n,
                      tooltip: "" + r
                    } )
                }
              } );
            $.ajax( o )
          },
          move: function ( e, t ) {
            var n;
            if ( this === e ) return;
            if ( !this.parent ) throw "Cannot move system root";
            if ( t === undefined || t == "over" ) t = "child";
            var r = this.parent,
              i = t === "child" ? e : e.parent;
            if ( i.isDescendantOf( this ) ) throw "Cannot move a node to it's own descendant";
            if ( this.parent.childList.length == 1 ) this.parent.childList = this.parent.data.isLazy ? [] : null,
              this.parent.bExpanded = !1;
            else {
              n = $.inArray( this, this.parent.childList );
              if ( n < 0 ) throw "Internal error";
              this.parent.childList.splice( n, 1 )
            }
            this.parent.ul && this.parent.ul.removeChild( this.li ), this.parent = i;
            if ( i.hasChildren() ) switch ( t ) {
              case "child":
                i.childList.push( this );
                break;
              case "before":
                n = $.inArray( e, i.childList );
                if ( n < 0 ) throw "Internal error";
                i.childList.splice( n, 0, this );
                break;
              case "after":
                n = $.inArray( e, i.childList );
                if ( n < 0 ) throw "Internal error";
                i.childList.splice( n + 1, 0, this );
                break;
              default:
                throw "Invalid mode " + t
            } else i.childList = [ this ];
            i.ul || ( i.ul = document.createElement( "ul" ), i.ul.style.display = "none", i.li.appendChild( i
              .ul ) ), this.li && i.ul.appendChild( this.li );
            if ( this.tree !== e.tree ) throw this.visit( function ( t ) {
              t.tree = e.tree
            }, null, !0 ), "Not yet implemented.";
            r.isDescendantOf( i ) || r.render(), i.isDescendantOf( r ) || i.render()
          },
          lastentry: undefined
        };
        var DynaTreeStatus = Class.create();
        DynaTreeStatus._getTreePersistData = function ( e, t ) {
          var n = new DynaTreeStatus( e, t );
          return n.read(), n.toDict()
        }, getDynaTreePersistData = DynaTreeStatus._getTreePersistData, DynaTreeStatus.prototype = {
          initialize: function ( e, t ) {
            e === undefined && ( e = $.ui.dynatree.prototype.options.cookieId ), t = $.extend( {}, $.ui.dynatree
                .prototype.options.cookie, t ), this.cookieId = e, this.cookieOpts = t, this.cookiesFound =
              undefined, this.activeKey = null, this.focusedKey = null, this.expandedKeyList = null, this
              .selectedKeyList = null
          },
          _log: function ( e ) {
            Array.prototype.unshift.apply( arguments, [ "debug" ] ), _log.apply( this, arguments )
          },
          read: function () {
            this.cookiesFound = !1;
            var e = $.cookie( this.cookieId + "-active" );
            this.activeKey = e === null ? "" : e, e !== null && ( this.cookiesFound = !0 ), e = $.cookie( this
                .cookieId + "-focus" ), this.focusedKey = e === null ? "" : e, e !== null && ( this.cookiesFound = !
                0 ), e = $.cookie( this.cookieId + "-expand" ), this.expandedKeyList = e === null ? [] : e.split(
                "," ), e !== null && ( this.cookiesFound = !0 ), e = $.cookie( this.cookieId + "-select" ), this
              .selectedKeyList = e === null ? [] : e.split( "," ), e !== null && ( this.cookiesFound = !0 )
          },
          write: function () {
            $.cookie( this.cookieId + "-active", this.activeKey === null ? "" : this.activeKey, this.cookieOpts ), $
              .cookie( this.cookieId + "-focus", this.focusedKey === null ? "" : this.focusedKey, this.cookieOpts ),
              $.cookie( this.cookieId + "-expand", this.expandedKeyList === null ? "" : this.expandedKeyList.join(
                "," ), this.cookieOpts ), $.cookie( this.cookieId + "-select", this.selectedKeyList === null ? "" :
                this.selectedKeyList.join( "," ), this.cookieOpts )
          },
          addExpand: function ( e ) {
            $.inArray( e, this.expandedKeyList ) < 0 && ( this.expandedKeyList.push( e ), $.cookie( this.cookieId +
              "-expand", this.expandedKeyList.join( "," ), this.cookieOpts ) )
          },
          clearExpand: function ( e ) {
            var t = $.inArray( e, this.expandedKeyList );
            t >= 0 && ( this.expandedKeyList.splice( t, 1 ), $.cookie( this.cookieId + "-expand", this
              .expandedKeyList.join( "," ), this.cookieOpts ) )
          },
          addSelect: function ( e ) {
            $.inArray( e, this.selectedKeyList ) < 0 && ( this.selectedKeyList.push( e ), $.cookie( this.cookieId +
              "-select", this.selectedKeyList.join( "," ), this.cookieOpts ) )
          },
          clearSelect: function ( e ) {
            var t = $.inArray( e, this.selectedKeyList );
            t >= 0 && ( this.selectedKeyList.splice( t, 1 ), $.cookie( this.cookieId + "-select", this
              .selectedKeyList.join( "," ), this.cookieOpts ) )
          },
          isReloading: function () {
            return this.cookiesFound === !0
          },
          toDict: function () {
            return {
              cookiesFound: this.cookiesFound,
              activeKey: this.activeKey,
              focusedKey: this.activeKey,
              expandedKeyList: this.expandedKeyList,
              selectedKeyList: this.selectedKeyList
            }
          },
          lastentry: undefined
        };
        var DynaTree = Class.create();
        DynaTree.version = "$Version:$", DynaTree.prototype = {
            initialize: function ( e ) {
              this.phase = "init", this.$widget = e, this.options = e.options, this.$tree = e.element, this.timer =
                null, this.divTree = this.$tree.get( 0 ), _initDragAndDrop( this )
            },
            _load: function ( e ) {
              var t = this.$widget,
                n = this.options,
                r = this;
              this.bEnableUpdate = !0, this._nodeCount = 1, this.activeNode = null, this.focusNode = null, n
                .rootVisible !== undefined && this.logWarning( "Option 'rootVisible' is no longer supported." ), n
                .minExpandLevel < 1 && ( this.logWarning( "Option 'minExpandLevel' must be >= 1." ), n
                  .minExpandLevel = 1 ), n.classNames !== $.ui.dynatree.prototype.options.classNames && ( n
                  .classNames = $.extend( {}, $.ui.dynatree.prototype.options.classNames, n.classNames ) ), n
                .ajaxDefaults !== $.ui.dynatree.prototype.options.ajaxDefaults && ( n.ajaxDefaults = $.extend( {}, $
                  .ui.dynatree.prototype.options.ajaxDefaults, n.ajaxDefaults ) ), n.dnd !== $.ui.dynatree.prototype
                .options.dnd && ( n.dnd = $.extend( {}, $.ui.dynatree.prototype.options.dnd, n.dnd ) ), n.imagePath ||
                $( "script" ).each( function () {
                  var e = /.*dynatree[^\/]*\.js$/i;
                  if ( this.src.search( e ) >= 0 ) return this.src.indexOf( "/" ) >= 0 ? n.imagePath = this.src
                    .slice( 0, this.src.lastIndexOf( "/" ) ) + "/skin/" : n.imagePath = "skin/", r.logDebug(
                      "Guessing imagePath from '%s': '%s'", this.src, n.imagePath ), !1
                } ), this.persistence = new DynaTreeStatus( n.cookieId, n.cookie ), n.persist && ( $.cookie || _log(
                  "warn", "Please include jquery.cookie.js to use persistence." ), this.persistence.read() ), this
                .logDebug( "DynaTree.persistence: %o", this.persistence.toDict() ), this.cache = {
                  tagEmpty: "<span class='" + n.classNames.empty + "'></span>",
                  tagVline: "<span class='" + n.classNames.vline + "'></span>",
                  tagExpander: "<span class='" + n.classNames.expander + "'></span>",
                  tagConnector: "<span class='" + n.classNames.connector + "'></span>",
                  tagNodeIcon: "<span class='" + n.classNames.nodeIcon + "'></span>",
                  tagCheckbox: "<span class='" + n.classNames.checkbox + "'></span>",
                  lastentry: undefined
                }, ( n.children || n.initAjax && n.initAjax.url || n.initId ) && $( this.divTree ).empty();
              var i = this.$tree.find( ">ul:first" ).hide();
              this.tnRoot = new DynaTreeNode( null, this, {} ), this.tnRoot.bExpanded = !0, this.tnRoot.render(), this
                .divTree.appendChild( this.tnRoot.ul );
              var s = this.tnRoot,
                o = n.persist && this.persistence.isReloading(),
                u = !1,
                a = this.enableUpdate( !1 );
              this.logDebug( "Dynatree._load(): read tree structure..." ), n.children ? s.addChild( n.children ) : n
                .initAjax && n.initAjax.url ? ( u = !0, s.data.isLazy = !0, this._reloadAjax( e ) ) : n.initId ? this
                ._createFromTag( s, $( "#" + n.initId ) ) : ( this._createFromTag( s, i ), i.remove() ), this
                ._checkConsistency(), !u && n.selectMode == 3 && s._updatePartSelectionState(), this.logDebug(
                  "Dynatree._load(): render nodes..." ), this.enableUpdate( a ), this.logDebug(
                  "Dynatree._load(): bind events..." ), this.$widget.bind(), this.logDebug(
                  "Dynatree._load(): postInit..." ), this.phase = "postInit", n.persist && this.persistence.write(),
                this.focusNode && this.focusNode.isVisible() && ( this.logDebug( "Focus on init: %o", this
                  .focusNode ), this.focusNode.focus() ), u || ( n.onPostInit && n.onPostInit.call( this, o, !1 ),
                  e && e.call( this, "ok" ) ), this.phase = "idle"
            },
            _reloadAjax: function ( e ) {
              var t = this.options;
              if ( !t.initAjax || !t.initAjax.url ) throw "tree.reload() requires 'initAjax' mode.";
              var n = this.persistence,
                r = $.extend( {}, t.initAjax );
              r.addActiveKey && ( r.data.activeKey = n.activeKey ), r.addFocusedKey && ( r.data.focusedKey = n
                  .focusedKey ), r.addExpandedKeyList && ( r.data.expandedKeyList = n.expandedKeyList.join( "," ) ), r
                .addSelectedKeyList && ( r.data.selectedKeyList = n.selectedKeyList.join( "," ) ), r.success && this
                .logWarning( "initAjax: success callback is ignored; use onPostInit instead." ), r.error && this
                .logWarning( "initAjax: error callback is ignored; use onPostInit instead." );
              var i = n.isReloading();
              r.success = function ( n, r, s ) {
                t.selectMode == 3 && n.tree.tnRoot._updatePartSelectionState(), t.onPostInit && t.onPostInit.call( n
                  .tree, i, !1 ), e && e.call( n.tree, "ok" )
              }, r.error = function ( n, r, s, o ) {
                t.onPostInit && t.onPostInit.call( n.tree, i, !0, r, s, o ), e && e.call( n.tree, "error", r, s, o )
              }, this.logDebug( "Dynatree._init(): send Ajax request..." ), this.tnRoot.appendAjax( r )
            },
            toString: function () {
              return "Dynatree '" + this.$tree.attr( "id" ) + "'"
            },
            toDict: function () {
              return this.tnRoot.toDict( !0 )
            },
            serializeArray: function ( e ) {
              var t = this.getSelectedNodes( e ),
                n = this.$tree.attr( "name" ) || this.$tree.attr( "id" ),
                r = [];
              for ( var i = 0, s = t.length; i < s; i++ ) r.push( {
                name: n,
                value: t[ i ].data.key
              } );
              return r
            },
            getPersistData: function () {
              return this.persistence.toDict()
            },
            logDebug: function ( e ) {
              this.options.debugLevel >= 2 && ( Array.prototype.unshift.apply( arguments, [ "debug" ] ), _log.apply(
                this, arguments ) )
            },
            logInfo: function ( e ) {
              this.options.debugLevel >= 1 && ( Array.prototype.unshift.apply( arguments, [ "info" ] ), _log.apply(
                this, arguments ) )
            },
            logWarning: function ( e ) {
              Array.prototype.unshift.apply( arguments, [ "warn" ] ), _log.apply( this, arguments )
            },
            isInitializing: function () {
              return this.phase == "init" || this.phase == "postInit"
            },
            isReloading: function () {
              return ( this.phase == "init" || this.phase == "postInit" ) && this.options.persist && this.persistence
                .cookiesFound
            },
            isUserEvent: function () {
              return this.phase == "userEvent"
            },
            redraw: function () {
              this.tnRoot.render( !1, !1 )
            },
            renderInvisibleNodes: function () {
              this.tnRoot.render( !1, !0 )
            },
            reload: function ( e ) {
              this._load( e )
            },
            getRoot: function () {
              return this.tnRoot
            },
            enable: function () {
              this.$widget.enable()
            },
            disable: function () {
              this.$widget.disable()
            },
            getNodeByKey: function ( e ) {
              var t = document.getElementById( this.options.idPrefix + e );
              if ( t ) return t.dtnode ? t.dtnode : null;
              var n = null;
              return this.visit( function ( t ) {
                if ( t.data.key === e ) return n = t, !1
              }, !0 ), n
            },
            getActiveNode: function () {
              return this.activeNode
            },
            reactivate: function ( e ) {
              var t = this.activeNode;
              t && ( this.activeNode = null, t.activate(), e && t.focus() )
            },
            getSelectedNodes: function ( e ) {
              var t = [];
              return this.tnRoot.visit( function ( n ) {
                if ( n.bSelected ) {
                  t.push( n );
                  if ( e === !0 ) return "skip"
                }
              } ), t
            },
            activateKey: function ( e ) {
              var t = e === null ? null : this.getNodeByKey( e );
              return t ? ( t.focus(), t.activate(), t ) : ( this.activeNode && this.activeNode.deactivate(), this
                .activeNode = null, null )
            },
            loadKeyPath: function ( e, t ) {
              var n = e.split( this.options.keyPathSeparator );
              return n[ 0 ] === "" && n.shift(), n[ 0 ] == this.tnRoot.data.key && ( this.logDebug(
                  "Removed leading root key." ), n.shift() ), e = n.join( this.options.keyPathSeparator ), this.tnRoot
                ._loadKeyPath( e, t )
            },
            selectKey: function ( e, t ) {
              var n = this.getNodeByKey( e );
              return n ? ( n.select( t ), n ) : null
            },
            enableUpdate: function ( e ) {
              return this.bEnableUpdate == e ? e : ( this.bEnableUpdate = e, e && this.redraw(), !e )
            },
            count: function () {
              return this.tnRoot.countChildren()
            },
            visit: function ( e, t ) {
              return this.tnRoot.visit( e, t )
            },
            _createFromTag: function ( parentTreeNode, $ulParent ) {
              var self = this;
              $ulParent.find( ">li" ).each( function () {
                var $li = $( this ),
                  $liSpan = $li.find( ">span:first" ),
                  $liA = $li.find( ">a:first" ),
                  title, href = null,
                  target = null,
                  tooltip;
                if ( $liSpan.length ) title = $liSpan.html();
                else if ( $liA.length ) title = $liA.html(), href = $liA.attr( "href" ), target = $liA.attr(
                  "target" ), tooltip = $liA.attr( "title" );
                else {
                  title = $li.html();
                  var iPos = title.search( /<ul/i );
                  iPos >= 0 ? title = $.trim( title.substring( 0, iPos ) ) : title = $.trim( title )
                }
                var data = {
                  title: title,
                  tooltip: tooltip,
                  isFolder: $li.hasClass( "folder" ),
                  isLazy: $li.hasClass( "lazy" ),
                  expand: $li.hasClass( "expanded" ),
                  select: $li.hasClass( "selected" ),
                  activate: $li.hasClass( "active" ),
                  focus: $li.hasClass( "focused" ),
                  noLink: $li.hasClass( "noLink" )
                };
                href && ( data.href = href, data.target = target ), $li.attr( "title" ) && ( data.tooltip = $li
                  .attr( "title" ) ), $li.attr( "id" ) && ( data.key = "" + $li.attr( "id" ) );
                if ( $li.attr( "data" ) ) {
                  var dataAttr = $.trim( $li.attr( "data" ) );
                  if ( dataAttr ) {
                    dataAttr.charAt( 0 ) != "{" && ( dataAttr = "{" + dataAttr + "}" );
                    try {
                      $.extend( data, eval( "(" + dataAttr + ")" ) )
                    } catch ( e ) {
                      throw "Error parsing node data: " + e + "\ndata:\n'" + dataAttr + "'"
                    }
                  }
                }
                var childNode = parentTreeNode.addChild( data ),
                  $ul = $li.find( ">ul:first" );
                $ul.length && self._createFromTag( childNode, $ul )
              } )
            },
            _checkConsistency: function () {},
            _setDndStatus: function ( e, t, n, r, i ) {
              var s = e ? $( e.span ) : null,
                o = $( t.span );
              this.$dndMarker || ( this.$dndMarker = $( "<div id='dynatree-drop-marker'></div>" ).hide().css( {
                "z-index": 1e3
              } ).prependTo( $( this.divTree ).parent() ) );
              if ( r === "after" || r === "before" || r === "over" ) {
                var u = "0 0";
                switch ( r ) {
                  case "before":
                    this.$dndMarker.removeClass( "dynatree-drop-after dynatree-drop-over" ), this.$dndMarker.addClass(
                      "dynatree-drop-before" ), u = "0 -8";
                    break;
                  case "after":
                    this.$dndMarker.removeClass( "dynatree-drop-before dynatree-drop-over" ), this.$dndMarker
                      .addClass( "dynatree-drop-after" ), u = "0 8";
                    break;
                  default:
                    this.$dndMarker.removeClass( "dynatree-drop-after dynatree-drop-before" ), this.$dndMarker
                      .addClass( "dynatree-drop-over" ), o.addClass( "dynatree-drop-target" ), u = "8 0"
                }
                this.$dndMarker.show().position( {
                  my: "left top",
                  at: "left top",
                  of: o,
                  offset: u
                } )
              } else o.removeClass( "dynatree-drop-target" ), this.$dndMarker.hide();
              r === "after" ? o.addClass( "dynatree-drop-after" ) : o.removeClass( "dynatree-drop-after" ), r ===
                "before" ? o.addClass( "dynatree-drop-before" ) : o.removeClass( "dynatree-drop-before" ), i === !0 ?
                ( s && s.addClass( "dynatree-drop-accept" ), o.addClass( "dynatree-drop-accept" ), n.addClass(
                  "dynatree-drop-accept" ) ) : ( s && s.removeClass( "dynatree-drop-accept" ), o.removeClass(
                  "dynatree-drop-accept" ), n.removeClass( "dynatree-drop-accept" ) ), i === !1 ? ( s && s.addClass(
                  "dynatree-drop-reject" ), o.addClass( "dynatree-drop-reject" ), n.addClass(
                  "dynatree-drop-reject" ) ) : ( s && s.removeClass( "dynatree-drop-reject" ), o.removeClass(
                  "dynatree-drop-reject" ), n.removeClass( "dynatree-drop-reject" ) )
            },
            _onDragEvent: function ( e, t, n, r, i, s ) {
              var o = this.options,
                u = this.options.dnd,
                a = null,
                f = $( t.span ),
                l, c;
              switch ( e ) {
                case "helper":
                  var h = $( "<div class='dynatree-drag-helper'><span class='dynatree-drag-helper-img' /></div>" )
                    .append( $( r.target ).closest( ".dynatree-title" ).clone() );
                  $( "ul.dynatree-container", t.tree.divTree ).append( h ), h.data( "dtSourceNode", t ), a = h;
                  break;
                case "start":
                  t.isStatusNode() ? a = !1 : u.onDragStart && ( a = u.onDragStart( t ) ), a === !1 ? ( this.logDebug(
                    "tree.onDragStart() cancelled" ), i.helper.trigger( "mouseup" ), i.helper.hide() ) : f.addClass(
                    "dynatree-drag-source" );
                  break;
                case "enter":
                  a = u.onDragEnter ? u.onDragEnter( t, n ) : null, a ? a = {
                    over: a === !0 || a === "over" || $.inArray( "over", a ) >= 0,
                    before: a === !0 || a === "before" || $.inArray( "before", a ) >= 0,
                    after: a === !0 || a === "after" || $.inArray( "after", a ) >= 0
                  } : a = !1, i.helper.data( "enterResponse", a );
                  break;
                case "over":
                  c = i.helper.data( "enterResponse" ), l = null;
                  if ( c !== !1 )
                    if ( typeof c == "string" ) l = c;
                    else {
                      var p = f.offset(),
                        d = {
                          x: r.pageX - p.left,
                          y: r.pageY - p.top
                        },
                        v = {
                          x: d.x / f.width(),
                          y: d.y / f.height()
                        };
                      c.after && v.y > .75 ? l = "after" : !c.over && c.after && v.y > .5 ? l = "after" : c.before &&
                        v.y <= .25 ? l = "before" : !c.over && c.before && v.y <= .5 ? l = "before" : c.over && ( l =
                          "over" ), u.preventVoidMoves && ( t === n ? l = null : l === "before" && n && t === n
                          .getNextSibling() ? l = null : l === "after" && n && t === n.getPrevSibling() ? l = null :
                          l === "over" && n && n.parent === t && n.isLastSibling() && ( l = null ) ), i.helper.data(
                          "hitMode", l )
                    } l === "over" && u.autoExpandMS && t.hasChildren() !== !1 && !t.bExpanded && t.scheduleAction(
                    "expand", u.autoExpandMS );
                  if ( l && u.onDragOver ) {
                    a = u.onDragOver( t, n, l );
                    if ( a === "over" || a === "before" || a === "after" ) l = a
                  }
                  this._setDndStatus( n, t, i.helper, l, a !== !1 && l !== null );
                  break;
                case "drop":
                  var m = i.helper.hasClass( "dynatree-drop-reject" );
                  l = i.helper.data( "hitMode" ), l && u.onDrop && !m && u.onDrop( t, n, l, i, s );
                  break;
                case "leave":
                  t.scheduleAction( "cancel" ), i.helper.data( "enterResponse", null ), i.helper.data( "hitMode",
                    null ), this._setDndStatus( n, t, i.helper, "out", undefined ), u.onDragLeave && u.onDragLeave(
                    t, n );
                  break;
                case "stop":
                  f.removeClass( "dynatree-drag-source" ), u.onDragStop && u.onDragStop( t );
                  break;
                default:
                  throw "Unsupported drag event: " + e
              }
              return a
            },
            cancelDrag: function () {
              var e = $.ui.ddmanager.current;
              e && e.cancel()
            },
            lastentry: undefined
          }, $.widget( "ui.dynatree", {
            _init: function () {
              if ( versionCompare( $.ui.version, "1.8" ) < 0 ) return this.options.debugLevel >= 0 && _log( "warn",
                  "ui.dynatree._init() was called; you should upgrade to jquery.ui.core.js v1.8 or higher." ),
                this._create();
              this.options.debugLevel >= 2 && _log( "debug",
                "ui.dynatree._init() was called; no current default functionality." )
            },
            _create: function () {
              var e = this.options;
              e.debugLevel >= 1 && logMsg( "Dynatree._create(): version='%s', debugLevel=%o.", $.ui.dynatree
                .version, this.options.debugLevel ), this.options.event += ".dynatree";
              var t = this.element.get( 0 );
              this.tree = new DynaTree( this ), this.tree._load(), this.tree.logDebug( "Dynatree._init(): done." )
            },
            bind: function () {
              function t( e ) {
                e = $.event.fix( e || window.event );
                var t = $.ui.dynatree.getNode( e.target );
                return t ? t._onFocus( e ) : !1
              }
              this.unbind();
              var e = "click.dynatree dblclick.dynatree";
              this.options.keyboard && ( e += " keypress.dynatree keydown.dynatree" ), this.element.bind( e,
                function ( e ) {
                  var t = $.ui.dynatree.getNode( e.target );
                  if ( !t ) return !0;
                  var n = t.tree,
                    r = n.options;
                  n.logDebug( "event(%s): dtnode: %s", e.type, t );
                  var i = n.phase;
                  n.phase = "userEvent";
                  try {
                    switch ( e.type ) {
                      case "click":
                        return r.onClick && r.onClick.call( n, t, e ) === !1 ? !1 : t._onClick( e );
                      case "dblclick":
                        return r.onDblClick && r.onDblClick.call( n, t, e ) === !1 ? !1 : t._onDblClick( e );
                      case "keydown":
                        return r.onKeydown && r.onKeydown.call( n, t, e ) === !1 ? !1 : t._onKeydown( e );
                      case "keypress":
                        return r.onKeypress && r.onKeypress.call( n, t, e ) === !1 ? !1 : t._onKeypress( e )
                    }
                  } catch ( s ) {
                    var o = null;
                    n.logWarning( "bind(%o): dtnode: %o, error: %o", e, t, s )
                  } finally {
                    n.phase = i
                  }
                } );
              var n = this.tree.divTree;
              n.addEventListener ? ( n.addEventListener( "focus", t, !0 ), n.addEventListener( "blur", t, !0 ) ) : n
                .onfocusin = n.onfocusout = t
            },
            unbind: function () {
              this.element.unbind( ".dynatree" )
            },
            enable: function () {
              this.bind(), $.Widget.prototype.enable.apply( this, arguments )
            },
            disable: function () {
              this.unbind(), $.Widget.prototype.disable.apply( this, arguments )
            },
            getTree: function () {
              return this.tree
            },
            getRoot: function () {
              return this.tree.getRoot()
            },
            getActiveNode: function () {
              return this.tree.getActiveNode()
            },
            getSelectedNodes: function () {
              return this.tree.getSelectedNodes()
            },
            lastentry: undefined
          } ), versionCompare( $.ui.version, "1.8" ) < 0 && ( $.ui.dynatree.getter =
            "getTree getRoot getActiveNode getSelectedNodes" ), $.ui.dynatree.version = "$Version:$", $.ui.dynatree
          .getNode = function ( e ) {
            if ( e instanceof DynaTreeNode ) return e;
            e.selector !== undefined && ( e = e[ 0 ] );
            while ( e ) {
              if ( e.dtnode ) return e.dtnode;
              e = e.parentNode
            }
            return null
          }, $.ui.dynatree.getPersistData = DynaTreeStatus._getTreePersistData, $.ui.dynatree.prototype.options = {
            title: "Dynatree",
            minExpandLevel: 1,
            imagePath: null,
            children: null,
            initId: null,
            initAjax: null,
            autoFocus: !0,
            keyboard: !0,
            persist: !1,
            autoCollapse: !1,
            clickFolderMode: 3,
            activeVisible: !0,
            checkbox: !1,
            selectMode: 2,
            fx: null,
            noLink: !1,
            onClick: null,
            onDblClick: null,
            onKeydown: null,
            onKeypress: null,
            onFocus: null,
            onBlur: null,
            onQueryActivate: null,
            onQuerySelect: null,
            onQueryExpand: null,
            onPostInit: null,
            onActivate: null,
            onDeactivate: null,
            onSelect: null,
            onExpand: null,
            onLazyRead: null,
            onCustomRender: null,
            onCreate: null,
            onRender: null,
            postProcess: null,
            dnd: {
              onDragStart: null,
              onDragStop: null,
              autoExpandMS: 1e3,
              preventVoidMoves: !0,
              onDragEnter: null,
              onDragOver: null,
              onDrop: null,
              onDragLeave: null
            },
            ajaxDefaults: {
              cache: !1,
              timeout: 0,
              dataType: "json"
            },
            strings: {
              loading: "Loading&#8230;",
              loadError: "Load error!"
            },
            generateIds: !1,
            idPrefix: "dynatree-id-",
            keyPathSeparator: "/",
            cookieId: "dynatree",
            cookie: {
              expires: null
            },
            classNames: {
              container: "dynatree-container",
              node: "dynatree-node",
              folder: "dynatree-folder",
              empty: "dynatree-empty",
              vline: "dynatree-vline",
              expander: "dynatree-expander",
              connector: "dynatree-connector",
              checkbox: "dynatree-checkbox",
              nodeIcon: "dynatree-icon",
              title: "dynatree-title",
              noConnector: "dynatree-no-connector",
              nodeError: "dynatree-statusnode-error",
              nodeWait: "dynatree-statusnode-wait",
              hidden: "dynatree-hidden",
              combinedExpanderPrefix: "dynatree-exp-",
              combinedIconPrefix: "dynatree-ico-",
              nodeLoading: "dynatree-loading",
              hasChildren: "dynatree-has-children",
              active: "dynatree-active",
              selected: "dynatree-selected",
              expanded: "dynatree-expanded",
              lazy: "dynatree-lazy",
              focused: "dynatree-focused",
              partsel: "dynatree-partsel",
              lastsib: "dynatree-lastsib"
            },
            debugLevel: 2,
            lastentry: undefined
          }, versionCompare( $.ui.version, "1.8" ) < 0 && ( $.ui.dynatree.defaults = $.ui.dynatree.prototype.options ),
          $.ui.dynatree.nodedatadefaults = {
            title: null,
            key: null,
            isFolder: !1,
            isLazy: !1,
            tooltip: null,
            href: null,
            icon: null,
            addClass: null,
            noLink: !1,
            activate: !1,
            focus: !1,
            expand: !1,
            select: !1,
            hideCheckbox: !1,
            unselectable: !1,
            children: null,
            lastentry: undefined
          };
        var didRegisterDnd = !1,
          _registerDnd = function () {
            if ( didRegisterDnd ) return;
            $.ui.plugin.add( "draggable", "connectToDynatree", {
              start: function ( e, t ) {
                var n = $( this ).data( "ui-draggable" ) || $( this ).data( "draggable" ),
                  r = t.helper.data( "dtSourceNode" ) || null;
                if ( r ) return n.offset.click.top = -2, n.offset.click.left = 16, r.tree._onDragEvent( "start",
                  r, null, e, t, n )
              },
              drag: function ( e, t ) {
                var n = $( this ).data( "ui-draggable" ) || $( this ).data( "draggable" ),
                  r = t.helper.data( "dtSourceNode" ) || null,
                  i = t.helper.data( "dtTargetNode" ) || null,
                  s = $.ui.dynatree.getNode( e.target );
                if ( e.target && !s ) {
                  var o = $( e.target ).closest( "div.dynatree-drag-helper,#dynatree-drop-marker" ).length > 0;
                  if ( o ) return
                }
                t.helper.data( "dtTargetNode", s ), i && i !== s && i.tree._onDragEvent( "leave", i, r, e, t, n ),
                  s && ( !s.tree.options.dnd.onDrop || ( s === i ? s.tree._onDragEvent( "over", s, r, e, t, n ) :
                    s.tree._onDragEvent( "enter", s, r, e, t, n ) ) )
              },
              stop: function ( e, t ) {
                var n = $( this ).data( "ui-draggable" ) || $( this ).data( "draggable" ),
                  r = t.helper.data( "dtSourceNode" ) || null,
                  i = t.helper.data( "dtTargetNode" ) || null,
                  s = n._mouseDownEvent,
                  o = e.type,
                  u = o == "mouseup" && e.which == 1;
                logMsg( "draggable-connectToDynatree.stop: targetNode(from event): %s, dtTargetNode: %s", i, t
                    .helper.data( "dtTargetNode" ) ), u || logMsg( "Drag was cancelled" ), i && ( u && i.tree
                    ._onDragEvent( "drop", i, r, e, t, n ), i.tree._onDragEvent( "leave", i, r, e, t, n ) ), r &&
                  r.tree._onDragEvent( "stop", r, null, e, t, n )
              }
            } ), didRegisterDnd = !0
          }
      } )( jQuery );
    </script>
  
    <script type="text/javascript">
      'use strict';
  
      /* --- Snap2HTML Code --- */
  
      var dirs = []; // contains all directories
  
      /*
          Data format:
              Each index in "dirs" array is an array representing a directory:
                  First item in array: "directory path*always 0*directory modified date"
                      Note that forward slashes are used instead of (Windows style) backslashes
                  Then, for each each file in the directory: "filename*size of file*file modified date"
                  Second to last item in array tells the total size of directory content
                  Last item in array refrences IDs to all subdirectories of this dir (if any).
                      ID is the item index in dirs array.
              Note: Modified date is in UNIX format
                      
      */
  
      // to save space I create aliases for dirs array and push() method on Array object
      var D = dirs;
      Array.prototype.p = Array.prototype.push;
  
      D.p( [ "C:/Users/bryan/Downloads/front-end-temp*0*1624494903", 0, "1*3" ] )
      D.p( [ "C:/Users/bryan/Downloads/front-end-temp/CSS_TechChallenge-master*0*1624494903",
        "chess.gif*2547071*1504046578", "chess.html*4708*1504046578", "README.md*797*1504046578", 2552576, "2"
      ] )
      D.p( [ "C:/Users/bryan/Downloads/front-end-temp/CSS_TechChallenge-master/img*0*1624494903",
        "bB.png*1405*1504046578", "bK.png*3009*1504046578", "bN.png*1875*1504046578", "bP.png*777*1504046578",
        "bQ.png*2648*1504046578", "bR.png*748*1504046578", "wB.png*2374*1504046578", "wK.png*2823*1504046578",
        "wN.png*2388*1504046578", "wP.png*1571*1504046578", "wQ.png*3812*1504046578", "wR.png*1097*1504046578", 24527,
        ""
      ] )
      D.p( [ "C:/Users/bryan/Downloads/front-end-temp/JS_TechChallenge-master*0*1624494903", ".gitignore*12*1504112255",
        "package.json*722*1504112255", "package-lock.json*132681*1504112255", "README.md*5259*1504112255",
        "webpack.config.js*669*1504112255", "yarn.lock*124504*1504112255", 263847, "4*12"
      ] )
      D.p( [ "C:/Users/bryan/Downloads/front-end-temp/JS_TechChallenge-master/dist*0*1624494903",
        "bundle.js*831140*1504112255", "index.html*1914*1504112255", "style.css*761*1504112255", 833815, "5"
      ] )
      D.p( [ "C:/Users/bryan/Downloads/front-end-temp/JS_TechChallenge-master/dist/lib*0*1624494903", 0, "6" ] )
      D.p( [ "C:/Users/bryan/Downloads/front-end-temp/JS_TechChallenge-master/dist/lib/chessboard*0*1624494903", 0,
        "7*8*11"
      ] )
      D.p( [ "C:/Users/bryan/Downloads/front-end-temp/JS_TechChallenge-master/dist/lib/chessboard/css*0*1624494903",
        "chessboard-0.3.0.css*1275*1504112255", "chessboard-0.3.0.min.css*833*1504112255", 2108, ""
      ] )
      D.p( [ "C:/Users/bryan/Downloads/front-end-temp/JS_TechChallenge-master/dist/lib/chessboard/img*0*1624494903", 0,
        "9"
      ] )
      D.p( [ "C:/Users/bryan/Downloads/front-end-temp/JS_TechChallenge-master/dist/lib/chessboard/img/chesspieces*0*1624494903",
        0, "10"
      ] )
      D.p( [ "C:/Users/bryan/Downloads/front-end-temp/JS_TechChallenge-master/dist/lib/chessboard/img/chesspieces/wikipedia*0*1624494903",
        "bB.png*1405*1504112255", "bK.png*3009*1504112255", "bN.png*1875*1504112255", "bP.png*777*1504112255",
        "bQ.png*2648*1504112255", "bR.png*748*1504112255", "wB.png*2374*1504112255", "wK.png*2823*1504112255",
        "wN.png*2388*1504112255", "wP.png*1571*1504112255", "wQ.png*3812*1504112255", "wR.png*1097*1504112255", 24527,
        ""
      ] )
      D.p( [ "C:/Users/bryan/Downloads/front-end-temp/JS_TechChallenge-master/dist/lib/chessboard/js*0*1624494903",
        "chessboard-0.3.0.js*47574*1504112255", "chessboard-0.3.0.min.js*15008*1504112255", 62582, ""
      ] )
      D.p( [ "C:/Users/bryan/Downloads/front-end-temp/JS_TechChallenge-master/src*0*1624494903",
        "ChessBoardFactory.js*1001*1504112255", "helpers.js*1052*1504112255", "index.js*1652*1504112255", 3705, "13"
      ] )
      D.p( [ "C:/Users/bryan/Downloads/front-end-temp/JS_TechChallenge-master/src/Blockchain*0*1624494903",
        "block.hbs*587*1504112255", "Block.js*2000*1504112255", "Blockchain.js*2851*1504112255", 5438, ""
      ] )
  
  
  
      delete( Array.prototype.p ); // remove alias added above
  
      $( document ).ready( function () {
  
        var numberOfFiles = 46;
  
        var linkFiles = true;
        var linkProtocol = "file://";
        var linkRoot = "C:/Users/bryan/Downloads/front-end-temp/";
        var sourceRoot = "C:/Users/bryan/Downloads/front-end-temp";
        var sourceParent = sourceRoot.substring( 0, sourceRoot.lastIndexOf( "/" ) + 1 );
        var originalHash = location.hash.replace( /#/, "" );
        var SelectedFolderID = "-1";
        var currentView;
        var onlyLinkExtensions = []; // example: ["jpg","png"]
  
        /* ---  Init --- */
  
        $( "#tot_size" ).text( bytesToSize( $( "#tot_size" ).text() ) );
  
        $( "#loading" ).remove();
        $( "#content" ).show();
  
        // set size of areas
        $( "#content" ).height( $( "#wrapper" ).outerHeight( true ) - $( "#app_header" ).outerHeight( true ) - 1 );
        setTimeout( function () {
          $( "#list_files" ).height( $( "#content" ).height() - $( "#list_header" ).outerHeight( true ) - $(
            "#list_footer" ).outerHeight( true ) - 1 );
        }, 1 );
  
        $( "#content" ).splitter( {
          sizeLeft: 200
        } );
  
        // build parent folder lookup
        window.parent_folders = [];
        parent_folders[ 0 ] = 0;
        var numDirs = dirs.length;
        for ( var id = 0; id < numDirs; id++ ) {
          var subdirs = getSubdirs( id );
          if ( subdirs != "" ) {
            for ( var c = 0; c < subdirs.length; c++ ) {
              parent_folders[ subdirs[ c ] ] = id;
            }
          }
        }
  
  
        $.tablesorter.addParser( {
          // set a unique id
          id: 'datasort',
          is: function ( s, table, cell, $cell ) {
            // return false so this parser is not auto detected
            return false;
          },
          format: function ( s, table, cell, cellIndex ) {
            var $cell = $( cell );
            // returns data-attribute, or cell text (s) if it doesn't exist
            return $cell.attr( 'data-sort' ) || s;
          },
          // flag for filter widget (true = ALWAYS search parsed values; false = search cell text)
          parsed: false,
          // set type, either numeric or text
          type: 'numeric'
        } );
  
  
  
  
  
        /* --- Events --- */
  
        $( "#search_form" ).submit( function () {
          return false;
        } );
  
        var addFolderClickEventHandlers = function () {
          $( "#list_files a.folder_link" ).click( function () {
            expandToFolder( $( this ).attr( 'id' ) );
            return false;
          } );
        }
  
        // handle clicks on folders in file list
        $( "body" ).delegate( "a.folder_link", "click", function () {
          expandToFolder( $( this ).attr( 'id' ) );
          return false;
        } );
  
        // Handle window resize
        var resizeHandler = debounce( function () {
          // resize is mostly automatic, but we need set the height manually and to tell the splitter to redraw
          $( "#content" ).height( $( "#wrapper" ).outerHeight( true ) - $( "#app_header" ).outerHeight( true ) -
            1 );
          $( "#content" ).trigger( "resize" );
          // for some reason it still did not redraw correctly unless I added a second resize trigger...
          $( "#content" ).height( $( "#wrapper" ).outerHeight( true ) - $( "#app_header" ).outerHeight( true ) -
            1 );
          $( "#content" ).trigger( "resize" );
          // also re-calculate height of file list
          $( "#list_files" ).height( $( "#content" ).height() - $( "#list_header" ).outerHeight( true ) - $(
            "#list_footer" ).outerHeight( true ) - 1 );
        }, 250 );
        window.addEventListener( 'resize', resizeHandler );
  
  
        /* --- Search for files --- */
  
        var searchDelay = 250;
        if ( numberOfFiles > 1000 ) searchDelay = 1000;
  
        var searchKeyPressHandler = debounce( function ( keyEvent ) {
          // cancel debounced event if no keyEvent
          if ( !keyEvent ) return;
  
          // skip searching on keys: tab, shift, ctrl, alt, end, home, arrows
          var keysToSkip = [ 9, 16, 17, 18, 35, 36, 37, 38, 39, 40 ];
          if ( keysToSkip.indexOf( keyEvent.keyCode ) !== -1 ) {
            return;
          }
  
          // on mobile, skip auto search on keypress
          if ( /Mobi/.test( navigator.userAgent ) ) {
            return;
          }
  
          doSearch( false );
        }, searchDelay );
        document.getElementById( "search_text" ).addEventListener( 'input',
        searchKeyPressHandler ); // for handling pressing the x
        document.getElementById( "search_text" ).addEventListener( 'keypress', searchKeyPressHandler );
        document.getElementById( "search_text" ).addEventListener( 'keypress', function ( keyEvent ) {
          if ( keyEvent.keyCode == 13 ) { // on enter key search immediately
            searchKeyPressHandler( null ); // cancel any current debounced event
            doSearch( true );
          }
        } );
  
  
        var SearchFilenames = [];
        var SearchLocations = [];
        var SearchLocationsRaw = [];
        var SearchLocationsID = [];
        var SearchIsDir = [];
        var PreviouslySelectedNode = null;
        var PreviousSearchFor = "";
        var PreviousSearchForMode = "all";
        var currentDir = "";
        var currentDirID = -1;
  
        function doSearch( enterPressed ) {
  
          var SearchFor = $( "#search_text" ).val().toLowerCase();
  
          if ( String.prototype.trim ) { // in case not available in browser
            SearchFor = SearchFor.trim();
          }
  
          // prevent automatic search for short queries
          if ( SearchFor.length > 0 && SearchFor.length <= 2 && !enterPressed ) return;
  
          // search only current folder and optionally subfolders using > and >>
          var SearchForMode = "all";
          var searchThisDirOnly = false;
          var searchThisDirOnlyIncludeSubdirs = false;
          if ( SearchFor.indexOf( ">" ) === 0 ) {
            searchThisDirOnly = true;
            SearchForMode = "dir";
            SearchFor = SearchFor.substr( 1 ); // removes first character
            if ( SearchFor.indexOf( ">" ) === 0 ) {
              searchThisDirOnlyIncludeSubdirs = true;
              SearchFor = SearchFor.substr( 1 );
              SearchForMode = "subdirs";
            }
          }
  
          // prevent searching twice
          if ( SearchFor === PreviousSearchFor && PreviousSearchForMode === SearchForMode ) return;
          PreviousSearchFor = SearchFor;
          PreviousSearchForMode = SearchForMode;
  
          if ( SearchFor === "" ) {
            if ( PreviouslySelectedNode != null ) {
              PreviouslySelectedNode.activate();
              PreviouslySelectedNode = null;
            }
            return;
          }
  
          var showLocationColumn = true;
  
          if ( numberOfFiles > 5000 ) {
            $( "#search_indicator" ).show();
            //$("#list_header").html( "Searching..." );
            showLocationColumn = false;
          }
  
          location.hash = "";
  
          setTimeout( function () { // timeout allows redrawing screen before possible time consuming search
  
            if ( SelectedFolderID != -1 ) {
              PreviouslySelectedNode = $( "#treeview" ).dynatree( "getActiveNode" );
              SelectedFolderID = "-1";
              $( "#treeview" ).dynatree( "getActiveNode" ).deactivate();
            }
  
            var hide_root = ( sourceRoot.length > 3 );
            var numDirs = dirs.length;
            var c;
  
            // if no previous search, do some pre-processing for faster search
            if ( SearchFilenames.length === 0 ) {
              var nFound = 0;
              for ( c = 1; c < numDirs; c++ ) // dirs first...
              {
                SearchFilenames[ nFound ] = dirs[ c ][ 0 ].split( "*" );
                SearchFilenames[ nFound ][ 0 ] = getDirName( c );
                SearchFilenames[ nFound ][ 3 ] = SearchFilenames[ nFound ][
                0 ]; // keep original name (in non-lowercase)
                SearchFilenames[ nFound ][ 0 ] = SearchFilenames[ nFound ][ 0 ].toLowerCase();
                //SearchFilenames[nFound][1] = Number(SearchFilenames[nFound][1]);
                SearchFilenames[ nFound ][ 1 ] = Number( getDirTreeSize( c ) );
                SearchLocationsRaw[ nFound ] = getDirNameAndPath( c );
                if ( hide_root )
                  SearchLocations[ nFound ] = SearchLocationsRaw[ nFound ].substring( sourceParent.length );
                else
                  SearchLocations[ nFound ] = SearchLocationsRaw[ nFound ];
                SearchLocations[ nFound ] = SearchLocations[ nFound ].replace( /\//g,
                  "\\" ) // replace forward slash / with windows style \ backslash
                SearchLocationsID[ nFound ] = c;
                SearchIsDir[ nFound ] = true;
                nFound++;
              }
              for ( c = 0; c < numDirs; c++ ) // ...then all files
              {
                var arrLength = dirs[ c ].length;
                for ( var c2 = 1; c2 < arrLength - 2; c2++ ) {
                  SearchFilenames[ nFound ] = dirs[ c ][ c2 ].split( "*" );
                  SearchFilenames[ nFound ][ 3 ] = SearchFilenames[ nFound ][
                  0 ]; // keep original name (in non-lowercase)
                  SearchFilenames[ nFound ][ 0 ] = SearchFilenames[ nFound ][ 0 ].toLowerCase();
                  SearchFilenames[ nFound ][ 1 ] = Number( SearchFilenames[ nFound ][ 1 ] );
                  SearchLocationsRaw[ nFound ] = getDirNameAndPath( c );
                  if ( hide_root )
                    SearchLocations[ nFound ] = SearchLocationsRaw[ nFound ].substring( sourceParent.length );
                  else
                    SearchLocations[ nFound ] = SearchLocationsRaw[ nFound ];
                  SearchLocations[ nFound ] = SearchLocations[ nFound ].replace( /\//g,
                    "\\" ) // replace forward slash / with windows style \ backslash
                  SearchLocationsID[ nFound ] = c;
                  SearchIsDir[ nFound ] = false;
                  nFound++;
                }
              }
            }
  
            var locationHtml = "";
  
            if ( showLocationColumn ) locationHtml = "<th>Folder</th>";
  
            currentView = [];
            var table_html = "";
            table_html += "<table id='files' class='tablesorter'><thead><tr><th>Name</th>" +
              locationHtml +
              "<th>Size</th><th>Modified</th></tr></thead><tbody>";
  
            var countFiles = 0;
            var countDirs = 0;
            var sizeFiles = 0;
            var sizeDirs = 0;
  
            function foundItem( index ) {
              var dir_tmp = getDirNameAndPath( SearchLocationsID[ index ] );
  
              if ( searchThisDirOnly ) {
                var path = getPathToDir( SearchLocationsID[ index ] );
  
                if ( path.indexOf( currentDirID ) === -1 ) {
                  // skip items not in current path
                  return;
                }
  
                if ( path[ path.length - 1 ] === currentDirID ) {
                  // file in current dir --> ok for both searchThisDirOnly and searchThisDirOnlyIncludeSubdirs
                  if ( SearchIsDir[ index ] && SearchLocationsID[ index ] == currentDirID ) {
                    // always skip current dir which appears here
                    return;
                  }
                  console.log( "   file in current dir" );
                } else if ( SearchIsDir[ index ] && path[ path.length - 2 ] === currentDirID ) {
                  // dir in current dir are also ok
                } else if ( path.indexOf( currentDirID ) !== -1 ) {
                  // item is in a subdir: ok for searchThisDirOnlyIncludeSubdirs
                  if ( !searchThisDirOnlyIncludeSubdirs ) {
                    return;
                  }
                }
              }
  
              dir_tmp = dir_tmp.substring( sourceRoot.length );
              if ( dir_tmp != "" ) dir_tmp += "/";
  
              if ( SearchIsDir[ index ] === true ) {
                countDirs++;
                sizeDirs += SearchFilenames[ index ][ 1 ];
                var subdir_id = parent_folders[ SearchLocationsID[ index ] ];
  
                var timestamp = timestampToDate( SearchFilenames[ index ][ 2 ] );
  
                locationHtml = "";
                if ( showLocationColumn ) {
                  var located_in = SearchLocations[ index ];
                  if ( located_in === "" ) located_in = "[.]"
                  located_in = located_in.substring( 0, located_in.lastIndexOf( "\\" ) );
                  locationHtml = "<td><span class='file_folder'><a href=\"#\" class=\"folder_link\" id=\"" +
                    subdir_id + "\"> " + located_in + "</a></span></td>";
                }
  
                table_html +=
                  "<tr>" +
                  "<td><span class='file_folder'><a href=\"#\" class=\"folder_link\" id=\"" + SearchLocationsID[
                    index ] + "\"> " + SearchFilenames[ index ][ 3 ] + "</a></span></td>" +
                  locationHtml +
                  "<td class='size' data-sort='" + SearchFilenames[ index ][ 1 ] + "'>" + bytesToSize(
                    SearchFilenames[ index ][ 1 ] ) + "</td>" +
                  "<td class='date' data-sort='" + SearchFilenames[ index ][ 2 ] + "'>" + timestamp + "</td>" +
                  "</tr>";
                currentView.push( {
                  "name": SearchFilenames[ index ][ 3 ],
                  "path": SearchLocationsRaw[ index ].replace( /\//g, "\\" ),
                  "type": "dir",
                  "size": SearchFilenames[ index ][ 1 ],
                  "date": SearchFilenames[ index ][ 2 ]
                } );
              } else // files
              {
                sizeFiles += SearchFilenames[ index ][ 1 ];
                countFiles++;
  
                var file_tmp = SearchFilenames[ index ][ 3 ];
  
                if ( linkFiles ) {
                  var ext = file_tmp.split( '.' ).pop();
                  if ( onlyLinkExtensions.length === 0 || onlyLinkExtensions.indexOf( ext ) !== -1 ) {
  
                    file_tmp = linkProtocol + linkRoot + dir_tmp.replace( "\\", "/" ) + SearchFilenames[ index ][
                      3
                    ] + "\">";
                    if ( navigator.userAgent.toLowerCase().indexOf( "msie" ) !== -1 && linkProtocol.indexOf(
                        "file:" ) !== -1 ) {
                      file_tmp =
                        "javascript:alert('Internet Explorer does not allow linking to local files...')" + "\">";
                    }
                    if ( file_tmp.substr( 0, 1 ) === "/" ) file_tmp = file_tmp.substr( 1 );
                    file_tmp = file_tmp.replace( /\\/g, "/" );
                    file_tmp = file_tmp.replace( /#/g, "%23" );
  
                    var indx = file_tmp.indexOf( "://" );
                    if ( indx !== -1 ) {
                      var protocol_tmp = file_tmp.substr( 0, indx + 3 );
                      file_tmp = file_tmp.substr( indx + 3 );
                      file_tmp = file_tmp.replace( /\/\//g, "/" );
                      file_tmp = protocol_tmp + file_tmp;
                    } else {
                      file_tmp = file_tmp.replace( /\/\//g, "/" );
                    }
  
                    file_tmp = "<a href=\"" + file_tmp + SearchFilenames[ index ][ 3 ] + "</a>";
                  }
                }
  
                locationHtml = "";
                if ( showLocationColumn ) {
                  var located_in = SearchLocations[ index ];
                  if ( located_in === "" ) located_in = "[.]"
                  locationHtml = "<td><span class='file_folder'><a href=\"#\" class=\"folder_link\" id=\"" +
                    SearchLocationsID[ index ] + "\"> " + located_in + "</a></span></td>";
                }
  
  
                var timestamp = timestampToDate( SearchFilenames[ index ][ 2 ] );
                table_html +=
                  "<tr>" +
                  "<td><span class='file'>" + file_tmp + "</span></td>" +
                  locationHtml +
                  "<td class='size' data-sort='" + SearchFilenames[ index ][ 1 ] + "'>" + bytesToSize(
                    SearchFilenames[ index ][ 1 ] ) + "</td>" +
                  "<td class='date' data-sort='" + SearchFilenames[ index ][ 2 ] + "'>" + timestamp + "</td>" +
                  "</tr>";
  
                currentView.push( {
                  "name": SearchFilenames[ index ][ 3 ],
                  "path": SearchLocationsRaw[ index ].replace( /\//g, "\\" ),
                  "type": "file",
                  "size": SearchFilenames[ index ][ 1 ],
                  "date": SearchFilenames[ index ][ 2 ]
                } );
  
              }
            }
  
            // search for matches
            // optimization: use indexOf if no wildcards since it's faster
            if ( SearchFor.indexOf( "*" ) !== -1 || SearchFor.indexOf( "?" ) !== -1 ) {
              var SearchForEscaped = SearchFor.replace( /[\-\[\]\/\{\}\(\)\+\.\\\^\$\|]/g, "\\$&" );
              SearchForEscaped = SearchForEscaped.replace( /\*/g, ".*" );
              SearchForEscaped = SearchForEscaped.replace( /\?/g, "." );
              var regEx = new RegExp( SearchForEscaped );
  
              for ( c = 0; c < SearchFilenames.length; c++ ) {
                if ( regEx.test( SearchFilenames[ c ][ 0 ] ) ) {
                  foundItem( c );
                }
              }
            } else {
              for ( c = 0; c < SearchFilenames.length; c++ ) {
                if ( SearchFilenames[ c ][ 0 ].indexOf( SearchFor ) !== -1 ) {
                  foundItem( c );
                }
              }
            }
  
            table_html += "</tbody></table>";
  
            $( "#list_header" ).html( "Search Results <span class='path_divider'></span>" );
            document.getElementById( "list_files" ).innerHTML = table_html;
            $( "#search_indicator" ).hide();
            addFolderClickEventHandlers();
  
            var tablesorterHeaders = {
              1: {
                sorter: 'datasort'
              },
              2: {
                sorter: 'datasort'
              }
            }
            if ( showLocationColumn ) {
              tablesorterHeaders = {
                2: {
                  sorter: 'datasort'
                },
                3: {
                  sorter: 'datasort'
                }
              }
            }
  
            $( "#files" ).tablesorter( {
              sortInitialOrder: "desc",
              headers: tablesorterHeaders
            } );
  
            var sFiles = " files";
            if ( countFiles === 1 ) sFiles = " file";
            var sDirs = " folders";
            if ( countDirs === 1 ) sDirs = " folder";
            $( "#list_footer_info_label" ).html( countDirs + sDirs + " (" + bytesToSize( sizeDirs, 0 ) + "), " +
              countFiles + sFiles + " (" + bytesToSize( sizeFiles, 0 ) + ")" );
  
          }, 50 ); // end setTimeout before search
        }; // end doSearch()
  
  
        /* --- Show content of a folder --- */
  
        function ShowFolder( FolderID ) {
          var c;
  
          if ( SelectedFolderID === FolderID ) return false;
          $( "#treeview #" + SelectedFolderID ).removeClass( "treeview_bold" );
          SelectedFolderID = FolderID;
  
          $( "#search_text" ).val( "" );
          PreviousSearchFor = "";
  
          var path = getPathToDir( FolderID );
          var currentViewPath = getDirNameAndPath( FolderID ).replace( /\//g, "\\" );
          var breadcrumbs = "";
          for ( c = 0; c < path.length; c++ ) {
            var dirName = getDirName( path[ c ] );
            if ( c === 0 ) {
              dirName = dirName.replace( /\:\//g, "" ); // remove :\ from volume labels
            }
            breadcrumbs += "<a href=\"#\" class=\"folder_link\" id=\"" + path[ c ] + "\">" + dirName + "</a>" +
              "<span class='path_divider'></span>";
          }
  
          currentDir = getDirNameAndPath( FolderID );
          currentDirID = Number( FolderID );
  
          location.hash = '#' + currentDir;
  
          $( "#list_header" ).html( breadcrumbs );
  
          var table_html = "";
          var showParentFolderClass = "";
          if ( FolderID != 0 ) {
            showParentFolderClass = " has-parent-folder"
            table_html += "<span id='parent_folder' class='file_folder'><a href=\"#\" class=\"folder_link\" id=\"" +
              parent_folders[ FolderID ] + "\"> [..]</a></span>\n";
            table_html += "<div id='parent_folder_border'></div>";
          }
          table_html += "<table id='files' class='tablesorter" + showParentFolderClass +
            "'><thead><th>Name</th><th>Size</th><th>Modified</th></tr></thead><tbody>\n";
  
          currentView = [];
          var countFiles = 0;
          var countDirs = 0;
          var subdirTotSizes = 0;
  
          // folders
          var subdirs = getSubdirs( SelectedFolderID );
          if ( subdirs != "" ) {
            for ( c = 0; c < subdirs.length; c++ ) {
              countDirs++;
              var sTmp = dirs[ subdirs[ c ] ][ 0 ].split( "*" );
              var name = sTmp[ 0 ].substring( sTmp[ 0 ].lastIndexOf( "/" ) + 1 );
              var dirSize = getDirTreeSize( subdirs[ c ] );
              subdirTotSizes += dirSize;
              var timestamp = timestampToDate( sTmp[ 2 ] );
              table_html +=
                "<tr>" +
                "<td><span class='file_folder'><a href=\"#\" class=\"folder_link\" id=\"" + subdirs[ c ] + "\"> " +
                name + "</a></span></td>" +
                "<td class='size' data-sort='" + dirSize + "'>" + bytesToSize( dirSize ) + "</td>" +
                "<td class='date' data-sort='" + sTmp[ 2 ] + "'>" + timestamp + "</td>" +
                "</tr>\n";
              currentView.push( {
                "name": name,
                "path": currentViewPath,
                "type": "dir",
                "size": dirSize,
                "date": sTmp[ 2 ]
              } );
            }
          }
  
          // files
          for ( c = 1; c < dirs[ SelectedFolderID ].length - 2; c++ ) {
            countFiles++;
            var sTmp = dirs[ SelectedFolderID ][ c ].split( "*" );
            var file_tmp = sTmp[ 0 ];
            var dir_tmp = getDirNameAndPath( SelectedFolderID ).substring( sourceRoot.length );
            if ( dir_tmp != "" ) dir_tmp += "/";
            if ( linkFiles ) {
  
              var ext = file_tmp.split( '.' ).pop();
              if ( onlyLinkExtensions.length === 0 || onlyLinkExtensions.indexOf( ext ) !== -1 ) {
                file_tmp = linkProtocol + linkRoot + dir_tmp + sTmp[ 0 ] + "\">";
                if ( navigator.userAgent.toLowerCase().indexOf( "msie" ) !== -1 && linkProtocol.indexOf( "file:" ) !==
                  -1 ) {
                  file_tmp = "javascript:alert('Internet Explorer does not allow linking to local files...')" + "\">";
                }
                if ( file_tmp.substr( 0, 1 ) === "/" ) file_tmp = file_tmp.substr( 1 );
                file_tmp = file_tmp.replace( /\\/g, "/" );
                file_tmp = file_tmp.replace( /#/g, "%23" );
  
                var indx = file_tmp.indexOf( "://" );
                if ( indx !== -1 ) {
                  var protocol_tmp = file_tmp.substr( 0, indx + 3 );
                  file_tmp = file_tmp.substr( indx + 3 );
                  file_tmp = file_tmp.replace( /\/\//g, "/" );
                  file_tmp = protocol_tmp + file_tmp;
                } else {
                  file_tmp = file_tmp.replace( /\/\//g, "/" );
                }
  
                file_tmp = "<a href=\"" + file_tmp + sTmp[ 0 ] + "</a>";
              }
            }
  
            var timestamp = timestampToDate( sTmp[ 2 ] );
  
            table_html +=
              "<tr>" +
              "<td><span class='file'>" + file_tmp + "</span></td>" +
              "<td class='size' data-sort='" + sTmp[ 1 ] + "'>" + bytesToSize( sTmp[ 1 ] ) + "</td>" +
              "<td class='date' data-sort='" + sTmp[ 2 ] + "'>" + timestamp + "</td>" +
              "</tr>\n";
            currentView.push( {
              "name": sTmp[ 0 ],
              "path": currentViewPath,
              "type": "file",
              "size": sTmp[ 1 ],
              "date": sTmp[ 2 ]
            } );
          }
  
          table_html += "</tbody></table>\n";
  
          document.getElementById( "list_files" ).innerHTML = table_html;
          addFolderClickEventHandlers();
          $( "#files" ).tablesorter( {
            sortInitialOrder: "desc",
            headers: {
              1: {
                sorter: 'datasort'
              },
              2: {
                sorter: 'datasort'
              }
            }
          } );
  
  
          var sFiles = " files";
          if ( countFiles === 1 ) sFiles = " file";
          var sDirs = " folders";
          if ( countDirs === 1 ) sDirs = " folder";
          $( "#list_footer_info_label" ).html( countDirs + sDirs + " (" + bytesToSize( subdirTotSizes ) + "), " +
            countFiles + sFiles + " (" + bytesToSize( dirs[ SelectedFolderID ][ dirs[ SelectedFolderID ].length -
              2 ] ) + ")" );
  
          $( "#treeview #" + SelectedFolderID ).addClass( "treeview_bold" );
  
          return false;
        }
  
  
        /* --- Treeview --- */
  
        function PopulateTreeviewNode( node ) {
          var subdirs = getSubdirs( node.data.key );
          if ( subdirs != "" ) {
            var len = subdirs.length;
            for ( var c = 0; c < len; c++ ) {
              var newNode = node.addChild( {
                title: getDirName( subdirs[ c ] ),
                key: subdirs[ c ],
                unselectable: true,
                isFolder: true,
                tooltip: bytesToSize( getDirTreeSize( subdirs[ c ] ) ),
              } );
              PopulateTreeviewNode( newNode )
            }
          }
        }
  
        $( "#treeview" ).dynatree( {
          clickFolderMode: 1,
          minExpandLevel: 2,
          fx: {
            height: "toggle",
            duration: 100
          },
          onActivate: function ( node ) {
            ShowFolder( node.data.key );
          },
          onDblClick: function ( node ) {
            node.expand( !node.isExpanded() );
          },
        } );
  
        // init treeview items
        var rootNode = $( "#treeview" ).dynatree( "getRoot" ).addChild( {
          title: getDirName( 0 ).replace( /\//, "\\" ),
          key: "0",
          isFolder: true,
          tooltip: bytesToSize( getDirTreeSize( 0 ) ),
        } );
        rootNode.tree.enableUpdate( false );
        PopulateTreeviewNode( rootNode );
        rootNode.tree.enableUpdate( true );
        rootNode.activate();
  
        // browse directly to folder at startup
        if ( originalHash !== "" ) {
          var folderId = getFolderIdFromPath( originalHash );
          if ( folderId ) {
            expandToFolder( folderId )
          } else {
            location.hash = "";
          }
        }
  
        /* --- Export LightBox --- */
  
        function populateExport() {
          var output_plain = "";
          var output_json = [];
          var output_csv = "";
  
          // get the settings
          var showFiles = $( "#export_checkbox_files" ).prop( "checked" )
          var showDirs = $( "#export_checkbox_dirs" ).prop( "checked" )
          var fullPath = $( "#export_checkbox_path" ).prop( "checked" )
  
          var colPath = $( "#export_checkbox_col_path" ).prop( "checked" )
          var colType = $( "#export_checkbox_col_type" ).prop( "checked" )
          var colSize = $( "#export_checkbox_col_size" ).prop( "checked" )
          var colDate = $( "#export_checkbox_col_date" ).prop( "checked" )
  
          var type = $( "#export_lightbox input[type='radio']:checked" ).val();
  
          // set csv header
          var csv_line = "\"Name\"";
          if ( colPath ) csv_line += ",\"Path\"";
          if ( colType ) csv_line += ",\"Type\"";
          if ( colSize ) csv_line += ",\"Size\"";
          if ( colDate ) csv_line += ",\"Date\"";
          output_csv = csv_line + "\n";
  
          // collect and format items
          for ( var i = 0; i < currentView.length; i++ ) {
  
            var path = "";
            if ( fullPath ) path = currentView[ i ].path + "\\";
  
            var json_line = {
              "name": ( path + currentView[ i ].name )
            }
            if ( colPath ) json_line.path = currentView[ i ].path;
            if ( colType ) json_line.type = currentView[ i ].type;
            if ( colSize ) json_line.size = currentView[ i ].size;
            if ( colDate ) json_line.date = timestampToIsoString( currentView[ i ].date );
  
            var csv_line = "\"" + path + currentView[ i ].name + "\"";
            if ( colPath ) csv_line += ",\"" + currentView[ i ].path + "\"";
            if ( colType ) csv_line += ",\"" + currentView[ i ].type + "\"";
            if ( colSize ) csv_line += ",\"" + currentView[ i ].size + "\"";
            if ( colDate ) csv_line += ",\"" + timestampToIsoString( currentView[ i ].date ) + "\"";
  
            if ( showFiles && currentView[ i ].type == "file" ) {
              output_plain += path + currentView[ i ].name + "\n";
              output_json.push( json_line );
              output_csv += csv_line + "\n";
            }
            if ( showDirs && currentView[ i ].type == "dir" ) {
              output_plain += path + currentView[ i ].name + "\n";
              output_json.push( json_line );
              output_csv += csv_line + "\n";
            }
          }
  
          // print items
          var output = "";
          if ( type == "plain" ) {
            output = output_plain;
          } else if ( type == "json" ) {
            output = JSON.stringify( output_json ).replace( /},/g, "},\n" ).replace( /^\[/, "[\n" ).replace( /\]$/,
              "\n]" );
          } else if ( type == "csv" ) {
            output = output_csv;
          }
          $( "#export_text" ).text( output ).focus().select();
        }
  
        $( "#list_footer_open_export" ).click( function () {
          var windowHeight = $( "body" ).height();
          $( "#export_checkbox_files" ).prop( "checked", true );
          $( "input[id^=export_checkbox_col]" ).attr( "disabled", true );
          $( "#export_options_columns" ).css( "opacity", "0.5" );
          populateExport();
  
          $( "#export_content" ).innerHeight( windowHeight - 80 );
          $( "#export_content" ).css( "top", 40 );
          $( "#export_lightbox" ).fadeIn( "fast", function () {
            $( "#export_text" ).focus().select();
          } );
        } );
  
        $( "#export_save" ).click( function () {
          var type = $( "#export_lightbox input[type='radio']:checked" ).val();
          if ( type == "plain" ) {
            downloadToFile( $( "#export_text" ).text(), 'snap2html_export.txt', 'text/plain;encoding:utf-8' );
          } else if ( type == "json" ) {
            downloadToFile( $( "#export_text" ).text(), 'snap2html_export.json',
              'application/json;encoding:utf-8' );
          } else if ( type == "csv" ) {
            downloadToFile( $( "#export_text" ).text(), 'snap2html_export.csv', 'text/csv;encoding:utf-8' );
          }
        } );
  
  
        $( "#export_close" ).click( function () {
          $( "#export_lightbox" ).fadeOut( "fast" );
        } );
  
        $( "#export_content" ).click( function ( event ) {
          event.stopPropagation();
        } );
        $( "#export_lightbox" ).click( function () {
          $( "#export_lightbox" ).fadeOut( "fast" );
        } );
        $( "#export_lightbox input[type=radio]" ).click( function () {
          var type = $( "#export_lightbox input[type='radio']:checked" ).val();
          if ( type !== "plain" ) {
            $( "input[id^=export_checkbox_col]" ).removeAttr( "disabled" );
            $( "#export_options_columns" ).css( "opacity", 1 );
          } else {
            $( "input[id^=export_checkbox_col]" ).attr( "disabled", true )
            $( "#export_options_columns" ).css( "opacity", 0.5 );
          }
        } );
        $( "#export_lightbox input[type=checkbox], #export_lightbox input[type=radio]" ).click( function () {
          populateExport();
        } );
  
        document.addEventListener( 'keypress', function ( keyEvent ) {
          if ( keyEvent.keyCode == 27 ) { // esc
            if ( $( "#csv_lightbox" ).length > 0 ) {
              $( "#csv_lightbox" ).fadeOut( "fast" );
            }
          }
        } );
  
        /* --- Helper Functions --- */
  
        function expandToFolder( id ) {
          var tree = $( "#treeview" ).dynatree( "getTree" );
          var node = tree.getNodeByKey( id.toString() );
          if ( node ) {
            node.activate();
          }
        }
  
        function getFolderIdFromPath( path ) {
          for ( var c = 0; c < numDirs; c++ ) {
            if ( dirs[ c ][ 0 ].split( "*" )[ 0 ] == path ) {
              return c;
            };
          }
          return null;
        }
  
        function getDirName( id ) {
          if ( dirs.length <= id ) return "";
          var tmp = dirs[ id ][ 0 ].split( "*" );
          var tmp2 = tmp[ 0 ].substring( tmp[ 0 ].lastIndexOf( "/" ) + 1 );
          if ( tmp2 === "" ) return tmp[ 0 ];
          else return tmp2;
        }
  
        function getDirNameAndPath( id ) {
          if ( dirs.length <= id ) return "";
          var tmp = dirs[ id ][ 0 ].split( "*" );
          return tmp[ 0 ];
        }
  
        function getSubdirs( id ) {
          if ( dirs.length <= id ) return "";
          return dirs[ id ][ dirs[ id ].length - 1 ].split( "*" );
        }
  
        function getPathToDir( id ) {
          var parentId = parent_folders[ id ];
          var path = [];
          if ( id != 0 ) {
            path.push( id );
          }
          while ( parentId > 0 ) {
            path.push( parentId );
            parentId = parent_folders[ parentId ];
          }
          path.push( 0 );
          return path.reverse();
        }
  
        function getDirSize( id ) {
          if ( dirs.length <= id ) return "0";
          return dirs[ id ][ dirs[ id ].length - 2 ];
        }
  
        function getDirTreeSize( id ) {
          if ( dirs.length <= id ) return "0";
          var totSize = getDirSize( id );
          var subdirs = getSubdirs( id );
          if ( subdirs != "" ) {
            var len = subdirs.length;
            for ( var c = 0; c < len; c++ ) {
              totSize += getDirTreeSize( subdirs[ c ] );
            }
          }
          return totSize;
        }
  
        function bytesToSize( bytes ) {
          var kilobyte = 1024;
          var megabyte = kilobyte * 1024;
          var gigabyte = megabyte * 1024;
          var terabyte = gigabyte * 1024;
  
          if ( ( bytes >= 0 ) && ( bytes < kilobyte ) ) {
            return bytes + ' bytes';
  
          } else if ( ( bytes >= kilobyte ) && ( bytes < megabyte ) ) {
            return ( bytes / kilobyte ).toFixed( 0 ) + ' KB';
  
          } else if ( ( bytes >= megabyte ) && ( bytes < gigabyte ) ) {
            return ( bytes / megabyte ).toFixed( 1 ) + ' MB';
  
          } else if ( ( bytes >= gigabyte ) && ( bytes < terabyte ) ) {
            return ( bytes / gigabyte ).toFixed( 2 ) + ' GB';
  
          } else if ( bytes >= terabyte ) {
            return ( bytes / terabyte ).toFixed( 2 ) + ' TB';
  
          } else {
            return bytes + ' bytes';
          }
        }
  
        function timestampToDate( timestamp ) {
          // Convert UNIX timestamp to local date
          // If you don't like the date format, try something else, such as toLocaleDateString() manually formatting the date here
          return new Date( timestamp * 1000 ).toLocaleString();
        }
  
        function timestampToIsoString( timestamp ) {
          // Convert UNIX timestamp to ISO string (for use in export view)
          return new Date( timestamp * 1000 ).toISOString();
        }
  
  
        // debounce() from Underscore.js
        // Returns a function, that, as long as it continues to be invoked, will not
        // be triggered. The function will be called after it stops being called for
        // N milliseconds. If `immediate` is passed, trigger the function on the
        // leading edge, instead of the trailing.
        function debounce( func, wait, immediate ) {
          var timeout;
          return function () {
            var context = this,
              args = arguments;
            var later = function () {
              timeout = null;
              if ( !immediate ) func.apply( context, args );
            };
            var callNow = immediate && !timeout;
            clearTimeout( timeout );
            timeout = setTimeout( later, wait );
            if ( callNow ) func.apply( context, args );
          };
        };
  
        // Save export to local file. Based on https://stackoverflow.com/a/29304414/1087811
        function downloadToFile( content, fileName, mimeType ) {
          var a = document.createElement( 'a' );
          mimeType = mimeType || 'application/octet-stream';
  
          if ( navigator.msSaveBlob ) { // IE10
            navigator.msSaveBlob( new Blob( [ content ], {
              type: mimeType
            } ), fileName );
          } else if ( URL && 'download' in a ) { //html5 A[download]
            a.href = URL.createObjectURL( new Blob( [ content ], {
              type: mimeType
            } ) );
            a.setAttribute( 'download', fileName );
            document.body.appendChild( a );
            a.click();
            document.body.removeChild( a );
          } else {
            location.href = 'data:application/octet-stream,' + encodeURIComponent(
            content ); // only this mime type is supported
          }
        }
  
      } ); 
      // end $(document).ready