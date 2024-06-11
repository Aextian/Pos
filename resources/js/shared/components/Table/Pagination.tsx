import { Link } from '@inertiajs/react'

type Props = {
  label: string
  url: string
  active: boolean
}

type PaginationProps = {
  links: Props[]
}

const Pagination: React.FC<PaginationProps> = ({ links }) => {
  return (
    <>
      <nav className="mt-4 text-center">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url || ''}
            preserveScroll
            preserveState
            className={`inline-block rounded-lg px-3 py-2 text-xs text-gray-400 ${link.active ? 'bg-gray-950' : ''} ${!link.url ? 'cursor-not-allowed text-gray-500' : 'hover:bg-gray-950'}`}
            dangerouslySetInnerHTML={{ __html: link.label }}
          ></Link>
        ))}
      </nav>
    </>
  )
}

export default Pagination
