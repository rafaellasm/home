import { useState } from 'react';
import Styles from '../css/Carrossel_Responsivo.module.css';
import Sociais from '../images/cards_conteudo/redes_sociais.png';
import Educacao from '../images/cards_conteudo/educação_apoio.png'
import Jogos from '../images/cards_conteudo/jogos_terapia.png'
import Suporte from '../images/cards_conteudo/suporte.png'
import LocaisInclusivos from '../images/cards_conteudo/locais_inclusivos.png'
import Loja from '../images/cards_conteudo/loja_brinquedos.png'
import SetaDireita from '../images/icons/seta_carrossel_direita.png'
import SetaEsquerda from '../images/icons/seta_carrossel_esquerda.png'

const cards = [
    { title: 'Redes sociais', content: 'Apoie outras mães.', image: Sociais },
    { title: 'Educação e apoio', content: 'Educadores qualificados.', image: Educacao },
    { title: 'Jogos e terapia', content: 'Aprender, crescer e se divertir.', image: Jogos },
    { title: 'Suporte', content: 'Aprendizado guiado.', image: Suporte },
    { title: 'Locais inclusivos', content: 'Explore espaços acessíveis', image: LocaisInclusivos },
    { title: 'Loja de brinquedos', content: 'Produtos educativos.', image: Loja },
];

const cardClasses = [Styles.card1, Styles.card2, Styles.card3, Styles.card4, Styles.card5, Styles.card6];

const CarouselManual = () => {
    const [index, setIndex] = useState(0);
    const visibleCards = 1;

    const next = () => {
        if (index < cards.length - visibleCards) {
            setIndex(index + 1);
        }
    };

    const prev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return (
        <section className={Styles.carrossel_responsivo}>
            <div className={Styles.descubra_container}>
                <div className={Styles.descubra}>
                    <h2><span className={Styles.mudar_cor}>Descubra</span> o que a <br /> Acenis oferece</h2>
                </div>
                <div className={Styles.paragrafo_explicacao}>
                    <p>Bem-vindo à Acenis, onde apoiamos seu <br /> crescimento com cuidado e inovação.</p>
                </div>
                <div className={Styles.carrossel_mobile}>
                    <p>Deslize para o lado e descubra mais!</p>
                </div>
            </div>
            <div className={Styles.card_container}>

                <button className={Styles.seta} onClick={prev} disabled={index === 0}>
                    <img src={SetaEsquerda} alt="Seta esquerda" />
                </button>
                <div style={{ display: 'flex', overflow: 'hidden' }}>
                    {cards.slice(index, index + visibleCards).map((card, i) => (
                        <div
                            key={i}
                            className={`${Styles.card} ${cardClasses[index + i]}`}
                        >
                            {card.image && <img src={card.image} alt={card.title} />}
                            <h3>{card.title}</h3>
                            <p>{card.content}</p>
                            <button type='button'>Saiba mais</button>
                        </div>
                    ))}
                </div>
                <button className={Styles.seta} onClick={next} disabled={index >= cards.length - visibleCards}>
                    <img src={SetaDireita} alt="Seta direita" />
                </button>
            </div>
        </section>
    );
};

export default CarouselManual;
