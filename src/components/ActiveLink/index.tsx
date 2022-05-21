import React, { HTMLProps } from 'react';
import { useRouter } from 'next/router';
import { LinkProps } from 'next/link';

interface IActiveLinkProps extends React.PropsWithChildren<LinkProps> {
  icon: JSX.Element;
  activeIcon: JSX.Element;
  text: string;
  children: React.ReactChild | React.ReactChildren;
}

const ActiveLink = ({
  icon,
  activeIcon,
  text,
  children,
  ...props
}: IActiveLinkProps) => {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === props.href ? 'red' : 'black',
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(props.href);
  };
  return (
    <span onClick={handleClick} style={style}>
      {children}
    </span>
  );
};

export default ActiveLink;
