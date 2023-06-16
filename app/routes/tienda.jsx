import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import Guitarra from '~/components/guitarra'

export async function loader() {
  /** Segunda forma de consumir una API (desde un archivo server) **/
  const guitarras = await getGuitarras()
  // console.log(guitarras);

  /** Primera forma de consumir una API (de manera directa) **/
  // const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  // const resultado = await respuesta.json()
  // console.log(resultado);
  // console.log(process.env.API_URL);
  return guitarras.data
}

function Tienda() {

  const guitarras = useLoaderData()

  return (
    <main className="contenedor">
      <h2 className="heading">Nuestra Colección</h2>

      {guitarras?.length && (
        <div className="guitarras-grid">
          {guitarras.map(guitarra => (
            <Guitarra
              key={guitarra?.id}
              guitarra={guitarra?.attributes}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Tienda
