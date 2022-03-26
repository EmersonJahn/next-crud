import type { NextPage } from 'next'
import { useState } from 'react'
import Button from '../components/Button'
import Form from '../components/Form'

import Layout from '../components/Layout'
import Table from '../components/Table'
import Client from '../core/Client'

const Home: NextPage = () => {

  const clients = [
    new Client('João', 45, '1'),
    new Client('Maria', 42, '2'),
    new Client('Felipe', 19, '3'),
    new Client('Camila', 23, '4'),
  ]

  const [visible, setVisible] = useState<'table' | 'form'>('table');

  function selectedClient(client: Client) {
    console.log(client.name);
    
  }
  
  function deletedClient(client: Client) {
    console.log(client.age);
    
  }

  function saveClient(client: Client) {
    console.log('saveClient', client);

  }

  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white'>

      <Layout title='Cadastro Simples'>

        {visible == 'table'
          ?
            <>
              <div className='flex justify-end'>
                <Button className='mb-4' color='green' onClick={() => setVisible('form')}>Novo cliente</Button>
              </div>

              <Table clients={clients}
                selectedClient={selectedClient}
                deletedClient={deletedClient}
              />
            </>
          :
            <Form client={clients[0]} canceled={() => setVisible('table')} changedClient={saveClient}/>
        }

      </Layout>

    </div>
  )
}

export default Home
