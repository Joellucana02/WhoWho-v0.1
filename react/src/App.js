import './css/styles07.css';
const jsonHref = "http://localhost:5000/post";
const maxTwitsPage = 20 // su modificación requiere cambiar el return de Twits

function Twit (el){
    // console.log ("funcion twit (", el, ")");                                                       // test
    return (
        <div className="content__container">
            <div className="content__top">
              <div className="content__top-left">
                  <a href={el.post.principal_page}>
                      <img src={el.post.image} alt={el.post.genero}></img>
                  </a>
                  <p>{el.post.name}</p>
                  <a href={el.post.principal_page}>Follow</a>
              </div>
              <div><i className="fas fa-ellipsis-h"></i></div>
              <div className="content__buttons">
                  <button className="edit creador-post">Edit</button>
                  <button className="delete">Delete</button>
              </div>
            </div>
            <div className="content__block">
               <p>{el.post.pubication}</p>
            </div>
            <div className="content__bottom">
                <p>{el.post.views} views</p>
                <div className="content__bottom-icon"> 
                    <div><i className="far fa-paper-plane"></i></div>
                    <div><i className="far fa-retweet"></i></div>
                    <div><i className="far fa-heart"></i></div>
                </div>
            </div>
        </div>
    );
}


function antiDesbordes(maxTwits, resto) {
    // console.log("funcion antiDesvordes = ");                                                       // test
    // if (resto < 0) {                                                                               // test
    //     console.error("resto no puede ser negativo");                                              // test
    // }                                                                                              // test
    if (maxTwits - resto < 0) {
        // console.log(Math.trunc(Math.random () * maxTwits), "true");                                // test
        return Math.trunc(Math.random () * maxTwits);
    }else {
        // console.log(maxTwits - resto ," false");                                                   // test
        return maxTwits - resto;
    }
}


function Twits (){
    let page = 0;
    let i = 0;
    let maxTwits = maxTwitsPage;
    try 
    {
        let jonPost = new XMLHttpRequest ();
        jonPost.open("GET", jsonHref, false);
        jonPost.send ();
        let post = JSON.parse (jonPost.response);
        // if (maxTwitsPage <= 0){                                                                    // test
        //     console.error("error MaxTwitsPage no puede ser 0 o negativo");                         // test
        //     RangeError ("MaxTwitsPage no puede ser 0 o negativo");
        // }                                                                                          // test
        while (i < maxTwitsPage) {
            // console.log("i = ",i);
            if (post[page * 10 + i] === undefined) {
                // console.log("true");                                                               // test
                maxTwits = page * 10 + i;
                i = maxTwitsPage;
            }else{
                // console.log("else");                                                               // test
                i++;
            }
        }
        // console.log("maxTwits = ", maxTwits);                                                      // test
        // lamento la cantidad de "post" que hay pero no encontre otra manera
        return (
                <div>
                    <Twit post = {post[antiDesbordes(maxTwits, 1)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 2)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 4)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 5)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 3)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 6)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 7)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 8)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 9)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 10)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 11)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 12)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 13)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 14)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 15)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 16)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 17)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 18)]}/>
                    <Twit post = {post[antiDesbordes(maxTwits, 19)]}/>
                </div>
        );
    }catch (error)
    {
        console.log (`Error ${error.status}: ${error.statusText}`);
        return(
            <div>
                <p color = "FFFFFF">error {error.status}: {error.statusText}</p>
            </div>
        )
    }
    
}


function App() {
    return (
        <div className="main">
            <div className="header">
                <a href="index.html">WW</a>
                <div>
                    <input type="search" id="gsearch" name="gsearch" placeholder="Explore" onn/>
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <Twits/>

        </div>
    )
}
export default App;