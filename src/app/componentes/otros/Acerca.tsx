export const Acerca = () => {
  return (
    <>
      <div
        className="d-flex flex-column align-items-center justify-content-center p-5"
        style={{ minHeight: "100vh" }}
      >
        {/* Título de la sección */}
        <h2 className="mb-4 text-center">Acerca de Nosotros</h2>

        {/* Descripción de la página */}
        <p className="text-center mb-3" style={{ maxWidth: "800px" }}>
          Bienvenido a nuestra plataforma de música, un lugar donde la pasión
          por la música se encuentra con la tecnología. Nuestra misión es
          brindarte una experiencia única para explorar, descubrir y disfrutar
          tus canciones y géneros favoritos, todo en un solo lugar.
        </p>

        <p className="text-center mb-3" style={{ maxWidth: "800px" }}>
          Aquí puedes crear listas de reproducción personalizadas, añadir
          canciones a tu biblioteca y explorar música de diversos géneros y
          épocas. Nuestro equipo trabaja constantemente para mejorar la
          plataforma y ofrecerte nuevas funcionalidades que enriquezcan tu
          experiencia musical.
        </p>

        <p className="text-center mb-3" style={{ maxWidth: "800px" }}>
          Gracias por ser parte de nuestra comunidad. ¡Esperamos que disfrutes
          al máximo de esta aventura musical!
        </p>
      </div>
    </>
  );
};
