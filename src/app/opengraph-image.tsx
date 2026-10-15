import { ImageResponse } from 'next/og'

export const alt = 'KA Food Court - Corporate Food Court & Catering Hyderabad'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#0A0A0B',
          backgroundImage:
            'radial-gradient(circle at 80% 20%, rgba(217, 119, 6, 0.25) 0%, transparent 60%), radial-gradient(circle at 10% 90%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)',
          padding: '70px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Brand Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '18px',
              background: 'linear-gradient(135deg, #FDE047 0%, #D97706 50%, #B45309 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0A0A0B',
              fontSize: '28px',
              fontWeight: 900,
              letterSpacing: '-1px',
            }}
          >
            KA
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '28px',
                fontWeight: 900,
                color: '#FFFFFF',
                letterSpacing: '-0.5px',
              }}
            >
              KA FOOD COURT
            </span>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#D97706',
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}
            >
              Corporate Food Spaces & Catering · Hyderabad
            </span>
          </div>
        </div>

        {/* Central Value Proposition */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '960px' }}>
          <h1
            style={{
              fontSize: '56px',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.15,
              letterSpacing: '-1.5px',
              margin: 0,
            }}
          >
            Food courts and catering your teams will actually look forward to.
          </h1>
          <p
            style={{
              fontSize: '22px',
              color: '#A1A7B7',
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            End-to-end cafeteria operations for tech parks and IT campuses, plus bulk catering for team celebrations in Hitech City & Gachibowli.
          </p>
        </div>

        {/* Credibility Chips Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            paddingTop: '28px',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF', fontSize: '15px', fontWeight: 600 }}>
            <span style={{ color: '#D97706', fontSize: '18px' }}>●</span> Corporate Food Courts
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF', fontSize: '15px', fontWeight: 600 }}>
            <span style={{ color: '#D97706', fontSize: '18px' }}>●</span> Multi-Cuisine Counters
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF', fontSize: '15px', fontWeight: 600 }}>
            <span style={{ color: '#D97706', fontSize: '18px' }}>●</span> Bulk & Event Catering
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#A1A7B7', fontSize: '15px', marginLeft: 'auto' }}>
            kafoodcourt.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
