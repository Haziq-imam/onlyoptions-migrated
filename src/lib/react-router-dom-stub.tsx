import React from 'react';
import NextLink from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export const Link = ({ to, children, className, onClick, ...props }: any) => {
  return (
    <NextLink href={to} className={className} onClick={onClick} {...props}>
      {children}
    </NextLink>
  );
};

export const NavLink = ({ to, children, className, activeClassName = 'active', ...props }: any) => {
  const pathname = usePathname();
  const isActive = pathname === to || pathname?.startsWith(to + '/');
  
  const finalClassName = typeof className === 'function' 
    ? className({ isActive })
    : `${className || ''} ${isActive ? activeClassName : ''}`.trim();

  return (
    <NextLink href={to} className={finalClassName} {...props}>
      {children}
    </NextLink>
  );
};

export const useLocation = () => {
  const pathname = usePathname();
  return { pathname, search: '', hash: '', state: null };
};

export const useNavigate = () => {
  const router = useRouter();
  return (path: string | number) => {
    if (typeof path === 'number') {
      if (path === -1) router.back();
    } else {
      router.push(path);
    }
  };
};

// Stub out other exports that might be used
export const Routes = ({ children }: any) => <>{children}</>;
export const Route = ({ children }: any) => <>{children}</>;
export const BrowserRouter = ({ children }: any) => <>{children}</>;
export const HashRouter = ({ children }: any) => <>{children}</>;
