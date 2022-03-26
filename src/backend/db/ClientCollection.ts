import { firestore } from "../config";

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
        fromFirestore(snapshot: firestore.QueryDocumentSnapshot, options: firestore.SnapshotOptions): Client {
            const data = snapshot.data(options);
            return new Client(data.name, data.age, snapshot.id);
        }
    }

    async save(client: Client): Promise<Client> {
        if (client?.id) { // salvar
            await this.colletion().doc(client.id).set(client);
            return client;

        } else { // criar novo
            const docRef = await this.colletion().add(client);
            const doc    = await docRef.get();

            return doc.data();
        }
    }

    async delete(client: Client): Promise<void> {
        return await this.colletion().doc(client.id).delete();
    }

    async getAll(): Promise<Client[]> {
        const query = this.colletion().get();
        return query.docs().map((doc: any) => doc.data());
    }

    private colletion() {
        return firestore().colletion('clients').withConverter(this.converter);
    }

}