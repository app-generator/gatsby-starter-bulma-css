import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa';

import './style.scss';

import gatsbyLogo from '../images/gatsby-icon.png';
import bulmaLogo from '../images/bulma-logo.png';
import Navbar from './navbar';

const Header = ({ siteTitle }) => (
	<section className="hero gradientBg is-fullheight-with-navbar">
		<Navbar />
		<div className="hero-body">
			<div className="container center">
				<article className="media">
					<figure className="is-left">
						<span className="icon is-large ">
							<img src={gatsbyLogo} alt="gatsby-logo" />
						</span>
					</figure>
					<figure className="is-left">
						<span className="icon is-large">
							<img src={bulmaLogo} alt="bulma-logo" />
						</span>
					</figure>
					<div className="media-content">
						<div className="content">
							<h1 className="is-uppercase is-size-1 has-text-gray">
								<a className="has-text-white" href="https://www.gatsbyjs.org/">GatsbyJS</a>{' - '}
								<a className="has-text-white" href="https://bulma.io/">Bulma CSS</a> Starter
							</h1>
							<p className="subtitle has-text-white is-size-3 is-center">
							
								<a  className="button is-info is-inverted"
									href="https://github.com/app-generator/gatsby-starter-bulma-css">
									<span className="icon"><FaGithub size="fa-2x" /></span>
									<span>Get Sources</span>
								</a>
                                {' '}
								<a  className="button is-info is-inverted"
									href="https://developers.google.com/speed/pagespeed/insights/?url=https://gatsby-starter-bulma-css.appseed.us">
									<span className="icon"><FaRocket size="fa-2x" /></span>
									<span>{' '}Check Speed</span>
								</a>

							</p>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;
