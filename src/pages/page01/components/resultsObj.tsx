import KMS from '../imgs/КМС.png'
import MS from '../imgs/МС.png'
import MSMK from '../imgs/МСМК.png'
import VS3 from '../imgs/3 взр.png'
import VS2 from '../imgs/2 взр.png'
import VS1 from '../imgs/1 взр.png'
import UN3 from '../imgs/3 юн.png'
import UN2 from '../imgs/2 юн.png'
import UN1 from '../imgs/1 юн.png'

interface ResultItem {
    id: string;
    img: string;
    time: string;
  }
  
  interface Results {
    [key: string]: ResultItem;
  }
  
  const results: Results = {
    MSMK: {
        id: 'MSMK',
        img: MSMK,
        time: ''
    },
    MS: {
        id: 'MS',
        img: MS,
        time: ''
    },
    KMS: {
      id: 'KMS',
      img: KMS,
      time: ''
    },
    VS1: {
        id: 'VS1',
        img: VS1,
        time: ''
    },
    VS2: {
        id: 'VS2',
        img: VS2,
        time: ''
    },
    VS3: {
        id: 'VS3',
        img: VS3,
        time: ''
    },
    UN1: {
        id: 'UN1',
        img: UN1,
        time: ''
    },
    UN2: {
        id: 'UN2',
        img: UN2,
        time: ''
    },
    UN3: {
        id: 'UN3',
        img: UN3,
        time: ''
    }
  };
  
  export default results;
  