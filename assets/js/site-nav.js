(function () {
    "use strict";

    var header = document.querySelector(".main-header-three, .main-header-two");
    var stickyHeader = document.querySelector(".stricky-header");

    if (!header) {
        return;
    }

    var currentPage = window.location.pathname.split("/").pop() || "index.html";
    var links = [
        { href: "index.html", label: "Home" },
        { href: "about.html", label: "About Us" },
        { href: "service.html", label: "Services" },
        { href: "contact.html", label: "Contact" }
    ];

    var navLinks = links.map(function (link) {
        var activeClass = currentPage === link.href ? ' class="current"' : "";
        var currentAttribute = currentPage === link.href ? ' aria-current="page"' : "";

        return '<li' + activeClass + '><a href="' + link.href + '"' +
            currentAttribute + '>' + link.label + '</a></li>';
    }).join("");

    header.outerHTML = `
        <header class="main-header-two main-header--unified">
            <div class="main-menu-two__top main-header--unified__top">
                <div class="container">
                    <div class="main-menu-two__top-inner">
                        <ul class="list-unstyled main-menu-two__contact-list">
                            <li>
                                <div class="icon"><span class="icon-envelope"></span></div>
                                <div class="text">
                                    <p><a href="mailto:devashrrcleaning@gmail.com">devashrrcleaning@gmail.com</a></p>
                                </div>
                            </li>
                            <li>
                                <div class="icon"><span class="icon-call"></span></div>
                                <div class="text"><p><a href="tel:0632739462">063 273 9462</a></p></div>
                            </li>
                        </ul>
                        <div class="main-menu-two__top-right">
                            <div class="main-menu-two__top-time">
                                <div class="main-menu-two__top-time-icon">
                                    <span class="icon-time"></span>
                                </div>
                                <p class="main-menu-two__top-text">Mon - Fri: 9:00 AM - 5:00 PM</p>
                            </div>
                            <div class="main-menu-two__social">
                                <a href="https://www.facebook.com/tshepiso.dithebe.52" target="_blank"
                                    rel="noopener noreferrer" aria-label="Facebook">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="main-menu main-menu-two" aria-label="Primary navigation">
                <div class="main-menu-two__wrapper">
                    <div class="container">
                        <div class="main-menu-two__wrapper-inner">
                            <div class="main-menu-two__left">
                                <div class="main-menu-two__logo">
                                    <a href="index.html">
                                        <img src="logo2.png" alt="Devashrr Cleaning Services">
                                    </a>
                                </div>
                            </div>
                            <div class="main-menu-two__main-menu-box">
                                <a href="#" class="mobile-nav__toggler" aria-label="Open navigation menu">
                                    <i class="fa fa-bars"></i>
                                </a>
                                <ul class="main-menu__list">${navLinks}</ul>
                            </div>
                            <div class="main-menu-two__right">
                                <div class="main-menu-two__btn-box">
                                    <a class="thm-btn" href="contact.html">Get A Quote
                                        <i class="fal fa-long-arrow-right"></i>
                                        <span class="hover-btn hover-bx"></span>
                                        <span class="hover-btn hover-bx2"></span>
                                        <span class="hover-btn hover-bx3"></span>
                                        <span class="hover-btn hover-bx4"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>`;

    if (stickyHeader) {
        stickyHeader.className = "stricky-header stricked-menu main-menu main-menu-two";
    }
}());
