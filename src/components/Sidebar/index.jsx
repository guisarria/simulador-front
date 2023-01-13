import React from 'react'
import Bank from './Bank'
import Platform from './Platform'
import AdType from './AdType'
import Format from './Format'
import Famous from './Famous'
import AdTheme from './AdTheme'
import Tags from './Tags'
import { Button } from '@mui/material'
import styles from "./index.module.css"
import Graph from '@/components/Graph'


const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Bank />
      <Platform />
      <AdType />
      <Format />
      <Famous />
      <Tags />
      <Button className={styles.simulateBtn}>Simular</Button>
      <>
      <Graph />
      </>  
      </div>
  )
}

export default Sidebar