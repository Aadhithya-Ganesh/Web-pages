import classes from './App.module.css';
import Icon from './components/Icon';
import Container from './components/Container';
import { useState } from 'react';

const App = () => {
  const [icon, setIcon] = useState("moon");

  const iconHandler = () => {
    if(icon == "sun"){
      setIcon("moon");
    }
    else{
      setIcon("sun");
    }
  };

  let colorScheme = icon == 'sun' ? classes.colorDark : classes.colorLight;

  return (<>
    <div className={ `${classes.main} ${colorScheme}`}>
      <div className = { `${icon == "sun" ? classes.bgDark : classes.bgLight}`}>
        <div className = {classes.header}>
          <h1 className = {classes.todo}>T O D O</h1>
          <Icon icon = {icon} iconHandler = {iconHandler}></Icon>
        </div>
        <Container state = {icon}></Container>
      </div>
    </div>
  </>);
}

export default App
