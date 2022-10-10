// Alicia
import "bootstrap/dist/css/bootstrap.css";
import Comprar from "../../comprar";
import BotaoDesc from "../../desconto";

export default function Card(props){

return(
    <div className="row"> 
    <div style={
        {backgroundColor: "#D8E3F2",
        width:"405px",
        height:"251px",
        paddingTop:"10px",
        borderRadius:"8px"}} 
        className="col-md-2" > 
        <h3> {props.nome} </h3>
        <div className="col col-lg-2">
        <BotaoDesc desconto="30% Off"/>        
        <Comprar/>
        </div>
    </div>
    </div>
)

}