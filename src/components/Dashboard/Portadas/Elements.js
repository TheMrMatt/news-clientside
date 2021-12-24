import styled from 'styled-components'
import { FaFilter, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const Container = styled.div`
    width: 80%;
    
    display: flex;
    align-items: center;
    justify-content: center;    
    flex-direction: column;
    margin-left: 20%;
`

export const Wrapper = styled.div`
    Width: 90%;
    

    display: flex;
        
    flex-direction: column;
    
    border-radius: 10px;
    border: 1px solid #DFE0EB;
    background: #FFF;
`

export const Header = styled.div`
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: space-between;    
    flex-direction: row;

    padding: 0px 30px 0px 30px;

    
`

export const Titulo = styled.div`
    font-weight: bold;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: 0.4px;

    /* grayscale / black */

    color: #252733;
`

export const Filtrar = styled(FaFilter)`
    width: 25px;
    height: 25px;
    cursor: pointer;
    
    
`

export const PubliContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;    
    flex-direction: column;
`

export const Categorias = styled.div`
    width: 100%;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: flex-start;    
    flex-direction: row;
    
    padding: 0px 30px 0px 30px;
    
    border-bottom: 1px solid #DFE0EB;
`

export const Categoria = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    margin-right: 200px;
`

export const Wrap = styled.div`
    width: 100%;

    margin-bottom: 70px;
    
`

export const Table = styled.table`
    width: 100%;
    margin-bottom: 70px;
    
   
`

export const TableHead = styled.thead`

    border: 1px solid blue;
`

export const TableFoot = styled.tfoot`

`

export const TableBody = styled.tbody`

`

export const TableR = styled.tr`

    height: 75px;
    border-bottom: 1px solid blue;
`

export const TableH = styled.th`

    width: 150px !important;
   
`

export const TableD = styled.td`

`

export const Line = styled.div`
    border-bottom: 1px solid  #DFE0EB;
`

export const ButtonWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
`

export const CategoriaWrapp = styled.div`
   
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    height: 100%;
`

export const Cat = styled.div`
    margin-bottom: 5px;
`

export const SubCat = styled.div`
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
/* identical to box height, or 133% */

letter-spacing: 0.1px;

/* grayscale / gray light */

color: #C5C7CD;
`

export const DeleteIcon = styled(MdDelete)`
    width: 25px;
    height: 25px;
`

export const EditarIcon = styled(FaEdit)`
width: 25px;
height: 25px;
`

export const ButtonsWrap = styled.div`
    
    
    display: flex;
    align-items: center;
    justify-content:center;
`

export const BWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-around;
    flex-direction: row;
    width:150px;
`