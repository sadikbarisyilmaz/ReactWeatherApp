import Main from '../main/main';
import useCity from '../../cityContext'
import React from 'react';
import Nav from '../nav/nav';

function Page() {

    const { currentCity } = useCity()

    return (
        <div>
            <div
                className={`page ${currentCity === "İzmir" ? "izmir" : currentCity === "Kastamonu" ? "kastamonu" : currentCity === "Eskişehir" ? "eskişehir" : ""}`}
            >
                <div id='content' className='opacity'>
                    <Nav />
                    <Main />
                </div>
            </div>
        </div>
    )
}

export default Page