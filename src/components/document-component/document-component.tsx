import { Component, Element, Prop, State, Method } from '@stencil/core';

// page-wrapper for static in memory/cached
@Component({
  tag: 'document-component',
  //styleUrl: 'document-component.scss'
})
export class DocumentComponent {

  @Element() el: HTMLElement;

  @Prop() pages: string[] = [];
  @Prop() pageid: string = '';
  
  @State() _pages: string[] = [];
  @State() content: string;

  @Method()
  showPage() {
    // show a prompt
	this.hideAllPages();
  }
  
  hideAllPages() {
	  console.log('hideAllPages');
	  const current_pages = this.el.querySelectorAll('.page-content.is-shown')
	  Array.prototype.forEach.call(current_pages, function(p) {
		p.classList.remove('is-shown')
	  })
  }

		
   /**
   * The component will load but has not rendered yet.
   *
   * This is a good place to make any last minute updates before rendering.
   *
   * Will only be called once
   */
  componentWillLoad() {
    console.log(this.pageid+' DocumentComponent - The component is about to be rendered');
  }

  /**
   * The component is loaded and has rendered.
   *
   * Updating data in this event may cause the component to re-render.
   *
   * Will only be called once
   */
  componentDidLoad() {
    console.log(this.pageid+' DocumentComponent - The component has been rendered');
  }

  /**
   * The component will update and re-render.
   *
   * Called multiple times throughout the life of the component as it updates.
   */
  componentWillUpdate() {
    console.log('DocumentComponent - The component will update');
  }

  /**
   * The component finished updating.
   *
   * Called after componentWillUpdate
   *
   * Called multiple times throughout the life of the component as it updates.
   */
  componentDidUpdate() {
    console.log('DocumentComponent - The component did update');
  }
  
   /**
   * The component did unload and the element will be destroyed.
   */
  componentDidUnload() {
    console.log('DocumentComponent - The view has been removed from the DOM');
  }
  
  // {this.pages.map(page => <p class={page} >{page}</p>)}
  /*
   <div>
        <site-menu />
        {this.pages.map(page => <app-marked doc={page} />)}
      </div>
  */
  render() {
    return (
      <div>
        {this.pages.map(page => <p id={this.pageid} class={page} >{page}</p>)}
      </div>
    )
  }
}
