import { UserRegisterDTO, UserLoginDTO } from '../../Domain/DTO/UserDTO';
import { knex } from '../Database/ConfigDataBase';

export async function Register(user: UserRegisterDTO){

    try{

        knex.initialize();

        const IdUsuario = await knex("Usuario").insert(user).returning('IdUsuario');
        console.log(IdUsuario);
        return {
            valid: true,
            IdUsuario: IdUsuario[0]
        };
    }   
    catch(err)
    {
        console.log(err)
        throw new Error("Ocorreu um erro ao cadastrar o usuário!" + err);
    }
    finally
    {
        knex.destroy();
    }

}


export async function ValidEmail(email: string){

    try{

        knex.initialize();

        const hasUser = await knex('Usuario').where({
            Email: email
        }).select('IdUsuario');

        if(hasUser.length >= 1)
            return false;
        else
            return true;
    }
    catch(err){

    }
    finally{

        knex.destroy();
    }   
}

export async function ValidCPF(CPF: string){

    try{

        knex.initialize();

        const hasUser = await knex('Usuario').where({
            CPF: CPF
        }).select('IdUsuario');

        if(hasUser.length >= 1)
            return false;
        else
            return true;
    }
    catch(err){

    }
    finally{

        knex.destroy();
    }   
}

export async function Login(user: UserLoginDTO){

    try{

        knex.initialize();

        const result = await knex('Usuario').where({
            Email : user.Email,
            Senha : user.Senha
        });

        console.log(result);

        return result;

    }
    catch(err){

    }
    finally{
        
        knex.destroy();
    }
}