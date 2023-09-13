import React from "react";

import { useEffect, useMemo, useState } from 'react';
import { Icon, IconButton, LinearProgress, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { IListagemPessoa, PessoasService, } from '../../shared/services/api/pessoas/PessoasService';
import { FerramentasDaListagem } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { useDebounce } from '../../shared/hooks';
import { Environment } from '../../shared/environment';

import { Link } from "react-router-dom"

import "./GerenciarUsuarios.css";

import hamburguer from "../../img/Icon_hamburguer.png";

export const GerenciarUsuarios: React.FC = () => {

  useEffect(() => {
    const menuToggle = document.querySelector(".hamburguer-button");
  
    if (menuToggle) {
      const buttonMenu = menuToggle.querySelector("button");
      const menuHamb = menuToggle.querySelector(".hamburguer-items");
      let show = true;
  
      if (buttonMenu && menuHamb) {
        buttonMenu.addEventListener("click", () => {
          menuHamb.classList.toggle("on", show);
          show = !show;
        });
      }
    }
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce();
  const navigate = useNavigate();

  const [rows, setRows] = useState<IListagemPessoa[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);


  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  const pagina = useMemo(() => {
    return Number(searchParams.get('pagina') || '1');
  }, [searchParams]);


  useEffect(() => {
    setIsLoading(true);

    debounce(() => {
      PessoasService.getAll(pagina, busca)
        .then((result) => {
          setIsLoading(false);

          if (result instanceof Error) {
            alert(result.message);
          } else {
            console.log(result);

            setTotalCount(result.totalCount);
            setRows(result.data);
          }
        });
    });
  }, [busca, pagina]);

  const handleDelete = (id: number) => {
    if (confirm('Realmente deseja apagar?')) {
      PessoasService.deleteById(id)
        .then(result => {
          if (result instanceof Error) {
            alert(result.message);
          } else {
            setRows(oldRows => [
              ...oldRows.filter(oldRow => oldRow.id !== id),
            ]);
            alert('Registro apagado com sucesso!');
          }
        });
    }
  };

	return (
    <><div className="header-container">
      <header className="header">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <div className="header-icon">
          <svg width="40" height="44" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.5695 0.0981598C17.3379 0.396536 16.3412 1.41863 16.0809 2.65658C15.9349 3.34856 15.9412 21.0861 16.0809 21.7019C16.3856 22.9843 17.4013 23.9937 18.6329 24.2476C19.1154 24.3492 20.055 24.2921 20.4295 24.146C21.5469 23.6953 22.3595 22.7748 22.5817 21.7209C22.6832 21.2448 22.6832 3.06288 22.5817 2.58675C22.461 1.99634 22.1563 1.46307 21.6675 0.980593C20.8232 0.142599 19.7058 -0.181171 18.5695 0.0981598Z" fill="#AF0000" />
            <path d="M23.2927 13.3029C23.2863 19.5371 23.2673 22.5653 23.2165 22.8256C23.0007 24.0318 22.0357 25.0666 20.7851 25.4221C20.2454 25.5808 19.2741 25.5237 18.7345 25.3078C18.0806 25.0412 17.5093 24.5714 17.0966 23.962C16.8808 23.6445 16.9316 23.854 17.2172 24.4381C17.6045 25.2507 18.5441 25.9681 19.4582 26.1522C19.9407 26.2537 20.8803 26.1966 21.2548 26.0506C22.3912 25.5935 23.2102 24.6603 23.4133 23.581C23.5149 23.0287 23.4768 4.53573 23.3689 4.31354C23.3117 4.19291 23.2927 6.19267 23.2927 13.3029Z" fill="#AF0000" />
            <path d="M27.4446 6.33233C26.4859 6.64975 25.8257 7.29729 25.5083 8.21782C25.3432 8.7003 25.3369 9.49385 25.4956 9.97634C25.7495 10.7382 26.1177 11.1825 26.943 11.7412C28.4857 12.776 29.8379 14.179 30.8029 15.7344C31.1647 16.3248 31.4949 16.9469 31.4441 16.9469C31.4314 16.9469 31.2727 16.7311 31.0949 16.4708C30.2061 15.1567 28.9237 13.8806 27.5461 12.9538C27.0192 12.5919 26.6574 12.2618 26.4352 11.9317C26.2447 11.646 26.3145 11.9761 26.5367 12.3887C26.797 12.8776 27.1271 13.214 27.762 13.6394C29.311 14.6805 30.6823 16.0962 31.6218 17.6326C31.9964 18.242 32.1932 18.6864 32.3329 19.2387C33.0629 22.0574 32.8915 24.946 31.825 27.6123C30.2696 31.5229 26.8605 34.5511 22.7785 35.6431C21.4897 35.9859 20.7597 36.0748 19.2551 36.0811C17.6553 36.0811 16.8363 35.9732 15.4905 35.5796C13.2748 34.9384 11.5036 33.9036 9.83399 32.2784C8.71032 31.1865 7.84693 29.9739 7.1613 28.5328C6.29156 26.7172 5.89161 24.9333 5.89161 22.9145C5.89161 20.9147 6.31696 19.0038 7.15495 17.2326C8.22149 14.9916 9.78955 13.1696 11.8718 11.7476C12.6146 11.246 12.9892 10.7826 13.2304 10.0906C13.3891 9.61448 13.3891 8.71935 13.2241 8.2813C12.5829 6.56723 10.7101 5.80541 9.12932 6.59897C8.22784 7.05606 6.64073 8.33209 5.44722 9.55734C4.23467 10.808 3.38398 11.9317 2.52694 13.4235C0.558923 16.839 -0.336207 21.1052 0.114532 24.8825C0.311334 26.5077 0.590665 27.7774 1.03506 29.0724C1.33978 29.9485 2.29839 32.1832 2.83801 33.2624C4.14579 35.8907 6.06937 38.2078 8.39925 39.96C13.916 44.1119 21.2485 45.0197 27.6033 42.328C33.3423 39.8965 37.5195 34.9955 38.9543 29.009C39.4558 26.933 39.6018 24.7301 39.3796 22.6288C39.2844 21.7336 39.1193 20.6988 39.0622 20.6417C39.0114 20.5846 39.0241 20.7623 39.1384 21.4924C39.2907 22.5018 39.2907 25.2062 39.1384 26.2474C38.9035 27.7964 38.6876 28.7233 38.2623 29.9866C36.2372 35.9668 31.3869 40.5885 25.2544 42.3788C23.4323 42.912 21.8389 43.1342 19.8582 43.1342C18.4171 43.1342 17.6807 43.0707 16.4046 42.8486C11.0529 41.8899 6.37409 38.7411 3.49825 34.1512C3.14274 33.5862 2.57773 32.5641 2.62217 32.5641C2.62851 32.5641 2.88245 32.9259 3.18083 33.3703C6.03128 37.6301 10.3546 40.5504 15.319 41.5471C19.236 42.3407 23.1594 41.9534 26.778 40.4234C32.9804 37.7952 37.3799 32.234 38.421 25.676C38.7384 23.689 38.7194 21.2639 38.3702 19.3212C37.8116 16.2169 36.3514 13.0744 34.339 10.6302C33.2788 9.34784 31.8377 8.00832 30.5236 7.10049C29.4888 6.38312 29.0634 6.21806 28.2699 6.22441C27.9842 6.23076 27.6223 6.2752 27.4446 6.33233Z" fill="#AF0000" />
            <path d="M13.9732 10.6747C13.8906 11.2524 13.7002 11.7475 13.4145 12.1348C13.186 12.4459 13.0907 12.5221 11.9226 13.3791C9.08486 15.455 7.20572 18.5785 6.65341 22.1526C6.482 23.2382 6.482 24.9967 6.64706 26.076C6.71689 26.5077 6.78673 26.8822 6.81212 26.9013C6.83751 26.9267 6.84386 26.7997 6.81847 26.6283C6.79942 26.4505 6.76133 25.8538 6.73594 25.2951C6.65341 23.1049 7.06606 21.0734 7.98023 19.1371C9.04677 16.8961 10.6148 15.0741 12.6971 13.6521C13.7637 12.9347 14.1763 12.1919 14.17 11.0429C14.1636 10.2303 14.062 10.0398 13.9732 10.6747Z" fill="#AF0000" />
            <path d="M38.9797 20.4385C38.9797 20.5274 38.9924 20.5592 39.0114 20.5147C39.0241 20.4766 39.0241 20.4005 39.0114 20.356C38.9924 20.3179 38.9797 20.3497 38.9797 20.4385Z" fill="#AF0000" />
            <path d="M6.85657 27.1044C6.85657 27.1933 6.86926 27.2251 6.88831 27.1806C6.90101 27.1425 6.90101 27.0663 6.88831 27.0219C6.86926 26.9838 6.85657 27.0156 6.85657 27.1044Z" fill="#AF0000" />
          </svg>
          <h2><span id="red-S">S</span>eCoT</h2>
        </div>
        <div className="header-menu">
          {/* <ul className="header-menu-list">
      <li id="inicio"><a href="#inicio">Início</a></li>
      <li id="programacao"><a href="#palestras">Programação</a></li>
      <li id="sobre"><a href="#quemSomos">Sobre</a></li>
      <li id="patrocinadores"><a href="#sectionPatrocinadores">Patrocinadores</a></li>
    </ul> */}
        </div>
        <div className="header-login">
          <a className="login-link"><Link to="/">Log In</Link></a>
          <a className="create-acc">CRIAR CONTA</a>
        </div>
        <div className="hamburguer-button">
          <button> <img src={hamburguer}></img> </button>
          <div className="hamburguer-items">
            <span><a href="#inicio">Início</a></span>
            <span><a href="#palestras">Programação</a></span>
            <span><a href="#quemSomos">Sobre</a></span>
            <span><a href="#sectionPatrocinadores">Patrocinadores</a></span>
            <span>Log in</span>
            <span>Criar Conta</span>
          </div>
        </div>
      </header>
    </div>
    <LayoutBaseDePagina
      titulo='Listagem de pessoas'
      barraDeFerramentas={
        <FerramentasDaListagem
          mostrarInputBusca
          textoDaBusca={busca}
          textoBotaoNovo='Nova'
          aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
          aoMudarTextoDeBusca={texto => setSearchParams({ busca: texto, pagina: '1' }, { replace: true })}
        />
      }
    >
      <TableContainer component={Paper} variant="outlined" sx={{ m: 1, width: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width={100}>Ações</TableCell>
              <TableCell>Nome completo</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell>
                  <IconButton size="small" onClick={() => handleDelete(row.id)}>
                    <Icon>delete</Icon>
                  </IconButton>
                  <IconButton size="small" onClick={() => navigate(`/pessoas/detalhe/${row.id}`)}>
                    <Icon>edit</Icon>
                  </IconButton>
                </TableCell>
                <TableCell>{row.nomeCompleto}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>

          {totalCount === 0 && !isLoading && (
            <caption>{Environment.LISTAGEM_VAZIA}</caption>
          )}

          <TableFooter>
            {isLoading && (
              <TableRow>
                <TableCell colSpan={3}>
                  <LinearProgress variant='indeterminate' />
                </TableCell>
              </TableRow>
            )}
            {(totalCount > 0 && totalCount > Environment.LIMITE_DE_LINHAS) && (
              <TableRow>
                <TableCell colSpan={3}>
                  <Pagination
                    page={pagina}
                    count={Math.ceil(totalCount / Environment.LIMITE_DE_LINHAS)}
                    onChange={(_, newPage) => setSearchParams({ busca, pagina: newPage.toString() }, { replace: true })}
                  />
                </TableCell>
              </TableRow>
            )}
          </TableFooter>
        </Table>
      </TableContainer>
    </LayoutBaseDePagina></>

	);
}