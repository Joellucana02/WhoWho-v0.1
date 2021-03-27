import './styles07.css';



function Twit (User){
  var User = {
    principal_page: "http://gogle.com/",
    name: "Isabella Walker",
    image: "https://randomuser.me/api/portraits/women/69.jpg",
    pubication () {
      return (
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.lorem Lorem 
          ipsum dolor, sit amet consectetur adipisicing elit. Error eaque ex 
          modi, laborum eveniet quidem quo unde quod culpa voluptatem sint, 
          iusto magnam tenetur quia deserunt nemo cum, est vitae.
        </p>
      )
    },
    views: 4631
  }
  return (
    <div class="content__container">
      <div class="content__top">
        <div class="content__top-left">
          <a href={User.principal_page}>
            <img src={User.image} alt="women"></img>
          </a>
          <p>{User.name}</p>
          <a href={User.principal_page}>Follow</a>
        </div>
        <div><i class="fas fa-ellipsis-h">...</i></div>
      </div>
      <div class="content__block">
        <User.pubication/>
      </div>
      <div class="content__bottom">
        <p>{User.views} views</p>
        <div class="content__bottom-icon"> 
          <div><i class="far fa-paper-plane">plane</i></div>
          <div><i class="fas fa-retweet">retweet</i></div>
          <div><i class="far fa-heart">heart</i></div>
        </div>
      </div>
    </div>
  )
}


function App() {
  return (
    <Twit/>
  );// {variable} <funcion atributo="valor"/> 
}/*user={mica}*/


export default App;