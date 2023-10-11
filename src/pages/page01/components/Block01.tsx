import results from './resultsObj'

interface ActiveSlide {
  a: any
}

export default function Block01({a}: ActiveSlide) {
  return (
    <div className="block01">
      {Object.values(results).map((resultItem) => (
        <div className='categories' key={resultItem.id} id={resultItem.id}>
          <img src={resultItem.img} alt={resultItem.id} />
          <p className='time' id={resultItem.id + 'ID'}>
            {a && typeof a === 'object' && a[resultItem.id] ? a[resultItem.id] : 'Not Avalible Data'}
          </p>
        </div>
      ))}
    </div>
  );
}




