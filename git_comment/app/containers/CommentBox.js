import React, { Component } from 'react';
import CommentForm from 'component/CommentForm';
import CommentList from 'component/CommentList';

export default class CommentBox extends Component {
	constructor(props){
		super(props);
		this.state = {
			data : []
		}
	}
	loadDataFromServer(){
		$.ajax({
			url: this.props.url,
			type: "GET",
			success: function(resp){
				this.setState({data: resp});
			}.bind(this)
		});
	}
	componentDidMount(){
		this.loadDataFromServer();
		//setInterval(()=>this.loadDataFromServer(),this.props.getPerTime);
	}
	handleSubmit(comment){
		const precomments = this.state.data;
		const newcomments = precomments.concat([comment]);
		this.setState({data: newcomments});
		//this.props.url 可接受数据存入数据库，可从数据库取数据
		$.ajax({
			url: this.props.url,
			type: "POST",
			dataType: 'json',
			data: comment,
			success: function(resp){
				this.setState({data: resp});
			}.bind(this)
		});
	}
	render(){
		return (
				<div className="commentBox">
					<h1>评论区</h1>
					<CommentList data={this.state.data} />
					<CommentForm callBackSubmit={this.handleSubmit.bind(this)} />
				</div>
			);
	}
}