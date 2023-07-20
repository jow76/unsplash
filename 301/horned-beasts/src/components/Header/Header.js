import "./Header.css"

export default function Header({handleBeasts}){
    return(
        <header>
            <h1>Horned Beasts</h1>
            <form className="select-container">
                <label className="horns-label" htmlFor="horns-input">Filter beasts by number of horns</label>
                <select name="selectedHorns" id="horns-input" onChange={handleBeasts}>
                    <option value="">All</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="100">100</option>
                </select>
            </form>
        </header>
    )
}