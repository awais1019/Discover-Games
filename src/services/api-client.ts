import axios from "axios";


export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"1349971f5a2d40d1b9c1854c455bafb6"
    }
})