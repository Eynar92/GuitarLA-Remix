import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'
import { useOutletContext } from '@remix-run/react'

export function meta() {
  return [
    { title: 'GuitarLA - Sobre Nosotros' },
    { description: 'Venta de guitarras, blog de música' }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {

  const data = useOutletContext()

  console.log(data);

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />

        <div>
          <p>Sed bibendum justo sed nisi semper, ut posuere magna luctus. Donec facilisis erat non leo lacinia, quis rhoncus magna viverra. Morbi ullamcorper, tellus sit amet interdum posuere, lorem elit maximus velit, eget vulputate tellus ligula pulvinar magna. Cras risus nisi, lobortis quis facilisis at, volutpat nec lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. In ultrices eu lectus non commodo. Integer condimentum accumsan sollicitudin. Duis hendrerit, dui eget eleifend maximus, justo libero ullamcorper elit, a placerat arcu libero eu risus. Duis vitae vestibulum neque. Sed ac leo eros. Fusce neque metus, facilisis vitae venenatis vel, porta sed nisl. Quisque maximus orci eu nunc vulputate dignissim. Vestibulum molestie mi at est porttitor faucibus. Aliquam erat volutpat. Suspendisse feugiat vel odio eu ultrices.</p>

          <p>Sed bibendum justo sed nisi semper, ut posuere magna luctus. Donec facilisis erat non leo lacinia, quis rhoncus magna viverra. Morbi ullamcorper, tellus sit amet interdum posuere, lorem elit maximus velit, eget vulputate tellus ligula pulvinar magna. Cras risus nisi, lobortis quis facilisis at, volutpat nec lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. In ultrices eu lectus non commodo. Integer condimentum accumsan sollicitudin. Duis hendrerit, dui eget eleifend maximus, justo libero ullamcorper elit, a placerat arcu libero eu risus. Duis vitae vestibulum neque. Sed ac leo eros. Fusce neque metus, facilisis vitae venenatis vel, porta sed nisl. Quisque maximus orci eu nunc vulputate dignissim. Vestibulum molestie mi at est porttitor faucibus. Aliquam erat volutpat. Suspendisse feugiat vel odio eu ultrices.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
