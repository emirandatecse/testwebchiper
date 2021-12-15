export const BASE_API = "https://bikeindex.org:443/api/v3";

export const FORMAT_DATE  = (date_input) =>{

    const date_output = new Date(date_input);
    const date_stolen = date_output.getDate()+ "/"+(date_output.getMonth()+1)+
                        "/" + date_output.getFullYear()+ " "+date_output.getHours()+
                        ":" + date_output.getMinutes()

    return date_stolen;
}