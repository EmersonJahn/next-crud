import type { NextPage } from 'next'
import Button from '../components/Button'
import Form from '../components/Form'

import Layout from '../components/Layout'
import Table from '../components/Table'
import useClients from '../hooks/useClients'

const Home: NextPage = () => {

  const { client, clients, tableVisible, newClient, saveClient, deleteClient, selectClient, getAllClients, showTable, showForm }= useClients();

  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white'>

      <Layout title='Cadastro Simples'>

        {tableVisible
          ?
            <>
              <div className='flex justify-end'>
                <Button className='mb-4' color='green' onClick={newClient}>Novo cliente</Button>
              </div>

              <Table clients={clients}
                selectClient={selectClient}
                deleteClient={deleteClient}
              />
            </>
          :
            <Form client={client} canceled={showTable} changedClient={saveClient}/>
        }

      </Layout>

    </div>
  )
}

export default Home
