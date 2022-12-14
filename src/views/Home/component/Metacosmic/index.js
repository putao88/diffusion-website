import { CSSTransition } from 'react-transition-group'
import { useInView } from "react-cool-inview";
import { useTranslation } from 'react-i18next'
import centerEarth from '@/assets/img/centerEarth.png'
import advantageArrow from '@/assets/img/advantageArrow.png'
import goldenStar from '@/assets/img/goldenStar.png'
import greenChild from '@/assets/img/greenChild.png'
import selfishSpace from '@/assets/img/selfishSpace.png'
import { Col, Row } from 'antd';
import './index.scss'

const Metacosmic = () => {
  const { t } = useTranslation()
  const { observe: observe1 , inView:inView1 } = useInView({
    unobserveOnEnter: true,
    rootMargin: "50px",
  });
  const { observe: observe2 , inView:inView2 } = useInView({
    unobserveOnEnter: true,
    rootMargin: "50px",
  });
  const { observe: observe3 , inView:inView3 } = useInView({
    unobserveOnEnter: true,
    rootMargin: "50px",
  });
  const { observe: observe4 , inView:inView4 } = useInView({
    unobserveOnEnter: true,
    rootMargin: "50px",
  });
  return <div className='metacosmic-wrap' ref={observe1}>
    <div className='metacosmic-main'>
      <div className='metacosmic-title'>{t('home.Metacosmic-tab')}</div>
      <div className='metacosmic-content'>
        <CSSTransition
          in={!!inView1}
          timeout={ 1000 }
          classNames='show'
        >
          <div className='cont-text'>{t('home.Metacosmic-title')}</div>
        </CSSTransition>
        <div className="online-day-wrap">
          <CSSTransition
            in={!!inView1}
            timeout={ 1000 }
            classNames='show1'
          >
            <div className='online-day'> 2022 Oct. Online </div>
          </CSSTransition>

        </div>
      </div>
      <div className='mountain'></div>
      <CSSTransition
        in={!!inView1}
        timeout={ 1000 }
        classNames='show3'
      >
        <img src={centerEarth} className='centerEarth' />
      </CSSTransition>
    </div>
    <div className='metacosmic-card-list'>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} ref={observe2}>
          <CSSTransition
            in={!!inView2}
            timeout={ 1000 }
            classNames='show'
          >
            <div className='metacosmic-card'>
              <div className='metacosmic-card-text'>{t('home.Metacosmic-item1')}</div>
              <img className='metacosmic-card-arrow' src={advantageArrow} />
              <div className='metacosmic-card-text'>2023 Feb.</div>
              <img className='metacosmic-card-img' src={goldenStar} />
            </div>
          </CSSTransition>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} ref={observe3}>
          <CSSTransition
            in={!!inView3}
            timeout={ 1000 }
            classNames='show1'
          >
            <div className='metacosmic-card'>
              <div className='metacosmic-card-text'>{t('home.Metacosmic-item2')}</div>
              <img className='metacosmic-card-arrow' src={advantageArrow} />
              <div className='metacosmic-card-text'>2023 May.</div>
              <img className='metacosmic-card-img' src={greenChild} />
            </div>
          </CSSTransition>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} ref={observe4}>
          <CSSTransition
            in={!!inView4}
            timeout={ 1000 }
            classNames='show2'
          >
            <div className='metacosmic-card' ref={observe4}>
              <div className='metacosmic-card-text'>{t('home.Metacosmic-item3')}</div>
              <img className='metacosmic-card-arrow' src={advantageArrow} />
              <div className='metacosmic-card-text'>2023 Aug.</div>
              <img className='metacosmic-card-img' src={selfishSpace} />
            </div>
          </CSSTransition>
        </Col>
      </Row>
    </div>
  </div>
}
export default Metacosmic;