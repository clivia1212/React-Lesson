import React, { Component } from 'react';
import { render } from 'react-dom';
import CommentBox from 'containers/CommentBox';

render(<CommentBox url="dataSource/comment2.json" getPerTime="1000" />, document.getElementById('container'));