import Client from '../core/Client'

interface TableProps {
    clients: Client[];
}

export default function Table(props: TableProps) {
    
    function renderHeader() {
        return (
            <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Idade</th>
        </tr>
        );
    }

    function renderData() {
        return props.clients?.map((client: Client, i: number) => {
            return (
                <tr key={client.getId()}>
                    <td>{client.getId()}</td>
                    <td>{client.getName()}</td>
                    <td>{client.getAge()}</td>
                </tr>
            );
        });
    }

    return (
        <table>
            <thead>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    );
}