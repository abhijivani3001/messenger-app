'use client';

import clsx from 'clsx';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `
      py-2 px-4 rounded-md shadow-sm text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500`,
        fullWidth ? 'w-full' : 'w-auto',
        secondary ? 'bg-gray-100 text-gray-900' : 'bg-sky-600 text-white',
        danger &&
          'bg-red-500 text-white hover:bg-rose-600 focus-visible:outline-rose-600',
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-sky-700',
        !secondary &&
          !danger &&
          !disabled &&
          'bg-sky-500 hover:bg-sky-700 focus-visible:outline-sky-600'
      )}
    >
      {children}
    </button>
  );
};

export default Button;
