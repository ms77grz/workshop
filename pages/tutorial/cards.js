import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import MediaCard from '../../components/Cards/MediaCard';
import Layout from '../../components/Layout/Layout';

const mediaCards = [
  {
    image: 'https://picsum.photos/300/200',
    title: 'Some Random Image',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui similique, possimus, inventore porro minus commodi nam officiis voluptas suscipit`,
  },
  {
    image: 'https://picsum.photos/300/200',
    title: 'Some Random Image',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui similique, possimus, inventore porro minus commodi nam officiis voluptas suscipit`,
  },
  {
    image: 'https://picsum.photos/300/200',
    title: 'Some Random Image',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui similique, possimus, inventore porro minus commodi nam officiis voluptas suscipit`,
  },
  {
    image: 'https://picsum.photos/300/200',
    title: 'Some Random Image',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui similique, possimus, inventore porro minus commodi nam officiis voluptas suscipit`,
  },
];

export default function TestCards() {
  return (
    <Layout>
      <Box p={5} pt={15} minHeight='100vh'>
        <Grid container spacing={2}>
          {mediaCards.map((card, index) => (
            <Grid item key={index}>
              <MediaCard {...card} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}
