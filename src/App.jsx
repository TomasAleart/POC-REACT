import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos una carga de datos del lado del cliente
    setTimeout(() => {
      setData({
        titulo: "Demostración de React Puro (CSR)",
        descripcion: "Esta página renderiza todo su contenido utilizando JavaScript en el navegador del cliente.",
        caracteristicas: [
          "Renderizado en el Cliente (CSR)",
          "HTML inicial prácticamente vacío con <div id='root'></div>",
          "Indexación SEO dificultada si el buscador no ejecuta JS"
        ]
      });
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <p style={{ padding: '20px', fontFamily: 'sans-serif' }}>Cargando contenido...</p>;
  }

  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
      <h1 style={{ color: '#0088cc', lineHeight: '1.3', marginBottom: '16px', fontSize: '32px' }}>
        {data.titulo}
      </h1>
      <p style={{ fontSize: '18px', color: '#333', lineHeight: '1.5' }}>{data.descripcion}</p>
      
      <section style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>Características principales:</h2>
        <ul style={{ paddingLeft: '20px' }}>
          {data.caracteristicas.map((item, index) => (
            <li key={index} style={{ marginBottom: '8px' }}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;