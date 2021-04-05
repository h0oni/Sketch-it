import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(4),
    // background: 'linear-gradient(#f5af19,#f12711)',
  },
  root: {
    flexGrow: 1,
  },
}));

// background-image: linear-gradient( 109.9deg,  rgba(251,189,100,1) 1.8%, rgba(255,207,139,1) 95.4% );