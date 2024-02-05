import React, { useState, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import "./news.css"
import Navbar from '../Navbar';
import "../style.css";

function News() {
  

  const [data, setBlogList] = useState([]);

  useEffect(() => {
    axios.get('https://apitest.reachstar.io/blog/list')
      .then((response) => {
        //console.log('API Response:', response.data);
        setBlogList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching blog list:', error);
      });
  }, []);

  
  const navigate = useNavigate();
  useEffect(() => {
      if ( !localStorage.getItem('success')) {
            navigate('/');
      }
  })
  
  const handleLogout = () => {
   
   
    window.localStorage.removeItem("success");
   

    console.log("Logged out");
    alert("Logged out");
    navigate('/')
  }

  const BlogCliCk = (blog) => {

 
  const { id, title, description } = blog;
  
  const newWindow = window.open(`/news/${id}`, '_blank');
 
   axios.get(`https://apitest.reachstar.io/blog/get/${id}`)
    .then((response) => {
      
      const navbarHtml = ReactDOMServer.renderToString(<Navbar />);

      
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="path/to/your/styles.css">
          <title>${title}</title>
          <style>
         }
         .main-container{
            height: 100vh;
            display:flex;
            flex-direction: column;
            justyf-content:flex-end;
            align-items: center;
          
          
          }
          .comment-flexbox{
            display:flex;
            flex-direction:column;
            justify-content: left;
           
            
           
           
           
          }
          .coment-text{
            margin:12px 0;
            font-weight:700;
          }
          .input-text{
            height:75px;
            width:400px;
            background-color:white;
           
        
          }
          .comment-button{
            height:40px;
            width:80px;
            background-color:blueviolet;
            color:white;
            border-radius:5px;
            border-style:none;
            cursor:pointer;
            margin-top:10px;
            align-self: flex-start;
         
        
          }
          .comment-container {
            height:75px;
            width:400px;
            background-color:white;
            border-radius:5px;
            margin:10px 0;
            word-break:break-all;
            
          }
          .delete{
            height:30px;
            width:150px;
            background-color:red;
            color:white;
            cursor:pointer;
            border-radius:5px;
            border-style:none;
            font-weight:500;
            position:absolute;
            right: 24%;
         
          }
          .footer {
   
            height: 60px;
            background-color: blueviolet;
            position: fixed;
            width: 100%;
            bottom: 0;
            color: aliceblue;
        
        }
        .text1{
          text-align:center;
          display:flex;
          justify-content:center;
          align-item:center;
        }
        *{
          box-sizing: border-box;
      
      }
      body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
      }
        .nav{
          background-color: blueviolet;
          color: white;
          display: flex !important;
          justify-content: space-between;
          align-items: stretch;
          height: 100%;
          padding: 0 1rem;
      }
      .site-title{
          font-size: 25px;
          font-weight: bold;
      }
      .nav ul{
          padding: 20px;
          margin: 0;
          list-style: none;
          display: flex;
          gap: 25px;
          font-size:18px;
          font-weight: bold;
        
      }
      .nav a{
          color: inherit;
          text-decoration: none;
          display: flex;
          align-items: center;
          padding:.25rem;
          
       
      }
      .nav li:active{
          background-color: #506963;
          height: 100%;
      }
      .nav li:hover{
          background-color: #6b9289;
      }
      .h1{
        text-align:center;
      }
      .text5{
        font-weight: bold;
        font-size: 20px;
      }
      .btn4{
        background-color: blueviolet;
        border:none;
      }
      .form1 {
        display: flex !important;
        justify-content: center;
        align-items: center;
      }
      .input1{
        height:40px;
        border:none;
        border-radius:5px;
      }
      .button1{
        height:40px;
        border:none;
        border-radius:5px;
        margin-left:10px;
      }
      
.logo1{
  color: white;
}
.logo{
  color: white;
}

/* header */

.header {
  background-color: blueviolet;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: blueviolet
}

.header li a {
  display: block;
  padding: 20px 20px;
  border-right: 1px solid #f4f4f4;
  text-decoration: none;
}

.header li a:hover,
.header .menu-btn:hover {
  background-color: #f4f4f4;
}

.header .logo {
  display: block;
  float: left;
  font-size: 2em;
  padding: 10px 20px;
  text-decoration: none;
}



.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height 0.2s ease-out;
}



.header .menu-icon {
  cursor: pointer;
  display: inline-block;
 
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #333;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}



.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 240px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}
.news1 {
  margin-top:90px;
  

}
.div2{
  background-color: rgb(241, 232, 232);
  border-radius: 10px;
  padding: 15px;
  width:900px;
  padding-bottom:70px;
  margin-left:auto;
  margin-right:auto;
}

@media (min-width: 48em) {
  .header li {
    float: left;
  }
  .header li a {
    padding: 20px 30px;
  }
  .header .menu {
    clear: none;
    float: right;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
 

}
          </style>
        </head>
        <body>
        <div id="navbar">${navbarHtml}</div>
          <div class="container news1 ">
          <div class="row">
          <div class="col-sm-6 col-md-6 ">
          
     
        <div class="div2">

          <h2 class="h1">${title}</h2> 
       
          <div>
          <button onclick={delete(${id}) class="delete"}>პოსტის წაშლა</button>
          </div>

          <div>
         
          <p class="h1">${description}</p>
         </div>

      
          
          
        <div class="main-container" id="commentContainer"></div>
        <div class="comment-flexbox">
          <h3 class="coment-text text-start">კომენტარი</h3>
          <textarea class="input-text" id="commentInput"></textarea>
         <button onclick="submitComment()" class="comment-button">Submit</button>
       </div>
       </div>
       


    

         

        <div class="footer">
           
        <p class="text1">&copy; 2024 .Created by Naira</p>
      </div>
      </div>
      </div>
      </div>
        </body>
        <script>
       
      

        function deleteNews(id) {
         
          axios.delete(\`https://apitest.reachstar.io/blog/delete/\${id}\`)
            .then((response) => {
              console.log('წარმატებით წაიშალა', response.data);
             
            })
            .catch((error) => {
              console.error('Error deleting news:', error);
            });
        }
        





        function submitComment() {
            const commentInput = document.getElementById('commentInput');
            const commentContainer = document.getElementById('commentContainer');

            const comment = commentInput.value;
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment-container';
            commentDiv.textContent = comment;
            

            commentDiv.style.display = 'flex';
            commentDiv.style.justifyContent = 'start';
            commentDiv.style.alignItems = 'center';
            commentContainer.appendChild(commentDiv);

           

            commentInput.value = ''; 
          }

        
       
      </script>
        </html>
      `);

      newWindow.document.close();
      
    })
    .catch((error) => {
      console.error('Error fetching blog content:', error);
    });
};


  return (
   <div className='container news'>
    <div className='row'>
        <div className='col-md-12 col-sm-4'>
         <div className='main'>  
            <h1 className='mt-5'>ახალი ამბები </h1>
            <div>
           
            <button onClick={handleLogout} className='btn3'> გასვლა</button>
            </div>
  
            {data.map(item => (
            <div key={item.id} className='div1'>
              <h1>{item.title}</h1>
              <p className='text1'>{item.description}</p>
              <button onClick={() => BlogCliCk(item)} className='bt2'>
                უფრო დაწვრილებით
              </button>
            </div>
          ))}
         
       
            </div>
        </div>
    </div>
    </div>
  
   
  );
};

export default News;
