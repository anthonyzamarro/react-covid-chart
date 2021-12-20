import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

const Cards = ({ data: { deaths, confirmed, lastUpdate, recovered } }) => {
    const deathsObj = { ...deaths, title: 'Deaths', id: 1, style: styles.deaths };
    const confirmedObj = { ...confirmed, title: 'Infected', id: 2, style: styles.infected };
    const recoveredObj = { ...recovered, title: 'Recovered', id: 3, style: styles.recovered };
    return (
        <div className="styles container">
            <Grid container spacing={3} justifyContent="center">
                {<>
                    {
                        [deathsObj, confirmedObj, recoveredObj].map(value => {
                            return (
                                <Grid key={value.id} item component={Card} xs={12} md={3} className={cx(styles.card, `${value.style}`)}>
                                    <CardContent>
                                        <Typography color="textSecondary" gutterBottom>{value.title}</Typography>
                                        <Typography variant="h5">
                                            <CountUp start={0} end={value.value} duration={2.5} separator=',' />
                                        </Typography>
                                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                                        <Typography variant="body2">Number of {
                                            value.title === 'Deaths'
                                                ? 'deaths caused by'
                                                : value.title === 'Infected'
                                                    ? 'active cases of'
                                                    : value.title === 'Recovered'
                                                        ? 'recoveries from'
                                                        : null
                                        }  COVID-19</Typography>
                                    </CardContent>
                                </Grid>
                            )
                        })
                    }
                </>
                }
            </Grid>
        </div>
    )
}

export default Cards;