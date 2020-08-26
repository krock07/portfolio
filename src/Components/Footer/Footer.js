import React, { Component } from 'react';
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <div>
            <footer class="mast mast-dark">
			<div class="container">
				<h3 class="h2">Thanks!</h3>
				<ul class="list-inline list-social text-30 ul" >
					<li><a href="http://linkedin.com/in/khourysmith/">Linkedin</a></li>
					<li><a href="http://github.com/krock07">Github</a></li>
				</ul>
				<p class="push-top">Made in <span data-toggle="tooltip" title="" data-original-title="Miami Florida Yo!">the 305</span> &amp; © <a href="http://khourysmith.com">Khoury Smith</a></p>
			</div>
		</footer>
        </div>

        )
    } 
        
    
};

export default Footer;