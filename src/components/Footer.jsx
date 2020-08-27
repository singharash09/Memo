import React from "react";




function Footer() {
    
    //dynamic date for copyright
    let d = new Date();
    return <footer>
        <p>Copyright © {d.getFullYear()} </p>
    </footer>
}


export default Footer;