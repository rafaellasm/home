import Styles from '../css/Card_Celular.module.css'

function Card_Celular() {

    return (
        <div className={Styles.container_porcentagem}>
            <h2 className={Styles.titulo_acenis}>Sobre a Acenis</h2>
            <p className={Styles.paragrafo_acenis}>A Acenis é uma plataforma voltada para mães de crianças com sindrome de down.</p>
            <div className={Styles.cards}>
                <div className={Styles.container_verde}>
                    <h2>97%</h2>
                    <p>Sorrisos diários</p>
                </div>
                <div className={Styles.container_rosa}>
                    <h2>10K</h2>
                    <p>Famílias felizes</p>
                </div>
                <div className={Styles.container_azul}>
                    <h2>4.9K+</h2>
                    <p>Clientes</p>
                </div>
            </div>
            <div className={Styles.saiba_mais}>
                <button type='button'>Saiba mais</button>
            </div>
        </div>
    )
}

export default Card_Celular;