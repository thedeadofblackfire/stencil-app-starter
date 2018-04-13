import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';


@Component({
  tag: 'page-inbox',
  styleUrl: 'page-inbox.css'
})
export class PageInbox {
  
  @Prop() match: MatchResults;
  @Prop() d: String = new Date().toUTCString();
  
  constructor() {
    document.title = `Inbox`;
  }
  
   /**
   * The component will load but has not rendered yet.
   *
   * This is a good place to make any last minute updates before rendering.
   *
   * Will only be called once
   */
  componentWillLoad() {
    console.log('The Inbox is about to be rendered', );
	//console.log(window.intercomSettings);
	console.log(window['intercomSettings']);
	//console.log(window.dynamooveSettings);
	
  }

  /**
   * The component is loaded and has rendered.
   *
   * Updating data in this event may cause the component to re-render.
   *
   * Will only be called once
   */
  componentDidLoad() {
    console.log('The Inbox has been rendered');
  }

  /**
   * The component did unload and the element will be destroyed.
   */
  componentDidUnload() {
    console.log('The Inbox has been removed from the DOM');
  }
  
  render() {    
      return (
        <div class='page-inbox'>		
          <p>
            my inbox {this.d}
          </p>
		    <stencil-route-link url='/page/task-detail'>
                 task
                </stencil-route-link>
        </div>
      );
    
  }
}
