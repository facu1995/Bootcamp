/**
 * 
 * This callback is iterable data.
 * @callback cbList 
 * @returns {component} //=><li>
 */
export const userList = ((unit, i) =>
    <div>
        <li class="red" key={i}>email: {unit.email}</li>
        <li class="green" key={i}>name: {unit.name}</li>
        <li class="blue" key={i}>pass: {unit.pass}</li>
        <p>=========================</p>
    </div>
)
