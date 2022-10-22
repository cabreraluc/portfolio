import styles from "../cssModules/MainPage.module.css"
import first_image from "../cssModules/process-4.gif"
import {BsChevronDown} from "react-icons/bs"
import pokemons from "../cssModules/pokmeons.gif"
import artket from "../cssModules/artket.gif"
import carrera from "../cssModules/imagen de carrera.png"
import { Link } from "react-router-dom"
import {SiSequelize} from "react-icons/si"
import {SiExpress} from "react-icons/si"
import {AiFillHtml5} from "react-icons/ai"
import {DiCss3} from "react-icons/di"
import {IoLogoJavascript} from "react-icons/io"
import {DiReact} from "react-icons/di"
import {SiRedux} from "react-icons/si"
import {SiPostgresql} from "react-icons/si"
import {FaNodeJs} from "react-icons/fa"
import {AiFillGithub} from "react-icons/ai"
import {DiScrum} from "react-icons/di"
import {DiTrello} from "react-icons/di"
import {AiFillLinkedin} from "react-icons/ai"
import swal from 'sweetalert';
import { useEffect } from "react"
import useObserver from "./useObsserver"
import CV from "./CV Cabrera Lucas.pdf"






export default function MainPage(){

 
    

    const [observer, setElements, entries] = useObserver({
      treshold: 1,
      rootMargin: "-70% -0% -0% -30%",
      root: null
    })

    useEffect(()=>{
      const arrows = []
      arrows.push(document.querySelector("#arrow1"))
      arrows.push(document.querySelector("#arrow2"))
      arrows.push(document.querySelector("#arrow3"))


      setElements(arrows)
    },[setElements])

    useEffect(function(){
      entries.forEach(entry =>{
        if(entry.isIntersecting){
          const arrow = entry.target;
          entry.target.className=styles.down_button
          console.log(arrow.id)
        }
        else{

         entry.target.className=styles.flechaNoObservada
        }
      })
    },[entries, observer])


    return(
        <div>
         <div className={styles.container}>
            <div className={styles.header}>
             <a className={styles.header_buttons} href="#seccion-2">Proyectos</a>
             <a className={styles.header_buttons}href="#seccion-3">Tecnologías y estudios</a>
             <a className={styles.header_buttons}href="#seccion-4">Contacto</a>
             <a download="CV Cabrera Lucas" href={CV} className={styles.header_downloadcv}>Descargar CV</a>
            </div>
          <div className={styles.first_section}>
            <div className={styles.first_section_content}>
           <div className={styles.first_section_presentacion}>
            <div className={styles.first_section_presentacion_box}>
                <h1>Lucas Patricio Cabrera</h1>
                 <body className={styles.first_section_presentacion_body}
                 style={{fontWeight:"700", fontSize:"1.2rem", marginBottom:"0.5rem"}}
                 >Desarrollador Fullstack</body>
                
                <body className={styles.first_section_presentacion_body}>Bienvenido a mi portfolio, aquí podrá ver un poco de lo que soy, mis proyectos y contacto</body>
                <br />
                <body className={styles.first_section_presentacion_body}
                 style={{fontWeight:"700", fontSize:"1.2rem", marginBottom:"0.5rem"}}
                 >Un poco de mi</body>
                <body className={styles.first_section_presentacion_body}>Mi nombre es Lucas Cabrera, soy un desarrollador fullstack con orientación a frontend, y estoy ansioso de formar parte de un equipo de trabajo en el cual pueda desarrollar nuevas habilidades y crecer profesionalmente, realmente me encanta la programación, me encanta la lógica, me encanta darle estilos a las cosas, soy muy comprometido con lo que hago y estoy en busca de nuevos desafíos</body>
            </div>        
           </div>
            
            </div>
            <div className={styles.down_button} id="arrow1">
                
            <a href="#seccion-2" className={styles.down_button_in}><BsChevronDown /></a>
            </div>
          </div>

          <div className={styles.second_section} id="seccion-2">
            <div className={styles.second_section_contain}>
                <h1 className={styles.second_section_title}>Mis proyectos</h1>
                <div className={styles.Projects_cards_container}>
                      <div className={styles.Projects_cards}>
                      <a href="https://front-pi-inky.vercel.app/" target="_blanck"
                      style={{textDecoration:"none",
                      color:"black"}}>
                        <h2 >The Pokedex</h2>
                         </a>
                         <a href="https://front-pi-inky.vercel.app/" target="_blanck">
                          <img src={pokemons} alt="" />
                         </a>
                          <div>
                              <a href="https://front-pi-inky.vercel.app/" target="_blanck" style={{textDecoration:"none", color:"black"}}>
                          
                          </a>
                          <body>
                          Pokedex, desarrollado individualmente, me encargué tanto del frontend como el backend y la base de datos. Cuenta con filtros, búsquedas por nombre, por id, creación de tu propio Pokémon y de mi parte también le agregué la opción de poder eliminar y una papelera de reciclaje.
                              Realizado como proyecto individual en el bootcamp Henry.
                          </body>
                          <h3><AiFillHtml5/> <DiCss3/>  <IoLogoJavascript/>  <DiReact/>  <SiRedux/>  <SiExpress/>  <SiPostgresql/>  <FaNodeJs/>  <SiSequelize/></h3>
  
                          </div>
                      </div>
                    <div className={styles.Projects_cards}>
                    <a href="https://front-pi-inky.vercel.app/" target="_blanck"
                    style={{textDecoration:"none",
                    color:"black"}}>
                    <h2 >Artket</h2>
                        
                       </a>
                       <a href="https://artket.vercel.app/" target="_blanck">
                        <img src={artket} alt="" />
                       </a>
                        <div>
                        <a href="https://artket.vercel.app/" target="_blanck" style={{textDecoration:"none", color:"black"}}>
                        
                        </a>
                        <body>
                        e-commerce de obras de arte, desarrollado en grupo.
                            Realice los filtros, la lógica de sesión de usuario, edición de datos del usuario, registro, logeo, correos electrónicos, alertas, órdenes de compra, varios formularios, y parte del Css.
                            Realizado como proyecto grupal en el bootcamp Henry.
                        </body>
                       
                        <h3><AiFillHtml5/> <DiCss3/>  <IoLogoJavascript/>  <DiReact/>  <SiRedux/></h3>
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.down_button} id="arrow2">
            <a href="#seccion-3" className={styles.down_button_in}><BsChevronDown /></a>
            </div>
          </div>

          <div className={styles.thirt_section} id="seccion-3">
            <div className={styles.thirt_section_img_content}>

            <img src={carrera} className={styles.imagen_tercera_pag}/>
            </div>
            <div className={styles.title_and_technologies_container}>
               
                <div className={styles.technologies_container}>
                
                <div className={styles.technologies}>
                <h2>HTML</h2><h2 className={styles.technologies_icon}><AiFillHtml5/></h2>
                </div>
                <div className={styles.technologies}>
                <h2>CSS</h2><h2 className={styles.technologies_icon}><DiCss3/></h2>
                </div>
                <div className={styles.technologies}>
                <h2>JavaScript</h2><h2 className={styles.technologies_icon}><IoLogoJavascript/></h2>
                </div>
                <div className={styles.technologies}>
                <h2>React</h2><h2 className={styles.technologies_icon}><DiReact/></h2>
                </div>
                <div className={styles.technologies}>
                <h2>Redux</h2><h2 className={styles.technologies_icon}><SiRedux/></h2>
                </div>
                <div className={styles.technologies}>
                <h2>Node</h2><h2 className={styles.technologies_icon}><FaNodeJs/></h2>
                </div>
                <div className={styles.technologies}>
                <h2>Express</h2><h2 className={styles.technologies_icon}><SiExpress/></h2>
                </div>
                <div className={styles.technologies}>
                <h2>Sequelize</h2><h2 className={styles.technologies_icon}><SiSequelize/></h2>
                </div>
                <div className={styles.technologies}>
                <h2>PostgreSQL</h2><h2 className={styles.technologies_icon}><SiPostgresql/></h2>
                </div>
           
                
                <div className={styles.technologies}>
                <h2>Github</h2><h2 className={styles.technologies_icon}><AiFillGithub/></h2>
                </div>
                <div className={styles.technologies}>
                <h2>Scrum</h2><h2 className={styles.technologies_icon}><DiScrum/></h2>
                </div>
                <div className={styles.technologies}>
                <h2>Trello</h2><h2 className={styles.technologies_icon}><DiTrello/></h2>
                </div>
                
                </div>

            </div>
            <div className={styles.down_button} id="arrow3">
            <a href="#seccion-4" className={styles.down_button_in}><BsChevronDown /></a>
            </div>
          </div>

          <div className={styles.fourth_section} id="seccion-4">

            <div className={styles.form_container}>
                <h2>Contacto</h2>
                <div>
                <form action="https://formsubmit.co/cabreralucaspatricio@gmail.com"
                method="POST">
                    <div className={styles.contact_item}>
                     <label for="name">Nombre</label>
                     <input type="text" name="name"/>
                    </div>
                    <div className={styles.contact_item}>
                     <label for="email">Email</label>
                     <input type="email" name="email"/>
                    </div >
                    <div className={styles.contact_item}>
                     <label for="subject">Asunto</label>
                     <input type="text" name="subject"/>
                    </div>
                    <div className={styles.contact_item}>
                     <label for="comments">Mensaje</label>
                     <textarea name="comments" cols="15" rows="5"></textarea>
                    </div>
                    <input type="submit" value="Enviar"
                    className={styles.input_send}
                    />

                    <input type="hidden" name="_next" value="https://cabreraluc-info.vercel.app"></input>
                    <input type="hidden" name="_captcha" value="false"></input>
                </form>
                </div>
                <div className={styles.contact_items}>
                    <a href="https://www.linkedin.com/in/lucas-cabrera-0b596224b/"
                    style={{color:"white" }}
                    target="_blanck"
                    ><h1><AiFillLinkedin/></h1></a>
                    <a href="https://github.com/cabreraluc"
                      style={{color:"white" }}
                      target="_blanck"
                    >
                    <h1><AiFillGithub/></h1>
                    </a>
                 
                   
                </div>
                <h5 style={{margin:"1rem"}}>Email: cabreralucaspatricio@gmail.com</h5>
                    <h5 style={{margin:"1rem"}}>Telefono: +54 9 11 64380322</h5>
            </div>

          </div>
         </div>
        </div>
    )
} 