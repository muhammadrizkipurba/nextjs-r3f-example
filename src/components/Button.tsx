import Link from 'next/link'

type Props = {
  buttonLink: string;
  buttonText: string | null;
  className?: string;
};

const Button = ({
  buttonLink,
  buttonText,
  className
}: Props) => {
  return (
    <Link href={buttonLink} className={className}>
      <button 
        className='rounded-2xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-500 hover:bg-orange-700 md:text-2xl'
      >
        {buttonText}
      </button>
    </Link>
  )
}

export default Button