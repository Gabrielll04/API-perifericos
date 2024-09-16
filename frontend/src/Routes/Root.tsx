import React from "react";
import CardButton from "../Components/CardButton";

export default function Root() {
    return (
        <div className="flex flex-col items-center gap-2">
            <p className="text-6xl font-extrabold mb-10">Bem vindo!</p>
            <p className="font-bold text-zinc-500">Escolha a ação desejada</p>
            <CardButton 
                to="cadastroUsuario"
                title="Cadastro"
                description="Crie uma nova conta no serviço"
                icon="rocket"
            />
            <CardButton 
                to="cadastroUsuario"
                title="Login"
                description="Logar em sua conta "
                icon="account"
            />
        </div>
    )
}