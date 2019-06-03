/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  IProduct,
} from './models/product';


export namespace Components {
  interface AppHome {}
  interface AppRoot {}
  interface ProductCard {
    'product': IProduct;
  }
}

declare namespace LocalJSX {
  interface AppHome extends JSXBase.HTMLAttributes {}
  interface AppRoot extends JSXBase.HTMLAttributes {}
  interface ProductCard extends JSXBase.HTMLAttributes {
    'product'?: IProduct;
  }

  interface IntrinsicElements {
    'app-home': AppHome;
    'app-root': AppRoot;
    'product-card': ProductCard;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


declare global {



  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLProductCardElement extends Components.ProductCard, HTMLStencilElement {}
  var HTMLProductCardElement: {
    prototype: HTMLProductCardElement;
    new (): HTMLProductCardElement;
  };

  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-root': HTMLAppRootElement;
    'product-card': HTMLProductCardElement;
  }

  interface ElementTagNameMap extends HTMLElementTagNameMap {}
}

