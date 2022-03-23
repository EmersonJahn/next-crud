import type { NextPage } from 'next'

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

  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white'>

      <Layout title='Cadastro Simples'>
        <Table clients={clients}></Table>
      </Layout>

    </div>
  )
}

export default Home
