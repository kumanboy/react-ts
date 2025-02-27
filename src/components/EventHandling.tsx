import * as React from "react";

const EventHandling = () => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e.target, "Button Clicked")
    }

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log(e.target, "Mouse Entered")
    }

    return (
        <div onMouseEnter={handleMouseEnter}>
            <h2>Mouse Handle Event</h2>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
export default EventHandling
