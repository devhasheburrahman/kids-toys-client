import React from 'react';
import { FaGoogle, FaInstagram, FaLinkedin, FaTimes, FaTwitter, FaWater } from 'react-icons/fa';



const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <h1 className='text-4xl font-semi-bold mb-5 '>KidzToys</h1>
                <img className='h-[100px] ' src={"/g-8.jpg"} alt="" />
                <p>kidz Toy Ltd.</p>
                <p>Providing reliable tech since 2023</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Sport car</a>
                <a className="link link-hover"> Toy Ambulance</a>
                <a className="link link-hover">Regular Car</a>
                <a className="link link-hover"> Mini POlice Car</a>
            </div>

            <div>
                <span className="footer-title">Contact</span>

                <p>Ulipur , Kurigram</p>
                <p>01426356665</p>
                <p>info@gmail.com</p>
            </div>
            <div>
                <span className="footer-title">SOCIAL</span>
                <p className='flex gap-5 text-[26px]'>
                    <FaGoogle />
                    <FaTwitter />
                    <FaInstagram />
                    <FaLinkedin />
                </p>
            </div>

        </footer>
    );
};

export default Footer;