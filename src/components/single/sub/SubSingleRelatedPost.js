import React from 'react';

const SubSingleRelatedPost = () => {
	return(
		<>
			<div className="prev-next-box">
				<div className="prev-box">
					<a className="text-link" href="single-post.html"><i className="fa fa-angle-left"></i> Previous Post</a>
					<h2><a href="single-post.html">Sed adipiscing ornare risus.</a></h2>
				</div>
				<div className="next-box">
					<a className="text-link next-link" href="single-post.html">Next Post <i className="fa fa-angle-right"></i></a>
					<h2><a href="single-post.html">Quisque a lectus.</a></h2>
				</div>
			</div>
			<div className="related-box">
				<h2>Related Posts</h2>
				<div className="row">
					<div className="col-lg-4 col-md-4">
						<div className="news-post standard-post text-left">
							<div className="image-holder">
								<a href="single-post.html"><img src="upload/blog/p1.jpg" alt="" /></a>
							</div>
							<a className="text-link" href="#">Food</a>
							<h2><a href="single-post.html">Fusce pellentesque suscipit.</a></h2>
							<ul className="post-tags">
								<li>by <a href="#">Stan Enemy</a></li>
								<li>3 days ago</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4 col-md-4">
						<div className="news-post standard-post text-left">
							<div className="image-holder">
								<a href="single-post.html"><img src="upload/blog/p2.jpg" alt="" /></a>
							</div>
							<a className="text-link" href="#">Lifestyle</a>
							<h2><a href="single-post.html">Quisque a lectus. </a></h2>
							<ul className="post-tags">
								<li>by <a href="#">Stan Enemy</a></li>
								<li>3 days ago</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4 col-md-4">
						<div className="news-post standard-post text-left">
							<div className="image-holder">
								<a href="single-post.html"><img src="upload/blog/p3.jpg" alt="" /></a>
							</div>
							<a className="text-link" href="#">Travel</a>
							<h2><a href="single-post.html">Vestibulum commodo tortor.</a></h2>
							<ul className="post-tags">
								<li>by <a href="#">Stan Enemy</a></li>
								<li>3 days ago</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>	
	)
}

export default SubSingleRelatedPost;