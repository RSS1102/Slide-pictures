import { useEffect, useState } from "react"
import "./index.css"
export const SildeBox = (props: { img: string, text: string | number, id: string }) => {
    const screenHeight = window.screen.height
    const handleScroll = () => {
        const targetNode = document.getElementById(props.id) as HTMLElement;
        const targetNodeHight = targetNode.getBoundingClientRect().y
        if (targetNodeHight > 0) {
            const dom = document.getElementById(props.id) as HTMLImageElement
            if (dom) {
                dom.style.transform = `translate(0,-${targetNodeHight / screenHeight * dom.height}px)`
            }
        }
    }
    useEffect(() => {
        handleScroll()
        window.addEventListener("scroll", handleScroll, true)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className="demo-box" >
            <img src={props.img} id={props.id} />
            <div className="demo-text">{props.text}</div>
        </div>
    )
}
