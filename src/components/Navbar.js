import React from 'react';
import { Link } from 'react-router-dom';
export const Navbar = () => {


    return (
        <nav style={{ width:'100%',position: 'relative', zIndex: '3' ,display: "flex", justifyContent: 'space-between', fontFamily: 'Amatic SC', color: 'wheat' }} class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Link to="/" style={{ fontSize: '40px', color: 'wheat', textDecoration: 'none'}} >Кафе "Мой Хороший"</Link>
                <div style={{ fontSize: '18px', color: 'wheat', }}>Режим работы: 11.00-23.00</div>
            </div>
            <div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul style={{ textAlign: 'center'}} class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <div class="nav-link" href="/"><Link to="/" style={{ textDecoration: 'none', fontSize: '18px', color: 'wheat'}}>О нас</Link></div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-link" href="#"><Link to="/menu" style={{ textDecoration: 'none', fontSize: '18px', color: 'wheat'}}>Меню</Link></div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-link" href="#"><Link to="/contacts" style={{ textDecoration: 'none',fontSize: '18px', color: 'wheat' }}>Контакты</Link></div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}