import { ImageResponse } from 'next/og'

export const alt = 'Sebastian Sanchez - Portafolio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1e2530',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div style={{ color: '#7fcbe8', fontSize: 28, marginBottom: 20 }}>
          Ingeniero de Sistemas - Especializacion en IA
        </div>
        <div style={{ color: '#f0f2f5', fontSize: 80, fontWeight: 600 }}>
          Sebastian Sanchez
        </div>
        <div
          style={{
            color: '#9aa5b5',
            fontSize: 28,
            marginTop: 30,
            maxWidth: 800,
          }}
        >
          Construyo sistemas de Machine Learning llevados a produccion
        </div>
      </div>
    ),
    { ...size }
  )
}
