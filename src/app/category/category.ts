import { FormGroup } from "@angular/forms";

export class Category {
    id!: number;
    name!: string;
}


export function categoryToGroupForm(category: Category, formCategory: FormGroup): FormGroup {
    formCategory.controls['id'].setValue(category.id);
    formCategory.controls['id'].disable();
    formCategory.controls['name'].setValue(category.name);
    return formCategory;
}

export function categoryFromGroupForm(formCategory: FormGroup): Category{
    let category = new Category();
    category.id = formCategory.controls['id'].value;
    category.name = formCategory.controls['name'].value!;
    return category;
}


export let categoryResponseMessages = {
    "sucess": "Sucesso ao Cadastrar o categoryo",
    "updateSucess": "Sucesso ao atualziar o categoryo" 
}