import ContainerMeusPed from "./ContainerMeusPed";
import NavMeusPed from "./NavMeusPed";

export default function MeusPedidos() {
    return (
        <div className="meusprodutos">
            <NavMeusPed />
            <div>
                <ContainerMeusPed />
            </div>
        </div>
    )
}