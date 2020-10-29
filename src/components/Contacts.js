import React, { Fragment } from 'react'
import Media from 'react-media';

export const Contacts = () => {

    return (
        <>
            <Media queries={{
                small: "(max-width: 1199px)",
                large: "(min-width: 1200px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.small &&
                            <div style={{ display: 'flex', color: 'white', fontFamily: 'Amatic SC', justifyContent: 'center', marginTop: '12%' }}>
                                <div>
                                    <h3 style={{ fontSize: '60px' }}>Наши контакты:</h3>
                                    <div style={{ textAlign: 'center' }}>
                                        <li class="animate__animated animate__backInLeft">Телефон: 274-88-68</li>
                                        <li class="animate__animated animate__backInRight">Наш Instagramm: <a style={{ textDecoration: 'none' }} class="links" href="https://www.instagram.com/mou_horoshycafe/">mou_horoshycafe</a></li>
                                        <li class="animate__animated animate__backInLeft">Мы Вконтакте: <a style={{ textDecoration: 'none' }} class="links" href="https://vk.com/mouhoroshy">"Мой хороший"</a></li>
                                    </div>
                                </div>
                            </div>}
                        {matches.large &&
                            <div style={{ display: 'flex', color: 'white', fontFamily: 'Amatic SC', justifyContent: 'center', marginTop: '12%' }}>
                                <div>
                                    <h3 style={{ fontSize: '80px' }}>Наши контакты:</h3>
                                    <div style={{ textAlign: 'center' }}>
                                        <li class="animate__animated animate__backInLeft" style={{ fontSize: "30px" }}>Телефон: 274-88-68</li>
                                        <li class="animate__animated animate__backInRight" style={{ fontSize: "30px" }}>Наш Instagramm: <a style={{ textDecoration: 'none' }} class="links" href="https://www.instagram.com/mou_horoshycafe/">mou_horoshycafe</a></li>
                                        <li class="animate__animated animate__backInLeft" style={{ fontSize: "30px" }}>Мы Вконтакте: <a style={{ textDecoration: 'none' }} class="links" href="https://vk.com/mouhoroshy">"Мой хороший"</a></li>
                                    </div>
                                </div>
                            </div>}
                    </Fragment>)}
            </Media>
        </>

    )
}