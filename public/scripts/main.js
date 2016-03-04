// Backbone Model

var Blog = Backbone.Model.extend({
	defaults: {
		author: '',
		title: '',
		url: ''
	}
});


// Backbone Collections (Array of Models)

var Blogs = Backbone.Collection.extend({});

// Instantiate two blogs

var blog1 = new Blog({
	author: 'Author1',
	title: 'Author1\'s Blog',
	url: 'www.author1blog.com'
});

var blog2 = new Blog({
	author: 'Author2',
	title: 'Author2\'s Blog',
	url: 'www.author2blog.com'
});

// Instantiate a Collection

var blogs = new Blogs([blog1, blog2]);