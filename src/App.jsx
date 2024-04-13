import Header from "./componentes/Header";
import Section from "./componentes/Section";
import List from "./componentes/List";

const gamesList = [
  {                    
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imagemUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },
  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imagemUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant",
  },
  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imagemUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft",
  },
  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imagemUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT",
  },
];

const stremList = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imagemUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png", 
    alt: "Imagem de Mayk Brito",
  },
  {                                                  
    url: "https://www.twitch.tv/alanzoka",
    imagemUrl: "https://yt3.googleusercontent.com/ytc/AIdro_my6RgKNilskI1iksXY4uQyRuKjxiLNJZBArAjCeg=s900-c-k-c0x00ffffff-no-rj", 
    alt: "Imagem de Alanzoka",
  },
  {                                                
    url: "https://www.twitch.tv/cellbit",
    imagemUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/0595cdd0-65a7-4fa3-996d-323cf3a54be1-profile_image-300x300.png", 
    alt: "Imagem de Cellbit",
  },                                          
];

const socialMidia = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imagemUrl: "/assets/twitch.svg",
    alt: "twitch do Mayk Brito",
  },
  {
    url: "https://www.twitter.tv/maykbrito",
    imagemUrl: "http://localhost:5173/assets/twitter.svg",
    alt: "twitter do Mayk Brito",
  },
  {
    url: "https://www.instagram.tv/maykbrito",
    imagemUrl: "/assets/instagram.svg",
    alt: "instagram do Mayk Brito",
  },
  {
    url: "https://www.youtube.tv/maykbrito",
    imagemUrl: "/assets/youtube.svg",
    alt: "youtube do Mayk Brito",
  },
  
];

function App() {

  return (

    <div className="App">

      <Header/> 

      <main>
        
        <Section 
          titulo="Meus jogos"
          subTitulo="Os games que eu mais curto jogar!"
          className="games-list" >

        {
          gamesList.map(function(item){
            return (
              <List
                url={item.url}
                imagemUrl={item.imagemUrl}
                alt={item.alt}
                key={item.alt}
              />
            )
          })
        } 

        </Section>
        
        <Section
          titulo="Canais e streamers"
          subTitulo="Lista de canais e transmissões que não perco!"
          className="channel-list">
          
        {
          stremList.map(function(item){
            return(
            <List
              url={item.url}
              imagemUrl={item.imagemUrl}
              alt={item.url}
              key={item.alt}
            />
            )
          })
        }
        
        </Section> 

        <Section
          titulo="Minhas redes"
          subTitulo="Se conecte comigo agora mesmo!"
          className="social-list">

        {
          socialMidia.map(function(item){
            return(
              <List
                url={item.url}
                imagemUrl={item.imagemUrl}
                alt={item.alt}
                key={item.alt}
              />
            )
          })
        }
        
        </Section> 

      </main>
        
    </div>
    
  )
}

export default App
