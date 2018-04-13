import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';


@Component({
  tag: 'task-detail',
  styleUrl: 'task-detail.css'
})
export class TaskDetail {
  
  @Prop() match: MatchResults;
  @Prop() d: String = new Date().toUTCString();
  
  constructor() {
    document.title = `Detail`;
  }
  
   /**
   * The component will load but has not rendered yet.
   *
   * This is a good place to make any last minute updates before rendering.
   *
   * Will only be called once
   */
  componentWillLoad() {
    console.log('The TaskDetail is about to be rendered', );
	//console.log(window.intercomSettings);
	console.log(window['intercomSettings']);
	console.log(window['dynamooveSettings']);
	
  }

  /**
   * The component is loaded and has rendered.
   *
   * Updating data in this event may cause the component to re-render.
   *
   * Will only be called once
   */
  componentDidLoad() {
    console.log('The TaskDetail has been rendered');
  }

  /**
   * The component did unload and the element will be destroyed.
   */
  componentDidUnload() {
    console.log('The TaskDetail has been removed from the DOM');
  }
  
  render() {
    
      return (
        <div class='task-detail'>		
          <p>
            Hello! My name is 3 {this.d}
          </p>
		    <stencil-route-link url={window['dynamooveSettings'].baseUrl+'/page/page-inbox'} >
                 inbox
                </stencil-route-link>
        </div>
      );
    
  }
}
