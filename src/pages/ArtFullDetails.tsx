import { useParams } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import ChartOne from '../components/Charts/ChartOne';
import ChartTwo from '../components/Charts/ChartTwo';
import ChartThree from '../components/Charts/ChartThree';

const ArtFullDetails = ({ arts }) => {
  const { artId } = useParams();
  const parsedArtId = parseInt(artId);
  const art = arts.find((e) => e.id === parsedArtId);
  console.log(art);
  if (!art) {
    return <div>Superintendent not found</div>;
  }

  return (
    <DefaultLayout>
      <div className="container mx-auto p-4">
        <h1
          style={{ fontSize: '1.5em', fontWeight: 'bold' }}
          className="my-4 text-center"
        >
          {art.title}
          <br />
        </h1>
        <div className="flex flex-wrap">
          <div className="w-full rounded-sm md:w-8/12 lg:w-8/12 xl:w-8/12 md:pr-4 mb-4">
            <img
              style={{ borderRadius: '20px' }}
              className="w-full h-auto"
              src={art.urlToImage}
              alt={art.title}
            />
          </div>
          <div className="w-full md:w-4/12 lg:w-4/12 xl:w-4/12">
            <h3
              style={{ fontSize: '1.3em', fontWeight: 'bold' }}
              className="my-3"
            >
              Superintendent Description
            </h3>
            <p style={{ fontSize: '1em', fontStyle: 'italic' }}>
              {art.description}
            </p>
            <br />
            <h1 style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
              {' '}
              Total Cases : {art.cases}
            </h1> <br />
            <h1 style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
              {' '}
              Cases Solved : {art.casesSolved}
            </h1>
            <br />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ArtFullDetails;
