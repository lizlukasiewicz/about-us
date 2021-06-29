// const people = [
//     {
//         id: 1,
//         name: 'Liz',
//     },
//     {
//         id: 2,
//         name: 'Erik',
//     },
//     {
//         id: 3,
//         name: 'Benji',
//     },
// ]
const Person = (props) => {
    // console.log(people)
    const renderedPeople = props.people.map(person => {
        return(
            <li>
                {person.name}
            </li>
        )
    })

    return(
        <div>
            <ul>
                {renderedPeople}
            </ul>
        </div>
    )
}

export default Person