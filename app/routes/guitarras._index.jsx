import { useLoaderData, Outlet } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import ListadoGuitarras from '~/components/listado-guitarras'
import styles from '~/styles/guitarras.css'

export function meta() {
    return [
        { title: 'GuitarLA - Tienda de Guitarras' },
        { description: 'GuitarLA - Nuestra colección de guitarras' }
    ]
}

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
        <ListadoGuitarras
            guitarras={guitarras}
        />
    )
}

export default Tienda
