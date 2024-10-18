import React from 'react';
import "../static/Styles_home.css";
 // Link to your CSS file

const SouthStar = () => {
  // Function to toggle the like icon
  const toggleLike = (button) => {
    const icon = button.querySelector('.icon_curtir');

    if (icon.textContent === 'favorite_border') {
      icon.textContent = 'favorite'; // Change to filled heart
      icon.style.color = 'red'; // Change color to red
    } else {
      icon.textContent = 'favorite_border'; // Change to empty heart 
      icon.style.color = ''; // Restore original color
    }
  };

  return (
    <div lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SouthStar - Threads Clone</title>

        {/* Font Awesome for icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" 
          integrity="sha512-XRfYwpy6lDx5IjFhzxy1mpK4fQdzHClwPtcqGQcBax0ZOrRRxC69v8KwOr5nhdB7LdpqY6YmfKgk6YX/2gxBqg==" 
          crossOrigin="anonymous" referrerPolicy="no-referrer" />
        
        {/* Google Material Icons */}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body>
        {/* Header */}
        <header className="top-bar">
          <h1 className="site-title">SouthStar</h1>
        </header>

        {/* Main Container */}
        <main className="container">
          {/* Sidebar (Explore) */}
          <aside className="sidebar_home">
            <nav className="sidebar-nav">
              <h2 className="explorar_titulo_home">Explorar</h2>
              <ul className="explorar_lista_home">
                <li className="explorar_item_home">
                  <span className="material-icons nav-icon">home</span>
                  <a className="explorar_link_home" href="#">Início</a>
                </li>
                <li className="explorar_item_home">
                  <span className="material-icons nav-icon">search</span>
                  <a className="explorar_link_home" href="#">Buscar</a>
                </li>
                <li className="explorar_item_home">
                  <span className="material-icons nav-icon">notifications</span>
                  <a className="explorar_link_home" href="#">Notificações</a>
                </li>
                <li className="explorar_item_home">
                  <span className="material-icons nav-icon">mail</span>
                  <a className="explorar_link_home" href="#">Mensagens</a>
                </li>
                <li className="explorar_item_home">
                  <span className="material-icons nav-icon">person</span>
                  <a className="explorar_link_home" href="#">Perfil</a>
                </li>
              </ul>
              <div className="configuracao_home">
                <span className="material-icons config-icon">settings</span>
              </div>
            </nav>
          </aside>

          {/* Post Feed */}
          <section className="posts_home">
            <h2 className="posts_titulo_home">Feed de Posts</h2>

            {/* Post 1 */}
            <div className="post_home">
              <div className="profile_pic_home">
                <img className="profile_image_home" src="https://via.placeholder.com/50" alt="Foto de perfil do Usuário 1" />
              </div>
              <div className="post_conteudo_home">
                <h3 className="post_usuario_home">Usuário 1</h3>
                <p className="post_texto_home">Este é o conteúdo do post.</p>
                <div className="botoes_home">
                  <button className="btn_curtir_home" onClick={(e) => toggleLike(e.currentTarget)}>
                    <span className="material-icons icon_curtir">favorite_border</span>
                  </button>
                  <button className="btn_comentar_home">Comentar</button>
                </div>
              </div>
            </div>

            {/* Post 2 */}
            <div className="post_home">
              <div className="profile_pic_home">
                <img className="profile_image_home" src="https://via.placeholder.com/50" alt="Foto de perfil do Usuário 2" />
              </div>
              <div className="post_conteudo_home">
                <h3 className="post_usuario_home">Usuário 2</h3>
                <p className="post_texto_home">Este é outro conteúdo do post.</p>
                <div className="botoes_home">
                  <button className="btn_curtir_home" onClick={(e) => toggleLike(e.currentTarget)}>
                    <span className="material-icons icon_curtir">favorite_border</span>
                  </button>
                  <button className="btn_comentar_home">Comentar</button>
                </div>
              </div>
            </div>

            <p className="add-posts">Adicione mais posts conforme necessário</p>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer_home">
          <p className="footer_texto_home">&copy; 2024 Threads Clone. Todos os direitos reservados.</p>
        </footer>
      </body>
    </div>
  );
};

export default SouthStar;