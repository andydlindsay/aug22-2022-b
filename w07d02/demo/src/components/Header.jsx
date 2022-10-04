import {Fragment} from 'react';

const Header = (props) => {
  console.log(props);

  return (
    <Fragment>
      <h2>{ props.message }</h2>
      { props.children }
    </Fragment>
  );
};

export default Header;
