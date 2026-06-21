import Link from 'next/link'
import { ArrowLeft, Telescope } from 'lucide-react'

export default function ProjectNotFound() {
  return (
    <main className="min-h-screen bg-[#05080F] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{
            background: 'rgba(232,181,84,0.1)',
            border: '1px solid rgba(232,181,84,0.2)',
          }}
        >
          <Telescope size={28} className="text-[#E8B554]" />
        </div>

        {/* Heading */}
        <h1 className="font-display font-bold text-white text-3xl mb-3">
          Project Not Found
        </h1>

        {/* Body */}
        <p className="text-white/45 text-[15px] leading-relaxed mb-8 font-mono">
          This project doesn&apos;t exist or the URL may have changed.
          <br />
          Head back and explore the full portfolio.
        </p>

        {/* CTA */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90"
          style={{
            background: 'linear-gradient(135deg, #E8B554 0%, #F5A623 100%)',
            color: '#05080F',
          }}
        >
          <ArrowLeft size={14} />
          Back to Projects
        </Link>
      </div>
    </main>
  )
}
