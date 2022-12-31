import { FormGroup } from "@angular/forms";

export class Client {
    id?: number;
    name?: string;
    pass?: string;
    alocation?: string;
    birthDate?: Date | null;
}

export function clientToGroupForm(client: Client, formClient: FormGroup): FormGroup {
    formClient.controls['id'].setValue(client.id);
    formClient.controls['id'].disable();
    formClient.controls['name'].setValue(client.name);
    formClient.controls['pass'].setValue(client.pass);
    formClient.controls['alocation'].setValue(client.alocation);
    formClient.controls['birthDate'].setValue(client.birthDate);
    return formClient;
}

export function clientFromGroupForm(formClient: FormGroup): Client{
    let client = new Client();
    client.id = formClient.controls['id'].value;
    client.name = formClient.controls['name'].value!;
    client.pass = formClient.controls['pass'].value!;
    client.alocation = formClient.controls['alocation'].value!;
    client.birthDate = formClient.controls['birthDate'].value!;
    return client;
}

export let alocations: string[] = [
    "EMPRESA1",
    "EMPRESA2",
];

export let clientResponseMessages = {
    "sucess": "Sucesso ao Cadastrar o cliente",
    "updateSucess": "Sucesso ao atualziar o cliente" 
}