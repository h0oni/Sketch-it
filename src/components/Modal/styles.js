import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
  },
  card : {
    position: 'center',
    marginTop:'100px',
    margin:'5px',
    height: '80vh', //80vh
    maxWidth: '480px', //480px
    backgroundColor: 'transparent',
    objectFit: 'fill'
  },
  image: {
    // position: 'center',
    boxshadow: '3px 5px 7px rgba(0,0,0,0.5)',
    border: '3px solid white',
    height: '100%',
    paddingTop: '0%',
    width: 'auto'

  },
  close: {
    cursor:'pointer', 
    float:'right', 
    marginTop: '4px', 
    marginRight: '17px',
    width: '20px',
  },
}));