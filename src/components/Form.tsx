import { useState } from "react";

import Client from "../core/Client"
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    client: Client;

}

export default function Form(props: FormProps) {
    const clientId = props.client?.id;

    const [name, setName] = useState(props.client?.name ?? "");
    const [age, setAge]   = useState(props.client?.age ?? 0);

    return (
        <div>
            {clientId ? (
                <Input readOnly className="mb-5" text="Código" type="text" value={clientId} />
            ) : false}

            <Input className="mb-5" text="Nome" type="text" value={name} onChange={setName} />

            <Input text="Idade" type="number" value={age} onChange={setAge} />

            <div className="flex justify-end mt-7">
                <Button className="mr-2" color="blue">{clientId ? 'Salvar' : 'Cadastrar'}</Button>
                <Button color="red">Cancelar</Button>
            </div>
        </div>
    );
}