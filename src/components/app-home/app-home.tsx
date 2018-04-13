import { Component } from '@stencil/core';
import { Helmet } from '@stencil/helmet';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

 constructor() {
    document.title = `Ab`;
  }
  
  testPage(){
    let wrapperPage = document.querySelector('page-wrapper');
    wrapperPage.showPage('info');
	wrapperPage.addDynamicTag('task-detail', {id: 1});
  }
 
   testPage2(){
    let wrapperPage = document.querySelector('page-wrapper');
	wrapperPage.addDynamicTag('inbox');
  }
  
  testPageCustom(p){
    let wrapperPage = document.querySelector('page-wrapper');
	wrapperPage.addDynamicTag(p);
  }
 
  render() {
    return (
      <div class='app-home'>
        <p>
          Welcome to the Stencil App Starter.
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>
		<Helmet>
          <title>coucou2</title>
        </Helmet>

		
		<button onClick={() => this.testPage()}> Page</button>
		<button onClick={() => this.testPage2()}> Page2</button>
		<button onClick={() => this.testPageCustom('app-profile')}> Page3</button>
		
        <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link>
		
		     <ul>
              <li>
                <stencil-route-link url='/docs/introduction'>
                  Why Stencil
                </stencil-route-link>
              </li>
              <li>
                <stencil-route-link url='/docs/getting-started' >
                  Getting Started
                </stencil-route-link>
              </li>
              <li>
                <stencil-route-link url='/docs/my-first-component'>
                  My First Component
                </stencil-route-link>
              </li>
            </ul>
			
			<h3>Pages</h3>
			 <ul>
              <li>
                <stencil-route-link url='/page/task-detail'>
                 task
                </stencil-route-link>
              </li>
              <li>
                <stencil-route-link url='/page/page-inbox' >
                 inbox
                </stencil-route-link>
              </li>
      
            </ul>
			
      </div>
    );
  }
}
