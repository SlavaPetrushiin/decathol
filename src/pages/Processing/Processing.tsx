import React, { useState, useEffect } from 'react';
import MainPopup from '../../comonents/ui/modals/MainPopup/MainPopup';
import './Processing.scss';

export default function Processing() {
  const [activeItem, setActiveItem] = useState(null as any);
  const [isShowModal, setIsShowModal] = useState(false);
  const [textSearch, setTextSearch] = useState('');
  const [data, setData] = useState(DATA);

  useEffect(() => {
    if (activeItem)
      setIsShowModal(true);
  }, [activeItem])

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (textSearch.trim().length >= 1) {
      setData(DATA.filter(item => item.Item.toString().includes(textSearch)));
    }
  }

  const resetSearch = () => {
    setTextSearch('');
    setData(DATA);
  }

  const getPercent = (read: number, qty: number): number => {
    if (read > 0 && qty === 0) {
      return 100;
    } else if (read === 0 && qty === 0) {
      return 0;
    } else if (read === qty) {
      return 100;
    } else if (qty > read) {
      return Math.round((100 * read) / qty);
    } else if (qty < read) {
      return Math.round((100 * qty) / read);
    } else {
      return 0;
    }
  }

  const getColor = (percent: number): string => {
    if (percent === 0) {
      return '';
    }
    if (percent === 100) {
      return 'green';
    }
    if (percent > 100) {
      return 'blue';
    }
    if (percent > 50 && percent < 100) {
      return 'yellow';
    }
    if (percent <= 50) {
      return 'red';
    }

    return '';
  }

  return (
    <div className='process'>
      <div className="d1">
        <form onSubmit={handleSearch}>
          <input type="text" placeholder="Поиск..." value={textSearch} onChange={(e => setTextSearch(e.currentTarget.value))} />
          {textSearch.trim().length > 1 && <span className='reset' onClick={resetSearch} />}
          <button type="submit" >OK</button>
        </form>
      </div>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Read / expected Qty</th>
            <th>Model</th>
            <th>Family</th>
            <th>Size</th>
            <th>EAN</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => {
            let percent = getPercent(item.Read, item.Qty);
            let clsColor = getColor(percent);
            return (<tr key={item.Item} onClick={() => setActiveItem(item)}>
              <td>{item.Item}</td>
              <td>
                {item.Read}/{item.Qty}
                <span
                  className={`percent percent__${clsColor}`}
                  style={{ width: ` ${percent}%` }}
                />
              </td>
              <td>{item.Model}</td>
              <td>{item.Family}</td>
              <td>{item.Size}</td>
              <td>{item.EAN}</td>
            </tr>
            )
          })}
        </tbody>
      </table>

      {activeItem && <MainPopup
        isOpened={isShowModal}
        onClose={() => setIsShowModal(false)}
        title={activeItem.Family}
      >
        <div className='item-description'>
          <div className="description-left">
            <div className="des-icon"></div>
          </div>
          <div className="description-right">
            <div className="desc-text"><span>Item:</span> {activeItem.Item}</div>
            <div className="desc-text"><span>Model:</span> {activeItem.Model}</div>
            <div className="desc-text"><span>Family:</span> {activeItem.Family}</div>
            <div className="desc-text"><span>Size:</span> {activeItem.Size}</div>
          </div>
        </div>
      </MainPopup>}

    </div>
  )
}


const DATA = [
  {
    Item: 231567,
    Read: 20,
    Qty: 20,
    Model: 'Chain 2',
    Family: 'Bow Arrows',
    Size: 'No Siz',
    EAN: 132314564249
  },
  {
    Item: 2456534,
    Read: 20,
    Qty: 49,
    Model: 'Ru whey',
    Family: 'Nutrition and Body Care',
    Size: 'No Siz',
    EAN: 5433453445645
  },
  {
    Item: 4434567,
    Read: 45,
    Qty: 45,
    Model: 'Chain 2',
    Family: 'Sales',
    Size: 'No Siz',
    EAN: 75644567567
  },
  {
    Item: 234598,
    Read: 65,
    Qty: 77,
    Model: 'italy',
    Family: 'Plus Size Clothing',
    Size: 'No Siz',
    EAN: 4545645745567
  },
  {
    Item: 234567,
    Read: 50,
    Qty: 50,
    Model: 'France 2',
    Family: 'Bags and Accessories',
    Size: 'No Siz',
    EAN: 973456868678
  },
  {
    Item: 94567,
    Read: 16,
    Qty: 24,
    Model: 'Chain 264',
    Family: 'Swimwear and Beachwear',
    Size: '31 ru',
    EAN: 324231841249
  },
  {
    Item: 8744567,
    Read: 4,
    Qty: 5,
    Model: 'Chain 2',
    Family: 'Bow Arrows',
    Size: 'No Siz',
    EAN: 1323453841249
  },
  {
    Item: 68447567,
    Read: 76,
    Qty: 85,
    Model: 'Chain 2',
    Family: 'Bow Arrows',
    Size: '1 - ru',
    EAN: 1323345841249
  },
  {
    Item: 845457567,
    Read: 11,
    Qty: 11,
    Model: 'bow discovery',
    Family: 'Bodybuilding',
    Size: 'no size',
    EAN: 1323547561249
  },
  {
    Item: 237567,
    Read: 66,
    Qty: 67,
    Model: 'Chain 2',
    Family: 'Bow Arrows',
    Size: 'No Siz',
    EAN: 132314564249
  },
  {
    Item: 564734,
    Read: 77,
    Qty: 78,
    Model: 'Ru whey',
    Family: 'Nutrition and Body Care',
    Size: 'No Siz',
    EAN: 5433453445645
  },
  {
    Item: 775677,
    Read: 0,
    Qty: 0,
    Model: 'Chain 2',
    Family: 'Sales',
    Size: 'No Siz',
    EAN: 75644567567
  },
  {
    Item: 23434734,
    Read: 45,
    Qty: 55,
    Model: 'Ru whey',
    Family: 'Nutrition and Body Care',
    Size: 'No Siz',
    EAN: 54567563445645
  },
  {
    Item: 2348567,
    Read: 54,
    Qty: 75,
    Model: 'Chain 2',
    Family: 'Sales',
    Size: 'No Siz',
    EAN: 75644567567
  },
  {
    Item: 46457598,
    Read: 10,
    Qty: 20,
    Model: 'italy',
    Family: 'Plus Size Clothing',
    Size: '',
    EAN: 4545645645567
  },
  {
    Item: 2349767,
    Read: 10,
    Qty: 65,
    Model: 'France 2',
    Family: 'Bags and Accessories',
    Size: 'No Siz',
    EAN: 973456868678
  },
  {
    Item: 345567,
    Read: 10,
    Qty: 34,
    Model: 'Chain 264',
    Family: 'Swimwear and Beachwear',
    Size: '31 ru',
    EAN: 324231841249
  },
  {
    Item: 874567,
    Read: 55,
    Qty: 56,
    Model: 'Chain 2',
    Family: 'Bow Arrows',
    Size: 'No Siz',
    EAN: 1345453841249
  },
  {
    Item: 683457,
    Read: 0,
    Qty: 0,
    Model: 'Chain 2',
    Family: 'Bow Arrows',
    Size: '1 - ru',
    EAN: 1323455841249
  },
  {
    Item: 85675567,
    Read: 10,
    Qty: 11,
    Model: 'bow discovery',
    Family: 'Bodybuilding',
    Size: 'no size',
    EAN: 15673124561249
  }
]