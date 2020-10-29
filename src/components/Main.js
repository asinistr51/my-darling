import React, { Fragment, useState, useEffect } from 'react';
import Media from 'react-media';

export const Main = () => {

    const [trigger, setTrigger] = useState(false);

    useEffect(() => {

        setTimeout(function run() {
            setTrigger(true)
        }, 1000);
    }, [trigger]);

    return (
        <div>
            <Media queries={{
                small: "(max-width: 599px)",
                medium: "(min-width: 600px) and (max-width: 1199px)",
                large: "(min-width: 1200px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && <div style={{ textAlign: 'center',fontFamily: 'Amatic SC' , margin: '0 20px 0 20px', color: 'white'}}><h1 class="animate__animated animate__bounce" style={{ fontSize: '30px', textAlign: 'center', paddingTop: '30px' }}>Добро пожаловать в кафе "Мой Хороший"!</h1>
                            {trigger && <div class="animate__animated animate__bounceInUp"><p style={{ fontSize: '19px', textAlign: 'center', marginTop: '30px' }}>Наше желание - создать для Вас атмосферу дома. Особое достоинство ресторана искреннее радушие
                                персонала и превосходная кухня в ярких традициях русской и европейской кухни. Искусные повара предлагают
                                множество разнообразных блюд, которые удовлетворят любого гурмана.
    </p>
                                <h5 >Банкеты</h5>
                                <p>Наше кафе славится сытными и вкусными банкетами за одну из лучших цен в городе! Посетив
        нас один раз вы обязательно вернетесь ещё!</p>
                                <li>При заказе от 1000 рублей на человека позволяется принести свой алкоголь.</li>
                                <li>Гибкие часы работы при обговоренных заранее условиях.</li>
                                <li>Вариативное банкетное меню. Спросите, сможем ли мы приготовить то, чего нет в меню,- но вам
        очень хочется!:)</li></div>}
                        </div>}
                        {matches.medium && <div style={{ textAlign: 'center',fontFamily: 'Amatic SC' , margin: '0 20px 0 20px', color: 'white', fontSize: '25px' }}><h1 class="animate__animated animate__bounce" style={{ fontSize: '40px', textAlign: 'center', paddingTop: '30px' }}>Добро пожаловать в кафе "Мой Хороший"!</h1>
                            {trigger && <div class="animate__animated animate__bounceInUp"><p style={{ fontSize: '25px', textAlign: 'center', marginTop: '30px' }}>Наше желание - создать для Вас атмосферу дома. Особое достоинство ресторана искреннее радушие
                                персонала и превосходная кухня в ярких традициях русской и европейской кухни. Искусные повара предлагают
                                множество разнообразных блюд, которые удовлетворят любого гурмана.
    </p>
                                <h5 style={{ fontSize: '40px', marginBot: '10px'}} >Банкеты</h5>
                                <p>Наше кафе славится сытными и вкусными банкетами за одну из лучших цен в городе! Посетив
        нас один раз вы обязательно вернетесь ещё!</p>
                                <li>При заказе от 1000 рублей на человека позволяется принести свой алкоголь.</li>
                                <li>Гибкие часы работы при обговоренных заранее условиях.</li>
                                <li>Вариативное банкетное меню. Спросите, сможем ли мы приготовить то, чего нет в меню,- но вам
        очень хочется!:)</li></div>}
                        </div>}
                        {matches.large && <div style={{ fontFamily: 'Amatic SC',  fontSize: '30px', textAlign: 'center',  margin: '0 20px 0 20px', color: 'white' }}><h1 class="animate__animated animate__bounce" style={{ fontSize: '50px', textAlign: 'center', paddingTop: '40px' }}>Добро пожаловать в кафе "Мой Хороший"!</h1>
                        {trigger && <div class="animate__animated animate__bounceInUp"><p style={{ fontSize: '30px', textAlign: 'center', marginTop: '30px' }}>Наше желание - создать для Вас атмосферу дома. Особое достоинство ресторана искреннее радушие
                                персонала и превосходная кухня в ярких традициях русской и европейской кухни. Искусные повара предлагают
                                множество разнообразных блюд, которые удовлетворят любого гурмана.
    </p>
                                <h5 style={{ fontSize: '50px', textAlign: 'center', marginTop: '40px', marginBot: '10px' }}>Банкеты</h5>
                                <p>Наше кафе славится сытными и вкусными банкетами за одну из лучших цен в городе! Посетив
        нас один раз вы обязательно вернетесь ещё!</p>
                                <li>При заказе от 1000 рублей на человека позволяется принести свой алкоголь.</li>
                                <li>Гибкие часы работы при обговоренных заранее условиях.</li>
                                <li>Вариативное банкетное меню. Спросите, сможем ли мы приготовить то, чего нет в меню,- но вам
        очень хочется!:)</li></div>}
                        </div>}
                    </Fragment>
                )}
            </Media>
        </div>
    )
}




{/* 
<><h1>Добро пожаловать в кафе "Мой Хороший"!</h1>
                        <p>Наше желание - создать для Вас атмосферу дома. Особое достоинство ресторана искреннее радушие
                        персонала и превосходная кухня в ярких традициях русской и европейской кухни. Искусные повара предлагают
                        множество разнообразных блюд, которые удовлетворят любого гурмана.
    </p>
                        <h5 >Банкеты</h5>
                        <p>Также наше кафе славится сытными и вкусными банкетами за одну из лучших цен в городе! Посетив
        нас один раз вы обязательно вернетесь ещё!</p>
                        <li>При заказе от 1000 рублей на человека позволяется принести свой алкоголь.</li>
                        <li>Гибкие часы работы при обговоренных заранее условиях.</li>
                        <li>Вариативное банкетное меню. Спросите, сможем ли мы приготовить то, чего нет в меню,- но вам
        очень хочется!:)</li>
                    </> */}