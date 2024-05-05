import Styles from '../components/Styles.module.css'
import { FiChevronsRight } from "react-icons/fi";

const Introduce = ({id,title,order,dates,duties,company}) => {
  return (
        <div className={Styles.selfIntroduction}>
            <div className={Styles.backborn}>
                <h1>{title}</h1>
                <p className={Styles.name}>{company}</p>
                <p className={Styles.born}>{dates}</p>
            </div>
            <article>
                {duties.map(elm=>{
                    return(
                    <div className={Styles.textBox}>
                        <div className={Styles.iconBox}><FiChevronsRight className={Styles.icon}/></div>
                        <p className={Styles.explain}>{elm}</p>
                    </div>
                    )
                })}
            </article>
        </div>
  )
}

export default Introduce