import React from "react";
import styles from './element.module.css'

function Element({name, classification, designation, average_height, average_lifespan, eye_colors, hair_colors, language}){
    return(
        <div className={styles.species}>
            <h1>name: {name}</h1>
            <h1>classification: {classification}</h1>
            <h1>designation: {designation}</h1>
            <h1>average height: {average_height}</h1>
            <h1>average lifespan: {average_lifespan}</h1>
            <h1>eye colors: {eye_colors}</h1>
            <h1>hair colors: {hair_colors}</h1>
            <h1>language: {language}</h1>
        </div>
    )
}
export default Element