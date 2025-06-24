export function MouseClicker () {
    function handleButtonClick (event) {
        console.log (event.currentTarget.name)
    }

    function handleImageClick (event) {
        event.stopPropagation(); // Impedisce la propagazione dell'evento al bottone
        console.log (event.currentTarget.name)
    }

    return (
        <div>
            <button name = "one" onClick={handleButtonClick}>
                Click me 
            </button>
            <button name = "two" onClick={handleButtonClick}>
                <img width={24} height={24} onClick = {handleImageClick}/>
                Click me 
            </button>
        </div>
    )
}

export default MouseClicker