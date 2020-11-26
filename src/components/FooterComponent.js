import React from 'react';

function Footer(props) {
    return (
        <footer class="site-footer ">
            <div class="footer-container">
                <div class="row">
                    <div class="col-4 offset-1 col-sm-2 links">
                        <h5>Menu</h5>
                        <ul class="list-unstyled">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="/about.html">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-sm-5 text-center">
                        <h5>Social</h5>
                        <a href="http://instagram.com" class="btn btn-social-icon btn-instagram"><i
                            class="fa fa-instagram"></i></a>{' '}
                        <a href="http://facebook.com" class="btn btn-social-icon btn-facebook"><i
                            class="fa fa-facebook"></i></a>{' '}
                        <a href="http://twitter.com" class="btn btn-social-icon btn-twitter"><i
                            class="fa fa-twitter"></i></a>{' '}
                        <a href="http://youtube.com" class="btn btn-social-icon btn-google"><i
                            class="fa fa-youtube"></i></a> 
                    </div>
                    <div class="col-sm-4 text-center links">
                        <a href="tel:+2815555555" class="btn btn-link" role="button"><i class="fa fa-phone"></i>
                            281-555-5555</a><br></br>
                            <a href="mailto:info@michevida.com" class="btn btn-link" role="button"><i
                                class="fa fa-envelope-o"></i> info@michevida.com</a>
                    </div>
                    </div>
                </div>
        </footer>
    );
}

export default Footer;