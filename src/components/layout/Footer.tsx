import Link from "next/link";

const routes = [
	{
		href: '/terms-conditions',
		name: 'Terms & Conditions',
	},
	{
		href: '/privacy-policy',
		name: 'Privacy Policy',
	}
]

export default function Footer() {


	return (
		<footer className="footer">
			<small className="fs-150">&copy; 2050 LighterThanAir7. All rights reserved.</small>

			<nav>
				<ul className="footer-nav__list">
					{
						routes.map(route => (
							<li className="footer-nav__item" key={route.href}>
								<Link href={route.href}>
									{route.name}
								</Link>
							</li>
						))
					}
				</ul>
			</nav>
		</footer>
	);
}