import React,{useState,ChangeEvent, FormEvent, useEffect} from 'react';
import styles from "../app.module.css"
const BuscaCepForm = () => {

    const[cep,setCep] = useState<string>("");
    const[localidade,setLocalidade]= useState<string>("");
    const[uf, setUf]= useState<string>("");
    const[erro,setErro] = useState<string>("");
    const findCep = (e: FormEvent) => {
        e.preventDefault();
        fetch('https://viacep.com.br/ws/' + cep + '/json/',
        {
            method: 'GET'
        }).then(response => response.json())
        .then(
            data => {
            setLocalidade(data.localidade);
            setCep(data.cep)
            setUf(data.uf);
            setErro("")
            }
        ).catch(error =>{
            setErro("PESQUISA INVALIDA",);
          });
    
        
    }
    const submitForm = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "cep"){
            setCep(e.target.value);
        }
    }
return(
<div>
    <form onSubmit={findCep}>
        <label htmlFor="cep">cep</label>
        <input type="text" name="cep" id="CEP" 
        onChange={submitForm}/>
        <input type="submit" value="pesquisar" />
    </form>
   <p>cidade:{localidade}</p>
   <p>estado:{uf}</p>
   <p>CEP:{cep}</p>
   <p className={styles.error}>:{erro}</p>
</div>
);
}
export default BuscaCepForm;