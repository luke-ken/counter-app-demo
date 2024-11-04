import {NavLink} from "react-router-dom";


interface NavLinkCustomProps {
    path: string,
    name: string
}

export const NavLinkCustom = ({path, name}: NavLinkCustomProps) => {
    const defaultStyle = "hover:underline"

    const addStyleWhenLinkActive = (isActive: boolean) => {
        return isActive ? "font-bold" : ""
    }

    return(
        <NavLink to={path} className={({isActive}) => `${defaultStyle} ${addStyleWhenLinkActive(isActive)}`}>{name}</NavLink>
    )
}
