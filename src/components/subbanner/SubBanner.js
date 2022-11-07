import React, { Component } from 'react'
import "./SubBanner.css"
import Button from 'react-bootstrap/Button';

export class SubBanner extends Component{
    render(){
        return(
            <div className="subcontainer">

                {/* sub1 start */}
                <div className="sub1">
                <div className="sub1text">
                    <h2>Jadikan <span className='bluetext'> E-Book</span> <br /> Referensimu!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Etiam vel tincidunt nulla, a consectetur purus. <br /> Morbi sed euismod velit.</p>
                    <Button variant="info" size="sm" className='cekbtn'>Cek Disini!</Button>{' '}
                </div>

                <div className="sub1banner">
                    <img src="subbannerr.png" alt="" />
                </div>  
                </div>
                {/* sub1 end */}

                 {/* sub2 start */}
                 <div className="sub2">
                 <div className="sub2banner">
                    <img src="subbannerr.png" alt="" />
                </div> 

                <div className="sub2text">
                    <h2> <span className="bluetext">Lebih Banyak Ragam</span>  <br /> & Kategori Buku</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Etiam vel tincidunt nulla, a consectetur purus. <br /> Morbi sed euismod velit.</p>
                    <Button variant="info" size="sm" className='cekbtn'>Cek Disini!</Button>{' '}
                </div>
                </div>
                {/* sub2 end */}

                 {/* sub3 start */}
                 <div className="sub3">
                 <div className="sub3text">
                    <h2> <span className="bluetext">Buku Pilihan</span>  <br /> Bulan Ini.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Etiam vel tincidunt nulla, a consectetur purus. <br /> Morbi sed euismod velit.</p>
                    <Button variant="info" size="sm" className='cekbtn'>Cek Disini!</Button>{' '}
                </div>

                <div className="sub3banner">
                    <img src="subbannerbukuu.png" alt="" />
                </div> 
                 </div>
                {/* sub3 end */}

                {/* sub4 start */}
                <div className="sub4">
                 
                    <div className="sub4text1">
                        <div className="icon"><i class="fa-solid fa-truck"></i></div>
                        <h3>Cepat</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    </div>

                    <div className="sub4text2">
                        <div className="icon"><i class="fa-solid fa-box"></i></div>
                        <h3>Aman</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className="sub4text3">
                        <div className="icon"><i class="fa-sharp fa-solid fa-bag-shopping"></i></div>
                        <h3>Mudah</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className="sub4text4">
                        <h2>Siap <span className='bluetext'> Membantu Anda</span> Membeli Buku Online.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel tincidunt nulla, a consectetur purus. Morbi sed euismod velit. </p>
                    </div>   

                 </div>
                {/* sub4 end */}

                 {/* sub5 start */}
                 <div className="sub5">
                 <div className="sub5text">
                    <h2><span className="bluetext"> Tiga</span> <br /> Teratas. </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel tincidunt nulla, a consectetur purus. </p>
                </div>

                <div className="sub5banner">
                    <img src="tigateratass.png" alt="" />
                </div> 
                 </div>
                {/* sub3 end */}

                

                
                

              
                

            </div>
        )
    }
}

export default SubBanner;