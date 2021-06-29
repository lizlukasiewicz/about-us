import { useState } from "react"
import Person from './Person'
import people from '../data/peopleData'

export default function People() {
    const [search,setSearch] = useState('')
    const [renderedPeople,setRenderedPeople] = useState(people)

    const handleSearch = (e) => {
        let newSearch = e.target.value
        setSearch(newSearch)
        if(newSearch){
            let foundPeople = people.map((person) => {
                return person.name.toLowerCase().includes(newSearch.toLowerCase())
            })
            setRenderedPeople(foundPeople)
        }
    }

    return (
        <div>
            <form>
                <label for="nameSearch">Search by name</label>
                <input type="text" id="nameSearch" value={search} onChange={handleSearch}></input>
            </form>
            <Person people={renderedPeople} />
        </div>
    )
}