import { useState } from 'react'
import { useLoaderData } from '@remix-run/react'
import { getGuitarra } from '~/models/guitarras.server'
import styles from '~/styles/guitarras.css'

export async function loader({ params }) {
  const { guitarraUrl } = params
  const guitarra = await getGuitarra(guitarraUrl)

  // Si no existe la guitarra lanzamos un error
  if (guitarra.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra no encontrada',
    })
  }

  return guitarra
}

export function meta({ data }) {
  console.log(data)

  if (!data) {
    return [
      { title: 'GuitarraLA - Guitarra no encontrada' },
      { description: 'Guitarras, vienta de guitarras, guitarra no encontrada' }
    ]
  }


  const { nombre } = data.data[0].attributes
  return [
    { title: `GuitarLA - ${nombre}` },
    { description: `Guitarras, venta de guitarras, guitarra ${nombre}` }
  ]

}

function Guitarra() {

  const [cantidad, setCantidad] = useState(0)

  const guitarra = useLoaderData()
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes

  return (
    <div className="guitarra">
      <img src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} className="imagen" />

      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>

        <form className='formulario'>
          <label htmlFor='cantidad'>Cantidad</label>

          <select
            onChange={ e => setCantidad(parseInt(e.target.value))}
            id='cantidad'
          >
            <option value="">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input
            type="submit"
            value="Agregar al carrito"
          />
        </form>
      </div>
    </div>
  )
}

export default Guitarra