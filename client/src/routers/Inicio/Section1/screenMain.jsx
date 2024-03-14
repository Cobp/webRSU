import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Buttons from './buttonsmain.jsx'
import Img from '../../../assets/images/img2.webp'
import './screenMainModule.css'

const screenMain = () => {
    const preguntas = [
        { pregunta1: '¿Sabes lo que son las Horas RSU?' },
        { pregunta1: '¿Aun no sabes que proyecto elegir para iniciar?' },
        { pregunta1: '¿Todavia tienes Horas Pendientes y no sabes como terminarlas?' },
        { pregunta1: <Link to={'/FAQ'} >Preguntas Frecuentes</Link>}
    ]
    return (
        <section id='Main'>
            <div className='content_main'>
                <motion.h1 className='titulo_principal'
                    initial={{ x: -180, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20
                    }}>Catálogo de Proyectos RSU
                </motion.h1>
                <div className='content_text'>
                    <ul className='primary_content'>
                    {preguntas.map((item, index) => (
                        <motion.li key={index}
                            initial={{ y: 180, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                delay: 0.2 * index,
                                type: "spring",
                                stiffness: 100,
                                damping: 20
                            }}>
                            {item.pregunta1}
                        </motion.li>
                    ))}
                    </ul>
                    <motion.p className='secondary_content'
                        initial={{ y: 180, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.6,
                            type: "spring",
                            stiffness: 100,
                            damping: 20
                        }}>¡Descubre, aprende y construye tu camino hacia el éxito profesional!
                    </motion.p>
                    <Buttons />
                </div>
            </div>
            <img src={Img} alt=""/>
        </section>
    )
}

export default screenMain
