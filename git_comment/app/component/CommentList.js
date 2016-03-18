import React,{Component} from 'react';
let showdown  = require('showdown');
let converter = new showdown.Converter();

class Comment extends Component {
	render(){
		let rawMarkup = converter.makeHtml(this.props.children.toString());
		return (
			<div className="comment">
				<h2>{this.props.author}</h2>
				<span dangerouslySetInnerHTML={{__html: rawMarkup}} />
			</div>
		);
	}
}

export default class CommentList extends Component {

	constructor(props){
		super(props);
	}

	render(){
		let items = this.props.data.map((item,i)=>{
			return (<Comment key={i} author={item.author}>{item.text}</Comment>);
		});
		return(
				<div className="commentList">
					{items}
				</div>
			);
	}
}