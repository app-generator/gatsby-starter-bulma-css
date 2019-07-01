import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { StaticQuery, graphql } from 'gatsby';
import './style.scss';
import Emoji from './emoji';

const Footer = () => (
	<StaticQuery
		query={graphql`
			query SocialQuery {
				site {
					siteMetadata {
						gatsby
						bulma
						twitter
						medium
						github
					}
				}
			}
		`}
		render={data => (
			<footer className="footer center has-background-light">
				<div className="content has-text-centered">
					<article className="media center">

						<span className="icon">
							<a href="https://github.com/app-generator/gatsby-starter-bulma-css">
								<FaGithub size="fa-2x" color="black" />
							</a>
						</span>

					</article>
					<br />
					<p className="is-size-6">
						Initialy coded by (@amahimself) using{' '}
						<a href={data.site.siteMetadata.gatsby}>Gatsby</a> +{' '}
						<a href={data.site.siteMetadata.bulma}>Bulma</a>
					</p>
				</div>
			</footer>
		)}
	/>
);

export default Footer;
