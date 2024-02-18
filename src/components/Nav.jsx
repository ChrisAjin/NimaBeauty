import {headerLogo} from '../assets/images';
import { navLinks } from '../constants';
import {hamburger} from '../assets/icons'
const Nav = () => {
  return (
	<header className= 'padding-x py-8 absolute z-10 w-full'>
		<nav className= "flex justify-start items-center w-full">
			<a href="/">
				<img src={headerLogo}
				alt="Logo"
				width={300}
				height={50}
			/>
			</a>
			<ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
				{navLinks.map((item)=> (
					<li key={item.label}>
						<a
						 href={item.href}
						 className= "font-monts errat leading-normal text-lg text-slate-gray">
							{item.label}
						 </a>
					</li>
				))}
			</ul>
			<div className="hidden max-lg:block">
				<img
				src= {hamburger}
				alt="Hamburger"
				width={25}
				height= {25}
				/>
			</div>
		</nav>
	</header>
  )
}

export default Nav
