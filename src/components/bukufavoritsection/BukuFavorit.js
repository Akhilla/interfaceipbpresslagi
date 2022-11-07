import React, { Component } from 'react'
import "./BukuFavorit.css"

export class BukuFavorit extends Component{
    render(){
        return(
           <div className="bukufavorit">

            <div className="bukufavorittitle">
                <h2>Pilih <span className='bluetext' > Buku</span> Favoritmu!</h2>
               
            </div>

            <div className="bukufavorittext">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="favcardcontainer">
            <div class="card" >
            <img class="card-img-top" src="./rectangle3.png" alt="Card image cap"/>
            <div class="card-body">
                <p class="card-text">Buku Ajar <i class="fa-sharp fa-solid fa-arrow-right arrow"></i></p>  
            </div>
            </div>

            <div class="card" >
            <img class="card-img-top" src="./rectangle2.png" alt="Card image cap"/>
            <div class="card-body">
                <p class="card-text">Buku Referensi <i class="fa-sharp fa-solid fa-arrow-right arrow"></i></p>
            </div>
            </div>

            <div class="card" >
            <img class="card-img-top" src="./rectangle1.png" alt="Card image cap"/>
            <div class="card-body">
                <p class="card-text">Buku Agama <i class="fa-sharp fa-solid fa-arrow-right arrow"></i></p>
            </div>
            </div>

            <div class="card" >
            <img class="card-img-top" src="./rectangle4.png" alt="Card image cap"/>
            <div class="card-body">
                <p class="card-text">Buku Hobbies <i class="fa-sharp fa-solid fa-arrow-right arrow"></i></p>
            </div>
            </div>

            <div class="card" >
            <img class="card-img-top" src="./rectangle5.png" alt="Card image cap"/>
            <div class="card-body">
                <p class="card-text">Buku Praktikum <i class="fa-sharp fa-solid fa-arrow-right arrow"></i></p>
            </div>
            </div>

            <div class="card" >
            <img class="card-img-top" src="./rectangle6.png" alt="Card image cap"/>
            <div class="card-body">
                <p class="card-text">Buku Anak <i class="fa-sharp fa-solid fa-arrow-right arrow"></i></p>
            </div>
            </div>

            </div>


            
          
            
           </div>

           
        )
    }
}

export default BukuFavorit;