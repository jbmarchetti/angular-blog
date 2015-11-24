# JBM AngularJS Blog

Add a blog to your site.

1. Routes added
	1. /blog
	2. /blog/tag/:tag
	3. /blog/:slug


2. Rest api methods used (loopback logic):
	1. Get all posts: /api/posts
	2. Get one post by slug: /api/posts/findOne?filter={'where':{'slug':'my-article1'}}
	3. Get posts by tag: /api/posts?filter={'where': {'tags.value': 'tag1'}}


## Install
1. download the files
	1. Bower
		1. add `"angular-blog": "latest"` to your `bower.json` file then run `bower install` OR run `bower install angular-blog`
2. include the files in your app
	1. `blog.min.js`
	2. `blog.min.css`
3. include the module in angular (i.e. in `app.js`) - `jbm.angular-blog`


## TO-DO

1. Add Provider for Api endpoints configuration
2. Add  style configuration
	1. Tags
	2. Sidebar
	3. Posts
3. Add angular-translate
4. ....
