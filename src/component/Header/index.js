import language from '@/assets/img/language.png'
import './index.scss'
import { Col, Row, Dropdown } from 'antd';
import { useTranslation } from 'react-i18next'
import LangMenu from './component/LangMenu'

export const Header = () => {
  const { t } = useTranslation()
  return <div className="header-wrap">
    <Row>
        <Col span={12} className="left-nav">
          <div className="logo-wrap"></div>
        </Col>
        <Col span={12} className="right-nav">
          <a href="https://dfs-4.gitbook.io/diffusiondao/" target="_blank">{t('header.Document')}</a>
          <a href="https://app.diffusiondao.org/" target="_blank">{t('header.Dapp')}</a>
          <Dropdown overlay={LangMenu} placement="bottom">
            <img src={language} />
          </Dropdown>
        </Col>
    </Row>
  </div>
}