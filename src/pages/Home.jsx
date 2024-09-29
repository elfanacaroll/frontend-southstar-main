import React, { useState, useEffect } from 'react';
import '../static/Home.css'; // Importa o estilo CSS

export default function Home() {
  // Estado para os valores do formulário
  const [username, setUsername] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [tweet, setTweet] = useState('');
  const [tweetImage, setTweetImage] = useState(null);
  const [posts, setPosts] = useState([]);

  // Estado para o post existente (simulado pela API)
  const [existingPost, setExistingPost] = useState({
    username: 'Usuário Existente',
    handle: '@handleExistente',
    profileImage: 'https://via.placeholder.com/50',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    postImage: 'https://via.placeholder.com/600x300',
  });

  // Simula uma chamada à API para atualizar o post existente ao carregar a página
  useEffect(() => {
    const apiData = {
      username: 'RandomUser123',
      handle: '@randomUser',
      profileImage: 'https://i.pravatar.cc/50',
    };
    setExistingPost((prev) => ({
      ...prev,
      username: apiData.username,
      handle: apiData.handle,
      profileImage: apiData.profileImage,
    }));
  }, []);

  // Função para adicionar um novo post
  const handleTweet = () => {
    if (!username) {
      alert('Por favor, insira o nome de usuário!');
      return;
    }
    if (!tweet) {
      alert('Por favor, insira uma mensagem para tweetar!');
      return;
    }

    // Cria um novo post e adiciona à lista de posts
    const newPost = {
      username: username,
      profileImage: profileImage
        ? URL.createObjectURL(profileImage)
        : 'https://via.placeholder.com/50',
      content: tweet,
      postImage: tweetImage ? URL.createObjectURL(tweetImage) : null,
    };

    // Atualiza o estado com o novo post
    setPosts([newPost, ...posts]);

    // Limpa os campos de input, exceto o nome de usuário e imagem de perfil
    setTweet('');
    setTweetImage(null);
  };

  return (
    <div>
      <div className="sidebar">
        <h2>Southstar</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Explore</a></li>
          <li><a href="#">Notifications</a></li>
          <li><a href="#">Messages</a></li>
          <li><a href="#">Bookmarks</a></li>
          <li><a href="#">Lists</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">More</a></li>
        </ul>
      </div>

      <div className="main-content">
        <div className="tweet-box">
          <input
            type="text"
            placeholder="Nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setProfileImage(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="What's happening?"
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setTweetImage(e.target.files[0])}
          />
          <button onClick={handleTweet}>Tweet</button>
        </div>

        <div id="posts-container">
          {/* Publicação existente simulada pela "API" */}
          <div className="post">
            <div className="post-header">
              <img
                src={existingPost.profileImage}
                alt="Profile"
                className="profile-image"
              />
              <div className="post-content">
                <span className="post-user">{existingPost.username}</span>
                <span className="post-handle">{existingPost.handle}</span>
                <span className="post-time"> - Just now</span>
                <p>{existingPost.content}</p>
              </div>
            </div>
            <img
              src={existingPost.postImage}
              alt="Post"
              className="post-image"
            />
          </div>

          {/* Renderizando os novos posts */}
          {posts.map((post, index) => (
            <div className="post" key={index}>
              <div className="post-header">
                <img
                  src={post.profileImage}
                  alt="Profile"
                  className="profile-image"
                />
                <div className="post-content">
                  <span className="post-user">{post.username}</span>
                  <span className="post-time"> - Just now</span>
                  <p>{post.content}</p>
                </div>
              </div>
              {post.postImage && (
                <img
                  src={post.postImage}
                  alt="Post"
                  className="post-image"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="right-sidebar">
        <h3>What's happening?</h3>
        <div className="trend">
          <img src="https://via.placeholder.com/150x100" alt="Trend Image" />
          <p>Sunsets don't get much better than this one. #nature #sunset</p>
        </div>
      </div>
    </div>
  );
}
