import React from "react";
import style from './Botao.module.scss'

type PropsB = React.PropsWithChildren<{}>;
class Botao extends React.Component <PropsB>{
    render() {
        return (
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;