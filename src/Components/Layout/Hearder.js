import React from 'react'
import classes from './Header.module.css'
import {Fragment} from 'react'
import MealsImg from '../../Assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header=()=> {
    return (
      <Fragment >
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton></HeaderCartButton>
        </header>
        <div >
            <img alt='Oups!'src={MealsImg} className={classes['main-image']}></img>
        </div>
      </Fragment>
    );
  }
  
export default Header;
  