import React from 'react'
import almacen2 from '../../assets/categoria/almacen2.jpg'
import almacenSueltos from '../../assets/categoria/almacenSueltos.jpg'
import cereales from '../../assets/categoria/cereales.jpg'
import condimentosYSales from '../../assets/categoria/condimentosYSales.png'
import cosmeticaNatural from '../../assets/categoria/cosmeticaNatural.jpg'
import frutosSecos from '../../assets/categoria/frutosSecos.jpg'
import legumbresYHarinas from '../../assets/categoria/legumbresYHarinas.jpg'
import mielesYEndulzantes from '../../assets/categoria/mielesYEndulzantes.jpg'
import panesYGalletas from '../../assets/categoria/panesYGalletas.jpg'
import semillas from '../../assets/categoria/semillas.jpg'
import sinTacc from '../../assets/categoria/sinTacc.jpg'
import suplementosYProbioticos from '../../assets/categoria/suplementosYProbioticos.jpg'
import yuyitosEInfusiones from '../../assets/categoria/yuyitosEInfusiones.jpg'
import heladera from '../../assets/categoria/heladera.jpg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCategory } from '../../redux/features/categorySlice'


const Category = () => {
    const dispatch = useDispatch()
    
  return (
    <div>
      <div className='category-container'>
           <Link to='/category/almacen2'  id='almacen2'><div onClick={()=>dispatch(setCategory('almacen2'))}className='category-item'>
                <img src={almacen2} alt='almacen 2' className='category-img'/>
                <h3 className='category-title'>Almacen 2</h3>
            </div></Link>
            <Link to='/category/almacenSueltos'  id='almacenSueltos'><div onClick={()=>dispatch(setCategory('almacenSueltos'))}className='category-item'>
                <img src={almacenSueltos} alt='almacenSueltos' className='category-img'/>
                <h3 className='category-title'>Almacen Sueltos</h3>
            </div> </Link>
            <Link to='/category/cereales' id='cereales'><div onClick={()=>dispatch(setCategory('cereales'))} className='category-item' >
                <img src={cereales} alt='cereales' className='category-img'/>
                <h3 className='category-title'>Cereales</h3>
            </div> </Link>
            <Link to='/category/consimentosYSales'  id='condimentosYSales'><div onClick={()=>dispatch(setCategory('condimentosYSales'))}className='category-item'>
                <img src={condimentosYSales} alt='condimentosYSales' className='category-img'/>
                <h3 className='category-title'>Condimentos y Sales</h3>
            </div> </Link>
            <Link to='/category/cosmeticaNatural' id='cosmeticaNatural'><div onClick={()=>dispatch(setCategory('cosmeticaNatural'))}className='category-item' >
                <img src={cosmeticaNatural} alt='cosmeticaNatural' className='category-img'/>
                <h3 className='category-title'>Cosmetica Natural</h3>
            </div> </Link>
            <Link to='/categoru/frutosSecos' id='frutosSecos'><div onClick={()=>dispatch(setCategory('frutosSecos'))}className='category-item' >
                <img src={frutosSecos} alt='frutosSecos' className='category-img'/>
                <h3 className='category-title'>Frutos Secos</h3>
            </div></Link>
            <Link to='/category/heladera' id='heladera'><div onClick={()=>dispatch(setCategory('heladera'))}className='category-item' >
                <img src={heladera} alt='heladera' className='category-img'/>
                <h3 className='category-title'>Heladera</h3>
            </div> </Link>
            <Link to='/category/legumbresYHarinas' id='legumbresYHarinas'><div onClick={()=>dispatch(setCategory('legumbresYHarinas'))} className='category-item' >
                <img src={legumbresYHarinas} alt='legumbresYHarinas' className='category-img'/>
                <h3 className='category-title'>Legumbres y Harinas</h3>
            </div> </Link>
            <Link to='/category/mielesYEndulzantes' id='mielesYEndulzantes'><div onClick={()=>dispatch(setCategory('mielesYEndulzantes'))} className='category-item' >
                <img src={mielesYEndulzantes} alt='mielesYEndulzantes' className='category-img'/>
                <h3 className='category-title'>Mieles y Endulzantes</h3>
            </div></Link> 
            <Link to='/category/panesYGalletas' id='panesYGalletas'><div onClick={()=>dispatch(setCategory('panesYGalletas'))}className='category-item' >
                <img src={panesYGalletas} alt='panesYGalletas' className='category-img'/>
                <h3 className='category-title'>Panes y Galletas</h3>
            </div> </Link>
            <Link to='/category/semillas' id='semillas'><div onClick={()=>dispatch(setCategory('semillas'))}className='category-item' >
                <img src={semillas} alt='semillas' className='category-img'/>
                <h3 className='category-title'>Semillas</h3>
            </div> </Link>
            <Link to='/category/sinTacc' id='sinTacc'><div onClick={()=>dispatch(setCategory('sinTacc'))} className='category-item' >
                <img src={sinTacc} alt='sinTacc' className='category-img'/>
                <h3 className='category-title'>Sin Tacc</h3>
            </div> </Link>
            <Link to='/category/suplementosYProbioticos' id='suplementosYProbioticos'><div onClick={()=>dispatch(setCategory('suplementosYProbioticos'))}className='category-item' >
                <img src={suplementosYProbioticos} alt='suplementosYProbioticos' className='category-img'/>
                <h3 className='category-title'>Suplementos y Probioticos</h3>
            </div> </Link>
           
            <Link to='/category/yuyitosEInfusiones'  id='yuyitosEInfusiones'><div className='category-item'>
                <img src={yuyitosEInfusiones} alt='yuyitosEInfusiones' className='category-img'/>
                <h3 className='category-title'>Yuyitos e Infusiones</h3>
            </div> 
            </Link>
        </div>
    </div>
  )
}

export default Category