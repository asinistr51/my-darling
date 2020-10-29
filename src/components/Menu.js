import React, { useState } from 'react'

export const Menu = () => {

    const [trigger1, setTrigger1] = useState(false);
    const [trigger2, setTrigger2] = useState(false);
    const [trigger3, setTrigger3] = useState(false);
    const [trigger4, setTrigger4] = useState(false);
    const [trigger5, setTrigger5] = useState(false);
    const [trigger6, setTrigger6] = useState(false);
    const [trigger7, setTrigger7] = useState(false);
    const [trigger8, setTrigger8] = useState(false);
    const [trigger9, setTrigger9] = useState(false);
    const [trigger10, setTrigger10] = useState(false);
    const [trigger11, setTrigger11] = useState(false);
    const [trigger12, setTrigger12] = useState(false);
    const [trigger13, setTrigger13] = useState(false);



    return (
        <>
            <h1 style={{ textAlign: 'center', fontFamily: 'Amatic SC', color: 'white', fontSize: '60px' }}>Наше меню</h1>
            <div class="animate__animated animate__bounceInUp">
                <button onClick={() => setTrigger1((state) => !state)} style={{
                    display: 'inline-block',
                    background: 'transparent',
                    width: '100%',
                    fontFamily: 'Amatic SC',
                    padding: ' 2px',
                    color: '#fff',
                    border: '3px solid #fff',
                    borderRadius: '25px',
                    textAlign: 'center',
                    outline: 'none',
                    textDecoration: 'none',
                    fontSize: '30px',
                    marginTop: '1px'
                }} class="ghost-button-rounded-corners">Сэндвичи и бутерброды</button>
                {trigger1 && (<div style={{
                    display: 'inline-block',
                    background: 'transparent',
                    width: '100%',
                    fontFamily: 'Amatic SC',
                    padding: ' 2px',
                    color: '#fff',
                    border: '3px solid #fff',
                    borderRadius: '25px',
                  
                    outline: 'none',
                    textDecoration: 'none',
                    fontSize: '30px',
                    marginTop: '1px'
                }}><div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Сэндвич с горячим филе цыпленка</div><div style={{fontSize: '20px'}}>(150гр.)</div></div><div>190р</div></div>
                    <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Сэндвич с ветчиной и сыром</div><div style={{fontSize: '20px'}}>(150гр.)</div></div><div>170р</div></div>
                    <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Горячий бутерброд</div><div style={{fontSize: '20px'}}>(Грибы, ветчина, сыр, 40/60гр.)</div></div><div>170р</div></div>
                    <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Бутерброд с бужениной</div><div style={{fontSize: '20px'}}>(20/30/10гр.)</div></div><div>140р</div></div>
                    <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Бутерброд с икрой</div><div style={{fontSize: '20px'}}>(20/30/10гр.)</div></div><div>190р</div></div>
                    <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Бутерброд с языком</div><div style={{fontSize: '20px'}}>(20/30/10гр.)</div></div><div>110р</div></div>
                </div>)}
                <button onClick={() => setTrigger2((state) => !state)} style={{
                    display: 'inline-block',
                    background: 'transparent',
                    width: '100%',
                    fontFamily: 'Amatic SC',
                    padding: ' 2px',
                    color: '#fff',
                    border: '3px solid #fff',
                    borderRadius: '25px',
                    textAlign: 'center',
                    outline: 'none',
                    textDecoration: 'none',
                    fontSize: '30px',
                    marginTop: '1px'
                }} class="ghost-button-rounded-corners">Салаты</button>
                {trigger2 && (<div style={{
                    display: 'inline-block',
                    background: 'transparent',
                    width: '100%',
                    fontFamily: 'Amatic SC',
                    padding: ' 2px',
                    color: '#fff',
                    border: '3px solid #fff',
                    borderRadius: '25px',
                    outline: 'none',
                    textDecoration: 'none',
                    fontSize: '30px',
                    marginTop: '1px'
                }}><div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Цезарь</div><div style={{fontSize: '20px'}}>(филе кур. грудки, листья салата, сливочные сухарики, соус "Цезарь", сыр "Пармезан",160гр.)</div></div><div>230руб.</div></div>
                    <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Полковник</div><div style={{fontSize: '20px'}}>(язык и буженина, свежий огурчик, маринованые грибочки, яйцо, майноез, 160гр.)</div></div><div>280руб.</div></div>
                    <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Аристократ</div><div style={{fontSize: '20px'}}>(куриное филе, сельдерей, зелёное яблоко, грецкие орехи, соус майнезный, 160гр)</div></div><div>220руб.</div></div>
                    <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Столичный</div><div style={{fontSize: '20px'}}>(с курицей, 160гр.)</div></div><div>200руб.</div></div>
                </div>)}
                <button onClick={() => setTrigger3((state) => !state)} style={{
                    display: 'inline-block',
                    background: 'transparent',
                    width: '100%',
                    fontFamily: 'Amatic SC',
                    padding: ' 2px',
                    color: '#fff',
                    border: '3px solid #fff',
                    borderRadius: '25px',
                  
                    outline: 'none',
                    textDecoration: 'none',
                    fontSize: '30px',
                    marginTop: '1px'
                }} class="ghost-button-rounded-corners">Холодные закуски</button>
                {trigger3 && (<div style={{
                    display: 'inline-block',
                    background: 'transparent',
                    width: '100%',
                    fontFamily: 'Amatic SC',
                    padding: ' 2px',
                    color: '#fff',
                    border: '3px solid #fff',
                    borderRadius: '25px',
                   
                    outline: 'none',
                    textDecoration: 'none',
                    fontSize: '30px',
                    marginTop: '1px'
                }}><div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Сельдь "Мировой закусон"</div><div style={{fontSize: '20px'}}>(С картофелем и маринованым лучком 75/100/50/30/10гр.)</div></div><div>180р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Букет из свежих овощей</div><div style={{fontSize: '20px'}}>(150/10/10гр.)</div></div><div>160р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Ассорти мясное</div><div style={{fontSize: '20px'}}>(Буженина, язык, хрен, 40/40/20/30гр.)</div></div><div>325р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Буженина</div><div style={{fontSize: '20px'}}>(с соусом "Хрен" 100/30/50/10гр.)</div></div><div>300р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Язык</div><div style={{fontSize: '20px'}}>(с соусом "Хрен", 100/30/50/10гр.)</div></div><div>350р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Сырные язычки</div><div style={{fontSize: '20px'}}>(нежные рулетики из языка с чесноком, 50/50/50/10гр.)</div></div><div>260р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Рулетики из ветчины</div><div style={{fontSize: '20px'}}>(ветчина, сыр, чеснок, 50/50/30гр.)</div></div><div>230р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Деревенская закуска</div><div style={{fontSize: '20px'}}>(отварной картофель, сало, солёный огурец, лук, 150гр.)</div></div><div>190р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Соленья</div><div style={{fontSize: '20px'}}>(ассорти, 300гр.)</div></div><div>270р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Лосось "Шеф-Посол"</div><div style={{fontSize: '20px'}}>(банкетное блюдо, 80гр.)</div></div><div>330р</div></div>
                </div>)}
                <button onClick={() => setTrigger4((state) => !state)} style={{
                    display: 'inline-block',
                    background: 'transparent',
                    width: '100%',
                    fontFamily: 'Amatic SC',
                    padding: ' 2px',
                    color: '#fff',
                    border: '3px solid #fff',
                    borderRadius: '25px',
                    textAlign: 'center',
                    outline: 'none',
                    textDecoration: 'none',
                    fontSize: '30px',
                    marginTop: '1px'
                }} class="ghost-button-rounded-corners">Горячие закуски</button>
                {trigger4 && (<div style={{
                    display: 'inline-block',
                    background: 'transparent',
                    width: '100%',
                    fontFamily: 'Amatic SC',
                    padding: ' 2px',
                    color: '#fff',
                    border: '3px solid #fff',
                    borderRadius: '25px',
                  
                    outline: 'none',
                    textDecoration: 'none',
                    fontSize: '30px',
                    marginTop: '1px'
                }}><div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Поздний завтрак</div><div style={{fontSize: '20px'}}>(Омлет с ветчиной и сыром 80/30/50гр.)</div></div><div>160р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Яичница</div><div style={{fontSize: '20px'}}>(Два яйца и бекон 80/30/50гр.)</div></div><div>150р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Домашние пельмени</div><div style={{fontSize: '20px'}}>(Пельмешки ручной работы, соус по выбору, 300/30гр.)</div></div><div>320р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Жюльен с грибами</div><div style={{fontSize: '20px'}}>(150/2гр.)</div></div><div>250р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Жюльен с курицой</div><div style={{fontSize: '20px'}}>(Грибы, курица 150/2гр.)</div></div><div>250р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Прикуси язык</div><div style={{fontSize: '20px'}}>(Нежные пластинки языка, соус с беконом, грибами и сливками 75/50гр.)</div></div><div>320р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Драники</div><div style={{fontSize: '20px'}}>(Картофельные оладьи со сметаной, 300/50гр.)</div></div><div>260р</div></div>
                </div>)}
                <button onClick={() => setTrigger5((state) => !state)} style={{
                    display: 'inline-block',
                    background: 'transparent',
                    width: '100%',
                    fontFamily: 'Amatic SC',
                    padding: ' 2px',
                    color: '#fff',
                    border: '3px solid #fff',
                    borderRadius: '25px',
                    textAlign: 'center',
                    outline: 'none',
                    textDecoration: 'none',
                    fontSize: '30px',
                    marginTop: '1px'
                }} class="ghost-button-rounded-corners">Супы</button>
                {trigger5 && (<div style={{
                    display: 'inline-block',
                    background: 'transparent',
                    width: '100%',
                    fontFamily: 'Amatic SC',
                    padding: ' 2px',
                    color: '#fff',
                    border: '3px solid #fff',
                    borderRadius: '25px',
                  
                    outline: 'none',
                    textDecoration: 'none',
                    fontSize: '30px',
                    marginTop: '1px'
                }}><div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Харчо</div><div style={{fontSize: '20px'}}>(300гр.)</div></div><div>250р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Солянка мясная</div><div style={{fontSize: '20px'}}>(300/30/5гр.)</div></div><div>280р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Суп лапша куриная</div><div style={{fontSize: '20px'}}>(300/30/5гр.)</div></div><div>160р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Куриный бульон</div><div style={{fontSize: '20px'}}>(курица, гренки 300/30/30/5гр.)</div></div><div>140р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Уха со сливками по фински</div><div style={{fontSize: '20px'}}>(300/100гр.)</div></div><div>360р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Демьянова Уха</div><div style={{fontSize: '20px'}}>(300гр.)</div></div><div>270р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Сливочный суп со шпинатом и курочкой</div><div style={{fontSize: '20px'}}>(300гр.)</div></div><div>260р</div></div>
                </div>)}
                <button onClick={() => setTrigger6((state) => !state)} style={{
                    display: 'inline-block',
                    background: 'transparent',
                    width: '100%',
                    fontFamily: 'Amatic SC',
                    padding: ' 2px',
                    color: '#fff',
                    border: '3px solid #fff',
                    borderRadius: '25px',
                    textAlign: 'center',
                    outline: 'none',
                    textDecoration: 'none',
                    fontSize: '30px',
                    marginTop: '1px'
                }} class="ghost-button-rounded-corners">Блюда из рыбы</button>
                {trigger6 && (<div style={{
                    display: 'inline-block',
                    background: 'transparent',
                    width: '100%',
                    fontFamily: 'Amatic SC',
                    padding: ' 2px',
                    color: '#fff',
                    border: '3px solid #fff',
                    borderRadius: '25px',
                 
                    outline: 'none',
                    textDecoration: 'none',
                    fontSize: '30px',
                    marginTop: '1px'
                }}><div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Форель в сливочно-креветочном соусе</div><div style={{fontSize: '20px'}}>(Жареное филе форели на "подушечке" из грибов, овощей и криветок, 150/75/100гр.)</div></div><div>600р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Форель паровая с тимьяном и овощами</div><div style={{fontSize: '20px'}}>(В фольге с помидорами и пряными травами, 150гр.)</div></div><div>480р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Стейк из форели</div><div style={{fontSize: '20px'}}>(со сливочным соусом 150/20гр.)</div></div><div>500р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Лосось "Диджон"</div><div style={{fontSize: '20px'}}>(стручковая фасоль с обжаренным лососем в пикантном горчичном соусе с кунжутом, 200гр.)</div></div><div>340р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Рыба "По-Русски"</div><div style={{fontSize: '20px'}}>(Судак запеченный с картофелем и луком с добавлением моркови в омлете с сыром 150/30/20гр.)</div></div><div>380р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Судак "Орли"</div><div style={{fontSize: '20px'}}>(Филе судака в кляре, 150/50гр.)</div></div><div>350р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Судак "Мускат"</div><div style={{fontSize: '20px'}}>(Филе мудака жареное с мускатным орехом, подается с отварным или жаренным картофелем 150/50/30гр.)</div></div><div>380р</div></div>
                </div>)}
                <button onClick={() => setTrigger7((state) => !state)} style={{
                    display: 'inline-block',
                    background: 'transparent',
                    width: '100%',
                    fontFamily: 'Amatic SC',
                    padding: ' 2px',
                    color: '#fff',
                    border: '3px solid #fff',
                    borderRadius: '25px',
                    textAlign: 'center',
                    outline: 'none',
                    textDecoration: 'none',
                    fontSize: '30px',
                    marginTop: '1px'
                }} class="ghost-button-rounded-corners">Блюда из баранины</button>
                {trigger7 && (<div style={{
                    display: 'inline-block',
                    background: 'transparent',
                    width: '100%',
                    fontFamily: 'Amatic SC',
                    padding: ' 2px',
                    color: '#fff',
                    border: '3px solid #fff',
                    borderRadius: '25px',
               
                    outline: 'none',
                    textDecoration: 'none',
                    fontSize: '30px',
                    marginTop: '1px'
                }}><div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Чанахи</div><div style={{fontSize: '20px'}}>(Баранина тушеная с овощами, баклажанами и томатами 400гр.)</div></div><div>520р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Лагман</div><div style={{fontSize: '20px'}}>(Баранина с домашней лапшой и овощами, 400гр.)</div></div><div>520р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Хазани</div><div style={{fontSize: '20px'}}>(Баранина жареная с помидорами, маринованый лук 180/50гр.)</div></div><div>500р</div></div>
                </div>)}
                <button onClick={() => setTrigger8((state) => !state)} style={{
                    display: 'inline-block',
                    background: 'transparent',
                    width: '100%',
                    fontFamily: 'Amatic SC',
                    padding: ' 2px',
                    color: '#fff',
                    border: '3px solid #fff',
                    borderRadius: '25px',
                    textAlign: 'center',
                    outline: 'none',
                    textDecoration: 'none',
                    fontSize: '30px',
                    marginTop: '1px'
                }} class="ghost-button-rounded-corners">Блюда из говядины</button>
                {trigger8 && (<div style={{
                    display: 'inline-block',
                    background: 'transparent',
                    width: '100%',
                    fontFamily: 'Amatic SC',
                    padding: ' 2px',
                    color: '#fff',
                    border: '3px solid #fff',
                    borderRadius: '25px',
                   

                    outline: 'none',
                    textDecoration: 'none',
                    fontSize: '30px',
                    marginTop: '1px'
                }}><div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Бефстроганов</div><div style={{fontSize: '20px'}}>(Говяжья вырезка жареная в сметане и сливках, 150/50гр.)</div></div><div>480р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Говядина по-царски</div><div style={{fontSize: '20px'}}>(Вырезка говяжья, помидоры, грибы, лук, майонез, сыр, 180/30гр.)</div></div><div>490р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Говядина "Бургундия"</div><div style={{fontSize: '20px'}}>(Говядина тушеная в сливках с грибами, приправлеенная мускатным орехом, подается с картофелем фри 150/100гр.)</div></div><div>500р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Медальоны из телячей вырезки</div><div style={{fontSize: '20px'}}>(С зеленой стручковой фасолью и соево-горчичным соусом "Дижон"гр.)</div></div><div>480р</div></div>
                </div>)}
                <button onClick={() => setTrigger9((state) => !state)} style={{
                    display: 'inline-block',
                    background: 'transparent',
                    width: '100%',
                    fontFamily: 'Amatic SC',
                    padding: ' 2px',
                    color: '#fff',
                    border: '3px solid #fff',
                    borderRadius: '25px',
                    textAlign: 'center',
                    outline: 'none',
                    textDecoration: 'none',
                    fontSize: '30px',
                    marginTop: '1px'
                }} class="ghost-button-rounded-corners">Блюда из свинины</button>
                {trigger9 && (<div style={{
                    display: 'inline-block',
                    background: 'transparent',
                    width: '100%',
                    fontFamily: 'Amatic SC',
                    padding: ' 2px',
                    color: '#fff',
                    border: '3px solid #fff',
                    borderRadius: '25px',
                    
                    outline: 'none',
                    textDecoration: 'none',
                    fontSize: '30px',
                    marginTop: '1px'
                }}><div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>"Гусарская баллада"</div><div style={{fontSize: '20px'}}>(Свиная шея, грибы, свежий помидор, под сырной корочкой с запеченным картофелем, 150/50/10гр.)</div></div><div>360р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>"Капиталийский холм"</div><div style={{fontSize: '20px'}}>(Свинина, чернослив, грецкие орехи в соусе барбекю 150/50/10гр.)</div></div><div>360р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Мясо по-Демидовски</div><div style={{fontSize: '20px'}}>(Свинина нашпигованая овощами, беконом и грибами под сырным соусом, 150/50/50гр.)</div></div><div>360р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Эскалоп</div><div style={{fontSize: '20px'}}>(С соусом, подается с отварным картофелем, 150/70/20гр.)</div></div><div>360р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Шашлык свиной</div><div style={{fontSize: '20px'}}>(150/30гр.)</div></div><div>340р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Чашушули</div><div style={{fontSize: '20px'}}>(Жаренные ломтики свинины с овощами и острыми кавказскими специями, 220гр.)</div></div><div>350р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Медальоны из свиной вырезки</div><div style={{fontSize: '20px'}}>(С картофелем пюре и грибным соусом, 320гр.)</div></div><div>380р</div></div>
                </div>)}
                <button onClick={() => setTrigger10((state) => !state)} style={{
                    display: 'inline-block',
                    background: 'transparent',
                    width: '100%',
                    fontFamily: 'Amatic SC',
                    padding: ' 2px',
                    color: '#fff',
                    border: '3px solid #fff',
                    borderRadius: '25px',
                    textAlign: 'center',
                    outline: 'none',
                    textDecoration: 'none',
                    fontSize: '30px',
                    marginTop: '1px'
                }} class="ghost-button-rounded-corners">Блюда из птицы</button>
                {trigger10 && (<div style={{
                    display: 'inline-block',
                    background: 'transparent',
                    width: '100%',
                    fontFamily: 'Amatic SC',
                    padding: ' 2px',
                    color: '#fff',
                    border: '3px solid #fff',
                    borderRadius: '25px',
                   
                    outline: 'none',
                    textDecoration: 'none',
                    fontSize: '30px',
                    marginTop: '1px'
                }}><div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Птичьи гнезда</div><div style={{fontSize: '20px'}}>(Запеченое куриное филе фаршированное шпинатом и сыром в лентах бекона 150/35/50/10гр.)</div></div><div>370р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Куриное филе по-французски</div><div style={{fontSize: '20px'}}>(Куриное филе запеченное с грибами и сыром, 150/50гр.)</div></div><div>280р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Острые куриные крылышки</div><div style={{fontSize: '20px'}}>(Жаренные во фритюре, 300гр.)</div></div><div>260р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Хуторок</div><div style={{fontSize: '20px'}}>(Куриное филе, грибы, помидоры, сливки и чеснок 150/35/50гр.)</div></div><div>300р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Куриный переполох</div><div style={{fontSize: '20px'}}>(Сочный шашлычок из куриной грудки с картофелем фри, 150/100/30гр.)</div></div><div>340р</div></div>
                </div>)}
                <button onClick={() => setTrigger11((state) => !state)} style={{
                    display: 'inline-block',
                    background: 'transparent',
                    width: '100%',
                    fontFamily: 'Amatic SC',
                    padding: ' 2px',
                    color: '#fff',
                    border: '3px solid #fff',
                    borderRadius: '25px',
                    textAlign: 'center',
                    outline: 'none',
                    textDecoration: 'none',
                    fontSize: '30px',
                    marginTop: '1px'
                }} class="ghost-button-rounded-corners">Спагетти/паста</button>
                {trigger11 && (<div style={{
                    display: 'inline-block',
                    background: 'transparent',
                    width: '100%',
                    fontFamily: 'Amatic SC',
                    padding: ' 2px',
                    color: '#fff',
                    border: '3px solid #fff',
                    borderRadius: '25px',
                   
                    outline: 'none',
                    textDecoration: 'none',
                    fontSize: '30px',
                    marginTop: '1px'
                }}><div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Пенне с лососем и икрой</div><div style={{fontSize: '20px'}}>(Сливочно-базиликовый соус и пармезан, 300гр.)</div></div><div>350р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Паста "Карбонара"</div><div style={{fontSize: '20px'}}>(Спагетти с беконом и яйцом в сливочном соусе, 300гр.)</div></div><div>290р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Паста "Болоньезе"</div><div style={{fontSize: '20px'}}>(Спагетти с соусом болоньезе, мясным фаршем, ароматными травами и томатным соусом, 300гр.)</div></div><div>290р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Паста "Овощной шедевр"</div><div style={{fontSize: '20px'}}>(Спагетти, соус с овощной соломкой из лука, паприки, помидора, сельдерея, моркови, 300гр.)</div></div><div>200р</div></div>
                </div>)}
                <button onClick={() => setTrigger12((state) => !state)} style={{
                    display: 'inline-block',
                    background: 'transparent',
                    width: '100%',
                    fontFamily: 'Amatic SC',
                    padding: ' 2px',
                    color: '#fff',
                    border: '3px solid #fff',
                    borderRadius: '25px',
                    textAlign: 'center',
                    outline: 'none',
                    textDecoration: 'none',
                    fontSize: '30px',
                    marginTop: '1px'
                }} class="ghost-button-rounded-corners">Гарниры</button>
                {trigger12 && (<div style={{
                    display: 'inline-block',
                    background: 'transparent',
                    width: '100%',
                    fontFamily: 'Amatic SC',
                    padding: ' 2px',
                    color: '#fff',
                    border: '3px solid #fff',
                    borderRadius: '25px',
                  
                    outline: 'none',
                    textDecoration: 'none',
                    fontSize: '30px',
                    marginTop: '1px'
                }}><div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Картофель фри</div><div style={{fontSize: '20px'}}>(150гр.)</div></div><div>120р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Картофель отварной</div><div style={{fontSize: '20px'}}>(150гр.)</div></div><div>60р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Картофель жареный с грибами</div><div style={{fontSize: '20px'}}>(С грибами, 150гр.)</div></div><div>120р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Картофель "Дюшес"</div><div style={{fontSize: '20px'}}>(С чесноком, 200гр.)</div></div><div>120р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Капуста цветная</div><div style={{fontSize: '20px'}}>(Отварная или жареная во фритюре, 150гр.)</div></div><div>120р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Рис "Ризотто"</div><div style={{fontSize: '20px'}}>(150гр.)</div></div><div>80р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Фасоль стручковая жареная</div><div style={{fontSize: '20px'}}>(150гр.)</div></div><div>120р</div></div>
                </div>)}
                <button onClick={() => setTrigger13((state) => !state)} style={{
                    display: 'inline-block',
                    background: 'transparent',
                    width: '100%',
                    fontFamily: 'Amatic SC',
                    padding: ' 2px',
                    color: '#fff',
                    border: '3px solid #fff',
                    borderRadius: '25px',
                    textAlign: 'center',
                    outline: 'none',
                    textDecoration: 'none',
                    fontSize: '30px',
                    marginTop: '1px'
                }} class="ghost-button-rounded-corners">Десерты</button>
                {trigger13 && (<div style={{
                    display: 'inline-block',
                    background: 'transparent',
                    width: '100%',
                    fontFamily: 'Amatic SC',
                    padding: ' 2px',
                    color: '#fff',
                    border: '3px solid #fff',
                    borderRadius: '25px',
     
                    outline: 'none',
                    textDecoration: 'none',
                    fontSize: '30px',
                    marginTop: '1px'
                }}><div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Мороженое в ассортименте</div><div style={{fontSize: '20px'}}>(Спрашивайте у официанта о наличии, 100гр.)</div></div><div>160р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Топпинг на выбор</div><div style={{fontSize: '20px'}}>(Фрукты 40гр., орехи 10гр., сироп 20гр.)</div></div><div>40р</div></div>
                <div style={{ display: "flex", justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px'}}><div><div>Молочный коктейль</div><div style={{fontSize: '20px'}}>(Банановый, шоколадный, ванильный, клубничный, 300мл.)</div></div><div>160р</div></div>
                </div>)}
            </div>

        </>

    )
}