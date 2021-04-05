import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
  },
  media: {
    height: 90,
    paddingTop: '90%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  motion: {
    opacity: '0.8',
  },
  description: {
    border: '2px solid tomato',
    padding: '2px',
    paddingInline: '10px',
    borderRadius: '15px',
    display: 'flex',
    flexWrap: 'wrap',
  },
  priceBox: {
    display: 'flex',
    alignItems: 'center'
  },
  priceText: {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid gray',
    borderRadius: '5px',
    alignItems: 'center',
    paddingInline: '8px',
  },
  mid_div: {
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
}));