!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t){var n=wp.i18n.__,r=wp.blocks.registerBlockType,o=wp.components,l=o.SelectControl,a=o.PanelBody,i=wp.editor.InspectorControls,c=rtb_blocks,u=c.formOutline,s=c.locationsEnabled,p=c.locations;r("restaurant-reservations/booking-form",{title:n("Booking Form","restaurant-reservations"),icon:"calendar",category:"widgets",attributes:{location:{type:"number",default:0}},supports:{html:!1,reusable:!1,multiple:!1},edit:function(e){function t(e){o({location:e})}var r=e.attributes,o=e.setAttributes,c=r.location;return wp.element.createElement("div",{class:"rtb-block-outline"},s?wp.element.createElement(i,null,wp.element.createElement(a,null,wp.element.createElement(l,{label:n("Location"),value:c,onChange:t,options:p}))):"",u.map(function(e){return wp.element.createElement("div",{className:"rtb-block-outline-fieldset"},e.map(function(e){return wp.element.createElement("div",{className:"rtb-block-outline-field "+e},wp.element.createElement("div",{className:"rtb-block-outline-label"}),wp.element.createElement("div",{className:"rtb-block-outline-input"}))}))}),wp.element.createElement("div",{class:"rtb-block-outline-button"},n("Request Booking","restaurant-reservations")))},save:function(){return null}})}]);