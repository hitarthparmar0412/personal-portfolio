import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Hitarth Parmar — Flutter Developer & Mobile Architect'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#05080F',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '64px',
          position: 'relative',
        }}
      >
        {/* Gold accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '4px',
            background: 'linear-gradient(90deg, #E8B554 0%, #F5A623 50%, #E8B554 100%)',
          }}
        />

        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(232,181,84,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
          {/* Top: domain */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.35)',
                fontFamily: 'monospace',
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}
            >
              hitarthparmar.dev
            </div>
          </div>

          {/* Middle: name + title */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div
              style={{
                fontSize: '72px',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.05,
                letterSpacing: '-2px',
              }}
            >
              Hitarth Parmar
            </div>
            <div
              style={{
                fontSize: '28px',
                fontWeight: 500,
                color: '#E8B554',
                letterSpacing: '0.5px',
              }}
            >
              Flutter Developer &amp; Mobile Architect
            </div>
            <div
              style={{
                fontSize: '18px',
                color: 'rgba(255,255,255,0.5)',
                marginTop: '4px',
              }}
            >
              Flutter · Firebase · GetX · Bloc · OpenAI · Stripe
            </div>
          </div>

          {/* Bottom: stats */}
          <div style={{ display: 'flex', gap: '40px' }}>
            {[
              { value: '24+', label: 'Live Apps' },
              { value: '7M+', label: 'Users' },
              { value: '4+', label: 'Years' },
              { value: '$1B+', label: 'Processed' },
            ].map((stat) => (
              <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ fontSize: '32px', fontWeight: 700, color: '#E8B554' }}>{stat.value}</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
