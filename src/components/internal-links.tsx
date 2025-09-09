import Link from 'next/link';

interface InternalLink {
  href: string;
  title: string;
  description: string;
}

interface InternalLinksProps {
  links: InternalLink[];
  title?: string;
}

export default function InternalLinks({ links, title = "Related Content" }: InternalLinksProps) {
  return (
    <div className="mt-12 p-6 bg-neutral-900/50 border border-neutral-800 rounded-lg">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="block p-4 bg-neutral-800/50 border border-neutral-700 rounded-lg hover:border-blue-500 transition-colors group"
          >
            <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors mb-2">
              {link.title}
            </h4>
            <p className="text-neutral-400 text-sm">
              {link.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
