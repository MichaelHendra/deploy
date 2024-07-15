import cssModule from "./Footer.module.css"
//image
import Logo from "../assets/Logo.png"

function Footer () {
    return (
        <div>
            <div className={cssModule.BGFoter}>
                <div className={cssModule.containterFooter}>
                    <div className={cssModule.gapFooter}></div>
                    <div><img src={Logo} alt="Logo" className={cssModule.LogoFooter}/></div>
                    <div><p className={cssModule.para}>Steraming With High Quality</p></div>
                </div>
                <div className={cssModule.containterFooter}>
                <div className={cssModule.divlinkFooter}><b className={cssModule.bold}>Menu</b></div>
                    <div className={cssModule.divlinkFooter}><a href="/" className={cssModule.linkFooter}>Home</a></div>
                    <div className={cssModule.divlinkFooter}><a href="/" className={cssModule.linkFooter}>Movie</a></div>
                    <div className={cssModule.divlinkFooter}><a href="/" className={cssModule.linkFooter}>New</a></div>
                    <div className={cssModule.divlinkFooter}><a href="/" className={cssModule.linkFooter}>Mylist</a></div>
                    {/* <a href="/" className={cssModule.linkFooter}>Home</a>
                    <a href="/" className={cssModule.linkFooter}>Movie</a>
                    <a href="/" className={cssModule.linkFooter}>New</a>
                    <a href="/" className={cssModule.linkFooter}>Mylist</a> */}
                </div>
                <div className={cssModule.containterFooter}>
                <div className={cssModule.divlinkFooter}><b className={cssModule.bold}>Sosial Media</b></div>
                    <div className={cssModule.divlinkFooter}><a href="/" className={cssModule.linkFooter}>Home</a></div>
                    <div className={cssModule.divlinkFooter}><a href="/" className={cssModule.linkFooter}>Movie</a></div>
                    <div className={cssModule.divlinkFooter}><a href="/" className={cssModule.linkFooter}>New</a></div>
                    <div className={cssModule.divlinkFooter}><a href="/" className={cssModule.linkFooter}>Mylist</a></div>
                </div>
                <div className={cssModule.containterFooter}>
                <div className={cssModule.divlinkFooter}><b className={cssModule.bold}>Sosial Media</b></div>
                    <div className={cssModule.divlinkFooter}><a href="/" className={cssModule.linkFooter}>Home</a></div>
                    <div className={cssModule.divlinkFooter}><a href="/" className={cssModule.linkFooter}>Movie</a></div>
                    <div className={cssModule.divlinkFooter}><a href="/" className={cssModule.linkFooter}>New</a></div>
                    <div className={cssModule.divlinkFooter}><a href="/" className={cssModule.linkFooter}>Mylist</a></div>
                </div>
                
            </div>
                <div className={cssModule.copy}>
                    <div>XD</div>
                </div>
        </div>   
    );
}

export default Footer