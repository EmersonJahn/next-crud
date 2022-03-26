import { firestore, collection, deleteDoc, doc, addDoc, setDoc, getDocs } from "../config";

import Client from "../../core/Client";
import ClientRepository from "../../core/ClientRepository";

export default class ClientCollection implements ClientRepository {
    
    private converter = {
        toFirestore(client: Client) {
            return {
                name: client.name,
                age: client.age,
            }
        },
        fromFirestore(snapshot: firestore.QueryDocumentSnapshot, options?: firestore.SnapshotOptions): Client {
            const data = snapshot.data();
            return new Client(data.name, data.age, snapshot.id);
        }
    }

    async save(client: Client): Promise<Client> {
        if (client?.id) { // salvar
            // await this.clientColletion().doc(client.id).set(client);
            await setDoc(this.clientDoc(client), this.converter.toFirestore(client));
            return client;

        } else { // criar novo
            // const docRef = await this.clientColletion().add(client);
            // const doc    = await docRef.get();
            const docRef = await addDoc(this.clientColletion(), this.converter.toFirestore(client));
            const newClient = new Client(client.name, client.age, docRef.id);

            return newClient;
        }
    }

    async delete(client: Client): Promise<void> {
        // return await this.clientColletion().doc(client.id).delete();
        return await deleteDoc(this.clientDoc(client));
    }

    async getAll(): Promise<Client[]> {
        const query = await getDocs(this.clientColletion());
        return query.docs.map((doc: any) => this.converter.fromFirestore(doc));
    }

    private clientColletion() {
        return collection(firestore, 'clients');
    }

    private clientDoc(client: Client) {
        if (client.id) {
            return doc(firestore, 'clients', client.id);
        } else {
            return doc(firestore, 'clients');
        }
    }

}