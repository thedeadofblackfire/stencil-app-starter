import { Component, Element, Prop, State, Method, Watch } from '@stencil/core';

// page-wrapper for static in memory/cached
@Component({
  tag: 'page-wrapper',
  //styleUrl: 'page-wrapper.scss'
})
export class PageWrapper {

  @Element() el: HTMLElement;

  @Prop() pages: string[] = [];
  @Prop() pageid: string = '';
  
  @State() _pages: string[] = [];
  @State() content: string;
  
  @Prop() doc: string;

  @State() isMobileMenuShown: boolean;
  
  @Watch('doc')
  watchHandler(newValue: string, oldValue: string) {
    console.log('The new value of doc is: ', newValue, oldValue);
  }
  
  @Method()
  showPage(pageId) {
	this.hideAllPages();
	console.log('showPage pageId='+pageId);
  }
  
  hideAllPages() {
	  console.log('hideAllPages');
	  const current_pages = this.el.querySelectorAll('.page-content.is-shown')
	  Array.prototype.forEach.call(current_pages, function(p) {
		p.classList.remove('is-shown')
	  })
  }
  
    @Method()
	changePage(value) {
		//var wrapperPage = document.querySelector('page-wrapper');
		//wrapperPage.setAttribute('doc', 'test2');
	this.el.setAttribute('doc', value);
  
	}
  
  @Method()
  addDynamicTag(myTag, myData = {}, memory = false){
			//var myData = myData || {};
			console.log(myData, memory);
			/*
			const links = document.querySelectorAll('link[rel="import"]')

			// Import and add each page to the DOM
			Array.prototype.forEach.call(links, function (link) {
			  let template = link.import.querySelector('.task-template')
			  let clone = document.importNode(template.content, true)
			  if (link.href.match('about.html')) {
				document.querySelector('body').appendChild(clone)
			  } else {
				document.querySelector('.content').appendChild(clone)
			  }
			})

			*/
			/*
		  var list = document.getElementById("list");
		  var li = document.createElement('li');
		  list.appendChild(li);

		  var tag = document.createElement('example');
		  li.appendChild(tag)
		  riot.mount(tag, 'example');
		  */
		  const myPage = document.getElementById('page-'+myTag);
		  console.log('addDynamicTag contains='+myPage);
		  
		  this.hideAllPages();
		  //document.querySelectorAll('.page-content').classList.remove('is-shown');
            //self.refs.compactTopBar.querySelector('.top-bar__mobile-trigger .icon-close').classList.add('active');
		
		  if (memory) {
			  if (myPage) {
				  myPage.classList.add('is-shown');
			  } else {
				  this._pages.push(myTag);
				  console.log(this._pages);
				  
				  var dyntag = document.createElement(myTag);
				  //var dyntag = this.el.createElement(myTag);
				  dyntag.setAttribute("id",'page-'+myTag);
				  dyntag.setAttribute("class",'page-content is-shown');
				  this.el.querySelector('.content').appendChild(dyntag);
				  //document.querySelector('.content').appendChild(dyntag);
				  //var tags = riot.mount(dyntag, myTag, myData);
				  
			  }
		  } else {
			   var dyntag = document.createElement(myTag);
			  //var dyntag = this.el.createElement(myTag);
			  dyntag.setAttribute("id",'page-'+myTag);
			  dyntag.setAttribute("class",'page-content is-shown');
			  this.el.querySelector('#main-content').innerHTML = dyntag.outerHTML;
			  
		  }
		  
		}

		
   /**
   * The component will load but has not rendered yet.
   *
   * This is a good place to make any last minute updates before rendering.
   *
   * Will only be called once
   */
  componentWillLoad() {
    console.log(this.pageid+' PageWrapper - The component is about to be rendered');
  }

  /**
   * The component is loaded and has rendered.
   *
   * Updating data in this event may cause the component to re-render.
   *
   * Will only be called once
   */
  componentDidLoad() {
	this.isMobileMenuShown = false;  
    console.log(this.pageid+' PageWrapper - The component has been rendered');
  }

  /**
   * The component will update and re-render.
   *
   * Called multiple times throughout the life of the component as it updates.
   */
  componentWillUpdate() {
    console.log('PageWrapper - The component will update');
  }

  /**
   * The component finished updating.
   *
   * Called after componentWillUpdate
   *
   * Called multiple times throughout the life of the component as it updates.
   */
  componentDidUpdate() {
    console.log('PageWrapper - The component did update');
  }
  
   /**
   * The component did unload and the element will be destroyed.
   */
  componentDidUnload() {
    console.log('PageWrapper - The view has been removed from the DOM');
  }
  
  // {this.pages.map(page => <p class={page} >{page}</p>)}
  /*
   <div>
        <site-menu />
        {this.pages.map(page => <app-marked doc={page} />)}
      </div>
	   {this.pages.map(page => <p id={this.pageid} class={page} >{page}</p>)}
  */
  render() {
    return (
      <div class="content js-content">	       
		<div id="main-content"></div>
      </div>
    )
  }
}
