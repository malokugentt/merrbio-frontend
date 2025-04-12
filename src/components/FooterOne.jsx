import React from 'react'
import { Link } from 'react-router-dom'

const FooterMerrBio = () => {
    return (
        <footer className="footer py-120">
            <img
                src="assets/images/bg/body-bottom-bg.png"
                alt="BG"
                className="body-bottom-bg"
            />
            <div className="container container-lg">
                <div className="footer-item-wrapper d-flex align-items-start flex-wrap">
                    <div className="footer-item">
                        <div className="footer-item__logo">
                            <Link to="/">
                                <img src="assets/images/logo/logo.png" alt="MerrBio Logo" />
                            </Link>
                        </div>
                        <p className="mb-24">
                            MerrBio është një platformë që ndihmon fermerët dhe konsumatorët të bashkëpunojnë dhe të blejnë produkte bujqësore.
                        </p>
                        <div className="flex-align gap-16 mb-16">
                            <span className="w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0">
                                <i className="ph-fill ph-map-pin" />
                            </span>
                            <span className="text-md text-gray-900">
                                Tiranë, Shqipëri
                            </span>
                        </div>
                        <div className="flex-align gap-16 mb-16">
                            <span className="w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0">
                                <i className="ph-fill ph-phone-call" />
                            </span>
                            <div className="flex-align gap-16 flex-wrap">
                                <Link
                                    to="/tel:+03812345678"
                                    className="text-md text-gray-900 hover-text-main-600"
                                >
                                    +038 123 456 78
                                </Link>
                            </div>
                        </div>
                        <div className="flex-align gap-16 mb-16">
                            <span className="w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0">
                                <i className="ph-fill ph-envelope" />
                            </span>
                            <Link
                                to="/mailto:support@merrbio.com"
                                className="text-md text-gray-900 hover-text-main-600"
                            >
                                support@merrbio.com
                            </Link>
                        </div>
                    </div>
                    <div className="footer-item">
                        <h6 className="footer-item__title">Informacion</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Bëhu Furnizues
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/privacy-policy" className="text-gray-600 hover-text-main-600">
                                    Politika e Privatësisë
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/suppliers" className="text-gray-600 hover-text-main-600">
                                    Furnizuesit Tanë
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/community" className="text-gray-600 hover-text-main-600">
                                    Komuniteti
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h6 className="footer-item__title">Mbështetje për Klientët</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <Link to="/help-center" className="text-gray-600 hover-text-main-600">
                                    Qendra e Ndihmës
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/contact" className="text-gray-600 hover-text-main-600">
                                    Na Kontaktoni
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h6 className="footer-item__title">Llogaria Ime</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <Link to="/my-account" className="text-gray-600 hover-text-main-600">
                                    Llogaria Ime
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/order-history" className="text-gray-600 hover-text-main-600">
                                    Historia e Porosive
                                </Link>
                            </li>
                        </ul>
                    </div>
                  
                </div>
            </div>
        </footer>
    )
}

export default FooterMerrBio
