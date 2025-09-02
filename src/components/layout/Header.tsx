"use client"

import Link from "next/link";
import Logo from "@/components/logo";
import {usePathname} from "next/navigation";
import { motion } from "framer-motion";

const routes = [
	{
		name: "Home",
		href: "/"
	},
	{
		name: "All Events",
		href: "/events/all"
	}
]

export default function Header() {
	const currentPathname = usePathname();

	return (
		<header className="header">
			<Logo />
			<nav className="nav">
				<ul className="nav__list">
					{
						routes.map((route) => (
							<li className={`nav__item${route.href === currentPathname ? ' nav__item--active' : ''}`} key={route.href}>
								<Link href={route.href}>{route.name}</Link>
								{
									currentPathname === route.href && (
										<motion.div
											className="nav__indicator"
											layoutId="header-active-link">
										</motion.div>
									)
								}
							</li>
						))
					}
				</ul>
			</nav>
		</header>
	);
}