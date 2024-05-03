import { useState } from "react"
import { Button } from "react-bootstrap"

export default function SearchBar(props) {
const [innerSearch, setInnerSearch]= useState("")
return(<div>
    <input
    name="search"
    id="search"
    type="search"
    placeholder="Search Project Names"
    value={innerSearch}
    onChange={(event) => { 
        setInnerSearch(event.target.value)
        props.onSearchChange(event.target.value)
     }}
    />
    
</div>)
}