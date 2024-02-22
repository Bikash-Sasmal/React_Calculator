import style from './Display.module.css';

const Display = ({dispVal}) => {
     return <input className={style.display} type='text' value={dispVal} readOnly></input>
}

export default Display;