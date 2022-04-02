import { useEffect, useState } from "react"

const useTshirt = () =>{
    const [tShairts,setTshairts] = useState([]);
    useEffect( () =>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/tshirt-mania-module-54/main/public/tshirts.json')
        .then(res =>res.json())
        .then(data =>setTshairts(data))
    },[])
    return [tShairts,setTshairts];
}
export default useTshirt;