import { Tab } from '../constants';


export const getTab = () => {
  const queryParams = (new URL(document.location.href)).searchParams;
  return queryParams.get('tab') ?? Tab.Overview;
};


const enum Rating {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

const enum RatePoints {
  Bad = 0,
  LowNormal = 3,
  LowGood = 5,
  HighGood = 8,
  Awesome = 10,
}

function getTextRating(rate?: number) {
  let rating = '';
  if (rate) {
    switch (true) {
      case (rate > RatePoints.Bad && rate < RatePoints.LowNormal):
        rating = Rating.Bad;
        break;
      case (rate >= RatePoints.LowNormal && rate < RatePoints.LowGood):
        rating = Rating.Normal;
        break;
      case (rate >= RatePoints.LowGood && rate < RatePoints.HighGood):
        rating = Rating.Good;
        break;
      case (rate >= RatePoints.HighGood && rate < RatePoints.Awesome):
        rating = Rating.VeryGood;
        break;
      case (rate === RatePoints.Awesome):
        rating = Rating.Awesome;
        break;
    }
  }
  return rating;
}

export default getTextRating;


