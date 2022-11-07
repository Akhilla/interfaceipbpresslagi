import React, { Component } from 'react'
import "./Main.css"
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class Main extends Component {
  render() {
    return (
      <div className='maincontent'>

          <div className="navs">

            <div className="navstitle">
                <h1 className='koleksi'> Koleksi </h1>
                <h1 className='buku'> Buku. </h1>
            </div>

          </div>

          <div className="navkategori">
          <nav class="navbar-expand-lg ">
          
              
                <div class="navbar-nav kategori">
                <Nav.Link href="#action1" className='kategorilink' ><span className='kategorih2'> Terbaru </span> <br /> <span className='bukukategori'>10 buku</span></Nav.Link>
                <Nav.Link href="#action1" className='kategorilink' ><span className='kategorih2'> Diskon </span> <br /> <span className='bukukategori'>48 buku</span></Nav.Link>
                <Nav.Link href="#action1" className='kategorilink' ><span className='kategorih2'>Populer</span> <br /> <span className='bukukategori'>24 buku</span></Nav.Link>
                <Nav.Link href="#action1" className='kategorilink' ><span className='kategorih2'>Terlaris</span> <br /> <span className='bukukategori'>87 buku</span></Nav.Link>
                <Nav.Link href="#action1" className='kategorilink' ><span className='kategorih2'>Dicari</span> <br /> <span className='bukukategori'>79 buku</span></Nav.Link>
                <Nav.Link href="#action1" className='kategorilink' ><span className='kategorih2'> ᲼᲼᲼᲼᲼  </span> <br /> <span className='lihatsemua'> Lihat Semua </span></Nav.Link>
                 
                </div>
              
          </nav>
          </div>

          <div className="catalogue">
              
              <div className="cardproduct">
                  <div className="card-img"> <img src="./image.png" alt="" /> </div>
                  <div className="cardbottom">
                  <div className="judul"><h2>Pesan Rektor: Mindset Baru untuk Transformasi</h2></div>
                  <div className="harga"><p>Rp. 70.000</p></div>
                  
                  <ul>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                  </ul>
                  </div>
              </div>

              <div className="cardproduct">
                  <div className="card-img"> <img src="./image2.png" alt="" /> </div>
                  <div className="cardbottom">
                  <div className="judul"><h2>Dasar Ilmu dan Teknologi Benih</h2> </div> 
                  <div className="harga"> <p>Rp. 35.000</p></div>
                 
                  <ul>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                  </ul>
                  </div>
              </div>

              <div className="cardproduct">
                  <div className="card-img"> <img src="./image3.png" alt="" /> </div>
                  <div className="cardbottom">
                  <div className="judul">  <h2>Evaluasi Status Air Wilayah Pertanian</h2></div>                
                  <div className="harga"><p>Rp. 100.000</p></div>
                  
                  <ul>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                   </ul>
                   </div>
              </div>

              
              <div className="cardproduct">
                  <div className="card-img"> <img src="./image4.png" alt="" /> </div>
                  <div className="cardbottom">
                  <div className="judul"><h2>Sang Giri</h2> </div>                 
                  <div className="harga"><p>Rp. 70.500</p></div>
                  
                  <ul>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                   </ul>
                   </div>
              </div>

              <div className="cardproduct">
                  <div className="card-img"> <img src="./image5.png" alt="" /> </div>
                  <div className="cardbottom">
                  <div className="judul"><h2>Teknologi Membran</h2> </div>                 
                  <div className="harga"><p>Rp. 80.000</p></div>
                  
                  <ul>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                   </ul>
                   </div>
              </div>

              <div className="cardproduct">
                  <div className="card-img"> <img src="./image6.png" alt="" /> </div>
                  <div className="cardbottom">
                  <div className="judul"><h2>Ferroelektrik Sensor</h2> </div>                 
                  <div className="harga"><p>Rp. 65.000 </p></div>
                  
                  <ul>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                   </ul>
                   </div>
              </div>

              <div className="cardproduct">
                  <div className="card-img"> <img src="./image7.png" alt="" /> </div>
                  <div className="cardbottom">
                  <div className="judul"><h2>12 Catatan Ringan Pensiunan</h2> </div>                 
                  <div className="harga"><p>Rp. 50.000</p></div>
                  
                  <ul>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                   </ul>
                   </div>
              </div>

              <div className="cardproduct">
                  <div className="card-img"> <img src="./image8.png" alt="" /> </div>
                  <div className="cardbottom">
                  <div className="judul"><h2>30 Jenis Pohon di Taman & Hutan Kota</h2> </div>                 
                  <div className="harga"><p>Rp. 80.000</p></div>
                  
                  <ul>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                                <li><i className='fa fa-star checked'></i></li>
                   </ul>
                   </div>
              </div>

              


          
              

     

          </div>

      </div>
    
    )
  }
}

export default Main;

