import React,{Component} from 'react';
import ReactDOM from 'react-dom';

export default class CommentForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			text: ''
		}
	}
	handleSubmit(e){
		e.preventDefault();
		//console.log(this.refs); this.handleSubmit.bind(this);否则this.refs underfined
		const author = this.refs.author.value.trim();
		const content = this.refs.content.value.trim();
		if(!author || !content ){
			return
		}
		this.props.callBackSubmit({author:author,text: content});
		this.refs.author.value = '';
		this.refs.author.content = '';	
		return;
	}
	render(){
		return(
				<div className="commentForm">
					<form onSubmit={this.handleSubmit.bind(this)} >
						<input type="text" placeholder="Your Name" ref="author" />
						<input type="text" placeholder="Please say something" ref="content" />
						<button type="submit">评论</button>
					</form>
				</div>
			);
	}
}