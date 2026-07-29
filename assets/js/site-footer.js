(function () {
    "use strict";

    var footer = document.querySelector(".site-footer, .site-footer-two");

    if (!footer) {
        return;
    }

    footer.outerHTML = `
        <footer class="site-footer site-footer--unified">
            <div class="site-footer__bg"
                style="background-image: url(assets/images/devassets/building2.jpg);"></div>
            <div class="site-footer__top">
                <div class="container">
                    <div class="site-footer__top-inner">
                        <div class="row site-footer--unified__row">
                            <div class="col-xl-4 col-lg-6 col-md-6">
                                <div class="footer-widget__about">
                                    <div class="footer-widget__about-logo">
                                        <a href="index.html">
                                            <img src="logo.png" alt="Devashrr Cleaning Services logo">
                                        </a>
                                    </div>
                                    <p class="footer-widget__about-text">
                                        DEVASHRR CLEANING SERVICES (Pty) Ltd | Reg. No. 2019/128253/07 |
                                        Tax No. 9627352181 | B-BBEE Level 1.
                                    </p>
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-6 col-md-6">
                                <div class="footer-widget__links">
                                    <h4 class="footer-widget__title">Services</h4>
                                    <ul class="footer-widget__links-list list-unstyled">
                                        <li><a href="service.html">Construction</a></li>
                                        <li><a href="service.html">Maintenance</a></li>
                                        <li><a href="service.html">Renovations</a></li>
                                        <li><a href="service.html">Plumbing</a></li>
                                        <li><a href="service.html">Electrical</a></li>
                                        <li><a href="service.html">Cleaning</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-6 col-md-6">
                                <div class="footer-widget__links">
                                    <h4 class="footer-widget__title">Quick Links</h4>
                                    <ul class="footer-widget__links-list list-unstyled">
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="service.html">Our Services</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6">
                                <div class="footer-widget__contact-info">
                                    <h4 class="footer-widget__title">Contact Us</h4>
                                    <div class="footer-widget__contact-info-box">
                                        <ul class="footer-widget__contact-info-list list-unstyled">
                                            <li>
                                                <div class="footer-widget__contact-info-list-shape-1"></div>
                                                <div class="icon"><span class="icon-location"></span></div>
                                                <p>House No 10045, Gakhoe Village, Dithakong, 8604,
                                                    Northern Cape, South Africa</p>
                                            </li>
                                            <li>
                                                <div class="footer-widget__contact-info-list-shape-1"></div>
                                                <div class="icon"><span class="icon-envelope"></span></div>
                                                <p><a href="mailto:devashrrcleaning@gmail.com">devashrrcleaning@gmail.com</a></p>
                                            </li>
                                            <li>
                                                <div class="footer-widget__contact-info-list-shape-1"></div>
                                                <div class="icon"><span class="icon-call"></span></div>
                                                <p><a href="tel:0632739462">063 273 9462</a></p>
                                            </li>
                                        </ul>
                                        <div class="footer-widget__social-box">
                                            <a href="https://www.facebook.com/tshepiso.dithebe.52" target="_blank"
                                                rel="noopener noreferrer" aria-label="Facebook">
                                                <span class="fab fa-facebook-f"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-footer__bottom">
                <div class="container">
                    <div class="site-footer__bottom-inner">
                        <div class="site-footer__copyright">
                            <p class="site-footer__copyright-text">
                                © Copyright 2026 DEVASHRR CLEANING SERVICES. All Rights Reserved.
                                <span class="designer-credit">Designed by
                                    <a href="https://brandscapersafrica.com" target="_blank"
                                        rel="noopener noreferrer">Brandscapers Africa</a>.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>`;
}());
