import React, { useState, useEffect } from 'react';
import '../static/Home.css'; // Importa o estilo CSS

export default function Home() {

  return(

  <body>
      <header>  
      <div class="logo">
        <h1>SouthStar</h1> 
    </div>
      </header>
  
      <main> //Área principal 
          <section class="posts"> // Seção para os posts 
              <h1>Feed de Posts</h1>
              <div class="post"> // Post individual 
                  <div class="post-header">
                      <h2>Usuário 1</h2>
                  </div>
                  <div class="post-content">
                      <p>Este é o conteúdo do post.</p>
                  </div>
                  <div class="post-footer">
                      <button>Curtir</button>
                      <button>Comentar</button>
                  </div>
              </div>

              <div class="post"> // Outro post
                  <div class="post-header">
                      <h2>Usuário 2</h2>
                  </div>
                  <div class="post-content">
                      <p>Este é outro conteúdo do post.</p>
                  </div>
                  <div class="post-footer">
                      <button>Curtir</button>
                      <button>Comentar</button>
                  </div>
              </div>

              // Adicione mais posts conforme necessário
          </section>
  
          <aside> // Barra lateral 
              <h2>Explorar</h2>
              <ul>
                  <li><a href="#">Início</a></li>
                  <li><a href="#">Explorar</a></li>
                  <li><a href="#">Notificações</a></li>
                  <li><a href="#">Mensagens</a></li>
                  <li><a href="#">Perfil</a></li>
             
              </ul>
          </aside>
      </main>
  
      <footer> // Rodapé do site 
          <p>&copy; 2024 Threads Clone. Todos os direitos reservados.</p>
      </footer>
  </body>
  )
}  