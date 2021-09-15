import React from 'react';
import button from './button.png';
import Typing from 'react-typing-animation';

const Content = () => {
    return (
        <div className="content" >
            <div className="desc">
                <img
                    style={{
                        marginBottom :'10px'
                    }}
                    src={button} />
                <Typing cursorClassName="text-white" speed={20}>
                <p style={{
                    color : '#B2B1B9'
                }} className="text-comment"># hy! salam kenal, aku <span className="text-blue">Ragil Manggalaning Yudhanto</span>, seorang Software Engineer.</p>
                <Typing.Delay ms={1000} />
                <p className="text-white">blog <span className="text-red">=</span> <a href="#" className="text-blue">“blog.ragilyudhanto.com”</a></p>
                <Typing.Delay ms={800} />
                <p className="text-white">portfolio <span className="text-red">=</span> <a href="#" className="text-blue">“dev.ragilyudhanto.com”</a></p>
                <Typing.Delay ms={800} />
                <p className="text-white">experiments <span className="text-red">=</span> <a href="#" className="text-blue">“lab.ragilyudhanto.com”</a>
                <Typing.Cursor /> 
                </p>
                <span className="text-dark">.</span>
                </Typing>
            </div>
        </div>
    )
}

export default Content