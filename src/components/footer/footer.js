import React, { Component } from 'react'
import "./footer.css"

export class Footer extends Component{
    render(){
        return(
            <div className="footercontainer">  
                <div className="footerrow1">
                <div className="footer1">
                    <div className="footer1logo">
                        <img className='logosolusi' src="./logoSolusiPutih.png" alt="" /> <img className='logoipb' src="./Frame.png" alt="" />
                    </div>

                    <div className="footer1text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel tincidunt nulla, a consectetur purus. Morbi sed euismod velit.</p>
                    </div>

                </div>

                <div className="tentang cont">
                    <h2>Tentang</h2>
                    <ul>
                        <li> <a className='footerlink' href="">Kantor</a> </li>
                        <li> <a className='footerlink' href="">Manajemen</a> </li>
                        <li> <a className='footerlink' href="">Karir</a> </li>
                        <li> <a className='footerlink' href="">Cara Berbelanja</a> </li>
                        <li> <a className='footerlink' href="">Pembayaran</a> </li>
                        <li> <a className='footerlink' href="">Pengiriman</a> </li>
                    </ul>

                </div>

                <div className="produk cont">
                    <h2>Produk</h2>
                    <ul>
                        <li> <a className='footerlink' href="">Penerbitan</a> </li>
                        <li> <a className='footerlink' href="">Percetakan</a> </li>
                        <li> <a className='footerlink' href="">UPM</a> </li>
                        <li> <a className='footerlink' href="">Kerjasama</a> </li>
                    </ul>
                </div>

                <div className="bantuan cont">
                    <h2>Bantuan</h2>
                    <ul>
                        <li> <a className='footerlink' href="">Customer</a> </li>
                        <li> <a className='footerlink' href="">FAQ</a> </li>
                    </ul>
                </div>

                <div className="lainnya cont">
                    <h2>Lainnya</h2>
                    <ul>
                        <li> <a className='footerlink' href="">Blog</a> </li>
                        <li> <a className='footerlink' href="">Privasi</a> </li>
                    </ul>
                </div>  

           

                </div>

                <div className="footerrow2">
                    <div className="footericon">
                        <ul>
                            <li> <i class="fa-brands fa-facebook-f"></i> </li>          
                            <li> <i class="fa-brands fa-instagram"></i> </li>    
                            <li> <i class="fa-brands fa-youtube"></i> </li>
                            <li> <i class="fa-brands fa-linkedin-in"></i> </li>  
                            <li> <i class="fa-brands fa-tiktok"></i> </li>           
                        </ul>
                    </div>

                    <div className="copyright">
                        <p>Copyrights 2022 IPB Press</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Footer;