import Link from 'next/link';
import {Logo} from './logo';
import {GithubStarButton} from '../Navigation/github-star-button';
import {AppNavigationMenu} from './AppNavigationMenu';
import {ThemeToggle} from './ThemeToggle';
import {NavigationSheet} from './NavigationSheet';

export const Navbar = () => {
  return (
    <nav className="px-6 pt-4 w-full">
      <div className="relative z-20 mx-auto bg-background px-2 rounded-full text-foreground border">
        <div className="h-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Hamburger menu on mobile - left of logo */}
            <div className="block sm:hidden">
              <NavigationSheet />
            </div>
            <Link href="/" className="flex items-center gap-2">
              <Logo className="font-bold" />
            </Link>
          </div>

          <div className="ml-2 hidden sm:block">
            <AppNavigationMenu />
          </div>

          <div className="flex items-center gap-2">
            {/* Hide GitHub buttons on mobile */}
            <div className="hidden sm:block">
              <GithubStarButton />
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
