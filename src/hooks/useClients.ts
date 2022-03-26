import { useEffect, useState } from "react";

import ClientCollection from "../backend/db/ClientCollection";
import Client from "../core/Client";
import ClientRepository from "../core/ClientRepository";
import useTableOrForm from "./useTableOrForm";

export default function useClients() {

    const clientRepository: ClientRepository = new ClientCollection();

    const { tableVisible, formVisible, showTable, showForm } = useTableOrForm();

    const [client, setClient]   = useState<Client>(Client.emptyClient());
    const [clients, setClients] = useState<Client[]>([]);
  
    useEffect(() => getAllClients(), []);
    
    function getAllClients() {
      clientRepository.getAll().then((clients: Client[]) => {
        setClients(clients);
        showTable();
      }); 
    }
  
    function selectClient(client: Client) {
      setClient(client);
      showForm();
    }
    
    async function deleteClient(client: Client) {
      await clientRepository.delete(client);
      getAllClients();
    }
  
    async function saveClient(client: Client) {
      await clientRepository.save(client);
      getAllClients();
    }
  
    function newClient() {
        console.log('new Client');
        
      setClient(Client.emptyClient());
      showForm();
    }
    
    return { client, clients, tableVisible, formVisible, newClient, saveClient, deleteClient, selectClient, getAllClients, showTable, showForm }
    
}