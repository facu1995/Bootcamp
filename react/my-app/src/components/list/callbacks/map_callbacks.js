//styles
import "../style/list.css"



/**
 * 
 * This callback is iterable data.
 * @callback cbPair
 * @returns {component} //=><li>odd (or)  <li>even
 */
export function cbPair(unit, i) {
    if (i % 2 === 0) {
        return (
            <li class="odd" key={i}>odd: {unit}</li>
        )
    }
    else {
        return (
            <li class="even" key={i}>even: {unit}</li>)
    }
}

/**
 * 
 * This callback is iterable data.
 * @callback cbList 
 * @returns {component} //=><li>
 */
export const cbList = ((unit, i) =>
    <li key={i}>odd: {unit}</li>
)
/* 
export cbList,cbPair */