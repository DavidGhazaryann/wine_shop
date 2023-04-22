
import { useEffect, useState } from 'react';
import { CircularProgress, IconButton, Slide, TextField } from '@mui/material';
import { myContext } from '../../App';
import { useContext } from 'react';
import logo from '../../assets/img/logoo.png'
import Aos, { refresh } from 'aos'
import 'aos/dist/aos.css'
import '../../assets/icon/style.css'
import './style.css'
function Block() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const setItem = useContext(myContext)
  const item = useContext(myContext)
  let [z, setZ] = useState('boxs')
  let [y, setY] = useState('boxs')
  useEffect(() => {
    fetch(
      `https://api.sampleapis.com/wines/reds`
    )
      .then((res) => {
        if (res.status === 200) {
          error && setError(false)
          return res.json()
        }
        else {
          throw new Error('Error')
        }
      })
      .then((data) => {
        setData(data)
      })
      .finally(() => setLoading(false))
  }, [error])
  // let [box, setBox] = useState([

  //   {
  //     id: 1,
  //     name: `data[0].winery`,
  //     wine: 'data[0].wine',
  //     img: 'data[0].image'
  //   },
  //   {
  //     id: 2,
  //     name: 'data[0].winery',
  //     wine: 'data[0].wine',
  //     img: 'data[0].image'

  //   },
  //   {
  //     id: 2,
  //     name: 'data[0].winery',
  //     wine: 'data[0].wine'
  //   }
  // ])
  useEffect(() => {
    Aos.init()
  }, [])
  console.log(data)
  const [inp, setInp] = useState('')

  let handleSearch = (e) => {
    if (e.key === 'Enter') {
      setZ('boxs')
      setY('none')

    }
    else {
      setZ('none')
      setY('boxs')
    }
  }
  const [tiv, setTiv] = useState(1)
  const [tiv4, setTiv4] = useState(4)
  const [tiv5, setTiv5] = useState(5)
  const [tiv6, setTiv6] = useState(6)
  const [tiv7, setTiv7] = useState(7)
  const [tiv8, setTiv8] = useState(8)
  const [tiv9, setTiv9] = useState(9)
  const [tiv10, setTiv10] = useState(10)
  const [tiv11, setTiv11] = useState(11)
  const [tiv12, setTiv12] = useState(12)
  const [tiv13, setTiv13] = useState(13)
  const [tiv14, setTiv14] = useState(14)

  function Click() {
    setTiv(2)
  }
  function Click4(){
    setTiv4(5)

  }
  function Click5(){
    setTiv5(6)

  }
  function Click6(){
    setTiv6(7)

  }
  function Click7(){
    setTiv7(8)

  }
  function Click8(){
    setTiv8(9)

  }
  function Click9(){
    setTiv9(10)

  }
  function Click10(){
    setTiv10(11)

  }
  function Click11(){
    setTiv11(12)

  }
  function Click12(){
    setTiv12(13)

  }
  function Click13(){
    setTiv13(14)

  }
  function Click14(){
    setTiv14(15)

  }
  function ClickX() {
    setTiv(0)
    setTiv3(0)
    setTiv4(0)
    setTiv5(0)
    setTiv6(0)
    setTiv7(0)
    setTiv8(0)
    setTiv9(0)
    setTiv10(0)
    setTiv11(0)
    setTiv12(0)
    setTiv13(0)
    setTiv14(0)


  }
  const [tiv3, setTiv3] = useState(1)
  function Buy() {
    setTiv3(2)
    setTiv(0)
    setTiv4(0)
    setTiv5(0)
    setTiv6(0)
    setTiv7(0)
    setTiv8(0)
    setTiv9(0)
    setTiv10(0)
    setTiv11(0)
    setTiv12(0)
    setTiv13(0)
    setTiv14(0)
  }
  console.log(tiv3)
  let [tiv2, setTiv2] = useState(1)
  console.log(tiv2)
  console.log(inp)
  return (
    <div className='big'>


        {!loading ? (
          <>
                <div className='header'>
        <div className='imgg'>
          <div className='header_img' style={{ backgroundImage: `url(${logo})` }} ></div>

        </div>
        <div className='inp'>
          <TextField
            variant="filled"
            label='Search Winery'
            className="input"
            value={inp}
            onChange={(e) => setInp(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
        <div className='display i'>
          <div className='icon-bell-o i2 anim'></div>
          <div className='icon-cog i2'></div>
          <div className='icon-user-circle-o i2'></div>

        </div>

      </div>
      <div className="Block">

            {/* <div className='boxs'>
              <div className='img'>
                <div className='d' style={{ backgroundImage: `url(${data[2].image})` }}></div>
              </div>
              <h1 className='winery'>{data[2].winery}</h1>
              <h4 className='wine'>{data[2].wine}</h4>
              <h4 className='location'>{data[2].location}</h4>
            </div> */}

            <div className={inp.toLowerCase() == data[2].winery.toLowerCase() ? z : y}>

              <div className='img'>
                <div className='d' style={{ backgroundImage: `url(${data[2].image})` }}></div>
              </div>
              <h1 className='winery'>{data[2].winery}</h1>
              <h4 className='wine'>{data[2].wine}</h4>
              <h4 className='location'>{data[2].location}</h4>
              <div className='display'>
                <button className='btn-hover' onClick={Click}>Buy <div className='icon-cart'></div>
                </button>
                <div className='display starts'>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-half'></div>
                  <div className='icon-star-empty'></div>
                </div>
              </div>
            </div>

            {/* 1 */}

            <div className={tiv == 2 ? 'bigg' : 'none'}>
              <div className='yes'>
                <button className='clickx' onClick={ClickX}> <div className='icon-close'></div></button>
                <div className='inf'>
                  <div className='box1'>
                    <div className='inf_img'>
                      <div className='d' style={{ backgroundImage: `url(${data[2].image})` }}></div>
                    </div>

                  </div>

                  <div className='inf_info'>
                    <h1 className='winery static_winery'>{data[2].wine}</h1>
                    <p className='static_color'>Red - Rich and Intense</p>
                    <h4 className='location static_location'>{data[2].location}</h4>

                    <p className='static_wind'>Type  .......................................  grape wine</p>
                    <p className='static_wind'>Ageing ...................................	3 years</p>
                    <p className='static_wind'>Alcohol  .................................. 14.5%</p>
                    <p className='static_wind'>Volume  ...................................  0.75 L</p>
                    <div className='static_box'>
                      <p className='static_info'>Grape Varieties:</p>
                      <p className='static_info2'>Alicante Bouschet, Aragonêz, Trincadeira, Cabernet Sauvignon.</p>
                    </div>
                    <div className='static_box'>
                      <p className='static_info'> Tasting Notes:</p>
                      <p className='static_info2'>Dark red color, with very complex aromas of very mature black fruits, black cherries and wild blackberries, with nuances of roasted coffee and bread toast. It is a very intense and elegant wine that has concentrated tannins balanced by the intensity of the ripe fruit. A long aftertaste full of freshness.</p>
                    </div>

                    <div className='display buying'>
                      <p className='dollar'>40$</p>
                      <input type="number" placeholder='1' min='1' max='15' className='piece'></input>
                      <button onClick={Buy} className='add_bye'>BUY</button>




                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className={tiv3 === 2 ? 'uspex' : 'none'}>
              Successfully purchased !
              <button className='uspex_btn' onClick={ClickX}>Ok</button>
            </div>
            {/* 1 */}

            <div className={inp.toLowerCase() == data[1].winery.toLowerCase() ? z : y}>
              <div className='img'>
                <div className='d' style={{ backgroundImage: `url(${data[1].image})` }}></div>
              </div>
              <h1 className='winery'>{data[1].winery}</h1>
              <h4 className='wine'>{data[1].wine}</h4>
              <h4 className='location'>{data[1].location}</h4>
              <div className='display'>
                <button className='btn-hover' onClick={Click4}>Buy <div className='icon-cart'></div>
                </button>
                <div className='display starts'>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-half'></div>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className={tiv4 == 5 ? 'bigg' : 'none'}>
              <div className='yes'>
                <button className='clickx' onClick={ClickX}> <div className='icon-close'></div></button>
                <div className='inf'>
                  <div className='box1'>
                    <div className='inf_img'>
                      <div className='d' style={{ backgroundImage: `url(${data[1].image})` }}></div>
                    </div>

                  </div>

                  <div className='inf_info'>
                    <h1 className='winery static_winery'>{data[1].wine}</h1>
                    <p className='static_color'>Red - Rich</p>
                    <h4 className='location static_location'>{data[1].location}</h4>

                    <p className='static_wind'>Type  .......................................  grape wine</p>
                    <p className='static_wind'>Ageing ...................................	33 years</p>
                    <p className='static_wind'>Alcohol  .................................. 	16%</p>
                    <p className='static_wind'>Volume  ...................................  0.75 L</p>
                    <div className='static_box'>
                      <p className='static_info'>Grape Varieties:</p>
                      <p className='static_info2'>	Corvina, Rondinella, Molinara</p>
                    </div>
                    <div className='static_box'>
                      <p className='static_info'> Tasting Notes:</p>
                      <p className='static_info2'> The others are an Amarone della Valpolicella and two Veronese Rosso wines; one sweet, one dry. Located on the hills of San Briccio, the unique microclimate and volcanic soils contribute greatly to the character of wine from this small family estate, which is run by Ruffo, who has been making wines here for decades. Campogadis is a blend of Corvina, Corvinone and Rondinella grapes and is aged in French oak barriques. Andrea Briccarello: Spicy first impression, with plenty of dark fruits at the back. Rich, oaky notes with plenty of vanilla and cinnamon, followed by cola notes on the back palate.</p>
                    </div>

                    <div className='display buying'>
                      <p className='dollar'>450$</p>
                      <input type="number" placeholder='1' min='1' max='15' className='piece'></input>
                      <button onClick={Buy} className='add_bye'>BUY</button>




                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className={tiv3 === 2 ? 'uspex' : 'none'}>
              Successfully purchased !
              <button className='uspex_btn' onClick={ClickX}>Ok</button>
            </div>

            {/* 2 */}
            <div className={inp.toLowerCase() == data[23].winery.toLowerCase() ? z : y}>
              <div className='img'>
                <div className='d' style={{ backgroundImage: `url(${data[23].image})` }}></div>
              </div>
              <h1 className='winery'>{data[23].winery}</h1>
              <h4 className='wine'>{data[23].wine}</h4>
              <h4 className='location'>{data[23].location}</h4>
              <div className='display'>
                <button className='btn-hover' onClick={Click5}>Buy <div className='icon-cart'></div>
                </button>
                <div className='display starts'>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                </div>
              </div>
            </div>

            {/* 3 */}

            <div className={tiv5 == 6 ? 'bigg' : 'none'}>
              <div className='yes'>
                <button className='clickx' onClick={ClickX}> <div className='icon-close'></div></button>
                <div className='inf'>
                  <div className='box1'>
                    <div className='inf_img'>
                      <div className='d' style={{ backgroundImage: `url(${data[23].image})` }}></div>
                    </div>

                  </div>

                  <div className='inf_info'>
                    <h1 className='winery static_winery'>{data[23].wine}</h1>
                    <p className='static_color'>Red - Rich and Intense</p>
                    <h4 className='location static_location'>{data[23].location}</h4>

                    <p className='static_wind'>Type  .......................................  grape wine</p>
                    <p className='static_wind'>Ageing ...................................	15 years</p>

                    <p className='static_wind'>Alcohol  .................................. 19.5%</p>
                    <p className='static_wind'>Volume  ...................................  0.75 L</p>
                    <div className='static_box'>
                      <p className='static_info'>Grape Varieties:</p>
                      <p className='static_info2'>Helms, Hershey, Lotus, Crystal Springs</p>
                    </div>
                    <div className='static_box'>
                      <p className='static_info'> Tasting Notes:</p>
                      <p className='static_info2'>Lee pushed to produce some of the highest quality and very rare, 100% Cabernet Sauvignon’s in the world focusing on four vineyards: Helms, Hershey, the lauded Lotus as well as their newest vineyard, Crystal Springs. Dana certainly lives up to its name, so in the spirit of Dana estates, be generous to your taste buds and try these incredibly rare gems!</p>
                    </div>

                    <div className='display buying'>
                      <p className='dollar'>400$</p>
                      <input type="number" placeholder='1' min='1' max='15' className='piece'></input>
                      <button onClick={Buy} className='add_bye'>BUY</button>




                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className={tiv3 === 2 ? 'uspex' : 'none'}>
              Successfully purchased !
              <button className='uspex_btn' onClick={ClickX}>Ok</button>
            </div>
            {/* 3 */}


            <div className={inp.toLowerCase() == data[4].winery.toLowerCase() ? z : y}>
              <div className='img'>
                <div className='d' style={{ backgroundImage: `url(${data[4].image})` }}></div>
              </div>
              <h1 className='winery'>{data[4].winery}</h1>
              <h4 className='wine'>{data[4].wine}</h4>
              <h4 className='location'>{data[4].location}</h4>
              <div className='display'>
                <button className='btn-hover' onClick={Click6}>Buy <div className='icon-cart'></div>
                </button>
                <div className='display starts'>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-half'></div>
                  <div className='icon-star-empty'></div>
                </div>
              </div>

            </div>

            {/* 4 */}

            <div className={tiv6 == 7 ? 'bigg' : 'none'}>
              <div className='yes'>
                <button className='clickx' onClick={ClickX}> <div className='icon-close'></div></button>
                <div className='inf'>
                  <div className='box1'>
                    <div className='inf_img'>
                      <div className='d' style={{ backgroundImage: `url(${data[4].image})` }}></div>
                    </div>

                  </div>

                  <div className='inf_info'>
                    <h1 className='winery static_winery'>{data[4].wine}</h1>
                    <p className='static_color'>Red - Rich and Dry</p>
                    <h4 className='location static_location'>{data[4].location}</h4>

                    <p className='static_wind'>Type  .......................................  grape wine</p>
                    <p className='static_wind'>Ageing ...................................	10 years</p>

                    <p className='static_wind'>Alcohol  .................................. 14.5%</p>
                    <p className='static_wind'>Volume  ...................................  0.75 L</p>
                    <div className='static_box'>
                      <p className='static_info'>Grape Varieties:</p>
                      <p className='static_info2'>Napa Cabernet</p>
                    </div>
                    <div className='static_box'>
                      <p className='static_info'> Tasting Notes:</p>
                      <p className='static_info2'>Since his debut in 2000, his 100% Cabernet Sauvignon has been living up to his motto of “stand amongst the very best or not at all’. Everything handcrafted, hand pruned, scrutinized and aligned for his desired response, near critical perfection and some of the finest wine known to man. His wines are terrific examples of Napa Cabernet and have made their way to cult status, so getting your hands on them can be difficult.</p>
                    </div>

                    <div className='display buying'>
                      <p className='dollar'>60$</p>
                      <input type="number" placeholder='1' min='1' max='15' className='piece'></input>
                      <button onClick={Buy} className='add_bye'>BUY</button>




                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className={tiv3 === 2 ? 'uspex' : 'none'}>
              Successfully purchased !
              <button className='uspex_btn' onClick={ClickX}>Ok</button>
            </div>
            {/* 4 */}





            <div className={inp.toLowerCase() == data[5].winery.toLowerCase() ? z : y}>
              <div className='img'>
                <div className='d' style={{ backgroundImage: `url(${data[5].image})` }}></div>
              </div>
              <h1 className='winery'>{data[5].winery}</h1>

              <h4 className='wine'>{data[5].wine}</h4>
              <h4 className='location'>{data[5].location}</h4>
              <div className='display'>
                <button className='btn-hover' onClick={Click7}>Buy <div className='icon-cart'></div>
                </button>
                <div className='display starts'>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-half'></div>
                  <div className='icon-star-empty'></div>
                </div>
              </div>

            </div>


            
            {/* 5 */}

            <div className={tiv7 == 8 ? 'bigg' : 'none'}>
              <div className='yes'>
                <button className='clickx' onClick={ClickX}> <div className='icon-close'></div></button>
                <div className='inf'>
                  <div className='box1'>
                    <div className='inf_img'>
                      <div className='d' style={{ backgroundImage: `url(${data[5].image})` }}></div>
                    </div>

                  </div>

                  <div className='inf_info'>
                    <h1 className='winery static_winery'>{data[5].wine}</h1>
                    <p className='static_color'>Red - Rich and Intense</p>
                    <h4 className='location static_location'>{data[5].location}</h4>

                    <p className='static_wind'>Type  .......................................  grape wine</p>
                    <p className='static_wind'>Ageing ...................................	10 years</p>

                    <p className='static_wind'>Alcohol  .................................. 14.5%</p>
                    <p className='static_wind'>Volume  ...................................  0.75 L</p>
                    <div className='static_box'>
                      <p className='static_info'>Grape Varieties:</p>
                      <p className='static_info2'>Syrah, Mourvedre,  Petite Sirah, Grenache .</p>
                    </div>
                    <div className='static_box'>
                      <p className='static_info'> Tasting Notes:</p>
                      <p className='static_info2'>2016 Syrah Rätsel 16 is an inky colored beauty that has another level of depth and richness over the 2015. Black raspberries, cassis, white pepper, white chocolate, and hints of bacon fat give way to a full-bodied, seamless, elegant wine that has terrific freshness and purity, ultra-fine tannin, and a huge finish. Not too dissimilar from the 2014s, which have the same supple, sexy, and approachable style, it should drink reasonably well right out of the gate and cruise for 15-20 years in cool cellars." - Jeb Dunnock, 96-99pts.</p>
                    </div>

                    <div className='display buying'>
                      <p className='dollar'>90$</p>
                      <input type="number" placeholder='1' min='1' max='15' className='piece'></input>
                      <button onClick={Buy} className='add_bye'>BUY</button>




                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className={tiv3 === 2 ? 'uspex' : 'none'}>
              Successfully purchased !
              <button className='uspex_btn' onClick={ClickX}>Ok</button>
            </div>
            {/* 5 */}

            <div className={inp.toLowerCase() == data[6].winery.toLowerCase() ? z : y}>
              <div className='img'>
                <div className='d' style={{ backgroundImage: `url(${data[6].image})` }}></div>
              </div>
              <h1 className='winery'>{data[6].winery}</h1>

              <h4 className='wine'>{data[6].wine}</h4>
              <h4 className='location'>{data[6].location}</h4>
              <div className='display'>
                <button className='btn-hover' onClick={Click8}>Buy <div className='icon-cart'></div>
                </button>
                <div className='display starts'>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-half'></div>
                </div>
              </div>

            {/* 6 */}

            <div className={tiv8 == 9 ? 'bigg' : 'none'}>
              <div className='yes'>
                <button className='clickx' onClick={ClickX}> <div className='icon-close'></div></button>
                <div className='inf'>
                  <div className='box1'>
                    <div className='inf_img'>
                      <div className='d' style={{ backgroundImage: `url(${data[6].image})` }}></div>
                    </div>

                  </div>

                  <div className='inf_info'>
                    <h1 className='winery static_winery'>{data[6].wine}</h1>
                    <p className='static_color'>Red - Rich and Intense</p>
                    <h4 className='location static_location'>{data[6].location}</h4>

                    <p className='static_wind'>Type  .......................................  grape wine</p>
                    <p className='static_wind'>Ageing ...................................	11 years</p>

                    <p className='static_wind'>Alcohol  .................................. 15.5%</p>
                    <p className='static_wind'>Volume  ...................................  0.75 L</p>
                    <div className='static_box'>
                      <p className='static_info'>Grape Varieties:</p>
                      <p className='static_info2'>St. Helena Mountain, Villa Del Lago, Oakville, Rutherford.</p>
                    </div>
                    <div className='static_box'>
                      <p className='static_info'> Tasting Notes:</p>
                      <p className='static_info2'>Made from a blend of all Del Dotto's vineyard holdings, the 2012 Cabernet Sauvignon The Beast's black/purple color is followed by a wine with off-the-charts richness, incredible density and abundant notes of blackcurrant liqueur, blackberries, graphite, licorice, truffles and incense.</p>
                    </div>

                    <div className='display buying'>
                      <p className='dollar'>360$</p>
                      <input type="number" placeholder='1' min='1' max='15' className='piece'></input>
                      <button onClick={Buy} className='add_bye'>BUY</button>




                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className={tiv3 === 2 ? 'uspex' : 'none'}>
              Successfully purchased !
              <button className='uspex_btn' onClick={ClickX}>Ok</button>
            </div>
            {/* 6 */}

            </div>
            <div className={inp.toLowerCase() == data[7].winery.toLowerCase() ? z : y}>
              <div className='img'>
                <div className='d' style={{ backgroundImage: `url(${data[7].image})` }}></div>
              </div>
              <h1 className='winery'>{data[7].winery}</h1>

              <h4 className='wine'>{data[7].wine}</h4>
              <h4 className='location'>{data[7].location}</h4>
              <div className='display'>
                <button className='btn-hover' onClick={Click9}>Buy <div className='icon-cart'></div>
                </button>
                <div className='display starts'>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-half'></div>
                  <div className='icon-star-empty'></div>
                </div>
              </div>


            </div>
            
            {/* 7 */}

            <div className={tiv9 == 10 ? 'bigg' : 'none'}>
              <div className='yes'>
                <button className='clickx' onClick={ClickX}> <div className='icon-close'></div></button>
                <div className='inf'>
                  <div className='box1'>
                    <div className='inf_img'>
                      <div className='d' style={{ backgroundImage: `url(${data[7].image})` }}></div>
                    </div>

                  </div>

                  <div className='inf_info'>
                    <h1 className='winery static_winery'>{data[7].wine}</h1>
                    <p className='static_color'>Red - Rich and Intense</p>
                    <h4 className='location static_location'>{data[7].location}</h4>

                    <p className='static_wind'>Type  .......................................  grape wine</p>
                    <p className='static_wind'>Ageing ...................................	7 years</p>

                    <p className='static_wind'>Alcohol  .................................. 14.8%</p>
                    <p className='static_wind'>Volume  ...................................  0.75 L</p>
                    <div className='static_box'>
                      <p className='static_info'>Grape Varieties:</p>
                      <p className='static_info2'>Cabernet Sauvignon, Merlot, Cabernet Franc.</p>
                    </div>
                    <div className='static_box'>
                      <p className='static_info'> Tasting Notes:</p>
                      <p className='static_info2'>Primary flavors of black raspberries, wild blueberries and warm plums usher in an earth-laden core of black tru es, fresh tobacco, licorice and steeped oolong tea. While luscious and full-bodied, the wine exhibits an e ortless tension between decadent fruit, earth tone and vibrant acidity.</p>
                    </div>

                    <div className='display buying'>
                      <p className='dollar'>40$</p>
                      <input type="number" placeholder='1' min='1' max='15' className='piece'></input>
                      <button onClick={Buy} className='add_bye'>BUY</button>




                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className={tiv3 === 2 ? 'uspex' : 'none'}>
              Successfully purchased !
              <button className='uspex_btn' onClick={ClickX}>Ok</button>
            </div>
            {/* 7 */}
            <div className={inp.toLowerCase() == data[8].winery.toLowerCase() ? z : y}>
              <div className='img'>
                <div className='d' style={{ backgroundImage: `url(${data[8].image})` }}></div>
              </div>
              <h1 className='winery'>{data[8].winery}</h1>

              <h4 className='wine'>{data[8].wine}</h4>
              <h4 className='location'>{data[8].location}</h4>
              <div className='display'>
                <button className='btn-hover' onClick={Click10}>Buy <div className='icon-cart'></div>
                </button>
                <div className='display starts'>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                </div>
              </div>


            </div>

            {/* 8 */}

            <div className={tiv10 == 11 ? 'bigg' : 'none'}>
              <div className='yes'>
                <button className='clickx' onClick={ClickX}> <div className='icon-close'></div></button>
                <div className='inf'>
                  <div className='box1'>
                    <div className='inf_img'>
                      <div className='d' style={{ backgroundImage: `url(${data[8].image})` }}></div>
                    </div>

                  </div>

                  <div className='inf_info'>
                    <h1 className='winery static_winery'>{data[8].wine}</h1>
                    <p className='static_color'>Red - Rich and Intense</p>
                    <h4 className='location static_location'>{data[8].location}</h4>

                    <p className='static_wind'>Type  .......................................  grape wine</p>
                    <p className='static_wind'>Ageing ...................................	70 years</p>

                    <p className='static_wind'>Alcohol  .................................. 14.5%</p>
                    <p className='static_wind'>Volume  ...................................  0.745 L</p>
                    <div className='static_box'>
                      <p className='static_info'>Grape Varieties:</p>
                      <p className='static_info2'>Corvina, Saccola, Pontedarola, Negrara.</p>
                    </div>
                    <div className='static_box'>
                      <p className='static_info'> Tasting Notes:</p>
                      <p className='static_info2'>A blend of Corvina, Saccola, Pontedarola and Negrara grown on the estate’s 10 hectares of vineyards and that dry on racks for three months. After that the wine ferments in stainless steel vats and matures for seven years in new 350-liter barrels. It then ages in the bottle before going to market.</p>
                    </div>

                    <div className='display buying'>
                      <p className='dollar'>700$</p>
                      <input type="number" placeholder='1' min='1' max='15' className='piece'></input>
                      <button onClick={Buy} className='add_bye'>BUY</button>




                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className={tiv10 === 11 ? 'uspex' : 'none'}>
              Successfully purchased !
              <button className='uspex_btn' onClick={ClickX}>Ok</button>
            </div>
            {/* 8 */}
            <div className={inp.toLowerCase() == data[9].winery.toLowerCase() ? z : y}>
              <div className='img'>
                <div className='d' style={{ backgroundImage: `url(${data[9].image})` }}></div>
              </div>
              <h1 className='winery'>{data[9].winery}</h1>

              <h4 className='wine'>{data[9].wine}</h4>
              <h4 className='location'>{data[9].location}</h4>
              <div className='display'>
                <button className='btn-hover' onClick={Click11}>Buy <div className='icon-cart'></div>
                </button>
                <div className='display starts'>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-half'></div>
                  <div className='icon-star-empty'></div>
                </div>
              </div>
            </div>

            
            {/* 9 */}

            <div className={tiv11 == 12 ? 'bigg' : 'none'}>
              <div className='yes'>
                <button className='clickx' onClick={ClickX}> <div className='icon-close'></div></button>
                <div className='inf'>
                  <div className='box1'>
                    <div className='inf_img'>
                      <div className='d' style={{ backgroundImage: `url(${data[9].image})` }}></div>
                    </div>

                  </div>

                  <div className='inf_info'>
                    <h1 className='winery static_winery'>{data[9].wine}</h1>
                    <p className='static_color'>Red - Rich and Intense</p>
                    <h4 className='location static_location'>{data[9].location}</h4>

                    <p className='static_wind'>Type  .......................................  grape wine</p>
                    <p className='static_wind'>Ageing ...................................	7 years</p>

                    <p className='static_wind'>Alcohol  .................................. 14.5%</p>
                    <p className='static_wind'>Volume  ...................................  0.75 L</p>
                    <div className='static_box'>
                      <p className='static_info'>Grape Varieties:</p>
                      <p className='static_info2'>Cabernet Sauvignon, Merlot, Petit Verdot.</p>
                    </div>
                    <div className='static_box'>
                      <p className='static_info'> Tasting Notes:</p>
                      <p className='static_info2'>Aromas of black cherries wrapped in a spice box of nutmeg, clove and allspice jump from the glass. The palate is filled with flavors of black currants and plum that lead seamlessly to silky tannins and black cherry notes. Blackberry, Mission fig and black cherry notes linger on the finish.</p>
                    </div>

                    <div className='display buying'>
                      <p className='dollar'>40$</p>
                      <input type="number" placeholder='1' min='1' max='15' className='piece'></input>
                      <button onClick={Buy} className='add_bye'>BUY</button>




                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className={tiv3 === 2 ? 'uspex' : 'none'}>
              Successfully purchased !
              <button className='uspex_btn' onClick={ClickX}>Ok</button>
            </div>
            {/* 9 */}

            <div className={inp.toLowerCase() == data[10].winery.toLowerCase() ? z : y}>
              <div className='img'>
                <div className='d' style={{ backgroundImage: `url(${data[10].image})` }}></div>
              </div>
              <h1 className='winery'>{data[10].winery}</h1>

              <h4 className='wine'>{data[10].wine}</h4>
              <h4 className='location'>{data[10].location}</h4>
              <div className='display'>
                <button className='btn-hover' onClick={Click12}>Buy <div className='icon-cart'></div>
                </button>
                <div className='display starts'>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-empty'></div>
                </div>
              </div>


            </div>

            {/* 10 */}

            <div className={tiv12 == 13 ? 'bigg' : 'none'}>
              <div className='yes'>
                <button className='clickx' onClick={ClickX}> <div className='icon-close'></div></button>
                <div className='inf'>
                  <div className='box1'>
                    <div className='inf_img'>
                      <div className='d' style={{ backgroundImage: `url(${data[10].image})` }}></div>
                    </div>

                  </div>

                  <div className='inf_info'>
                    <h1 className='winery static_winery'>{data[10].wine}</h1>
                    <p className='static_color'>Red - Rich and Intense</p>
                    <h4 className='location static_location'>{data[10].location}</h4>

                    <p className='static_wind'>Type  .......................................  grape wine</p>
                    <p className='static_wind'>Ageing ...................................	23 years</p>

                    <p className='static_wind'>Alcohol  .................................. 14.5%</p>
                    <p className='static_wind'>Volume  ...................................  0.75 L</p>
                    <div className='static_box'>
                      <p className='static_info'>Grape Varieties:</p>
                      <p className='static_info2'>Syrah , Viognier.</p>
                    </div>
                    <div className='static_box'>
                      <p className='static_info'> Tasting Notes:</p>
                      <p className='static_info2'> Côte Rôtie La Mouline is a blockbuster of a wine offering full-bodied aromas and flavors of black raspberries, cassis, spring flowers, espresso, and violets. Coming from a steep, terraced, warmer terroir and fermented with 10% Viognier, it’s always the sexiest, more exotic, and seamless, as well as approachable, of the flagship releases. The 2018 will unquestionably pure a smile on your face as soon as it’s released, but it will ideally be given 7–8 years of bottle age and drunk over the following 30+ years.</p>
                    </div>

                    <div className='display buying'>
                      <p className='dollar'>200$</p>
                      <input type="number" placeholder='1' min='1' max='15' className='piece'></input>
                      <button onClick={Buy} className='add_bye'>BUY</button>




                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className={tiv3 === 2 ? 'uspex' : 'none'}>
              Successfully purchased !
              <button className='uspex_btn' onClick={ClickX}>Ok</button>
            </div>
            {/* 10 */}
            <div className={inp.toLowerCase() == data[13].winery.toLowerCase() ? z : y}>
              <div className='img'>
                <div className='d' style={{ backgroundImage: `url(${data[13].image})` }}></div>
              </div>
              <h1 className='winery'>{data[13].winery}</h1>

              <h4 className='wine'>{data[13].wine}</h4>
              <h4 className='location'>{data[13].location}</h4>
              <div className='display'>
                <button className='btn-hover' onClick={Click13}>Buy <div className='icon-cart'></div>
                </button>
                <div className='display starts'>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-half'></div>
                </div>
              </div>


            </div>

            {/* 11 */}

            <div className={tiv13 == 14 ? 'bigg' : 'none'}>
              <div className='yes'>
                <button className='clickx' onClick={ClickX}> <div className='icon-close'></div></button>
                <div className='inf'>
                  <div className='box1'>
                    <div className='inf_img'>
                      <div className='d' style={{ backgroundImage: `url(${data[13].image})` }}></div>
                    </div>

                  </div>

                  <div className='inf_info'>
                    <h1 className='winery static_winery'>{data[13].wine}</h1>
                    <p className='static_color'>Red - Rich and Intense</p>
                    <h4 className='location static_location'>{data[13].location}</h4>

                    <p className='static_wind'>Type  .......................................  grape wine</p>
                    <p className='static_wind'>Ageing ...................................	29 years</p>

                    <p className='static_wind'>Alcohol  .................................. 14.5%</p>
                    <p className='static_wind'>Volume  ...................................  0.75 L</p>
                    <div className='static_box'>
                      <p className='static_info'>Grape Varieties:</p>
                      <p className='static_info2'>Malbec, Syrah, Malbec Adrianna Vineyard, Cabernet.</p>
                    </div>
                    <div className='static_box'>
                      <p className='static_info'> Tasting Notes:</p>
                      <p className='static_info2'>Catena Zapata Estiba Reservada has a deep violet colour with red ruby hues. The nose is intense, with complex cedar, ripe red cassis, tobacco and sweet spice. On the palate, a sweet, soft entry leads to a rich wine packed with red fruit and subtle black pepper and eucalyptus flavours. Finishes long and elegant with round, silky tannins</p>
                    </div>

                    <div className='display buying'>
                      <p className='dollar'>400$</p>
                      <input type="number" placeholder='1' min='1' max='15' className='piece'></input>
                      <button onClick={Buy} className='add_bye'>BUY</button>




                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className={tiv3 === 2 ? 'uspex' : 'none'}>
              Successfully purchased !
              <button className='uspex_btn' onClick={ClickX}>Ok</button>
            </div>
            {/* 11 */}
            <div className={inp.toLowerCase() == data[16].winery.toLowerCase() ? z : y}>
              <div className='img'>
                <div className='d' style={{ backgroundImage: `url(${data[16].image})` }}></div>
              </div>
              <h1 className='winery'>{data[16].winery}</h1>

              <h4 className='wine'>{data[16].wine}</h4>
              <h4 className='location'>{data[16].location}</h4>
              <div className='display'>
                <button className='btn-hover' onClick={Click14}>Buy <div className='icon-cart'></div>
                </button>
                <div className='display starts'>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-full'></div>
                  <div className='icon-star-half'></div>
                  <div className='icon-star-empty'></div>
                </div>
              </div>


            </div>
            
            {/* 12 */}

            <div className={tiv14 == 15 ? 'bigg' : 'none'}>
              <div className='yes'>
                <button className='clickx' onClick={ClickX}> <div className='icon-close'></div></button>
                <div className='inf'>
                  <div className='box1'>
                    <div className='inf_img'>
                      <div className='d' style={{ backgroundImage: `url(${data[16].image})` }}></div>
                    </div>

                  </div>

                  <div className='inf_info'>
                    <h1 className='winery static_winery'>{data[16].wine}</h1>
                    <p className='static_color'>Red - Rich and Intense</p>
                    <h4 className='location static_location'>{data[16].location}</h4>

                    <p className='static_wind'>Type  .......................................  grape wine</p>
                    <p className='static_wind'>Ageing ...................................	8 years</p>

                    <p className='static_wind'>Alcohol  .................................. 14.5%</p>
                    <p className='static_wind'>Volume  ...................................  0.75 L</p>
                    <div className='static_box'>
                      <p className='static_info'>Grape Varieties:</p>
                      <p className='static_info2'>Alicante Bouschet, Aragonêz, Trincadeira, Cabernet Sauvignon.</p>
                    </div>
                    <div className='static_box'>
                      <p className='static_info'> Tasting Notes:</p>
                      <p className='static_info2'>Dark red color, with very complex aromas of very mature black fruits, black cherries and wild blackberries, with nuances of roasted coffee and bread toast. It is a very intense and elegant wine that has concentrated tannins balanced by the intensity of the ripe fruit. A long aftertaste full of freshness.</p>
                    </div>

                    <div className='display buying'>
                      <p className='dollar'>90$</p>
                      <input type="number"  placeholder='1'  min='1' max='15' className='piece'></input>
                      <button onClick={Buy} className='add_bye'>BUY</button>




                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className={tiv3 === 2 ? 'uspex' : 'none'}>
              Successfully purchased !
              <button className='uspex_btn' onClick={ClickX}>Ok</button>
            </div>
            {/* 12 */}
            {/* {box.map(el => <Comp key={el.id} box={el}/>)} */}





            </div>

            <div className='footer_big'>
        <div className='footer'>
            <div className='footer1 '>
                <div className='footer1_title'>
                <div className='imgg'>
          <div className='header_img' style={{ backgroundImage: `url(${logo})` }} ></div>

        </div>
                </div>
                <p className='footer_text'>The best and highest quality wine only with us.</p>
                <div className='display1'>
                    <div className="icon-facebook2 footer_i"></div>
                    <div className="icon-linkedin2 footer_i"></div>
                    <div className="icon-whatsapp footer_i"></div>
                    <div className="icon-flickr3 footer_i"></div>
                    <div className="icon-medium footer_i"></div>


                </div>
            </div>
            <div>
                <p className='footer_title1'>For Client</p>

                <div className='display1'>
                    <div className='icon-phone b'></div>
                    <p className='footer_p'>094-575-675</p>
                </div>
                <div className='display1'>
                    <div className='icon-envelope-o b'></div>
                    <p className='footer_p'>kazaryaand@mail.ru</p>
                </div>
            </div>

        </div>
       
    </div>
          </>
        ) : (
          <div className='f'>
           <CircularProgress />

          </div>
        )
        }

      



    </div>

  );
}

export default Block;