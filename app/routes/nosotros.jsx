import imagen from '../../public/img/nosotros.jpg'



function Nosotros() {
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
