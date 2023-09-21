import React from "react";

import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import BuscaCepForm from "../components/BuscaCepForm";
import Cadastro from "../components/cadastro";
import Listagem from "../components/Listagem";
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="BuscaCep"
                    element={<BuscaCepForm />} />
                <Route path="cadastro"
                    element={<Cadastro />} />
                <Route path="Listagem"
                    element={<Listagem />} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRouter