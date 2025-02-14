import { useState } from "react"



type SidebarProps = {
    addBlankSlide: () => void
}

export default function Sidebar({addBlankSlide} : SidebarProps) {
    const [isExpanded, setIsExpanded] = useState(true)

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded)
        
    }

    return (
        <>
            {isExpanded ? (
                <div className="border-black border-end border-5 bg-transparent p-5 d-flex flex-column vh-100 vw-10">
                <div className="vw-20">
                    <form>
                        <input
                            className="w-100 border border-black border-5 p-2 bg-light bg-opacity-25 font-weight-bold mb-2" // Added mb-2 for spacing
                            type="text"
                            id="inputID"
                            placeholder="Coming Soon"
                        />
                        <input
                            className="w-100 border border-black border-5 p-2 bg-light bg-opacity-25 font-weight-bold mb-2"
                            type="text"
                            id="inputID"
                            placeholder="Coming Soon"
                        />
                        <input
                            className="w-100 border border-black border-5 p-2 bg-light bg-opacity-25 font-weight-bold mb-2"
                            type="text"
                            id="inputID"
                            placeholder="Coming Soon"
                        />
                    
                        <button className="btn btn-primary border border-black border-5 w-100" onClick={addBlankSlide}>
                            Enter
                        </button>
                    </form>
                </div>
                <h1 className="mt-3">Please excuse our dust</h1> {/* Added mt-3 for margin top */}
            </div>
            )   : null}
            <button className="btn btn-primary p-2 border-3 border-black" onClick={handleButtonClick}>{isExpanded ? "<" : ">"}</button>
        </>
    )
    
}
