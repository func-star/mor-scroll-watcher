import React, { Component } from 'react';
import { render } from 'react-dom';
import FastClick from 'fastclick';
import Home from 'views/index';
import 'style/app.less'


FastClick.attach(document.body);

render(<Home />, document.getElementById('appWrapper'));
