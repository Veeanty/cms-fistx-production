import "../component/css/Footer.css";
import fb from '../image/icon-fb.png'
import instagram from '../image/icon-ig.png'
import linkedin from '../image/icon-linkedin.png'
import twitter from '../image/icon-twitter.png'
import tiktok from '../image/icon-tt.png'
import logo from '../image/Logo.png'


const Footer = () => {
    return (
        <div className="footer">
            <div className="sb-footer section-paddinng ">
                <div className="sb-footer-link">
                    <div className="sb-footer-link-div">
                        <a href="logo"><img src={logo} alt="Facebook Logo" className="logo-image" /></a>

                        <h4 className="footer-head">PT.ADITYA INOVASI MAKMUR</h4>
                        <p className="footer-body" >Jl. Nangka IV No.199, Krodan, Maguwoharjo, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281</p>
                    </div>
                    <div className="sb-footer-link-div">
                        <h4>PRODUK</h4>
                        <a href="/employer">
                            <p>FISTX App </p>
                        </a>
                        <a href="/employer">
                            <p>FISTX App Mobile </p>
                        </a>
                        <a href="/employer">
                            <p>SmartFarm</p>
                        </a>
                        <a href="/employer">
                            <p>Market</p>
                        </a>
                        <a href="/employer">
                            <p>Kabar Kolam</p>
                        </a>
                        <a href="/employer">
                            <p>Kadar Air</p>
                        </a>
                    </div>
                    <div className="sb-footer-link-div">
                        <h4>Perusahaan</h4>
                        <a href="/employer">
                            <p>Tentang FisTx</p>
                        </a>
                        <a href="/employer">
                            <p>Karir</p>
                        </a>
                        <a href="/employer">
                            <p>Kerja Sama</p>
                        </a>
                    </div>
                    <div className="sb-footer-link-div">
                        <h4>Bantuan</h4>
                        <a href="/employer">
                            <p>Pelanggan</p>
                        </a>
                        <a href="/employer">
                            <p>Video</p>
                        </a>
                        <a href="/employer">
                            <p>Ketentuan Pembeliaan</p>
                        </a>
                        <a href="/employer">
                            <p>Ketentuan Garansi</p>
                        </a>
                        <a href="/employer">
                            <p>Ketentuan Privasi</p>
                        </a>
                        <a href="/employer">
                            <p>Pertanyaan Umum</p>
                        </a>
                    </div>
                    <div className="sb-footer-link-div">
                        <h4>Solusi</h4>
                        <a href="/employer">
                            <p>Pertambakan</p>
                        </a>
                        <a href="/employer">
                            <p>Teknisi</p>
                        </a>
                        <a href="/employer">
                            <p>Admin Tambak</p>
                        </a>
                        <a href="/employer">
                            <p>Enterprise</p>
                        </a>
                    </div>
                </div>
                <div className="sb-footer-link">
                    <div className="sb-footer-link-div">
                        <h4>CS & SALES</h4>
                        <p className="footer-body">0274-8000020 (Kantor)</p>
                        <p className="footer-body">0274-8000020 (Sales)</p>
                        <a href="mailto:team@fistx.cod.id">
                            <p className="footer-body" style={{ color: 'rgb(1, 69, 211)', fontWeight: 'bold' }}>team@fistx.cod.id</p>
                        </a>
                    </div>
                    <div className="sb-footer-link-div">
                        <div className="sb-footer-link-div follow-us-container">
                            <h4>Follow Us</h4>
                            <div className="socialmedia">
                                <p><img src={fb} alt="" /></p>
                                <p><img src={twitter} alt="" /></p>
                                <p><img src={linkedin} alt="" /></p>
                                <p><img src={instagram} alt="" /></p>
                                <p><img src={tiktok} alt="" /></p>
                            </div>
                        </div>
                    </div>
                    <div className="sb-footer-link-div">
                        <a href="logo"><img src={logo} alt="Facebook Logo" className="logo-image1" /></a>
                    </div>
                </div>

                <hr></hr>

                <div className="sb-footer-below">
                    <div className="sb-footer-copyright">
                        <p>
                            @{new Date().getFullYear()} FisTx. All right reserved
                        </p>
                    </div>
                    <div className="sb-footer-below-link">
                        <a href="/terms"><div><p>Terms & Condition</p></div></a>
                        <a href="/terms"><div><p>Privacy</p></div></a>
                        <a href="/terms"><div><p>Secuurity</p></div></a>
                        <a href="/terms"><div><p>Cookie Declaration</p></div></a>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Footer;