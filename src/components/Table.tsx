import Client from '../core/Client'
import { EditIcon, TrashIcon } from './Icons';

interface TableProps {
    clients: Client[];
    selectedClient?: (client: Client) => void
    deletedClient?: (client: Client) => void
}

export default function Table(props: TableProps) {

    const showActions = props.selectedClient || props.deletedClient;
    
    function renderHeader() {
        return (
            <tr>
            <th className='text-left p-4'>Código</th>
            <th className='text-left p-4'>Nome</th>
            <th className='text-left p-4'>Idade</th>
            {showActions ? <th className='p-4'>Ações</th> : false}
        </tr>
        );
    }

    function renderData() {
        return props.clients?.map((client: Client, i: number) => {
            return (
                <tr key={client.getId()} className={`${i % 2 === 0 ? 'bg-purple-100' : 'bg-purple-200' }`}>
                    <td className='text-left px-4 py-2'>{client.getId()}</td>
                    <td className='text-left px-4 py-2'>{client.getName()}</td>
                    <td className='text-left px-4 py-2'>{client.getAge()}</td>
                    {showActions ? renderActions(client) : false}
                </tr>
            );
        });
    }

    function renderActions(client: Client) {
        return (
            <td className='flex justify-center'>
                {props.selectedClient ? (
                    <button onClick={() => props.selectedClient?.(client)} className='flex justify-center items-center rounded-full hover:bg-purple-50 p-2 m-1 text-green-600'>{EditIcon}</button>
                ) : false}

                {props.deletedClient ? (
                    <button onClick={() => props.deletedClient?.(client)} className='flex justify-center items-center rounded-full hover:bg-purple-50 p-2 m-1 text-red-500'>{TrashIcon}</button>
                ) : false}
            </td>
        );
    }

    return (
        <table className='w-full rounded-xl overflow-hidden'>
            <thead className='bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100'>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    );
}