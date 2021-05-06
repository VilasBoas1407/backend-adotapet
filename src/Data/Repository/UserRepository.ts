import LoginDTO from '../../Domain/DTO/Auth/LoginDTO';
import UserRegisterDTO from '../../Domain/DTO/User/UserRegisterDTO';
import { knex } from '../Database/ConfigDataBase';

export async function Register(user: UserRegisterDTO){

    try{

        const IdUsuario = await knex("Usuario").insert({
            Nome : user.Nome,
            CPF : user.CPF,
            Email : user.Email,
            Senha : user.Senha,
            Numero : user.Numero,
            Endereco : user.Endereco,
            Municipio : user.Municipio,
            CEP : user.CEP,
            UF : user.UF
        }).returning('IdUsuario');
        
        return {
            valid: true,
            IdUsuario: IdUsuario[0]
        };
    }   
    catch(err)
    {
        throw "Ocorreu um erro ao cadastrar o usuário!" + err;
    }
}

export async function ValidEmail(email: string){

    try{

        const hasUser = await knex('Usuario').where({
            Email: email
        }).select('IdUsuario');

        if(hasUser.length >= 1)
            return false;
        else
            return true;
    }
    catch(err){
        throw err;
    }
}

export async function ValidCPF(CPF: string){

    try{

        const hasUser = await knex('Usuario').where({
            CPF: CPF
        }).select('IdUsuario');

        if(hasUser.length >= 1)
            return false;
        else
            return true;
    }
    catch(err){
        throw err;
    }

}

export async function Login(user: LoginDTO){

    try{

        const result = await knex('Usuario').where({
            Email : user.Email,
            Senha : user.Senha
        });

        return result;

    }
    catch(err){
        throw err;
    }

}

export async function FindUserByEmail(email: string){

    try{
        const user = await knex('Usuario').column('IdUsuario', 'Nome', 'Email')
        .where({Email : email})
        .select();
    
        return user[0];
    }
    catch(err)
    {
        throw err;
    }

}