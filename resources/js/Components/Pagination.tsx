import { Link } from '@inertiajs/react'

type Props = {
  label: string
  url: any
  active: boolean
}

type PaginationProps = {
  links: Props[]
}

const Pagination: React.FC<PaginationProps> = ({ links }) => {
  return (
    <>
      <nav className="text-center mt-4">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url || ''}
            preserveScroll
            className={`inline-block py-2 px-3 rounded-lg text-gray-400 text-xs ${link.active ? 'bg-gray-950' : ''} ${!link.url ? 'text-gray-500 cursor-not-allowed ' : 'hover:bg-gray-950'}`}
            dangerouslySetInnerHTML={{ __html: link.label }}></Link>
        ))}
      </nav>
    </>
  )
}

export default Pagination
