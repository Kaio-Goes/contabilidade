import Spinner from '../Spinner'

interface ButtonProps {
  cor?: 'green' | 'blue' | 'gray' | 'purple'
  title?: string;
  isLoading?: boolean;
}

const Button = ({
  isLoading = false,
  title,
  children,
  ...buttonProps
}: ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
  return (
    <button
      className="w-full flex justify-center py-2 px-4 border border-transparent bg-purple-700 text-white 
      focus:outline-none focus:border-royal-blue-700 focus:shadow-outline-royal-blue active:bg-royal-blue-700 transition duration-150 ease-in-out"
      
      {...buttonProps}
    >
      {isLoading ? (
        <Spinner width="20" fill="white" className="animate-spin" />
        ) : (
        title
      )}
      {children}
    </button>
  );
};

export default Button;
