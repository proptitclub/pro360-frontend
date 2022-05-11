import { Button } from '@mui/material';
import clsx from 'clsx';
import { FC, MouseEventHandler, ReactNode } from 'react';

declare const ButtonVarients: ['contained', 'outlined', 'text'];
declare type ButtonVarient = typeof ButtonVarients[number];

type MyButtonProps = {
  variant?: ButtonVarient | undefined;
  prefixIcon?: ReactNode;
  afterIcon?: ReactNode;
  className?: string | undefined;
  onClick?: MouseEventHandler<HTMLElement>;
  text: ReactNode;
  disabled?: boolean;
  htmlType?: string | any;
  loading?: boolean;
  href?: string;
  fullWidth?: boolean;
  active?: boolean;
  borderActive?: boolean;
};

const MyButton: FC<MyButtonProps> = ({
  variant = 'outlined',
  prefixIcon,
  afterIcon,
  text,
  className,
  fullWidth,
  active,
  borderActive,
  ...props
}) => {
  return (
    <Button
      variant={variant}
      className={clsx(
        'button',
        `button--${variant}`,
        borderActive && 'button-border-active',
        active && 'button--active',
        className && className
      )}
      sx={{ width: fullWidth ? '100%' : 'fit-content' }}
      {...props}
    >
      {prefixIcon}
      <span className='button-text'>{text}</span>
      {afterIcon}
    </Button>
  );
};

export default MyButton;
