import '%PUBLIC_URL%/css/styles07.css';
// import './font5/all.css';

let post0 = {
  principal_page: "http://gogle.com/",
  name: "Isabella Walker",
  image: "https://randomuser.me/api/portraits/women/69.jpg",
  pubication: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error eaque ex modi, laborum eveniet quidem quo unde quod culpa voluptatem sint, iusto magnam tenetur quia deserunt nemo cum, est vitae.",
  views: 4631
};
let post1 = {
  principal_page: "http://gogle.com/",
  name: "Jacobo King",
  image: "https://randomuser.me/api/portraits/men/36.jpg",
  pubication: "Llor sit amet consectetur adipisicing elit. Voluptas possimus, aut ipsum voluptatem, non inventore officiis reprehenderit deleniti voluptate illo nobis in corrupti harum sit enim quae sapiente voluptatibus quod. quo unde quod Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, praesentium beatae harum cumque iusto consequuntur optio! Labore dolore, reprehenderit itaque nulla odit praesentium dolorum possimus iure! Rem itaque eveniet cupiditate. culpa voluptatem sint, iusto magnam tenetur quia deserunt nemo cum, est vitae.",
  views: 2932
};
let post2 = {
  principal_page: "http://gogle.com/",
  name: "Isabella Walker",
  image: "https://randomuser.me/api/portraits/women/32.jpg",
  pubication: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, praesentium beatae harum cumque iusto consequuntur optio! Labore dolore, reprehenderit itaque nulla odit praesentium",
  views: 123
};
// function post(principal_page, name, ) {
  
// }
// var tomi = new post 
// (
//   "http://gogle.com/",
//   "Isabella Walker",
//   "https://randomuser.me/api/portraits/women/69.jpg",
//   4631
// );

function Twit (f){
  return (
    <div className="content__container">
      <div className="content__top">
        <div className="content__top-left">
          <a href={f.post.principal_page}>
            <img src={f.post.image} alt="women"></img>
          </a>
          <p>{f.post.name}</p>
          <a href={f.post.principal_page}>Follow</a>
        </div>
        <div><i className="fas fa-ellipsis-h"></i></div>
      </div>
      <div className="content__block">
        <p>{f.post.pubication}</p>
      </div>
      <div className="content__bottom">
        <p>{f.post.views} views</p>
        <div className="content__bottom-icon"> 
          <div><i className="far fa-paper-plane"></i></div>
          <div><i className="far fa-retweet"></i></div>
          <div><i className="far fa-heart"></i></div>
        </div>
      </div>
    </div>
  );
}
var fs = require('fs');






function App() {
  console.log (JSON.stringify(post0));
  var hla = JSON.stringify(post0);
  // fs.writeFile("./db1.json", hla, "utf-8");
  // console.log (JSON.parse(post0))
  return (
    <div className="main">
      <div className="header">
        <a href="index.html">WW</a>
        <a href="index.html">cerrar cuenta</a>
        <div>
          <input type="search" id="gsearch" name="gsearch" placeholder="Explore"/>
          <i className="fas fa-search"></i>
        </div>
      </div>
      <Twit post = {post0}/>
      <Twit post = {post1}/>
      <Twit post = {post2}/>
      <div class="btn">
        <a href="#"><i class="fas fa-plus"></i></a>
      </div>
      <div class="btn btn-2">
        <a href="../dashboard/user.html"><i class="fas fa-user"></i></a>
      </div>
    </div>
  )
}
export default App;