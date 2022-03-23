import Client from '../core/Client'

interface TableProps {
    clients: Client[];
}

export default function Table(props: TableProps) {
    
    function renderHeader() {
        return (
            <tr>
            <th className='text-left p-4'>Código</th>
            <th className='text-left p-4'>Nome</th>
            <th className='text-left p-4'>Idade</th>
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
                </tr>
            );
        });
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