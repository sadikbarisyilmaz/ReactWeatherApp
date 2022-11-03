import useCity from '../../cityContext'

function Nav() {

    const {setCurrentCity} = useCity()

    const handleChange = (event) => {
        setCurrentCity(event.target.value)
    }

    return (
        <div>
            <br /><br />
            <h1 className="display-4">Haftalık Hava Durumu</h1>
            <br /><br />
            <form>
                <select className='opacity' id="cities" onChange={handleChange}>
                    <option value="İzmir">İzmir</option>
                    <option value="Kastamonu">Kastamonu</option>
                    <option value="Eskişehir">Eskişehir</option>
                </select>
            </form>
        </div>
    )
}

export default Nav