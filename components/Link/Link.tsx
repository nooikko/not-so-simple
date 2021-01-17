import NextLink from 'next/link';

interface LinkProps {
  href: string;
  internal?: boolean;
}

export const Link: React.FC<LinkProps> = ({ children, internal, href }) => {
  const classes = 'flex items-center text-purple-600 hover:text-purple-800';

  return internal ? (
    <NextLink href={href}>
      <a className={classes}>{children}</a>
    </NextLink>
  ) : (
    <a className={classes} href={href}>
      {children}
    </a>
  );
};
