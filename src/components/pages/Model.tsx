import React from 'react';
import {useParams} from "react-router-dom";
import {adidasArr} from "./Adidas";
import * as http2 from "http2";

export const Model = () => {

    const params = useParams()
    const currentModel = adidasArr.find(el => el.id === Number(params.id))
    return (
        <div style={{textAlign: 'center'}}>
            {currentModel
                ? <>
                    <h2>{currentModel.model}</h2>
                    <h4>{currentModel.collection}</h4>
                    <h3>{currentModel.price}</h3>
                    <img src={currentModel.picture}
                         alt={currentModel.model}
                         style={{width: '600px', height: 'auto', marginRight: '10px'}}
                    />
                </>
                : <h2>Такой страницы не существует</h2>
            }
        </div>
        /*        <div>
                    <h2>{adidasArr.find(el => el.id === Number(params.id))?.model}</h2>
                    <h4>{adidasArr.find(el => el.id === Number(params.id))?.collection}</h4>
                    <h3>{adidasArr.find(el => el.id === Number(params.id))?.price}</h3>
                    {/!*<h2>{adidasArr.filter(el=>el.id === Number(params.id)[0].model)}</h2>*!/}
                    <img src={adidasArr.find(el => el.id === Number(params.id))?.picture}
                         alt={adidasArr.find(el => el.id === Number(params.id))?.model}
                         style={{width: '600px', height: 'auto', marginRight: '10px'}}
                    />
                </div>*/
    );
};







































